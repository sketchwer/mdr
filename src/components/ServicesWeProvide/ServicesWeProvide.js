import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesWeProvide.css';

const ServicesWeProvide = () => {
    const services = [
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                </svg>
            ),
            title: <>Smart AI Automations, Integrations<br />& Document Intelligence</>,
            link: "/services/smart-automations",
            subServices: [
                "Connect Zoho one, CRM, and other apps like make.com,jot form etc to Automated updates, approvals, reminders, and daily workflows",
                "AI-powered workflows using automation tools and APIs",
                "Scan and read any document with AI and smart OCR for instant data extraction",
                
            ]
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
            ),
            title: "Zoho Creator Solutions",
            link: "/services/zoho-creator-solutions",
            subServices: [
                "Create applications exactly the way your business works",
                "Custom apps for production, HR, inventory, and field teams",
                "Built using Deluge, Widgets, and advanced integrations",
                "Complete automation for approvals and workflows"
            ]
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
            ),
            title: "Zoho CRM Automation",
            link: "/services/zoho-crm-automation",
            subServices: [
                "Transform sales operations with smart CRM workflows",
                "Lead routing, follow-ups, and Zia insights",
                "Scoring rules, quotations, and automated tasks",
                "Clean, fast, and organised system for your sales team"
            ]
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                </svg>
            ),
            title: "AI, Python & Machine Learning",
            link: "/services/ai-python-ml",
            subServices: [
                "Unlock powerful automation with AI-driven solutions",
                "Python + ML models for document reading and data extraction",
                "Predict outcomes, identify patterns automatically",
                "Accurate and fast daily decision-making"
            ]
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
            ),
            title: "Zoho Zia Intelligence",
            link: "/services/zoho-zia-intelligence",
            subServices: [
                "Predictive insights and anomaly alerts",
                "Email intelligence and chat assistance",
                "AI-triggered workflows for smart automation",
                "Enhance your Zoho apps with Zia's capabilities"
            ]
        },
        {
            icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
            ),
            title: "Enterprise Software & Custom Application Development",
            link: "/services/enterprise-software-development",
            subServices: [
                "Secure and scalable enterprise software built using advanced Java technologies",
                "Custom business applications including ERP, HRMS, attendance, inventory, finance, production, and EDC systems",
                "High-performance backend development with strong integrations and automation",
            
            ]
        }
    ];

    return (
        <section className="services-we-provide-section">
            <div className="container">
                <h2 className="section-title">OUR SERVICES</h2>
                <h3 className="section-subtitle">Comprehensive Solutions for Your Business</h3>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <Link key={index} to={service.link} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <ul className="service-list">
                                {service.subServices.map((subService, idx) => (
                                    <li key={idx}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                            <polyline points="22 4 12 14.01 9 11.01"/>
                                        </svg>
                                        <span>{subService}</span>
                                    </li>
                                ))}
                            </ul>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesWeProvide;

