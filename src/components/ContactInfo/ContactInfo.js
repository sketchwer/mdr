import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    const contactDetails = [
        {
            icon: '📧',
            title: 'Email',
            details: [
                'info@techpartner.com',
                'sales@techpartner.com'
            ]
        },
        {
            icon: '📞',
            title: 'Phone',
            details: [
                '+1 (607) 524-4040',
                '+91 98986 07411'
            ]
        },
        {
            icon: '📍',
            title: 'Address',
            details: [
                '2nd Floor, Tech Building',
                '132 Feet Ring Rd,',
                'Ahmedabad, Gujarat - 380015'
            ]
        },
        {
            icon: '🕒',
            title: 'Working Hours',
            details: [
                'Monday - Friday: 9:00 AM - 6:00 PM',
                'Saturday: 10:00 AM - 4:00 PM'
            ]
        }
    ];

    return (
        <div className="contact-info">
            <h2 className="contact-info-title">Contact Information</h2>
            <p className="contact-info-description">
                Get in touch with us through any of the following channels. We're here to help!
            </p>
            <div className="contact-details">
                {contactDetails.map((detail, index) => (
                    <div key={index} className="contact-detail-card">
                        <div className="contact-icon">{detail.icon}</div>
                        <h3>{detail.title}</h3>
                        {detail.details.map((item, idx) => (
                            <p key={idx}>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">📘</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">🐦</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">💼</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">📷</a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;

