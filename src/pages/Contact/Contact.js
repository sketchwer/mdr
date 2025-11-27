import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <PageHeader 
                title="Get In Touch"
                subtitle="Contact Us"
                description="Let's discuss how we can help transform your business with our innovative solutions."
            />
            <div className="contact-content">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-form-section">
                            <ContactForm />
                        </div>
                        <div className="contact-info-section">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

