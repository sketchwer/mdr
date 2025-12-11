import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
            ),
            title: 'Zoho Solutions',
            subServices: [
                'Zoho CRM Implementation',
                'Zoho Creator Applications',
                'Zoho People (HR & Attendance)',
                'Zoho Books & Inventory',
                'Zoho Desk',
                'Zoho Projects',
                'Zoho Integrations',
                'Zoho Extensions Development'
            ]
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                </svg>
            ),
            title: 'AI & Automation',
            subServices: [
                'AI Chatbots (Website & WhatsApp)',
                'Business Process Automation',
                'Sales Automation (AI-Based)',
                'Lead Qualification & Follow-Up Automation',
                'Document & PDF Automation',
                'Email & WhatsApp Notification Automation',
                'Task & Approval Workflows',
                'Internal HR/Finance Automation',
                'Customer Support Automation',
                'AI Reports & Insights'
            ]
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
            ),
            title: 'Software Development',
            subServices: [
                'Web Application Development',
                'Java / Spring Boot Development',
                'PHP / Laravel Development',
                'ReactJS / Frontend Development',
                'Mobile App Development (Android / iOS / Flutter)',
                'Custom ERP & Business Portals'
            ]
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"/>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
            ),
            title: 'Website Development',
            subServices: [
                'Business Website Development',
                'WordPress Development',
                'Landing Page Design',
                'Website Redesign',
                'Website Maintenance & Support'
            ]
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">OUR SERVICES</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <ul className="service-list">
                                {service.subServices.map((subService, idx) => (
                                    <li key={idx}>{subService}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
