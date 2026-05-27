const SPAM_RESPONSE = { ok: true, spam: true };

export function analyzeContactSpam(payload = {}) {
  const name = clean(payload.name);
  const company = clean(payload.company);
  const email = clean(payload.email);
  const subject = clean(payload.subject);
  const message = clean(payload.message);
  const honeypot = clean(payload.website || payload.url || payload.companyWebsite || payload.contact_url);
  const submittedAt = Number(payload.submittedAt || payload.formStartedAt || 0);

  if (honeypot) {
    return block('honeypot');
  }

  if (submittedAt && Date.now() - submittedAt < 3500) {
    return block('submitted_too_fast');
  }

  const fields = [name, company, subject, message];
  let score = 0;

  if (message.length < 18) score += 2;
  if (subject.length < 8) score += 1;
  if (looksLikeDottedDisposableEmail(email)) score += 2;
  if (fields.filter(looksLikeRandomToken).length >= 3) score += 5;
  if (fields.filter(hasHumanWhitespace).length === 0) score += 2;
  if (!containsHumanWord(`${subject} ${message}`)) score += 2;
  if (/(.)\1{5,}/.test(`${name}${company}${subject}${message}`)) score += 2;

  if (score >= 5) {
    return block('suspicious_random_content', score);
  }

  return { allowed: true, reason: null, score };
}

export function getSpamResponse() {
  return SPAM_RESPONSE;
}

function block(reason, score = null) {
  return { allowed: false, reason, score };
}

function clean(value) {
  return String(value ?? '').trim();
}

function hasHumanWhitespace(value) {
  return /\s/.test(value.trim());
}

function looksLikeRandomToken(value) {
  const text = clean(value);
  if (text.length < 12 || /\s/.test(text)) return false;
  if (!/^[a-zA-Z0-9._-]+$/.test(text)) return false;

  const letters = text.replace(/[^a-zA-Z]/g, '');
  if (letters.length < 10) return false;

  const uppercase = (letters.match(/[A-Z]/g) || []).length;
  const lowercase = (letters.match(/[a-z]/g) || []).length;
  const vowels = (letters.match(/[aeiouAEIOU]/g) || []).length;
  const mixedCase = uppercase >= 2 && lowercase >= 2;
  const lowVowelRatio = vowels / letters.length < 0.32;
  const manyCaseSwitches = countCaseSwitches(letters) >= 4;

  return mixedCase && (lowVowelRatio || manyCaseSwitches);
}

function countCaseSwitches(value) {
  let switches = 0;
  for (let i = 1; i < value.length; i += 1) {
    if (isUpper(value[i]) !== isUpper(value[i - 1])) switches += 1;
  }
  return switches;
}

function isUpper(char) {
  return char >= 'A' && char <= 'Z';
}

function looksLikeDottedDisposableEmail(email) {
  const [local] = clean(email).split('@');
  if (!local) return false;

  const dotCount = (local.match(/\./g) || []).length;
  const singleLetterParts = local.split('.').filter((part) => /^[a-z]$/i.test(part)).length;

  return dotCount >= 5 || singleLetterParts >= 4;
}

function containsHumanWord(value) {
  const text = clean(value).toLowerCase();
  return /\b(cotiz|consulta|consult|servicio|servicios|valvula|válvula|mantenimiento|inspeccion|inspección|obra|proyecto|precio|presupuesto|contact|quote|repair|maintenance|inspection|industrial|material|equipo|empresa|necesito|solicito|quisiera|buenas|hola)\b/.test(text);
}
