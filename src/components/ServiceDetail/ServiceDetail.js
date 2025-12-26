import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';
import './ServiceDetail.css';

const ServiceDetail = ({ 
    title, 
    subtitle, 
    description, 
    overview, 
    features = [], 
    benefits = [], 
    technologies = [],
    process = [],
    stats = [],
    relatedServices = [],
    heroImage = null,
    featureImages = []
}) => {
    // Default images based on service type
    const getDefaultImage = (index) => {
        const defaultImages = [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        ];
        return featureImages[index] || defaultImages[index % defaultImages.length];
    };

    return (
        <div className="service-detail">
            {/* Hero Section */}
    
                <div className="container">
                    <div className="service-hero-content">
                        {/* <span className="service-badge">{subtitle}</span> */}
                        <h1 className="service-title">{title}</h1>
                        <p className="service-description">{description}</p>
                        <div className="service-hero-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Get Free Consultation
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
    

            {/* Overview Section */}
            {overview && (
                
                    <div className="container">
                        <div className="service-overview-content">
                            <h2 className="section-title">Overview</h2>
                            <div className="overview-text">
                                {overview}
                            </div>
                        </div>
                    </div>
                
            )}

            {/* Stats Section */}
            {stats.length > 0 && (
                <section className="service-stats">
                    <div className="container">
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Features Section with Images */}
            {features.length > 0 && (
                <section className="service-features">
                    <div className="container">
                        <h2 className="section-title">Key Features</h2>
                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <div className="feature-image-wrapper">
                                        <img 
                                            src={getDefaultImage(index)} 
                                            alt={feature.title}
                                            className="feature-image"
                                        />
                                    </div>
                                  <div className="feature-icon">
    {typeof feature.icon === 'string' ? (
        <img
            src={feature.icon}
            alt={feature.title}
            style={{ width: '32px', height: '32px' }}
        />
    ) : feature.icon ? (
        feature.icon
    ) : (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
    )}
</div>

                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits Section */}
            {benefits.length > 0 && (
                <section className="service-benefits">
                    <div className="container">
                        <div className="benefits-content">
                            <h2 className="section-title">Why Choose Our {title} Services?</h2>
                            <div className="benefits-grid">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="benefit-item">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Technologies Section */}
            {technologies.length > 0 && (
                <section className="service-technologies">
                    <div className="container">
                        <h2 className="section-title">Technologies We Use</h2>
                        <div className="technologies-grid">
                            {technologies.map((tech, index) => (
                                <div key={index} className="tech-badge">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Process Section */}
            {process.length > 0 && (
                <section className="service-process">
                    <div className="container">
                        <h2 className="section-title">Our Process</h2>
                        <div className="process-timeline">
                            {process.map((step, index) => (
                                <div key={index} className="process-step">
                                    <div className="process-number">{index + 1}</div>
                                    <div className="process-content">
                                        <h3 className="process-title">{step.title}</h3>
                                        <p className="process-description">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonials */}
            <Testimonials />

            {/* Related Services */}
            {relatedServices.length > 0 && (
                <section className="related-services">
                    <div className="container">
                        <h2 className="section-title">Related Services</h2>
                        <div className="related-services-grid">
                            {relatedServices.map((service, index) => (
                                <Link key={index} to={service.path} className="related-service-card">
                                    <div className="related-service-image">
                                        <img 
                                            src={getDefaultImage(index)} 
                                            alt={service.title}
                                        />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <span className="read-more">Learn More →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ServiceDetail;
