import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudies.css';

const CaseStudies = () => {
    const [selectedTechnology, setSelectedTechnology] = useState('All Technologies');
    const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
    const [searchQuery, setSearchQuery] = useState('');

    const caseStudies = [
        {
            id: 1,
            logo: "Pau's Project",
            brand: 'FINANCE AUTOMATION',
            title: 'Streamlined order creation with automated sync',
            industry: 'Finance Automation',
            technology: 'Zoho CRM, Zoho Books',
            image: "/case study/pau's project.png",
            category: 'finance'
        },
        {
            id: 2,
            logo: 'Clever Café',
            brand: 'SERVICE & TRAINING',
            title: 'Unified meetings, bookings & CRM updates',
            industry: 'Service & Training',
            technology: 'Zoho CRM, Zoho Meeting, Zoho Bookings',
            image: "/case study/clever cafe.jpeg",
            category: 'service'
        },
        {
            id: 3,
            logo: 'Hopkins C.P.A Firm',
            brand: 'ACCOUNTING & FINANCE',
            title: 'Automated document signing to subscription billing',
            industry: 'Accounting & Finance',
            technology: 'Zoho CRM, Zoho Billing',
            image: "/case study/hopkins.png",
            category: 'accounting'
        },
        {
            id: 4,
            logo: 'Sri Project',
            brand: 'RETAIL & MULTI‑STORE',
            title: 'Automated onboarding and billing workflows',
            industry: 'Retail & Multi‑Store',
            technology: 'Zoho CRM, Zoho Books',
            image: "/case study/sri project.jpeg",
            category: 'retail'
        },
        {
            id: 5,
            logo: 'DTC Customization',
            brand: 'EMAIL INFRASTRUCTURE',
            title: 'Implemented secure email authentication',
            industry: 'Email Infrastructure',
            technology: 'SPF, DKIM',
            image: "/case study/dtc customization.png",
            category: 'email'
        },
        {
            id: 6,
            logo: 'TransForme Project',
            brand: 'TRAINING & EDUCATION',
            title: 'Automated facilitator and overdue task tracking',
            industry: 'Training & Education',
            technology: 'Zoho Projects, Zoho Creator',
            image: "/case study/transforme project.jpeg",
            category: 'training'
        },
        {
            id: 7,
            logo: 'Infinity Advertising',
            brand: 'ADVERTISING & ERP',
            title: 'Built a complete Zoho‑based ERP ecosystem',
            industry: 'Advertising & ERP',
            technology: 'Zoho Creator, CRM, Books',
            image: "/case study/infinity advertising.jpeg",
            category: 'advertising'
        },
        {
            id: 8,
            logo: 'World Vegan Travel',
            brand: 'TRAVEL & TOURISM',
            title: 'Automated bookings, reminders & payment flows',
            industry: 'Travel & Tourism',
            technology: 'Zoho CRM, Zoho Campaigns',
            image: "/case study/world vegan travel.jpeg",
            category: 'travel'
        },
        {
            id: 9,
            logo: 'Wilfredo Labroda',
            brand: 'CUSTOMER SUPPORT',
            title: 'Optimized Desk workflows & reporting',
            industry: 'Customer Support',
            technology: 'Zoho Desk, Zoho Analytics',
            image: "/case study/wilfredo labroda.jpeg",
            category: 'support'
        },
        {
            id: 10,
            logo: 'Tim Noye',
            brand: 'BUSINESS CONSULTING',
            title: 'Connected meetings, campaigns & calendar sync',
            industry: 'Business Consulting',
            technology: 'Zoho Meeting, CRM',
            image: "/case study/tim noye.jpeg",
            category: 'consulting'
        },
        {
            id: 11,
            logo: 'Tim Hopper',
            brand: 'RECRUITMENT',
            title: 'Delivered full recruitment analytics automation',
            industry: 'Recruitment',
            technology: 'Zoho Recruit',
            image: "/case study/tim hopper.png",
            category: 'recruitment'
        },
        {
            id: 12,
            logo: 'Client Lifecycle',
            brand: 'ENTERPRISE CRM',
            title: 'Automated complete lead‑to‑post‑sale cycle',
            industry: 'Accounting',
            technology: 'Zoho CRM, Books, Desk',
            image: "/case study/client lifecycle.png",
            category: 'enterprise'
        },
        {
            id: 13,
            logo: 'Rachel Chapman',
            brand: 'E‑COMMERCE',
            title: 'Enabled real‑time Shopify to CRM sync',
            industry: 'E‑Commerce',
            technology: 'Shopify, Zoho CRM',
            image: "/case study/rachel chapman.png",
            category: 'ecommerce'
        },
        {
            id: 14,
            logo: 'Patrick Koelle',
            brand: 'CONSULTING & SUPPORT',
            title: 'Unified CRM, Desk & Books workflows',
            industry: 'Consulting & Support',
            technology: 'Zoho Desk, CRM, Books',
            image: "/case study/patrick koelle.png",
            category: 'consulting'
        },
        {
            id: 15,
            logo: 'KANO Medical',
            brand: 'HEALTHCARE',
            title: 'Implemented CRM & marketing automation',
            industry: 'Healthcare',
            technology: 'Zoho CRM, Zoho Marketing',
            image: "/case study/kano medical.png",
            category: 'healthcare'
        },
        {
            id: 16,
            logo: 'CC Limited',
            brand: 'AUTOMOBILE',
            title: 'Structured pipeline for spare parts sales',
            industry: 'Automobile',
            technology: 'Zoho CRM',
            image: "/case study/cc limited.png",
            category: 'automobile'
        },
        {
            id: 17,
            logo: 'Talencity Inc.',
            brand: 'RECRUITMENT',
            title: 'Cleaned & optimized recruitment operations',
            industry: 'Recruitment',
            technology: 'Zoho Recruit, Zoho CRM',
            image: "/case study/talencity.png",
            category: 'recruitment'
        },
        {
            id: 18,
            logo: 'MyWork',
            brand: 'RECRUITMENT',
            title: 'Automated candidate communication & filters',
            industry: 'Recruitment',
            technology: 'Zoho Recruit',
            image: "/case study/my work.png",
            category: 'recruitment'
        },
        {
            id: 19,
            logo: 'Matter Mind Decor',
            brand: 'INTERIOR DESIGN',
            title: 'Automated post‑sale workflows & billing sync',
            industry: 'Interior Design',
            technology: 'Zoho CRM, Books',
            image: "/case study/matter mind decor.png",
            category: 'design'
        },
        {
            id: 20,
            logo: 'La Petite Forêt',
            brand: 'RECRUITMENT',
            title: 'Automated formatted CV generation',
            industry: 'Recruitment',
            technology: 'Zoho Recruit',
            image: "/case study/la petite foret.png",
            category: 'recruitment'
        },
        {
            id: 21,
            logo: 'Sonder Digital',
            brand: 'DIGITAL MARKETING',
            title: 'Integrated CRM with marketing automation',
            industry: 'Digital Marketing',
            technology: 'Zoho CRM, Zoho Marketing',
            image: "/case study/sonder digital.png",
            category: 'marketing'
        },
        {
            id: 22,
            logo: 'Freelancer Management Platform',
            brand: 'OPERATIONS AUTOMATION',
            title: 'Scalable Lead Assignment & Freelancer Management System',
            industry: 'Consulting & Support',
            technology: 'Zoho CRM, Zoho Creator, Custom Widgets',
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            category: 'operations'
        },
        {
            id: 23,
            logo: 'E-Commerce Retailer',
            brand: 'ECOMMERCE AUTOMATION',
            title: 'Shopify–Zoho ERP Integration',
            industry: 'E‑Commerce',
            technology: 'Shopify, Zoho CRM, Zoho Inventory, Zoho Analytics',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            category: 'ecommerce'
        },
        {
            id: 24,
            logo: 'Travel & Tourism Agency',
            brand: 'SALES & LEAD AUTOMATION',
            title: 'AI-Powered Travel Sales Automation',
            industry: 'Travel & Tourism',
            technology: 'Zoho CRM, AI Chatbot, Zoho Analytics',
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80",
            category: 'travel'
        },
        {
            id: 25,
            logo: 'Fintech Money Transfer Service',
            brand: 'FINTECH AUTOMATION',
            title: 'Centralized CRM & Analytics for Cross-Border Money Transfer',
            industry: 'Accounting & Finance',
            technology: 'Zoho CRM, Zoho Analytics, Application Integration',
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            category: 'fintech'
        },
        {
            id: 26,
            logo: 'Insurance & Mortgage Brokerage',
            brand: 'CRM & SUPPORT AUTOMATION',
            title: 'Insurance & Mortgage Lead Management Automation',
            industry: 'Enterprise CRM',
            technology: 'Zoho CRM, Zoho Desk, Zoho Forms',
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            category: 'crm'
        },
        {
            id: 27,
            logo: 'Financial Services Company',
            brand: 'FINANCE WORKFLOW AUTOMATION',
            title: 'Order-to-Cash Finance Automation',
            industry: 'Finance Automation',
            technology: 'Zoho CRM, Zoho Books',
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            category: 'finance'
        },
        {
            id: 28,
            logo: 'ZiMoney',
            brand: 'FINANCE AUTOMATION',
            title: 'Fintech CRM, Compliance & Analytics Transformation',
            industry: 'Accounting & Finance',
            technology: 'Zoho CRM, Zoho Desk, Zoho Analytics, API & Webhooks',
            image: "/case study/zi-money.jpg",
            category: 'fintech'
        },
        {
            id: 29,
            logo: "Amnie's Project",
            brand: 'OPERATIONS AUTOMATION',
            title: 'Automated Lead-to-Freelancer Assignment & Portal Management System',
            industry: 'Business Consulting',
            technology: 'Zoho CRM, Zoho Creator, Custom CRM Widget, APIs',
            image: "/case study/Amnie Project .jpg",
            category: 'operations'
        },
        {
            id: 30,
            logo: 'VEHK Axle',
            brand: 'ENTERPRISE AUTOMATION',
            title: 'Smart Franchise & Operations Management System',
            industry: 'Automobile',
            technology: 'Zoho One, Custom CRM Widget, Zoho Analytics',
            image: "/case study/VEHK Axle .jpg",
            category: 'enterprise'
        },
        {
            id: 31,
            logo: 'SHIFT Program',
            brand: 'TRAINING & EDUCATION AUTOMATION',
            title: 'End-to-End Client Journey Automation',
            industry: 'Training & Education',
            technology: 'CRM Automation, WhatsApp Automation, Payment Systems',
            image: "/case study/shift program.jpg",
            category: 'training'
        },
        {
            id: 32,
            logo: 'BlueTerra',
            brand: 'AI & LEAD AUTOMATION',
            title: 'AI-Enabled Franchise Lead Management Platform',
            industry: 'Retail & Multi-Store',
            technology: 'Zoho CRM, AI Lead Scoring, Custom Website Widget',
            image: "/case study/blueterra.jpg",
            category: 'retail'
        },
        {
            id: 33,
            logo: 'Saintly Trends',
            brand: 'ECOMMERCE AUTOMATION',
            title: 'Shopify–Zoho One Commerce Automation',
            industry: 'E‑Commerce',
            technology: 'Shopify, Zoho One, Shiprocket, WhatsApp API',
            image: "/case study/Saintly Trends .jpg",
            category: 'ecommerce'
        },
        {
            id: 34,
            logo: 'Creative Automation Dubai',
            brand: 'ADVERTISING & ERP',
            title: 'Unified Business Automation Platform',
            industry: 'Advertising & ERP',
            technology: 'Zoho Creator, Zoho CRM, Zoho Books, Zoho People',
            image: "/case study/Creative Automation Dubai .jpg",
            category: 'advertising'
        }
    ];

    const technologies = ['All Technologies', 'Zoho CRM', 'Zoho Books', 'Zoho Creator', 'Zoho Desk', 'Zoho Recruit', 'Zoho Meeting', 'Zoho Bookings', 'Zoho Campaigns', 'Zoho Marketing', 'Zoho Analytics', 'Zoho Billing', 'Zoho Projects', 'Shopify', 'SPF', 'DKIM', 'Zoho Inventory', 'AI Chatbot', 'Custom Widgets', 'Application Integration', 'Zoho Forms'];
    const industries = ['All Industries', 'Finance Automation', 'Service & Training', 'Accounting & Finance', 'Retail & Multi‑Store', 'Email Infrastructure', 'Training & Education', 'Advertising & ERP', 'Travel & Tourism', 'Customer Support', 'Business Consulting', 'Recruitment', 'Enterprise CRM', 'E‑Commerce', 'Consulting & Support', 'Healthcare', 'Automobile', 'Interior Design', 'Digital Marketing'];

    const filteredStudies = caseStudies.filter(study => {
        const techMatch = selectedTechnology === 'All Technologies' || study.technology.includes(selectedTechnology);
        const industryMatch = selectedIndustry === 'All Industries' || study.industry.toLowerCase().includes(selectedIndustry.toLowerCase());
        const searchMatch = searchQuery === '' || study.title.toLowerCase().includes(searchQuery.toLowerCase()) || study.industry.toLowerCase().includes(searchQuery.toLowerCase());
        return techMatch && industryMatch && searchMatch;
    });

    return (
        <section id="case-studies" className="case-studies">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Case Study</h2>
                    <p className="section-description">
                        Explore our case studies to see how we put our industry-focused IT solutions into practice.
                    </p>
                </div>

                {/* Filters Section */}
                <div className="case-studies-filters">
                    <div className="filter-group">
                        <select 
                            className="filter-dropdown"
                            value={selectedTechnology}
                            onChange={(e) => setSelectedTechnology(e.target.value)}
                        >
                            {technologies.map((tech, index) => (
                                <option key={index} value={tech}>{tech}</option>
                            ))}
                        </select>
                    </div>
                    <div className="filter-or">OR</div>
                    <div className="filter-group">
                        <select 
                            className="filter-dropdown"
                            value={selectedIndustry}
                            onChange={(e) => setSelectedIndustry(e.target.value)}
                        >
                            {industries.map((industry, index) => (
                                <option key={index} value={industry}>{industry}</option>
                            ))}
                        </select>
                    </div>
                    <div className="filter-or">OR</div>
                    <div className="filter-search">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                        </svg>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="case-studies-grid">
                    {filteredStudies.map((study, index) => {
                        const caseStudyRoutes = {
                            1: '/case-studies/paus-project',
                            2: '/case-studies/clever-cafe',
                            3: '/case-studies/hopkins-cpa-firm',
                            4: '/case-studies/sri-project',
                            5: '/case-studies/dtc-customization',
                            6: '/case-studies/transforme-project',
                            7: '/case-studies/infinity-advertising',
                            8: '/case-studies/world-vegan-travel',
                            9: '/case-studies/wilfredo-labroda',
                            10: '/case-studies/tim-noye',
                            11: '/case-studies/tim-hopper',
                            12: '/case-studies/client-lifecycle',
                            13: '/case-studies/rachel-chapman',
                            14: '/case-studies/patrick-koelle',
                            15: '/case-studies/kano-medical',
                            16: '/case-studies/cc-limited',
                            17: '/case-studies/talencity',
                            18: '/case-studies/mywork',
                            19: '/case-studies/matter-mind-decor',
                            20: '/case-studies/la-petite-foret',
                            21: '/case-studies/sonder-digital',
                            22: '/case-studies/freelancer-management',
                            23: '/case-studies/shopify-zoho-erp',
                            24: '/case-studies/ai-travel-sales',
                            25: '/case-studies/cross-border-money-transfer',
                            26: '/case-studies/insurance-mortgage-lead',
                            27: '/case-studies/order-to-cash-finance',
                            28: '/case-studies/zimoney-fintech',
                            29: '/case-studies/amnie-project',
                            30: '/case-studies/vehk-axle',
                            31: '/case-studies/shift-program',
                            32: '/case-studies/blueterra',
                            33: '/case-studies/saintly-trends',
                            34: '/case-studies/creative-automation-dubai'
                        };
                        const route = caseStudyRoutes[study.id] || '/case-studies';
                        
                        return (
                            <Link 
                                key={study.id} 
                                to={route}
                                className="case-study-card-link"
                            >
                                <div className="case-study-card">
                                    <div className="case-study-image-wrapper">
                                        <img 
                                            src={study.image} 
                                            alt={study.title}
                                            className="case-study-image"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="case-study-content">
                                        <div className="case-study-brand">
                                            <div className="case-study-logo">{study.logo}</div>
                                            {study.brand && <div className="case-study-brand-text">{study.brand}</div>}
                                        </div>
                                        <h3 className="case-study-title">{study.title}</h3>
                                        <div className="case-study-details">
                                            <div className="case-study-detail-item">
                                                <span className="detail-label">Industry:</span>
                                                <span className="detail-value">{study.industry}</span>
                                            </div>
                                            <div className="case-study-detail-item">
                                                <span className="detail-label">Technology:</span>
                                                <span className="detail-value">{study.technology}</span>
                                            </div>
                                        </div>
                                        <div className="case-study-view-more">
                                            View Case Study →
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
