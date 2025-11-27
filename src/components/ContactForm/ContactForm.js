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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            service: '',
            message: ''
        });
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
                        <button type="submit" className="btn btn-primary btn-submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

