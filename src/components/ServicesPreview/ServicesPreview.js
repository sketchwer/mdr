import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPreview.css';

const ServicesPreview = () => {
    const services = [
        {
            icon: 'WP',
            title: 'WordPress',
            description: 'Elsner is a top-rated WordPress development company with 18+ years of experience delivering 650+ successful projects. We specialize in custom WordPress websites, plugins, WooCommerce stores, and enterprise-grade solutions designed to scale your business.',
            stat: '300+',
            statLabel: 'WordPress Websites',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
        },
        {
            icon: 'MG',
            title: 'Magento',
            description: 'We offer AI-enhanced Magento Development Services that solve real-time issues such as slow site speed, integration failures, checkout errors, and security concerns. Our solutions ensure a stable, optimized, and intelligently scalable store!',
            stat: '250+',
            statLabel: 'Magento ecommerce store',
            statSub: '50+ certified Developers',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)'
        },
        {
            icon: 'SH',
            title: 'Shopify',
            description: 'Elsner is a top Shopify development company and so, we always offer proven Shopify store development services. We actually build stores that sell.',
            stat: '10+ Certified',
            statLabel: 'Certified Shopify Developers',
            statSub: '20+ Shopify stores',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
        },
        {
            icon: 'LV',
            title: 'Laravel',
            description: 'Cutting edge Laravel development services for your business needs will help you to scale new heights in your business.',
            stat: '15+',
            statLabel: 'Laravel Applications',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
        },
        {
            icon: 'WC',
            title: 'WooCommerce Development',
            description: 'Want a WooCommerce store that\'s not just "good" but unstoppable? At Elsner Technologies, we don\'t just build WooCommerce websites — we engineer powerful, AI-enhanced, high-converting online stores that dominate your industry.',
            stat: '25+',
            statLabel: 'WooCommerce ecommerce store',
            statSub: '25+ WooCommerce stores',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
            gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
        },
        {
            icon: 'ZH',
            title: 'Zoho Development',
            description: 'Your workflows should make your business more efficient — not slow it down. At Elsner, we specialize in Zoho development services that streamline scattered systems into one smooth, productive ecosystem.',
            stat: '10+',
            statLabel: 'Zoho Integrations and Projects',
            statSub: '10+ Zoho Integrations and Projects',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)'
        },
        {
            icon: 'EC',
            title: 'Ecommerce Development',
            description: 'Transform your online presence with enterprise ecommerce solutions powered by AI. Custom development, seamless platform migration, mobile-first design, and secure payment integration – all backed by 19+ years of proven expertise.',
            stat: '200+',
            statLabel: 'Ecommerce Store',
            statSub: '100+ Ecommerce Websites',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
        },
        {
            icon: 'BC',
            title: 'BigCommerce Development',
            description: 'Are you planning to take your store online in a cost-effective way and earn more? BigCommerce development services can be a hassle-free option to start, as they come with easy customization and functionality.',
            stat: '5+',
            statLabel: 'BigCommerce Store',
            statSub: '5+ BigCommerce sites',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
        },
        {
            icon: 'PC',
            title: 'Pimcore Development',
            description: 'Looking for smarter ways to manage and utilize your business data? As a leading Pimcore development company, we help organizations streamline complex information and turn it into actionable insights.',
            stat: '10+',
            statLabel: 'Pimcore digital solutions',
            statSub: '10+ Pimcore digital solutions',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
        }
    ];

    return (
        <section className="services-preview">
            <div className="floating-bubbles">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={`bubble-${i}`} 
                        className="bubble" 
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${15 + Math.random() * 25}px`,
                            height: `${15 + Math.random() * 25}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${20 + Math.random() * 10}s`
                        }}
                    ></div>
                ))}
            </div>
            <div className="floating-dots">
                {[...Array(30)].map((_, i) => (
                    <div 
                        key={`dot-${i}`} 
                        className="dot" 
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${10 + Math.random() * 8}s`
                        }}
                    ></div>
                ))}
            </div>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Expertise</h2>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-image-wrapper" style={{ backgroundImage: `url(${service.image})` }}>
                                <div className="service-image-overlay"></div>
                            </div>
                            <div className="service-content-wrapper">
                                <div className="service-header">
                                    <div className="service-icon" style={{ background: service.gradient }}>{service.icon}</div>
                                    <h3>{service.title}</h3>
                                </div>
                                <p className="service-description">{service.description}</p>
                                <div className="service-stats">
                                    <div className="service-stat">
                                        <span className="stat-number">{service.stat}</span>
                                        <span className="stat-text">{service.statLabel}</span>
                                    </div>
                                    {service.statSub && (
                                        <div className="service-stat-sub">{service.statSub}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-footer">
                    <Link to="/services" className="btn-view-all">
                        View All Services
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
