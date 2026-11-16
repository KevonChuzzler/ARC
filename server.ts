import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

function getPort(): number {
  const portArgIndex = process.argv.indexOf('--port');
  if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
    const parsed = Number(process.argv[portArgIndex + 1]);
    if (!Number.isNaN(parsed) && parsed > 0) return parsed;
  }
  const envPort = Number(process.env.PORT);
  return !Number.isNaN(envPort) && envPort > 0 ? envPort : 3000;
}

interface ContactPayload {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  interests?: unknown;
  programme?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
}

function validatePayload(body: ContactPayload) {
  // Honeypot spam trap
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return { spam: true as const };
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
    return { error: 'Please provide your full name (2 to 120 characters).' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 180) {
    return { error: 'Please provide a valid email address.' };
  }

  if (phone.length > 40) {
    return { error: 'Phone number must be 40 characters or fewer.' };
  }

  if (interests.length === 0) {
    return { error: 'Please select at least one area of interest.' };
  }

  if (message.length < 10 || message.length > 3000) {
    return { error: 'Please include an enquiry message (10 to 3000 characters).' };
  }

  if (!consent) {
    return {
      error:
        'Please confirm your privacy consent so ARC can process your enquiry in line with POPIA.',
    };
  }

  return {
    spam: false as const,
    data: {
      fullName,
      email,
      phone,
      interests,
      programme: interests.includes('Learning Programmes') ? programme : '',
      message,
      submittedAt: new Date().toISOString(),
    },
  };
}

async function startServer() {
  const app = express();
  const port = getPort();

  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ ok: true });
  });

  app.post('/api/contact', async (req: Request, res: Response) => {
    const validation = validatePayload((req.body ?? {}) as ContactPayload);

    if ('spam' in validation && validation.spam) {
      return res.status(200).json({
        success: true,
        confirmationEmailSent: false,
      });
    }

    if ('error' in validation) {
      return res.status(400).json({ error: validation.error });
    }

    const { fullName, email, phone, interests, programme, message, submittedAt } =
      validation.data;

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      return res.status(503).json({
        error:
          'Email routing is not configured yet (missing RESEND_API_KEY). Please configure Resend in your environment or email info@africanrestorative.co.za directly.',
      });
    }

    const toEmail =
      process.env.RESEND_TO_EMAIL?.trim() || 'info@africanrestorative.co.za';
    const fromEmail =
      process.env.RESEND_FROM_EMAIL?.trim() ||
      'African Restorative Centre <enquiries@africanrestorative.co.za>';

    const resend = new Resend(apiKey);
    const interestSummary = interests.join(', ');
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : 'Not provided';
    const safeInterests = interests.map((item) => escapeHtml(item)).join(', ');
    const safeProgramme = programme ? escapeHtml(programme) : '';
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const adminHtml = `
      <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #2F3E36; background-color: #FBF9F5; padding: 32px;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e2ddd5; border-radius: 16px; overflow: hidden;">
          <div style="background: #2F3E36; color: #ffffff; padding: 24px 28px;">
            <p style="margin: 0 0 6px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #F3A83B;">
              African Restorative Centre · Website Enquiry
            </p>
            <h1 style="margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: 700;">
              New Contact &amp; Enquiry Submission
            </h1>
          </div>
          <div style="padding: 28px; font-size: 15px; line-height: 1.6;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 160px; color: #526259;">Full Name</td>
                <td style="padding: 8px 0;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #526259;">Email Address</td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #C86452;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #526259;">Phone / WhatsApp</td>
                <td style="padding: 8px 0;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #526259;">Area(s) of Interest</td>
                <td style="padding: 8px 0;">${safeInterests}</td>
              </tr>
              ${
                safeProgramme
                  ? `<tr>
                <td style="padding: 8px 0; font-weight: 600; color: #526259;">Selected Programme</td>
                <td style="padding: 8px 0;">${safeProgramme}</td>
              </tr>`
                  : ''
              }
            </table>
            <div style="padding: 16px 18px; background: #FBF9F5; border: 1px solid #e7e1d8; border-radius: 12px; margin-bottom: 20px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #C86452;">
                Enquiry Message
              </p>
              <p style="margin: 0;">${safeMessage}</p>
            </div>
            <p style="margin: 0; font-size: 12px; color: #5f6f66;">
              POPIA Privacy Consent confirmed by submitter on ${escapeHtml(submittedAt)}.
            </p>
          </div>
        </div>
      </div>
    `;

    const adminText = [
      'NEW WEBSITE ENQUIRY — AFRICAN RESTORATIVE CENTRE',
      '',
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone || 'Not provided'}`,
      `Area(s) of Interest: ${interestSummary}`,
      ...(programme ? [`Selected Programme: ${programme}`] : []),
      '',
      'Message:',
      message,
      '',
      `POPIA Privacy Consent confirmed on ${submittedAt}.`,
    ].join('\n');

    try {
      const { data: adminData, error: adminError } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: `[ARC Enquiry] ${interestSummary} — ${fullName}`,
        html: adminHtml,
        text: adminText,
      });

      if (adminError) {
        console.error('Resend admin email error:', adminError);
        return res.status(502).json({
          error:
            adminError.message ||
            'Unable to deliver your enquiry at the moment. Please try again or email info@africanrestorative.co.za directly.',
        });
      }

      let confirmationEmailSent = false;
      try {
        const visitorHtml = `
          <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #2F3E36; background-color: #FBF9F5; padding: 32px;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2ddd5; border-radius: 16px; overflow: hidden;">
              <div style="background: #2F3E36; color: #ffffff; padding: 24px 28px;">
                <p style="margin: 0 0 6px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #F3A83B;">
                  Ancient Future Reclaimed.
                </p>
                <h1 style="margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: 700;">
                  Thank You for Contacting ARC
                </h1>
              </div>
              <div style="padding: 28px; font-size: 15px; line-height: 1.65;">
                <p style="margin-top: 0;">Dear ${safeName},</p>
                <p>
                  Thank you for reaching out to the <strong>African Restorative Centre (ARC)</strong>. We have received your enquiry and routed it to our team at <a href="mailto:${escapeHtml(toEmail)}" style="color: #C86452;">${escapeHtml(toEmail)}</a>.
                </p>
                <div style="padding: 16px 18px; background: #F4EAE1; border-radius: 12px; margin: 20px 0;">
                  <p style="margin: 0 0 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #C86452;">
                    Summary of Your Enquiry
                  </p>
                  <p style="margin: 0 0 4px;"><strong>Interest(s):</strong> ${safeInterests}</p>
                  ${safeProgramme ? `<p style="margin: 0 0 4px;"><strong>Programme:</strong> ${safeProgramme}</p>` : ''}
                  <p style="margin: 8px 0 0; font-size: 14px; color: #2F3E36;">${safeMessage}</p>
                </div>
                <p>
                  A member of our team will respond to you shortly. If your matter is urgent, you may also reach us via telephone or WhatsApp on <strong>078 526 9500</strong>.
                </p>
                <p style="margin-bottom: 0;">
                  Warm regards,<br />
                  <strong>African Restorative Centre (ARC)</strong><br />
                  <span style="font-size: 13px; color: #5f6f66;">398 Tobias Street, Heritage Manor Estate, Krugersdorp, 1740</span>
                </p>
              </div>
            </div>
          </div>
        `;

        const visitorText = [
          `Dear ${fullName},`,
          '',
          `Thank you for reaching out to the African Restorative Centre (ARC). We have received your enquiry and routed it to ${toEmail}.`,
          '',
          `Area(s) of Interest: ${interestSummary}`,
          ...(programme ? [`Selected Programme: ${programme}`] : []),
          '',
          'Your message:',
          message,
          '',
          'A member of our team will respond shortly. For urgent matters, please call or WhatsApp 078 526 9500.',
          '',
          'Warm regards,',
          'African Restorative Centre (ARC)',
        ].join('\n');

        const { error: visitorError } = await resend.emails.send({
          from: fromEmail,
          to: [email],
          replyTo: toEmail,
          subject: 'We received your enquiry — African Restorative Centre (ARC)',
          html: visitorHtml,
          text: visitorText,
        });

        confirmationEmailSent = !visitorError;
        if (visitorError) {
          console.warn('Resend visitor confirmation warning:', visitorError);
        }
      } catch (confirmErr) {
        console.warn('Resend visitor confirmation failed:', confirmErr);
      }

      return res.status(200).json({
        success: true,
        id: adminData?.id ?? null,
        confirmationEmailSent,
      });
    } catch (err) {
      console.error('Unexpected error routing contact enquiry:', err);
      return res.status(500).json({
        error:
          'An unexpected error occurred while sending your enquiry. Please try again or contact info@africanrestorative.co.za.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`ARC server listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start ARC server:', err);
  process.exit(1);
});
