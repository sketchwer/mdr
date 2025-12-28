const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app (in production)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
}

// Gmail transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'Info@macroencoder.com',
        pass: process.env.EMAIL_PASS || 'eydsfzbdsjuotmwl'
    }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, company, phone, service, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ 
                error: 'Missing required fields: name, email, and message are required' 
            });
        }

        // Prepare email content with professional design
        const emailContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 20px;
                border-radius: 8px;
            }
            .email-header {
                padding: 24px 20px;
            }
            .email-body {
                padding: 30px 20px;
            }
            .info-row {
                flex-direction: column;
            }
            .info-label {
                margin-bottom: 8px;
                min-width: auto;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>📧 New Contact Form Submission</h1>
        </div>
        <div class="email-body">
            <div class="info-section">
                <div class="info-row">
                    <div class="info-label">Name:</div>
                    <div class="info-value">${name}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Email:</div>
                    <div class="info-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="info-row">
                    <div class="info-label">Phone:</div>
                    <div class="info-value">${phone || 'N/A'}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Company:</div>
                    <div class="info-value">${company || 'N/A'}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Service:</div>
                    <div class="info-value">${service || 'N/A'}</div>
                </div>
            </div>
            <div class="message-section">
                <div class="info-label">Message / Requirement:</div>
                <div class="message-content">${message.replace(/\n/g, '\n')}</div>
            </div>
        </div>
        <div class="email-footer">
            <p class="footer-text">This email was sent from the contact form on your website.</p>
            <p class="footer-text">Reply directly to this email to respond to ${name}.</p>
        </div>
    </div>
</body>
</html>
        `;

        // Send email using Gmail SMTP
        const mailOptions = {
            from: process.env.EMAIL_USER || 'Info@macroencoder.com',
            to: 'Info@macroencoder.com',
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: emailContent,
        };

        const info = await transporter.sendMail(mailOptions);
        
        console.log('Email sent successfully:', info.messageId);
        res.json({ success: true, message: 'Email sent successfully', messageId: info.messageId });
    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ error: error.message || 'Failed to send email' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Catch-all handler: send back React's index.html file for all non-API routes
// This ensures React Router works correctly on page refresh
app.get('*', (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    
    // In production, serve the built React app
    if (process.env.NODE_ENV === 'production') {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    } else {
        // In development, redirect to React dev server (usually port 3000)
        res.redirect(`http://localhost:3000${req.path}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Email endpoint: http://localhost:${PORT}/api/send-email`);
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Note: React app should be running on port 3000 for development`);
    }
});
