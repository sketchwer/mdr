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
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'finance'
        },
        {
            id: 2,
            logo: 'Clever Café',
            brand: 'SERVICE & TRAINING',
            title: 'Unified meetings, bookings & CRM updates',
            industry: 'Service & Training',
            technology: 'Zoho CRM, Zoho Meeting, Zoho Bookings',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'service'
        },
        {
            id: 3,
            logo: 'Hopkins C.P.A Firm',
            brand: 'ACCOUNTING & FINANCE',
            title: 'Automated document signing to subscription billing',
            industry: 'Accounting & Finance',
            technology: 'Zoho CRM, Zoho Billing',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'accounting'
        },
        {
            id: 4,
            logo: 'Sri Project',
            brand: 'RETAIL & MULTI‑STORE',
            title: 'Automated onboarding and billing workflows',
            industry: 'Retail & Multi‑Store',
            technology: 'Zoho CRM, Zoho Books',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'retail'
        },
        {
            id: 5,
            logo: 'DTC Customization',
            brand: 'EMAIL INFRASTRUCTURE',
            title: 'Implemented secure email authentication',
            industry: 'Email Infrastructure',
            technology: 'SPF, DKIM',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'email'
        },
        {
            id: 6,
            logo: 'TransForme Project',
            brand: 'TRAINING & EDUCATION',
            title: 'Automated facilitator and overdue task tracking',
            industry: 'Training & Education',
            technology: 'Zoho Projects, Zoho Creator',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'training'
        },
        {
            id: 7,
            logo: 'Infinity Advertising',
            brand: 'ADVERTISING & ERP',
            title: 'Built a complete Zoho‑based ERP ecosystem',
            industry: 'Advertising & ERP',
            technology: 'Zoho Creator, CRM, Books',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'advertising'
        },
        {
            id: 8,
            logo: 'World Vegan Travel',
            brand: 'TRAVEL & TOURISM',
            title: 'Automated bookings, reminders & payment flows',
            industry: 'Travel & Tourism',
            technology: 'Zoho CRM, Zoho Campaigns',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'travel'
        },
        {
            id: 9,
            logo: 'Wilfredo Labroda',
            brand: 'CUSTOMER SUPPORT',
            title: 'Optimized Desk workflows & reporting',
            industry: 'Customer Support',
            technology: 'Zoho Desk, Zoho Analytics',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'support'
        },
        {
            id: 10,
            logo: 'Tim Noye',
            brand: 'BUSINESS CONSULTING',
            title: 'Connected meetings, campaigns & calendar sync',
            industry: 'Business Consulting',
            technology: 'Zoho Meeting, CRM',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'consulting'
        },
        {
            id: 11,
            logo: 'Tim Hopper',
            brand: 'RECRUITMENT',
            title: 'Delivered full recruitment analytics automation',
            industry: 'Recruitment',
            technology: 'Zoho Recruit',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'recruitment'
        },
        {
            id: 12,
            logo: 'Client Lifecycle',
            brand: 'ENTERPRISE CRM',
            title: 'Automated complete lead‑to‑post‑sale cycle',
            industry: 'Accounting',
            technology: 'Zoho CRM, Books, Desk',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'enterprise'
        },
        {
            id: 13,
            logo: 'Rachel Chapman',
            brand: 'E‑COMMERCE',
            title: 'Enabled real‑time Shopify to CRM sync',
            industry: 'E‑Commerce',
            technology: 'Shopify, Zoho CRM',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'ecommerce'
        },
        {
            id: 14,
            logo: 'Patrick Koelle',
            brand: 'CONSULTING & SUPPORT',
            title: 'Unified CRM, Desk & Books workflows',
            industry: 'Consulting & Support',
            technology: 'Zoho Desk, CRM, Books',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'consulting'
        },
        {
            id: 15,
            logo: 'KANO Medical',
            brand: 'HEALTHCARE',
            title: 'Implemented CRM & marketing automation',
            industry: 'Healthcare',
            technology: 'Zoho CRM, Zoho Marketing',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'healthcare'
        },
        {
            id: 16,
            logo: 'CC Limited',
            brand: 'AUTOMOBILE',
            title: 'Structured pipeline for spare parts sales',
            industry: 'Automobile',
            technology: 'Zoho CRM',
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'automobile'
        },
        {
            id: 17,
            logo: 'Talencity Inc.',
            brand: 'RECRUITMENT',
            title: 'Cleaned & optimized recruitment operations',
            industry: 'Recruitment',
            technology: 'Zoho Recruit, Zoho CRM',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'recruitment'
        },
        {
            id: 18,
            logo: 'MyWork',
            brand: 'RECRUITMENT',
            title: 'Automated candidate communication & filters',
            industry: 'Recruitment',
            technology: 'Zoho Recruit',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'recruitment'
        },
        {
            id: 19,
            logo: 'Matter Mind Decor',
            brand: 'INTERIOR DESIGN',
            title: 'Automated post‑sale workflows & billing sync',
            industry: 'Interior Design',
            technology: 'Zoho CRM, Books',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'design'
        },
        {
            id: 20,
            logo: 'La Petite Forêt',
            brand: 'RECRUITMENT',
            title: 'Automated formatted CV generation',
            industry: 'Recruitment',
            technology: 'Zoho Recruit',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'recruitment'
        },
        {
            id: 21,
            logo: 'Sonder Digital',
            brand: 'DIGITAL MARKETING',
            title: 'Integrated CRM with marketing automation',
            industry: 'Digital Marketing',
            technology: 'Zoho CRM, Zoho Marketing',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'marketing'
        }
    ];

    const technologies = ['All Technologies', 'Zoho CRM', 'Zoho Books', 'Zoho Creator', 'Zoho Desk', 'Zoho Recruit', 'Zoho Meeting', 'Zoho Bookings', 'Zoho Campaigns', 'Zoho Marketing', 'Zoho Analytics', 'Zoho Billing', 'Zoho Projects', 'Shopify', 'SPF', 'DKIM'];
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
                            21: '/case-studies/sonder-digital'
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
