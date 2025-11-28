import React from 'react';
import './ZohoCompetency.css';

const ZohoCompetency = () => {
    const competencies = [
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#dc2626" rx="4"/>
                    <path d="M20 25 L27 32 L40 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "WordPress",
            description: "Elsner is a top-rated WordPress development company with 18+ years of experience delivering 650+ successful projects. We specialize in custom WordPress websites, plugins, WooCommerce stores, and enterprise-grade solutions designed to scale your business."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#EC6737" rx="4"/>
                    <path d="M30 20 L25 30 L30 35 L35 30 Z" fill="white"/>
                </svg>
            ),
            title: "Magento",
            description: "We offer AI-enhanced Magento Development Services that solve real-time issues such as slow site speed, integration failures, checkout errors, and security concerns. Our solutions ensure a stable, optimized, and intelligently scalable store!"
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#95BF47" rx="4"/>
                    <path d="M30 20 L25 30 L30 40 L35 30 Z" fill="white"/>
                </svg>
            ),
            title: "Shopify",
            description: "Elsner is a top Shopify development company and so, we always offer proven Shopify store development services. We actually build stores that sell."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#FF2D20" rx="4"/>
                    <path d="M20 20 L30 25 L40 20 L30 35 Z" fill="white"/>
                </svg>
            ),
            title: "Laravel",
            description: "Cutting edge Laravel development services for your business needs will help you to scale new heights in your business."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#96588A" rx="4"/>
                    <circle cx="30" cy="30" r="12" fill="white"/>
                </svg>
            ),
            title: "WooCommerce Development",
            description: "Want a WooCommerce store that's not just 'good' but unstoppable? At Elsner Technologies, we don't just build WooCommerce websites — we engineer powerful, AI-enhanced, high-converting online stores that dominate your industry."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#dc2626" rx="4"/>
                    <path d="M25 25 L30 30 L35 25" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            ),
            title: "Zoho Development",
            description: "Your workflows should make your business more efficient — not slow it down. At Elsner, we specialize in Zoho development services that streamline scattered systems into one smooth, productive ecosystem."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#1a1a1a" rx="4"/>
                    <rect x="20" y="20" width="20" height="20" fill="#dc2626" rx="2"/>
                </svg>
            ),
            title: "Ecommerce Development",
            description: "Transform your online presence with enterprise ecommerce solutions powered by AI. Custom development, seamless platform migration, mobile-first design, and secure payment integration – all backed by 19+ years of proven expertise and 6200+ successful projects worldwide."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#121212" rx="4"/>
                    <path d="M20 25 L30 20 L40 25 L30 35 Z" fill="white"/>
                </svg>
            ),
            title: "BigCommerce Development",
            description: "Are you planning to take your store online in a cost-effective way and earn more? BigCommerce development services can be a hassle-free option to start, as they come with easy customization and functionality."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="10" width="40" height="40" fill="#1a1a1a" rx="4"/>
                    <circle cx="30" cy="30" r="10" fill="#dc2626"/>
                </svg>
            ),
            title: "Pimcore Development",
            description: "Looking for smarter ways to manage and utilize your business data? As a leading Pimcore development company, we help organizations streamline complex information and turn it into actionable insights."
        }
    ];

    return (
        <section className="zoho-competency-section">
            <div className="container">
                <div className="section-intro">
                    <h2 className="section-title">Our Expertise</h2>
                    <p className="section-subtitle">Let our expert IT brains help you with your IT challenges</p>
                </div>
                <div className="competency-grid">
                    {competencies.map((item, index) => (
                        <div key={index} className="competency-card">
                            <div className="competency-icon">{item.icon}</div>
                            <h3 className="competency-title">{item.title}</h3>
                            <p className="competency-description">{item.description}</p>
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

