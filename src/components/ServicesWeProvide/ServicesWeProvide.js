import React from 'react';
import './ServicesWeProvide.css';

const ServicesWeProvide = () => {
    const services = [
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6l-3-4H6z"/>
                    <path d="M3 6h18"/>
                    <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
            ),
            title: "Magento Commerce",
            description: "Magento Development, Magento 2 Migration, Magento Support Plan, Hyvä Theme Development, Adobe Commerce Development, Magento Enterprise"
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6l-3-4H6z"/>
                    <path d="M3 6h18"/>
                    <path d="M8 10h8M8 14h8M8 18h8"/>
                </svg>
            ),
            title: "E-Commerce Solution",
            description: "Shopify Development, WooCommerce Development, BigCommerce Development, Shopline Development, eCommerce Maintenance, PIMCore Development, E-Commerce Development"
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                </svg>
            ),
            title: "CMS/CRM Development",
            description: "PHP Web Development, Laravel Development, WordPress Development, Zoho Development Services, Odoo Development, ReactJS Development"
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
            ),
            title: "Digital Marketing",
            description: "Search Engine Optimisation, Generative Engine Optimization, Answer Engine Optimization, PPC Management, Content Marketing, Social Media Management"
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
            ),
            title: "Mobile App Solutions",
            description: "Whatsapp Chatbot Integration, Flutter App Development, Android App Development, iPhone App Development"
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M13 8H7"/>
                    <path d="M17 12H7"/>
                </svg>
            ),
            title: "Support & Packages",
            description: "WordPress Support Plans"
        }
    ];

    return (
        <section className="services-we-provide-section">
            <div className="container">
                <h2 className="section-title">OUR SERVICES</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesWeProvide;

