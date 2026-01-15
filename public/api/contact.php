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

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

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
