const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Resend initialization
const resend = new Resend(process.env.RESEND_API_KEY || 're_LCgDksyB_2ii31xZcbNvJy8LoN5AxKwx3');

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

        // Prepare email content
        const emailContent = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Service Interested:</strong> ${service || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `;

        // Send email using Resend
        // Note: Testing mode me sirf verified email par hi send kar sakte hain
        // Domain verify hone ke baad, 'to' me original emails add kar dena
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['zippy0358@gmail.com'], // Temporary - domain verify hone ke baad support@macroencoder.com aur amankk0007@gmail.com add karna
            // bcc: ['support@macroencoder.com', 'amankk0007@gmail.com'], // Domain verify hone ke baad uncomment karna
            reply_to: email,
            subject: `New Contact Form Submission from ${name}`,
            html: emailContent,
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ error: error.message || 'Failed to send email' });
        }

        res.json({ success: true, message: 'Email sent successfully', data });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Email endpoint: http://localhost:${PORT}/api/send-email`);
});

