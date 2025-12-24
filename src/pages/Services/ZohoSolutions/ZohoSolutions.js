import React from 'react';
import { Link } from 'react-router-dom';
import './ZohoSolutions.css';

const ZohoSolutions = () => {
    const services = [
        {
            title: "Zoho CRM",
            description: "Transform your sales operations with powerful CRM capabilities, lead management, and customer relationship tracking.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="none"/>
                    <path d="M9 9h6v6H9z" fill="none"/>
                    <path d="M3 9h18" stroke="#ffffff"/>
                    <path d="M9 3v18" stroke="#ffffff"/>
                </svg>
            ),
            link: "/services/zoho-crm-implementation"
        },
        {
            title: "Zoho Creator",
            description: "Build custom applications tailored to your business needs with drag-and-drop functionality and powerful automation.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M8 8h8v8H8z"/>
                    <path d="M8 12h8"/>
                    <path d="M12 8v8"/>
                </svg>
            ),
            link: "/services/zoho-creator-applications"
        },
        {
            title: "Zoho People",
            description: "Streamline HR processes, manage attendance, track employee performance, and automate HR workflows.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            ),
            link: "/services/zoho-people"
        },
        {
            title: "Zoho Books",
            description: "Complete accounting solution with invoicing, expense tracking, inventory management, and financial reporting.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    <path d="M8 7h8"/>
                    <path d="M8 11h8"/>
                    <path d="M8 15h4"/>
                </svg>
            ),
            link: "/services/zoho-books-inventory"
        },
        {
            title: "Zoho Desk",
            description: "Deliver exceptional customer support with ticketing, knowledge base, and multi-channel support management.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="12" rx="2"/>
                    <path d="M3 8l9-4 9 4"/>
                    <path d="M8 12h8"/>
                    <path d="M8 16h8"/>
                </svg>
            ),
            link: "/services/zoho-desk"
        },
        {
            title: "Zoho Projects",
            description: "Manage projects efficiently with task tracking, time logging, Gantt charts, and team collaboration tools.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18"/>
                    <path d="M9 3v18"/>
                    <path d="M7 13h10"/>
                    <path d="M7 17h10"/>
                </svg>
            ),
            link: "/services/zoho-projects"
        },
        {
            title: "Zoho One",
            description: "Complete business suite with all Zoho applications integrated for seamless workflow management.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    <path d="M2 12h20"/>
                </svg>
            ),
            link: "/services/zoho-integrations"
        },
        {
            title: "Widgets Integrations",
            description: "Custom widgets and integrations to extend Zoho functionality and connect with third-party applications.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                    <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4"/>
                </svg>
            ),
            link: "/services/zoho-integrations"
        },
        {
            title: "Extensions Development",
            description: "Custom extensions and plugins to enhance Zoho applications with specialized features and capabilities.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                    <path d="M12 12l-4-2.5"/>
                    <path d="M12 12l4-2.5"/>
                </svg>
            ),
            link: "/services/zoho-extensions"
        }
    ];

    return (
        <div className="zoho-solutions-page">
            <div className="page-hero">
                <div className="hero-background-animation"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="title-line">Zoho</span>
                            <span className="title-line highlight">Solutions</span>
                        </h1>
                        <p className="hero-description">
                            Comprehensive Zoho implementation, customization, and integration services to transform your business operations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="content-sections">
                <div className="container">
                    <div className="content-section">
                        <div className="content-image-wrapper">
                            <img src="/dropdown/smart automation.png" alt="Smart Business Automation" className="content-image" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="content-text-wrapper">
                            <h2 className="content-title">Smart Business Automation with Zoho Services</h2>
                            <p className="content-description">
                                Your business workflows should simplify work, not add complexity. We deliver smart Zoho development solutions that connect disconnected systems into a single, efficient platform. Our experienced Zoho specialists build customized solutions aligned with your real business processes—helping you focus more on growth and less on managing software.
                            </p>
                        </div>
                    </div>

                    <div className="content-section reverse">
                        <div className="content-image-wrapper">
                            <img src="/dropdown/zoho integration.png" alt="Zoho Integrations" className="content-image" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="content-text-wrapper">
                            <h2 className="content-title">Seamless Zoho Integrations with Your Business Tools</h2>
                            <p className="content-description">
                                Connect Zoho with the platforms you already use. We integrate Zoho CRM and other Zoho applications with a wide range of third-party tools such as payment gateways, email systems, WhatsApp, telephony, marketing platforms, accounting software, eCommerce websites, logistics tools, and internal systems. Using secure APIs and automation, we ensure smooth data flow between systems—eliminating duplicate entries, reducing manual work, and keeping all teams aligned. The result is faster operations, better collaboration, and a fully connected business ecosystem that works automatically in the background.
                            </p>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="content-image-wrapper">
                            <img src="/dropdown/zoho data.png" alt="Zoho Data Migration" className="content-image" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="content-text-wrapper">
                            <h2 className="content-title">Smooth & Secure Zoho Data Migration</h2>
                            <p className="content-description">
                                Move to Zoho without stress or data loss. We handle complete data migration, workflows, and configurations while ensuring uninterrupted business operations. Our team migrates your data from Excel sheets, Google Sheets, legacy CRMs, accounting software, helpdesk tools, and custom systems into Zoho with proper structure and validation. We ensure all records, histories, relationships, and automations are transferred accurately, so your team can start working on Zoho quickly and confidently—without re-entering data or changing daily processes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Zoho Solutions</h2>
                        <p className="section-subtitle">Choose the perfect Zoho solution for your business needs</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Link 
                                key={index} 
                                to={service.link} 
                                className="service-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-icon-wrapper">
                                    <div className="service-icon">{service.icon}</div>
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Business with Zoho?</h2>
                        <p>Let's discuss how our Zoho solutions can streamline your operations</p>
                        <Link to="/contact" className="cta-button">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZohoSolutions;
