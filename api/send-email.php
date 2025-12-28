<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($input['name']) || empty($input['email']) || empty($input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields: name, email, and message are required']);
    exit;
}

// Gmail/Google Workspace SMTP Configuration
// For Gmail/Google Workspace, use these settings:
$smtp_host = 'smtp.gmail.com'; // Gmail SMTP server
$smtp_port = 587; // Use 587 for TLS or 465 for SSL
$smtp_username = 'info@macroencoder.com'; // Your Gmail/Google Workspace email (full email address)
$smtp_password = 'szqr wija scua jbmt'; // Gmail App Password (required if 2FA enabled)

// IMPORTANT: Gmail App Password Setup Instructions:
// 1. If 2-Step Verification is enabled, you MUST use an App Password (not your regular password)
// 2. Go to: https://myaccount.google.com/security
// 3. Enable 2-Step Verification if not already enabled
// 4. Go to: Google Account > Security > 2-Step Verification > App passwords
// 5. Generate a new App Password for "Mail" and "Other (Custom name)" - name it "Website Contact Form"
// 6. Copy the 16-character password (no spaces) and paste it above in $smtp_password
// 7. If 2FA is NOT enabled, you can use your regular Gmail password, but enabling 2FA + App Password is recommended
$from_email = $input['email'];
$from_name = $input['name'];
$to_email = 'info@macroencoder.com'; // Gmail/Google Workspace email where you want to receive emails
$subject = 'New Contact Form Submission from ' . $from_name;

// Prepare email content
$email_content = "
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>New Contact Form Submission</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f8fafc;
            line-height: 1.6;
        }
        .email-container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            background: linear-gradient(135deg, #1a1a1a 0%, #334155 100%);
            color: #ffffff;
            padding: 30px;
            text-align: center;
        }
        .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        .email-body {
            padding: 40px 30px;
        }
        .info-section {
            margin-bottom: 30px;
        }
        .info-row {
            display: flex;
            padding: 16px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .info-label {
            font-weight: 600;
            color: #334155;
            min-width: 160px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .info-value {
            color: #1a1a1a;
            font-size: 15px;
            flex: 1;
            word-break: break-word;
        }
        .info-value a {
            color: #1a1a1a;
            text-decoration: none;
        }
        .message-section {
            background-color: #f8fafc;
            border-left: 4px solid #ff6b35;
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
        }
        .message-section .info-label {
            margin-bottom: 12px;
            display: block;
            min-width: auto;
        }
        .message-content {
            color: #1a1a1a;
            font-size: 15px;
            line-height: 1.8;
            white-space: pre-wrap;
        }
        .email-footer {
            background-color: #f8fafc;
            padding: 25px 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
            color: #64748b;
            font-size: 13px;
        }
        .footer-text {
            margin: 0;
        }
    </style>
</head>
<body>
    <div class='email-container'>
        <div class='email-header'>
            <h1>📧 New Contact Form Submission</h1>
        </div>
        <div class='email-body'>
            <div class='info-section'>
                <div class='info-row'>
                    <div class='info-label'>Name:</div>
                    <div class='info-value'>" . htmlspecialchars($from_name) . "</div>
                </div>
                <div class='info-row'>
                    <div class='info-label'>Email:</div>
                    <div class='info-value'><a href='mailto:" . htmlspecialchars($from_email) . "'>" . htmlspecialchars($from_email) . "</a></div>
                </div>
                <div class='info-row'>
                    <div class='info-label'>Phone:</div>
                    <div class='info-value'>" . htmlspecialchars($input['phone'] ?? 'N/A') . "</div>
                </div>
                <div class='info-row'>
                    <div class='info-label'>Company:</div>
                    <div class='info-value'>" . htmlspecialchars($input['company'] ?? 'N/A') . "</div>
                </div>
                <div class='info-row'>
                    <div class='info-label'>Service:</div>
                    <div class='info-value'>" . htmlspecialchars($input['service'] ?? 'N/A') . "</div>
                </div>
            </div>
            <div class='message-section'>
                <div class='info-label'>Message / Requirement:</div>
                <div class='message-content'>" . nl2br(htmlspecialchars($input['message'])) . "</div>
            </div>
        </div>
        <div class='email-footer'>
            <p class='footer-text'>This email was sent from the contact form on your website.</p>
            <p class='footer-text'>Reply directly to this email to respond to " . htmlspecialchars($from_name) . ".</p>
        </div>
    </div>
</body>
</html>
";

// Function to send email via SMTP with detailed error reporting
function sendSMTPEmail($host, $port, $username, $password, $from, $from_name, $to, $subject, $html_body) {
    global $smtp_debug;
    $smtp_debug = [];
    
    // Use SSL context for secure connection
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);
    
    // Try to connect with SSL if port is 465
    if ($port == 465) {
        $socket = @stream_socket_client("ssl://{$host}:{$port}", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $context);
        $smtp_debug[] = "Connecting to ssl://{$host}:{$port}";
    } else {
        $socket = @fsockopen($host, $port, $errno, $errstr, 30);
        $smtp_debug[] = "Connecting to {$host}:{$port}";
    }
    
    if (!$socket) {
        $smtp_debug[] = "Connection failed: $errstr ($errno)";
        return ['success' => false, 'error' => "Connection failed: $errstr ($errno)", 'debug' => $smtp_debug];
    }
    
    $smtp_debug[] = "Connected successfully";
    
    $response = fgets($socket, 515);
    $smtp_debug[] = "Server greeting: " . trim($response);
    if (substr($response, 0, 3) != '220') {
        $smtp_debug[] = "Invalid server greeting";
        fclose($socket);
        return ['success' => false, 'error' => "Invalid server response: " . trim($response), 'debug' => $smtp_debug];
    }
    
    // Helper function to read multi-line SMTP response
    $readSMTPResponse = function($socket) use (&$smtp_debug) {
        $full_response = '';
        $last_line = '';
        while ($line = fgets($socket, 515)) {
            $full_response .= $line;
            $last_line = trim($line);
            $smtp_debug[] = "SMTP: " . $last_line;
            // Response ends with a line starting with "250 " (space, not "250-")
            if (substr($last_line, 0, 4) == '250 ') {
                break;
            }
        }
        return ['full' => $full_response, 'last' => $last_line, 'code' => substr($last_line, 0, 3)];
    };
    
    // Check if STARTTLS is supported (only for port 587, not 465)
    if ($port == 587) {
        fputs($socket, "EHLO " . $host . "\r\n");
        $ehlo_response = $readSMTPResponse($socket);
        $smtp_debug[] = "EHLO full response received";
        
        // Check if STARTTLS is in the response
        if (strpos($ehlo_response['full'], 'STARTTLS') !== false) {
            $smtp_debug[] = "STARTTLS supported, initiating...";
            fputs($socket, "STARTTLS\r\n");
            $response = fgets($socket, 515);
            $smtp_debug[] = "STARTTLS response: " . trim($response);
            
            if (substr($response, 0, 3) == '220') {
                if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                    $smtp_debug[] = "STARTTLS encryption failed";
                    fclose($socket);
                    return ['success' => false, 'error' => "STARTTLS encryption failed", 'debug' => $smtp_debug];
                }
                
                $smtp_debug[] = "STARTTLS encryption successful";
                fputs($socket, "EHLO " . $host . "\r\n");
                $ehlo_response = $readSMTPResponse($socket);
                $smtp_debug[] = "EHLO after STARTTLS completed";
            }
        } else {
            $smtp_debug[] = "STARTTLS not supported in EHLO response";
            fclose($socket);
            return ['success' => false, 'error' => "STARTTLS not supported by server", 'debug' => $smtp_debug];
        }
    } else {
        // For port 465, SSL is already established
        fputs($socket, "EHLO " . $host . "\r\n");
        $ehlo_response = $readSMTPResponse($socket);
        $smtp_debug[] = "EHLO response (SSL) completed";
    }
    
    fputs($socket, "AUTH LOGIN\r\n");
    $response = fgets($socket, 515);
    $smtp_debug[] = "AUTH LOGIN response: " . trim($response);
    
    // Check if server is ready for authentication (should be 334)
    if (substr($response, 0, 3) != '334') {
        $smtp_debug[] = "AUTH LOGIN not accepted by server";
        fclose($socket);
        return ['success' => false, 'error' => "AUTH LOGIN failed: " . trim($response), 'debug' => $smtp_debug];
    }
    
    // Use lowercase email for Gmail
    $auth_username = strtolower(trim($username));
    
    // Remove spaces from App Password (Gmail App Passwords may have spaces)
    $clean_password = str_replace(' ', '', trim($password));
    
    fputs($socket, base64_encode($auth_username) . "\r\n");
    $response = fgets($socket, 515);
    $smtp_debug[] = "Username response: " . trim($response);
    
    // Check if server is ready for password (should be 334)
    if (substr($response, 0, 3) != '334') {
        $smtp_debug[] = "Username not accepted";
        fclose($socket);
        return ['success' => false, 'error' => "Username authentication failed: " . trim($response), 'debug' => $smtp_debug];
    }
    
    fputs($socket, base64_encode($clean_password) . "\r\n");
    $response = fgets($socket, 515);
    $smtp_debug[] = "Password response: " . trim($response);
    
    if (substr($response, 0, 3) != '235') {
        $smtp_debug[] = "Authentication failed";
        fclose($socket);
        return ['success' => false, 'error' => "Authentication failed: " . trim($response) . ". Please check your Gmail App Password.", 'debug' => $smtp_debug];
    }
    
    $smtp_debug[] = "Authentication successful";
    
    // Use lowercase email for Gmail
    fputs($socket, "MAIL FROM: <" . $auth_username . ">\r\n");
    $response = fgets($socket, 515);
    $smtp_debug[] = "MAIL FROM response: " . trim($response);
    
    fputs($socket, "RCPT TO: <" . strtolower(trim($to)) . ">\r\n");
    $response = fgets($socket, 515);
    $smtp_debug[] = "RCPT TO response: " . trim($response);
    
    fputs($socket, "DATA\r\n");
    $response = fgets($socket, 515);
    $smtp_debug[] = "DATA response: " . trim($response);
    
    $headers = "From: " . $from_name . " <" . $auth_username . ">\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Subject: " . $subject . "\r\n";
    
    fputs($socket, $headers . "\r\n" . $html_body . "\r\n.\r\n");
    $response = fgets($socket, 515);
    
    $smtp_debug[] = "Email data sent, response: " . trim($response);
    
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    if (substr($response, 0, 3) == '250') {
        $smtp_debug[] = "Email sent successfully";
        return ['success' => true, 'debug' => $smtp_debug];
    } else {
        return ['success' => false, 'error' => "Email sending failed: " . trim($response), 'debug' => $smtp_debug];
    }
}

// Try SMTP only - NO fallback to mail() to ensure emails go to Gmail
$mail_result = false;
$smtp_error = '';
$smtp_debug_info = [];

// Try SMTP if credentials are configured
// Check if password is set and not placeholder
$password_is_set = !empty($smtp_password) && 
                   $smtp_password != 'your_gmail_app_password' && 
                   $smtp_password != 'your_webmail_password' &&
                   strlen(trim(str_replace(' ', '', $smtp_password))) >= 16;

if ($smtp_username != 'your_webmail_password' && $password_is_set) {
    $mail_result = sendSMTPEmail(
        $smtp_host,
        $smtp_port,
        $smtp_username,
        $smtp_password,
        $from_email,
        $from_name,
        $to_email,
        $subject,
        $email_content
    );
    
    if (is_array($mail_result)) {
        $mail_sent = $mail_result['success'];
        if (!$mail_sent) {
            $smtp_error = $mail_result['error'] ?? 'SMTP connection failed';
            $smtp_debug_info = $mail_result['debug'] ?? [];
        }
    } else {
        $mail_sent = $mail_result;
        if (!$mail_sent) {
            $smtp_error = 'SMTP connection failed. Please check Gmail App Password and SMTP settings.';
        }
    }
} else {
    if (empty($smtp_password) || $smtp_password == 'your_gmail_app_password' || $smtp_password == 'your_webmail_password') {
        $smtp_error = 'SMTP credentials not configured. Please set Gmail App Password in the script.';
    } else {
        $clean_pwd = str_replace(' ', '', trim($smtp_password));
        if (strlen($clean_pwd) < 16) {
            $smtp_error = 'Gmail App Password appears to be invalid. App Passwords are 16 characters long.';
        } else {
            $smtp_error = 'SMTP configuration issue. Please verify Gmail App Password is correct.';
        }
    }
    $mail_sent = false;
}

// DO NOT fallback to mail() - this sends to webmail
// Only send via Gmail SMTP

if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully to Gmail inbox'
    ]);
} else {
    http_response_code(500);
    $error_msg = error_get_last();
    echo json_encode([
        'error' => 'Failed to send email via Gmail SMTP.',
        'details' => $smtp_error ? $smtp_error : 'SMTP authentication failed. Please verify Gmail App Password.',
        'debug_info' => $smtp_debug_info,
        'smtp_host' => $smtp_host,
        'smtp_port' => $smtp_port,
        'smtp_username' => $smtp_username,
        'note' => 'Check browser console for detailed error information'
    ]);
}
?>
