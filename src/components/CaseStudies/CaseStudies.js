import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
    const caseStudies = [
        {
            id: 1,
            badge: 'E-Commerce',
            tags: ['Magento', 'E-Commerce'],
            title: 'Fashion E-Commerce Platform',
            description: 'Transformed a traditional retail business into a thriving online marketplace with advanced Magento solutions, resulting in 300% increase in online sales.',
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
            description: 'Developed a comprehensive healthcare management platform with patient portals, appointment scheduling, and telemedicine capabilities.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            metrics: [
                { value: '10K+', label: 'Active Users' },
                { value: '95%', label: 'Satisfaction Rate' }
            ]
        },
        {
            id: 3,
            badge: 'Education',
            tags: ['Laravel', 'LMS'],
            title: 'Learning Management System',
            description: 'Built a scalable LMS platform supporting 50,000+ students with interactive courses, assessments, and progress tracking.',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
            metrics: [
                { value: '50K+', label: 'Students' },
                { value: '500+', label: 'Courses' }
            ]
        },
        {
            id: 4,
            badge: 'FinTech',
            tags: ['React JS', 'Blockchain'],
            title: 'Financial Trading Platform',
            description: 'Created a secure, real-time trading platform with advanced analytics, portfolio management, and automated trading features.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            metrics: [
                { value: '$10M+', label: 'Trading Volume' },
                { value: '99.9%', label: 'Uptime' }
            ]
        }
    ];

    return (
        <section id="case-studies" className="case-studies">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Case Study</h2>
                    <p className="section-description">
                        Explore our case studies to see how we put our industry-focused IT solutions into practice.
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
                                <div className="case-study-hover-effect">
                                    <div className="hover-icon">📊</div>
                                </div>
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
                                <a href="/case-studies" className="case-study-link">
                                    <span>Read Full Case Study</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;

