<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Optionally load server-side secrets stored outside public_html (e.g. /home/username/arc-resend-config.php)
$privateConfigPaths = [
    dirname(__DIR__, 2) . '/arc-resend-config.php',
    dirname(__DIR__) . '/../arc-resend-config.php',
];
foreach ($privateConfigPaths as $configPath) {
    if (is_file($configPath) && is_readable($configPath)) {
        $loaded = include $configPath;
        if (is_array($loaded)) {
            foreach (['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'RESEND_TO_EMAIL'] as $key) {
                if (!empty($loaded[$key]) && is_string($loaded[$key])) {
                    putenv($key . '=' . $loaded[$key]);
                    $_ENV[$key] = $loaded[$key];
                }
            }
        }
        break;
    }
}

$rawBody = file_get_contents('php://input');
$body = json_decode($rawBody ?: '{}', true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON request body.']);
    exit;
}

// Honeypot spam trap
if (!empty($body['website']) && is_string($body['website']) && trim($body['website']) !== '') {
    http_response_code(200);
    echo json_encode(['success' => true, 'confirmationEmailSent' => false]);
    exit;
}

$allowedInterests = [
    'Learning Programmes',
    'African Knowledge Gatherings',
    'Marriage Preparation',
    'Coaching & Counselling',
    'Events',
    'General Enquiries',
];

$fullName = isset($body['fullName']) && is_string($body['fullName']) ? trim($body['fullName']) : '';
$email = isset($body['email']) && is_string($body['email']) ? trim($body['email']) : '';
$phone = isset($body['phone']) && is_string($body['phone']) ? trim($body['phone']) : '';
$programme = isset($body['programme']) && is_string($body['programme']) ? trim($body['programme']) : '';
$message = isset($body['message']) && is_string($body['message']) ? trim($body['message']) : '';
$consent = isset($body['consent']) && $body['consent'] === true;

$rawInterests = isset($body['interests']) && is_array($body['interests']) ? $body['interests'] : [];
$interests = [];
foreach ($rawInterests as $item) {
    if (is_string($item)) {
        $trimmed = trim($item);
        if (in_array($trimmed, $allowedInterests, true)) {
            $interests[] = $trimmed;
        }
    }
}

if (mb_strlen($fullName) < 2 || mb_strlen($fullName) > 120) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide your full name (2 to 120 characters).']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 180) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide a valid email address.']);
    exit;
}

if (mb_strlen($phone) > 40) {
    http_response_code(400);
    echo json_encode(['error' => 'Phone number must be 40 characters or fewer.']);
    exit;
}

if (count($interests) === 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Please select at least one area of interest.']);
    exit;
}

if (mb_strlen($message) < 10 || mb_strlen($message) > 3000) {
    http_response_code(400);
    echo json_encode(['error' => 'Please include an enquiry message (10 to 3000 characters).']);
    exit;
}

if (!$consent) {
    http_response_code(400);
    echo json_encode([
        'error' => 'Please confirm your privacy consent so ARC can process your enquiry in line with POPIA.',
    ]);
    exit;
}

$getServerVar = static function (string $name): string {
    $candidates = [
        getenv($name),
        $_ENV[$name] ?? null,
        $_SERVER[$name] ?? null,
        $_SERVER['REDIRECT_' . $name] ?? null,
    ];
    foreach ($candidates as $value) {
        if (is_string($value) && trim($value) !== '') {
            return trim($value);
        }
    }
    return '';
};

$apiKey = $getServerVar('RESEND_API_KEY');
if ($apiKey === '') {
    http_response_code(503);
    echo json_encode([
        'error' => 'Email routing is not configured on this hosting server yet (missing RESEND_API_KEY). Add RESEND_API_KEY in cPanel environment/.htaccess or arc-resend-config.php outside public_html.',
    ]);
    exit;
}

$toEmail = $getServerVar('RESEND_TO_EMAIL');
if ($toEmail === '') {
    $toEmail = 'info@africanrestorative.co.za';
}

$fromEmail = $getServerVar('RESEND_FROM_EMAIL');
if ($fromEmail === '') {
    $fromEmail = 'African Restorative Centre <enquiries@africanrestorative.co.za>';
}

if (!function_exists('curl_init')) {
    http_response_code(500);
    echo json_encode(['error' => 'Server cURL extension is unavailable for Resend API routing.']);
    exit;
}

function sendViaResend(string $apiKey, array $payload): array {
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $apiKey,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => json_encode($payload),
    ]);

    $responseBody = curl_exec($ch);
    $httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlErr = curl_error($ch);
    curl_close($ch);

    if ($responseBody === false) {
        return ['ok' => false, 'status' => 502, 'error' => 'Resend connection error: ' . $curlErr];
    }

    $decoded = json_decode($responseBody, true);
    if ($httpCode < 200 || $httpCode >= 300) {
        $msg = is_array($decoded) && isset($decoded['message']) ? (string)$decoded['message'] : 'Resend API request failed.';
        return ['ok' => false, 'status' => 502, 'error' => $msg];
    }

    return ['ok' => true, 'data' => is_array($decoded) ? $decoded : []];
}

$esc = static fn(string $v): string => htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

$selectedProgramme = in_array('Learning Programmes', $interests, true) ? $programme : '';
$interestSummary = implode(', ', $interests);
$submittedAt = gmdate('c');

$safeName = $esc($fullName);
$safeEmail = $esc($email);
$safePhone = $phone !== '' ? $esc($phone) : 'Not provided';
$safeInterests = $esc($interestSummary);
$safeProgramme = $selectedProgramme !== '' ? $esc($selectedProgramme) : '';
$safeMessage = nl2br($esc($message), false);

$programmeRow = $safeProgramme !== ''
    ? '<tr><td style="padding:8px 0;font-weight:600;color:#526259;">Selected Programme</td><td style="padding:8px 0;">' . $safeProgramme . '</td></tr>'
    : '';

$adminHtml = '<div style="font-family:\'Plus Jakarta Sans\',Arial,sans-serif;color:#2F3E36;background-color:#FBF9F5;padding:32px;">'
    . '<div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2ddd5;border-radius:16px;overflow:hidden;">'
    . '<div style="background:#2F3E36;color:#ffffff;padding:24px 28px;">'
    . '<p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#F3A83B;">African Restorative Centre · Website Enquiry</p>'
    . '<h1 style="margin:0;font-family:Georgia,serif;font-size:24px;font-weight:700;">New Contact &amp; Enquiry Submission</h1>'
    . '</div>'
    . '<div style="padding:28px;font-size:15px;line-height:1.6;">'
    . '<table style="width:100%;border-collapse:collapse;margin-bottom:20px;">'
    . '<tr><td style="padding:8px 0;font-weight:600;width:160px;color:#526259;">Full Name</td><td style="padding:8px 0;">' . $safeName . '</td></tr>'
    . '<tr><td style="padding:8px 0;font-weight:600;color:#526259;">Email Address</td><td style="padding:8px 0;"><a href="mailto:' . $safeEmail . '" style="color:#C86452;">' . $safeEmail . '</a></td></tr>'
    . '<tr><td style="padding:8px 0;font-weight:600;color:#526259;">Phone / WhatsApp</td><td style="padding:8px 0;">' . $safePhone . '</td></tr>'
    . '<tr><td style="padding:8px 0;font-weight:600;color:#526259;">Area(s) of Interest</td><td style="padding:8px 0;">' . $safeInterests . '</td></tr>'
    . $programmeRow
    . '</table>'
    . '<div style="padding:16px 18px;background:#FBF9F5;border:1px solid #e7e1d8;border-radius:12px;margin-bottom:20px;">'
    . '<p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#C86452;">Enquiry Message</p>'
    . '<p style="margin:0;">' . $safeMessage . '</p>'
    . '</div>'
    . '<p style="margin:0;font-size:12px;color:#5f6f66;">POPIA Privacy Consent confirmed by submitter on ' . $esc($submittedAt) . '.</p>'
    . '</div></div></div>';

$adminTextLines = [
    'NEW WEBSITE ENQUIRY — AFRICAN RESTORATIVE CENTRE',
    '',
    'Full Name: ' . $fullName,
    'Email: ' . $email,
    'Phone / WhatsApp: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Area(s) of Interest: ' . $interestSummary,
];
if ($selectedProgramme !== '') {
    $adminTextLines[] = 'Selected Programme: ' . $selectedProgramme;
}
$adminTextLines[] = '';
$adminTextLines[] = 'Message:';
$adminTextLines[] = $message;
$adminTextLines[] = '';
$adminTextLines[] = 'POPIA Privacy Consent confirmed on ' . $submittedAt . '.';

$adminResult = sendViaResend($apiKey, [
    'from' => $fromEmail,
    'to' => [$toEmail],
    'reply_to' => $email,
    'subject' => '[ARC Enquiry] ' . $interestSummary . ' — ' . $fullName,
    'html' => $adminHtml,
    'text' => implode("\n", $adminTextLines),
]);

if (!$adminResult['ok']) {
    http_response_code(502);
    echo json_encode(['error' => $adminResult['error']]);
    exit;
}

$programmeConfirmLine = $safeProgramme !== ''
    ? '<p style="margin:0 0 4px;"><strong>Programme:</strong> ' . $safeProgramme . '</p>'
    : '';

$visitorHtml = '<div style="font-family:\'Plus Jakarta Sans\',Arial,sans-serif;color:#2F3E36;background-color:#FBF9F5;padding:32px;">'
    . '<div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2ddd5;border-radius:16px;overflow:hidden;">'
    . '<div style="background:#2F3E36;color:#ffffff;padding:24px 28px;">'
    . '<p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#F3A83B;">Ancient Future Reclaimed.</p>'
    . '<h1 style="margin:0;font-family:Georgia,serif;font-size:24px;font-weight:700;">Thank You for Contacting ARC</h1>'
    . '</div>'
    . '<div style="padding:28px;font-size:15px;line-height:1.65;">'
    . '<p style="margin-top:0;">Dear ' . $safeName . ',</p>'
    . '<p>Thank you for reaching out to the <strong>African Restorative Centre (ARC)</strong>. We have received your enquiry and routed it to our team at <a href="mailto:' . $esc($toEmail) . '" style="color:#C86452;">' . $esc($toEmail) . '</a>.</p>'
    . '<div style="padding:16px 18px;background:#F4EAE1;border-radius:12px;margin:20px 0;">'
    . '<p style="margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#C86452;">Summary of Your Enquiry</p>'
    . '<p style="margin:0 0 4px;"><strong>Interest(s):</strong> ' . $safeInterests . '</p>'
    . $programmeConfirmLine
    . '<p style="margin:8px 0 0;font-size:14px;color:#2F3E36;">' . $safeMessage . '</p>'
    . '</div>'
    . '<p>A member of our team will respond to you shortly. If your matter is urgent, you may also reach us via telephone or WhatsApp on <strong>078 526 9500</strong>.</p>'
    . '<p style="margin-bottom:0;">Warm regards,<br /><strong>African Restorative Centre (ARC)</strong><br /><span style="font-size:13px;color:#5f6f66;">398 Tobias Street, Heritage Manor Estate, Krugersdorp, 1740</span></p>'
    . '</div></div></div>';

$visitorText = "Dear {$fullName},\n\nThank you for reaching out to the African Restorative Centre (ARC). We have received your enquiry ({$interestSummary}) and routed it to {$toEmail}.\n\nYour message:\n{$message}\n\nA member of our team will respond shortly. For urgent matters, please call or WhatsApp 078 526 9500.\n\nWarm regards,\nAfrican Restorative Centre (ARC)";

$visitorResult = sendViaResend($apiKey, [
    'from' => $fromEmail,
    'to' => [$email],
    'reply_to' => $toEmail,
    'subject' => 'We received your enquiry — African Restorative Centre (ARC)',
    'html' => $visitorHtml,
    'text' => $visitorText,
]);

http_response_code(200);
echo json_encode([
    'success' => true,
    'id' => $adminResult['data']['id'] ?? null,
    'confirmationEmailSent' => $visitorResult['ok'],
]);
