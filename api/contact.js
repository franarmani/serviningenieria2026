import { sendContactEmail } from '../server/contactEmail.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  try {
    const payload = req.body || {};

    const name = String(payload.name || '').trim();
    const company = String(payload.company || '').trim();
    const email = String(payload.email || '').trim();
    const subject = String(payload.subject || '').trim();
    const message = String(payload.message || '').trim();
    const language = String(payload.language || 'es');

    if (!name || !company || !email || !subject || !message) {
      res.status(400).json({ ok: false, error: 'Missing required fields' });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      res.status(400).json({ ok: false, error: 'Invalid email' });
      return;
    }

    await sendContactEmail({ name, company, email, subject, message, language });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[api/contact] Error:', error);
    const statusCode = error?.code === 'MISSING_EMAIL_ENV' ? 501 : 500;
    res.status(statusCode).json({ ok: false, error: 'Email service not configured' });
  }
}
