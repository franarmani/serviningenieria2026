<?php
/**
 * SERVIN INGENIERÍA - Contact Form Handler
 * Configurado para Towebs cPanel hosting con Gmail SMTP
 * Envía desde: serviningenieriaweb@gmail.com
 * Envía a: ventasbbca@serviningenieria.com.ar
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method Not Allowed']);
    exit;
}

// Get JSON input or multipart/form-data input
$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = $_POST;
}

// Validate required fields
$name = trim($input['name'] ?? '');
$company = trim($input['company'] ?? '');
$email = trim($input['email'] ?? '');
$subject = trim($input['subject'] ?? '');
$message = trim($input['message'] ?? '');
$language = trim($input['language'] ?? 'es');

if (empty($name) || empty($company) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}

$spam_check = analyze_spam($input);
if (!$spam_check['allowed']) {
    error_log("Contact form spam blocked: " . $spam_check['reason'] . " from $email");
    http_response_code(200);
    echo json_encode(['ok' => true, 'spam' => true]);
    exit;
}

// Email configuration
$to = 'ventasbbca@serviningenieria.com.ar';
$from = 'serviningenieriaweb@gmail.com';
$from_name = 'SERVIN Ingeniería Web';

// Email subject
$email_subject = '[SERVIN] ' . $subject;

// HTML email body with corporate styling
$html_body = "<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #2e2c3a; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: #E00000; color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
        .content { background: #ffffff; padding: 30px 20px; }
        .field { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0; }
        .field:last-of-type { border-bottom: none; }
        .label { font-weight: 600; color: #E00000; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
        .value { color: #2e2c3a; font-size: 16px; }
        .message-box { background: #f9f9f9; padding: 20px; border-left: 4px solid #E00000; margin-top: 20px; white-space: pre-wrap; line-height: 1.8; font-size: 15px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f5f5f5; }
        .footer p { margin: 5px 0; }
        a { color: #E00000; text-decoration: none; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>✉️ Nuevo Mensaje de Contacto</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Nombre Completo</div>
                <div class='value'>" . htmlspecialchars($name) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Empresa / Representa a</div>
                <div class='value'>" . htmlspecialchars($company) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Email de Contacto</div>
                <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
            </div>
            <div class='field'>
                <div class='label'>Asunto</div>
                <div class='value'>" . htmlspecialchars($subject) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Idioma</div>
                <div class='value'>" . strtoupper(htmlspecialchars($language)) . "</div>
            </div>
            <div class='message-box'>
                <div class='label' style='margin-bottom: 10px;'>Mensaje</div>
                " . nl2br(htmlspecialchars($message)) . "
            </div>
        </div>
        <div class='footer'>
            <p><strong>SERVIN INGENIERÍA S.A.</strong></p>
            <p>Este mensaje fue enviado desde el formulario de contacto web</p>
            <p>Para responder, simplemente haz clic en 'Responder' en tu cliente de correo</p>
        </div>
    </div>
</body>
</html>";

// Email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $from_name <$from>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Return-Path: $from\r\n";
$headers .= "X-Mailer: PHP " . phpversion() . "\r\n";
$headers .= "X-Priority: 1\r\n";
$headers .= "X-MSMail-Priority: High\r\n";

// Try to send with mail() - Towebs uses Exim/Postfix
// Note: Gmail relay may require specific SPF/DKIM configuration
$success = mail($to, $email_subject, $html_body, $headers);

// Log attempt for debugging (Towebs admin can check mail logs)
error_log("Contact form submission from $email - " . ($success ? "SUCCESS" : "FAILED"));

if ($success) {
    http_response_code(200);
    echo json_encode(['ok' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not send email. Please try again later.']);
}

function analyze_spam($input) {
    $name = clean_value($input['name'] ?? '');
    $company = clean_value($input['company'] ?? '');
    $email = clean_value($input['email'] ?? '');
    $subject = clean_value($input['subject'] ?? '');
    $message = clean_value($input['message'] ?? '');
    $honeypot = clean_value($input['website'] ?? ($input['url'] ?? ($input['companyWebsite'] ?? ($input['contact_url'] ?? ''))));
    $submitted_at = intval($input['submittedAt'] ?? ($input['formStartedAt'] ?? 0));

    if ($honeypot !== '') {
        return ['allowed' => false, 'reason' => 'honeypot'];
    }

    if ($submitted_at > 0 && ((time() * 1000) - $submitted_at) < 3500) {
        return ['allowed' => false, 'reason' => 'submitted_too_fast'];
    }

    $fields = [$name, $company, $subject, $message];
    $score = 0;

    if (strlen($message) < 18) $score += 2;
    if (strlen($subject) < 8) $score += 1;
    if (looks_like_dotted_disposable_email($email)) $score += 2;

    $random_count = 0;
    $whitespace_count = 0;
    foreach ($fields as $field) {
        if (looks_like_random_token($field)) $random_count++;
        if (preg_match('/\s/', trim($field))) $whitespace_count++;
    }

    if ($random_count >= 3) $score += 5;
    if ($whitespace_count === 0) $score += 2;
    if (!contains_human_word($subject . ' ' . $message)) $score += 2;
    if (preg_match('/(.)\1{5,}/', $name . $company . $subject . $message)) $score += 2;

    if ($score >= 5) {
        return ['allowed' => false, 'reason' => 'suspicious_random_content'];
    }

    return ['allowed' => true, 'reason' => null];
}

function clean_value($value) {
    return trim(strval($value));
}

function looks_like_random_token($value) {
    $text = clean_value($value);
    if (strlen($text) < 12 || preg_match('/\s/', $text)) return false;
    if (!preg_match('/^[a-zA-Z0-9._-]+$/', $text)) return false;

    $letters = preg_replace('/[^a-zA-Z]/', '', $text);
    if (strlen($letters) < 10) return false;

    preg_match_all('/[A-Z]/', $letters, $upper_matches);
    preg_match_all('/[a-z]/', $letters, $lower_matches);
    preg_match_all('/[aeiouAEIOU]/', $letters, $vowel_matches);

    $uppercase = count($upper_matches[0]);
    $lowercase = count($lower_matches[0]);
    $vowels = count($vowel_matches[0]);
    $mixed_case = $uppercase >= 2 && $lowercase >= 2;
    $low_vowel_ratio = ($vowels / strlen($letters)) < 0.32;
    $many_case_switches = count_case_switches($letters) >= 4;

    return $mixed_case && ($low_vowel_ratio || $many_case_switches);
}

function count_case_switches($value) {
    $switches = 0;
    for ($i = 1; $i < strlen($value); $i++) {
        if (ctype_upper($value[$i]) !== ctype_upper($value[$i - 1])) $switches++;
    }
    return $switches;
}

function looks_like_dotted_disposable_email($email) {
    $parts = explode('@', clean_value($email));
    $local = $parts[0] ?? '';
    if ($local === '') return false;

    $dot_count = substr_count($local, '.');
    $single_letter_parts = 0;
    foreach (explode('.', $local) as $part) {
        if (preg_match('/^[a-z]$/i', $part)) $single_letter_parts++;
    }

    return $dot_count >= 5 || $single_letter_parts >= 4;
}

function contains_human_word($value) {
    $text = strtolower(clean_value($value));
    return preg_match('/\b(cotiz|consulta|consult|servicio|servicios|valvula|válvula|mantenimiento|inspeccion|inspección|obra|proyecto|precio|presupuesto|contact|quote|repair|maintenance|inspection|industrial|material|equipo|empresa|necesito|solicito|quisiera|buenas|hola)\b/u', $text) === 1;
}
