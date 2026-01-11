import { sendContactEmail } from '../../server/contactEmail.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Method Not Allowed' })
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');

    const name = String(payload.name || '').trim();
    const company = String(payload.company || '').trim();
    const email = String(payload.email || '').trim();
    const subject = String(payload.subject || '').trim();
    const message = String(payload.message || '').trim();
    const language = String(payload.language || 'es');

    if (!name || !company || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false, error: 'Missing required fields' })
      };
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false, error: 'Invalid email' })
      };
    }

    await sendContactEmail({ name, company, email, subject, message, language });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true })
    };
  } catch (error) {
    console.error('[contact] Error:', error);
    const statusCode = error?.code === 'MISSING_EMAIL_ENV' ? 501 : 500;

    return {
      statusCode,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Email service not configured' })
    };
  }
};
