import React from 'react';
import './ZohoCompetency.css';

const ZohoCompetency = () => {
    const competencies = [
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#771313" rx="4"/>
                    <path d="M20 20 L25 25 L30 20 L35 25 L30 30 L25 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="30" cy="35" r="3" fill="white"/>
                    <path d="M25 40 L35 40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "Smart Automations & Integrations",
            points: [
                "Connect all your apps and make daily work automatic",
                "AI, Make.com, and API integrations for seamless workflows",
                "Automated updates, approvals, reminders, and data movement",
                "Everything works together smoothly without manual effort"
            ]
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#771313" rx="4"/>
                    <rect x="18" y="18" width="24" height="24" rx="2" fill="white"/>
                    <path d="M25 25 L30 30 L35 25" stroke="#771313" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
            ),
            title: "Zoho Creator Solutions",
            points: [
                "Create applications exactly the way your business works",
                "Custom apps for production, HR, inventory, and field teams",
                "Built using Deluge, Widgets, and advanced integrations",
                "Complete automation for approvals and workflows"
            ]
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#771313" rx="4"/>
                    <circle cx="30" cy="25" r="6" fill="white"/>
                    <path d="M20 35 L25 40 L30 35 L35 40" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
            ),
            title: "Zoho CRM Automation",
            points: [
                "Transform sales operations with smart CRM workflows",
                "Lead routing, follow-ups, and Zia insights",
                "Scoring rules, quotations, and automated tasks",
                "Clean, fast, and organised system for your sales team"
            ]
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#771313" rx="4"/>
                    <rect x="18" y="20" width="24" height="18" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M20 25 L28 25 M20 28 L26 28 M20 31 L30 31" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="35" cy="27" r="2" fill="white"/>
                </svg>
            ),
            title: "AI Document Scanning, Reading & Automation",
            points: [
                "Scan any document — invoice, bill, form, ID, report, or receipt",
                "OpenAI and smart OCR for instant data extraction",
                "No typing, no manual checking — fully automated",
                "Saves your team hours of effort every day"
            ]
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#771313" rx="4"/>
                    <path d="M25 20 L30 15 L35 20 L30 25 Z" fill="white"/>
                    <circle cx="25" cy="35" r="3" fill="white"/>
                    <circle cx="30" cy="35" r="3" fill="white"/>
                    <circle cx="35" cy="35" r="3" fill="white"/>
                    <path d="M22 42 L38 42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "AI, Python & Machine Learning",
            points: [
                "Unlock powerful automation with AI-driven solutions",
                "Python + ML models for document reading and data extraction",
                "Predict outcomes, identify patterns automatically",
                "Accurate and fast daily decision-making"
            ]
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#771313" rx="4"/>
                    <circle cx="30" cy="25" r="5" fill="white"/>
                    <path d="M22 35 Q30 30 38 35" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    <path d="M20 42 L40 42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "Zoho Zia Intelligence",
            points: [
                "Predictive insights and anomaly alerts",
                "Email intelligence and chat assistance",
                "AI-triggered workflows for smart automation",
                "Enhance your Zoho apps with Zia's capabilities"
            ]
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#771313" rx="4"/>
                    <rect x="20" y="20" width="20" height="20" rx="2" fill="#771313"/>
                    <path d="M25 25 L30 30 L35 25" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
            ),
            title: "Advanced Java Development",
            points: [
                "Secure, scalable, enterprise-grade Java applications",
                "Spring Boot, MVC, WebFlux, Hibernate, Struts, and JSF",
                "High-performance backends and powerful custom software",
                "Perfect for businesses needing robust solutions"
            ]
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#771313" rx="4"/>
                    <rect x="18" y="18" width="10" height="10" rx="1" fill="white"/>
                    <rect x="32" y="18" width="10" height="10" rx="1" fill="white"/>
                    <rect x="18" y="32" width="10" height="10" rx="1" fill="white"/>
                    <rect x="32" y="32" width="10" height="10" rx="1" fill="white"/>
                </svg>
            ),
            title: "Custom Application Development",
            points: [
                "ERP, HRMS, attendance, inventory, finance, and production",
                "Service management and complete automation",
                "Clean UI with fast performance",
                "Built uniquely for your business needs"
            ]
        }
    ];

    return (
        <section className="zoho-competency-section">
            <div className="container">
                {/* Content with Image Section */}
                <div className="intro-content-wrapper">
                    <div className="intro-text">
                        <h2 className="section-title">Let our expert IT brains<br />solve your toughest business challenges</h2>
                        <p className="section-subtitle">We make your everyday business work simple, fast, and automatic.</p>
                        <p className="section-description">
                            With 12+ years of experience, we help all types of businesses reduce manual work and move towards smart digital systems. No matter which industry you belong to — automobile, food, appliances, manufacturing, trading, or services — our solutions fit perfectly into your daily workflow. You don't need any technical knowledge; our tools are easy for anyone to use. From attendance and production to billing and customer management, our AI-powered systems make your work smoother, more accurate, and more productive.
                        </p>
                    </div>
                    <div className="intro-image">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                            alt="Team Collaboration" 
                        />
                    </div>
                </div>

                {/* Section Header */}
                <div className="competency-section-header">
                    <h3>Our Services</h3>
                    <h2>Comprehensive Solutions for Your Business</h2>
                </div>

                {/* Competency Grid */}
                <div className="competency-grid">
                    {competencies.map((item, index) => (
                        <div key={index} className="competency-card">
                            <div className="competency-icon">{item.icon}</div>
                            <h3 className="competency-title">{item.title}</h3>
                            <ul className="competency-points">
                                {item.points.map((point, idx) => (
                                    <li key={idx} className="competency-point-item">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                            <polyline points="22 4 12 14.01 9 11.01"/>
                                        </svg>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="view-all-container">
                    <button className="view-all-button">VIEW ALL</button>
                </div>
            </div>
        </section>
    );
};

export default ZohoCompetency;

