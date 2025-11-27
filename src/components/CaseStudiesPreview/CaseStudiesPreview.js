import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudiesPreview.css';

const CaseStudiesPreview = () => {
    const caseStudies = [
        {
            id: 1,
            badge: 'E-Commerce',
            tags: ['Magento', 'E-Commerce'],
            title: 'Fashion E-Commerce Platform',
            description: 'Transformed a traditional retail business into a thriving online marketplace with advanced Magento solutions.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            metrics: [
                { value: '300%', label: 'Sales Increase' },
                { value: '50K+', label: 'Monthly Visitors' }
            ]
        },
        {
            id: 2,
            badge: 'Healthcare',
            tags: ['WordPress', 'Healthcare'],
            title: 'Healthcare Management System',
            description: 'Developed a comprehensive healthcare management platform with patient portals and telemedicine capabilities.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            metrics: [
                { value: '10K+', label: 'Active Users' },
                { value: '95%', label: 'Satisfaction Rate' }
            ]
        }
    ];

    return (
        <section className="case-studies-preview">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Success Stories</h2>
                    <p className="section-description">
                        Discover how we've helped businesses achieve remarkable growth through innovative technology solutions.
                    </p>
                </div>
                <div className="case-studies-grid">
                    {caseStudies.map((study, index) => (
                        <div 
                            key={study.id} 
                            className="case-study-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="case-study-image-wrapper">
                                <img 
                                    src={study.image} 
                                    alt={study.title}
                                    className="case-study-image"
                                    loading="lazy"
                                />
                                <div className="case-study-overlay"></div>
                                <div className="case-study-badge">{study.badge}</div>
                            </div>
                            <div className="case-study-content">
                                <div className="case-study-tags">
                                    {study.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <h3>{study.title}</h3>
                                <p>{study.description}</p>
                                <div className="case-study-metrics">
                                    {study.metrics.map((metric, index) => (
                                        <div key={index} className="metric">
                                            <span className="metric-value">{metric.value}</span>
                                            <span className="metric-label">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/case-studies" className="case-study-link">
                                    <span>Read Full Case Study</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-footer">
                    <Link to="/case-studies" className="btn-view-all">
                        View All Case Studies
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesPreview;

