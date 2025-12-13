import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Resend API Key
        const RESEND_API_KEY = process.env.REACT_APP_RESEND_API_KEY || 're_LCgDksyB_2ii31xZcbNvJy8LoN5AxKwx3';

        // Check if Resend is configured
        if (RESEND_API_KEY === 'YOUR_RESEND_API_KEY') {
            alert('Email service is not configured. Please set up Resend API key in .env file as REACT_APP_RESEND_API_KEY');
            setIsSubmitting(false);
            return;
        }

        try {
            // Prepare email content
            const emailContent = `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Company:</strong> ${formData.company || 'N/A'}</p>
                <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
                <p><strong>Service Interested:</strong> ${formData.service || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${formData.message.replace(/\n/g, '<br>')}</p>
            `;

            // Send email using Resend REST API
            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${RESEND_API_KEY}`
                },
                body: JSON.stringify({
                    from: 'onboarding@resend.dev', // Resend default email for testing
                    to: ['support@macroencoder.com', 'amankk0007@gmail.com'],
                    reply_to: formData.email,
                    subject: `New Contact Form Submission from ${formData.name}`,
                    html: emailContent,
                })
            });

            const data = await response.json();

            if (!response.ok) {
                console.error('Resend API Error:', data);
                throw new Error(data.message || data.error?.message || 'Failed to send email');
            }

            alert('Thank you for your inquiry! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            });
        } catch (error) {
            console.error('Resend Error:', error);
            const errorMessage = error.message || 'Unknown error occurred';
            alert(`There was an error sending your message: ${errorMessage}. Please try again or contact us directly at support@macroencoder.com`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-form">
            <div className="container">
                <div className="form-wrapper">
                    <div className="form-header">
                        <h2 className="section-title">Get No-Cost Quote and Expert Consultation</h2>
                        <p>Let's discuss your project with our best brains!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form-element">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Enter Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="company">Company/Organization</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service Interested *</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose Service</option>
                                <option value="ecommerce">E-Commerce Solutions</option>
                                <option value="magento">Magento Development</option>
                                <option value="wordpress">WordPress Development</option>
                                <option value="zoho">Zoho Development</option>
                                <option value="web-design">Web Development & Designing</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="crm-erp">CRM/ERP Software</option>
                                <option value="mobile-apps">Mobile Apps</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">How can we help you? *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

