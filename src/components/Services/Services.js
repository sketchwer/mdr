import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: 'WP',
            title: 'WordPress',
            description: 'Top-rated WordPress development company with 18+ years of experience delivering 650+ successful projects.',
            stat: '300+',
            statLabel: 'WordPress Websites'
        },
        {
            icon: 'MG',
            title: 'Magento',
            description: 'AI-enhanced Magento Development Services that solve real-time issues such as slow site speed and integration failures.',
            stat: '250+',
            statLabel: 'Magento Stores'
        },
        {
            icon: 'SH',
            title: 'Shopify',
            description: 'Top Shopify development company offering proven Shopify store development services. We build stores that sell.',
            stat: '20+',
            statLabel: 'Shopify Stores'
        },
        {
            icon: 'LV',
            title: 'Laravel',
            description: 'Cutting edge Laravel development services for your business needs will help you scale new heights.',
            stat: '15+',
            statLabel: 'Laravel Applications'
        },
        {
            icon: 'WC',
            title: 'WooCommerce',
            description: 'We engineer powerful, AI-enhanced, high-converting online stores that dominate your industry.',
            stat: '25+',
            statLabel: 'WooCommerce Stores'
        },
        {
            icon: 'ZH',
            title: 'Zoho Development',
            description: 'We specialize in Zoho development services that streamline scattered systems into one smooth ecosystem.',
            stat: '10+',
            statLabel: 'Zoho Projects'
        },
        {
            icon: 'EC',
            title: 'Ecommerce Development',
            description: 'Transform your online presence with enterprise ecommerce solutions powered by AI.',
            stat: '200+',
            statLabel: 'Ecommerce Stores'
        },
        {
            icon: 'BC',
            title: 'BigCommerce',
            description: 'BigCommerce development services come with easy customization and functionality.',
            stat: '5+',
            statLabel: 'BigCommerce Sites'
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Our Expertise</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-stat">
                                <span className="stat-number">{service.stat}</span>
                                <span className="stat-text">{service.statLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
