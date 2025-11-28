import React, { useState } from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
    const [selectedTechnology, setSelectedTechnology] = useState('All Technologies');
    const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
    const [searchQuery, setSearchQuery] = useState('');

    const caseStudies = [
        {
            id: 1,
            logo: 'Lot₂₁',
            brand: 'Design for decarbonization™',
            title: 'Empowering the Design Community to Drive Climate Action',
            industry: 'Sustainability and Climate Action',
            technology: 'MySQL, WordPress',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'sustainability'
        },
        {
            id: 2,
            logo: 'Fantasy',
            brand: 'EUROVISION SONG CONTEST',
            title: 'Driving Fan Engagement Through Eurovision\'s premier Fantasy Prediction Game',
            industry: 'Fantasy Gaming',
            technology: 'WordPress',
            image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'gaming'
        },
        {
            id: 3,
            logo: 'MFABI',
            brand: 'Fulfilment Company',
            title: 'Streamlined Fulfillment Operations with Custom Zoho Solution',
            industry: 'Logistics & Fulfillment',
            technology: 'Zoho Creator, Inventory',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'logistics'
        },
        {
            id: 4,
            logo: 'Infinite',
            brand: 'UpTime Solutions',
            title: 'Field Service Management Revolutionized',
            industry: 'Field Service',
            technology: 'Zoho Creator, Field Service',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'field-service'
        },
        {
            id: 5,
            logo: 'SimpleBN',
            brand: 'Business Network',
            title: 'Advanced CRM Automation for Business Networking',
            industry: 'Business Networking',
            technology: 'Zoho CRM, Automation',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'crm'
        },
        {
            id: 6,
            logo: 'VIA',
            brand: 'Insurance Claims',
            title: 'Efficient Insurance Claims Processing System',
            industry: 'Insurance',
            technology: 'Zoho CRM, Claims',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            category: 'insurance'
        }
    ];

    const technologies = ['All Technologies', 'WordPress', 'MySQL', 'Zoho Creator', 'Zoho CRM'];
    const industries = ['All Industries', 'Sustainability', 'Gaming', 'Logistics', 'Field Service', 'Business Networking', 'Insurance'];

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
                    {filteredStudies.map((study, index) => (
                        <div 
                            key={study.id} 
                            className="case-study-card"
                        >
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
