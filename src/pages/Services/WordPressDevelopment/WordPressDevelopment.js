import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const WordPressDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="WordPress Development"
                subtitle="CMS/CRM Development"
                description="Top-rated WordPress development company with 18+ years of experience. Custom WordPress websites, plugins, and enterprise solutions."
                overview="WordPress powers over 40% of all websites on the internet. Our WordPress development services help you create powerful, custom websites that are fast, secure, and optimized for conversions. With 300+ WordPress websites delivered and 18+ years of experience, we're your trusted WordPress development partner."
                stats={[
                    { number: "300+", label: "WordPress Websites" },
                    { number: "650+", label: "Successful Projects" },
                    { number: "18+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Custom WordPress Websites",
                        description: "Custom WordPress websites designed and developed from scratch."
                    },
                    {
                        title: "Theme Development",
                        description: "Custom WordPress themes tailored to your brand and requirements."
                    },
                    {
                        title: "Plugin Development",
                        description: "Custom WordPress plugins for unique functionality and features."
                    },
                    {
                        title: "WooCommerce Development",
                        description: "E-commerce solutions using WooCommerce plugin."
                    },
                    {
                        title: "WordPress Migration",
                        description: "Migrate existing websites to WordPress or upgrade WordPress versions."
                    },
                    {
                        title: "WordPress Optimization",
                        description: "Performance optimization and security hardening for WordPress sites."
                    }
                ]}
                benefits={[
                    "User-friendly CMS",
                    "Extensive plugin ecosystem",
                    "SEO-friendly platform",
                    "Cost-effective solution",
                    "Scalable for growth",
                    "Regular updates and security",
                    "Expert WordPress developers"
                ]}
                technologies={[
                    "WordPress", "PHP", "MySQL", "JavaScript", "jQuery", "React", "WooCommerce", "REST API"
                ]}
                process={[
                    {
                        title: "Requirements Gathering",
                        description: "Understand your website requirements and business goals."
                    },
                    {
                        title: "Design & Development",
                        description: "Design and develop your WordPress website with custom features."
                    },
                    {
                        title: "Plugin & Theme Development",
                        description: "Develop custom plugins and themes as needed."
                    },
                    {
                        title: "Content Migration",
                        description: "Migrate content from existing website if applicable."
                    },
                    {
                        title: "Testing & Optimization",
                        description: "Test all functionality and optimize for performance and SEO."
                    },
                    {
                        title: "Launch & Training",
                        description: "Launch your website and train your team on WordPress."
                    }
                ]}
                relatedServices={[
                    { title: "WooCommerce Development", path: "/services/woocommerce-development", description: "E-commerce on WordPress" },
                    { title: "WordPress Support Plans", path: "/services/wordpress-support-plans", description: "WordPress maintenance" },
                    { title: "PHP Web Development", path: "/services/php-web-development", description: "PHP solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default WordPressDevelopment;

