import { Resend } from 'resend';

const ALLOWED_INTERESTS = new Set([
  'Learning Programmes',
  'African Knowledge Gatherings',
  'Marriage Preparation',
  'Coaching & Counselling',
  'Events',
  'General Enquiries',
]);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: any, res: any) {
  const origin = req.headers?.origin || '';
  const allowedOrigins = new Set([
    'https://africanrestorative.co.za',
    'https://www.africanrestorative.co.za',
    'https://AfricanRestorative.co.za',
    'https://www.AfricanRestorative.co.za',
  ]);
  if (allowedOrigins.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return res.status(200).json({ success: true, confirmationEmailSent: false });
  }

  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const programme = typeof body.programme === 'string' ? body.programme.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const consent = body.consent === true;

  const rawInterests = Array.isArray(body.interests) ? body.interests : [];
  const interests = rawInterests
    .filter((item): item is string => typeof item === 'string')
    .map((item) => item.trim())
    .filter((item) => ALLOWED_INTERESTS.has(item));

  if (fullName.length < 2 || fullName.length > 120) {
    return res.status(400).json({ error: 'Please provide your full name (2 to 120 characters).' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 180) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (phone.length > 40) {
    return res.status(400).json({ error: 'Phone number must be 40 characters or fewer.' });
  }

  if (interests.length === 0) {
    return res.status(400).json({ error: 'Please select at least one area of interest.' });
  }

  if (message.length < 10 || message.length > 3000) {
    return res.status(400).json({ error: 'Please include an enquiry message (10 to 3000 characters).' });
  }

  if (!consent) {
    return res.status(400).json({
      error: 'Please confirm your privacy consent so ARC can process your enquiry in line with POPIA.',
    });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return res.status(503).json({
      error:
        'Email routing is not configured yet (missing RESEND_API_KEY). Please configure Resend in your environment or email info@africanrestorative.co.za directly.',
    });
  }

  const toEmail = process.env.RESEND_TO_EMAIL?.trim() || 'info@africanrestorative.co.za';
  const fromEmail =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    'African Restorative Centre <enquiries@africanrestorative.co.za>';

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toISOString();
  const interestSummary = interests.join(', ');
  const selectedProgramme = interests.includes('Learning Programmes') ? programme : '';
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : 'Not provided';
  const safeInterests = interests.map((item) => escapeHtml(item)).join(', ');
  const safeProgramme = selectedProgramme ? escapeHtml(selectedProgramme) : '';
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  try {
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[ARC Enquiry] ${interestSummary} — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #2F3E36; background-color: #FBF9F5; padding: 28px;">
          <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #e2ddd5; border-radius: 16px; overflow: hidden;">
            <div style="background: #2F3E36; color: #ffffff; padding: 22px 26px;">
              <p style="margin: 0 0 6px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #F3A83B;">
                African Restorative Centre · Website Enquiry
              </p>
              <h1 style="margin: 0; font-family: Georgia, serif; font-size: 22px;">New Contact &amp; Enquiry Submission</h1>
            </div>
            <div style="padding: 26px; font-size: 15px; line-height: 1.6;">
              <p><strong>Full Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <p><strong>Phone / WhatsApp:</strong> ${safePhone}</p>
              <p><strong>Area(s) of Interest:</strong> ${safeInterests}</p>
              ${safeProgramme ? `<p><strong>Selected Programme:</strong> ${safeProgramme}</p>` : ''}
              <div style="padding: 16px; background: #FBF9F5; border: 1px solid #e7e1d8; border-radius: 12px; margin: 16px 0;">
                <p style="margin: 0 0 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #C86452;">Enquiry Message</p>
                <p style="margin: 0;">${safeMessage}</p>
              </div>
              <p style="font-size: 12px; color: #5f6f66;">POPIA Privacy Consent confirmed on ${escapeHtml(submittedAt)}.</p>
            </div>
          </div>
        </div>
      `,
      text: [
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone || 'Not provided'}`,
        `Area(s) of Interest: ${interestSummary}`,
        ...(selectedProgramme ? [`Selected Programme: ${selectedProgramme}`] : []),
        '',
        'Message:',
        message,
        '',
        `POPIA Privacy Consent confirmed on ${submittedAt}.`,
      ].join('\n'),
    });

    if (adminError) {
      return res.status(502).json({
        error:
          adminError.message ||
          'Unable to deliver your enquiry at the moment. Please try again or email info@africanrestorative.co.za directly.',
      });
    }

    let confirmationEmailSent = false;
    try {
      const { error: visitorError } = await resend.emails.send({
        from: fromEmail,
        to: [email],
        replyTo: toEmail,
        subject: 'We received your enquiry — African Restorative Centre (ARC)',
        html: `
          <div style="font-family: Arial, sans-serif; color: #2F3E36; background-color: #FBF9F5; padding: 28px;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2ddd5; border-radius: 16px; overflow: hidden;">
              <div style="background: #2F3E36; color: #ffffff; padding: 22px 26px;">
                <p style="margin: 0 0 6px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #F3A83B;">Ancient Future Reclaimed.</p>
                <h1 style="margin: 0; font-family: Georgia, serif; font-size: 22px;">Thank You for Contacting ARC</h1>
              </div>
              <div style="padding: 26px; font-size: 15px; line-height: 1.65;">
                <p>Dear ${safeName},</p>
                <p>Thank you for reaching out to the <strong>African Restorative Centre (ARC)</strong>. We have received your enquiry and routed it to our team at ${escapeHtml(toEmail)}.</p>
                <p><strong>Area(s) of Interest:</strong> ${safeInterests}</p>
                ${safeProgramme ? `<p><strong>Selected Programme:</strong> ${safeProgramme}</p>` : ''}
                <p>A member of our team will respond shortly. For urgent matters, please call or WhatsApp <strong>078 526 9500</strong>.</p>
                <p>Warm regards,<br /><strong>African Restorative Centre (ARC)</strong></p>
              </div>
            </div>
          </div>
        `,
        text: `Dear ${fullName},\n\nThank you for reaching out to the African Restorative Centre (ARC). We have received your enquiry (${interestSummary}) and routed it to ${toEmail}.\n\nA member of our team will respond shortly. For urgent matters, please call or WhatsApp 078 526 9500.\n\nWarm regards,\nAfrican Restorative Centre (ARC)`,
      });
      confirmationEmailSent = !visitorError;
    } catch {
      confirmationEmailSent = false;
    }

    return res.status(200).json({
      success: true,
      id: adminData?.id ?? null,
      confirmationEmailSent,
    });
  } catch {
    return res.status(500).json({
      error: 'An unexpected error occurred while sending your enquiry. Please try again or email info@africanrestorative.co.za.',
    });
  }
}
