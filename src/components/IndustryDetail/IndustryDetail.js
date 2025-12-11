import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';
import CTA from '../CTA/CTA';
import './IndustryDetail.css';

const IndustryDetail = ({
    title,
    subtitle,
    description,
    bannerImages = [],
    services = [],
    solutions = [],
    stats = [],
    apiIntegrations = [],
    process = [],
    faqs = [],
    technologies = []
}) => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    return (
        <div className="industry-detail">
            {/* Hero Section */}
            <section className="industry-hero">
                <div className="container">
                    <div className="industry-hero-content">
                        <span className="breadcrumb">
                            <Link to="/">Home</Link> / <Link to="/industries">Industries</Link> / {title}
                        </span>
                        <h1 className="industry-hero-title">{title}</h1>
                        <p className="industry-hero-description">{description}</p>
                    </div>
                </div>
                
                {/* Banner Images Carousel */}
                {bannerImages.length > 0 && (
                    <div className="industry-banner-carousel">
                        <div className="banner-images-container">
                            {bannerImages.map((img, index) => (
                                <div 
                                    key={index} 
                                    className={`banner-image-slide ${index === currentBannerIndex ? 'active' : ''}`}
                                >
                                    <img src={img} alt={`${title} ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        {bannerImages.length > 1 && (
                            <div className="banner-dots">
                                {bannerImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`banner-dot ${index === currentBannerIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentBannerIndex(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </section>

            {/* Stats Section */}
            {stats.length > 0 && (
                <section className="industry-stats">
                    <div className="container">
                        <div className="stats-grid-industry">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item-industry">
                                    <div className="stat-number-industry">{stat.number}</div>
                                    <div className="stat-label-industry">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            {/* Main Solutions Section */}
            <section className="industry-solutions-main">
                <div className="container">
                    <h2 className="section-title-main">{subtitle || `Cutting-Edge Solutions for ${title}`}</h2>
                    <p className="section-description-main">
                        At Elsner, we specialize in pioneering software solutions tailored for the challenges of {title} development. Our dedicated team of expert developers and senior project managers collaborates closely with clients to grasp their goals, ensuring the creation of robust, efficient, and secure solutions.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            {services.length > 0 && (
                <section className="industry-services-grid">
                    <div className="container">
                        <h2 className="section-title-main">Custom {title} Solutions</h2>
                        <p className="section-description-main">
                            Robust yet agile digital solutions that give you a competitive advantage in an ever-changing & complex {title.toLowerCase()} industry.
                        </p>
                        <div className="services-grid-detailed-industry">
                            {services.map((service, index) => (
                                <div key={index} className="service-card-industry">
                                    <div className="service-icon-industry">
                                        {service.icon || (
                                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                                <path d="M9 9h6v6H9z"/>
                                            </svg>
                                        )}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    {service.examples && (
                                        <div className="service-examples">
                                            <span className="examples-label">Examples:</span>
                                            <span className="examples-text">{service.examples}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Solutions Section */}
            {solutions.length > 0 && (
                <section className="industry-solutions-detailed">
                    <div className="container">
                        <h2 className="section-title-main">Empowering {title} Institutions with Cutting-Edge Digital Solutions</h2>
                        <p className="section-subtitle-main">Your Path to {title} Prosperity</p>
                        <div className="solutions-list-industry">
                            {solutions.map((solution, index) => (
                                <div key={index} className="solution-item-industry">
                                    <div className="solution-icon-industry">
                                        {solution.icon || (
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                                <polyline points="22 4 12 14.01 9 11.01"/>
                                            </svg>
                                        )}
                                    </div>
                                    <div className="solution-content-industry">
                                        <h3>{solution.title}</h3>
                                        {solution.features && (
                                            <ul className="solution-features">
                                                {solution.features.map((feature, fIndex) => (
                                                    <li key={fIndex}>{feature}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {solution.description && (
                                            <p>{solution.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* API Integrations */}
            {apiIntegrations.length > 0 && (
                <section className="industry-api-integrations">
                    <div className="container">
                        <h2 className="section-title-main">Major {title} API Integrations by Our Experts</h2>
                        <p className="section-description-main">
                            Using the latest technology trends with Elsner experts!
                        </p>
                        <div className="api-grid">
                            {apiIntegrations.map((api, index) => (
                                <div key={index} className="api-card">
                                    <div className="api-icon">
                                        {api.icon || (
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                                <path d="M2 17l10 5 10-5"/>
                                                <path d="M2 12l10 5 10-5"/>
                                            </svg>
                                        )}
                                    </div>
                                    <h3>{api.title}</h3>
                                    {api.features && (
                                        <ul className="api-features">
                                            {api.features.map((feature, fIndex) => (
                                                <li key={fIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Development Process */}
            {process.length > 0 && (
                <section className="industry-process">
                    <div className="container">
                        <h2 className="section-title-main">Our Agile Development Process</h2>
                        <p className="section-description-main">
                            Companies employ developers from us because we have a proven track record of delivering high-quality projects on time.
                        </p>
                        <div className="process-steps-industry">
                            {process.map((step, index) => (
                                <div key={index} className="process-step-industry">
                                    <div className="process-number-industry">{index + 1}</div>
                                    <div className="process-content-industry">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                        {step.items && (
                                            <ul className="process-items">
                                                {step.items.map((item, iIndex) => (
                                                    <li key={iIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Technologies */}
            {technologies.length > 0 && (
                <section className="industry-technologies">
                    <div className="container">
                        <h2 className="section-title-main">Technologies We Use</h2>
                        <div className="technologies-grid-industry">
                            {technologies.map((tech, index) => (
                                <div key={index} className="tech-badge-industry">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section className="industry-faq">
                    <div className="container">
                        <h2 className="section-title-main">We're here to answer all your questions.</h2>
                        <div className="faq-list-industry">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item-industry">
                                    <h3 className="faq-question-industry">{faq.question}</h3>
                                    <p className="faq-answer-industry">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTA />
        </div>
    );
};

export default IndustryDetail;

