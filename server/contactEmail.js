import nodemailer from 'nodemailer';

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];

export function assertEmailEnv(env = process.env) {
  const missing = requiredEnv.filter((key) => !env[key]);
  if (missing.length > 0) {
    const message = `Missing email env vars: ${missing.join(', ')}`;
    const error = new Error(message);
    error.code = 'MISSING_EMAIL_ENV';
    throw error;
  }
}

export async function sendContactEmail(
  {
    name,
    company,
    email,
    subject,
    message,
    language
  },
  env = process.env
) {
  assertEmailEnv(env);

  const smtpPort = Number(env.SMTP_PORT);
  const secure = smtpPort === 465;

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: smtpPort,
    secure,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS
    }
  });

  const to = env.CONTACT_TO || 'ventasbbca@serviningenieria.com.ar';
  const from = env.CONTACT_FROM || env.SMTP_USER;

  const safeSubject = (subject || '').trim() || (language === 'en' ? 'Website inquiry' : 'Consulta desde el sitio web');

  const text = [
    'Nuevo mensaje desde el formulario de contacto',
    '',
    `Nombre: ${name}`,
    `Empresa: ${company}`,
    `Email: ${email}`,
    `Asunto: ${safeSubject}`,
    `Idioma: ${language || 'es'}`,
    '',
    'Mensaje:',
    message
  ].join('\n');

  const html = `
    <h2>Nuevo mensaje desde el formulario de contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Asunto:</strong> ${escapeHtml(safeSubject)}</p>
    <p><strong>Idioma:</strong> ${escapeHtml(language || 'es')}</p>
    <hr/>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  await transporter.sendMail({
    to,
    from,
    subject: `[SERVIN] ${safeSubject}`,
    text,
    html,
    replyTo: email
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
