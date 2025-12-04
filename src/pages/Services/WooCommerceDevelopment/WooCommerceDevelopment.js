import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const WooCommerceDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="WooCommerce Development"
                subtitle="E-Commerce Solution"
                description="Powerful WooCommerce stores that dominate your industry. AI-enhanced, high-converting online stores built on WordPress."
                overview="WooCommerce is the most popular e-commerce plugin for WordPress, powering millions of online stores. Our WooCommerce development services help you create powerful, feature-rich stores that convert visitors into customers. We build stores that are fast, secure, and optimized for sales."
                stats={[
                    { number: "25+", label: "WooCommerce Stores" },
                    { number: "300+", label: "WordPress Websites" },
                    { number: "18+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Custom Store Development",
                        description: "Custom WooCommerce stores tailored to your business needs and brand."
                    },
                    {
                        title: "Plugin Development",
                        description: "Custom WooCommerce plugins for unique functionality and features."
                    },
                    {
                        title: "Theme Integration",
                        description: "Integrate WooCommerce with custom WordPress themes."
                    },
                    {
                        title: "Payment Integration",
                        description: "Integrate multiple payment gateways including Stripe, PayPal, and more."
                    },
                    {
                        title: "Product Management",
                        description: "Advanced product management with variations, attributes, and inventory."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Optimize your store for speed and performance."
                    }
                ]}
                benefits={[
                    "Flexible and customizable",
                    "Cost-effective solution",
                    "SEO-friendly platform",
                    "Extensive plugin ecosystem",
                    "Full control over your store",
                    "Scalable for growth",
                    "Expert WordPress/WooCommerce developers"
                ]}
                technologies={[
                    "WooCommerce", "WordPress", "PHP", "MySQL", "JavaScript", "REST API", "WooCommerce Hooks"
                ]}
                process={[
                    {
                        title: "Requirements Gathering",
                        description: "Understand your business needs and e-commerce requirements."
                    },
                    {
                        title: "Store Architecture",
                        description: "Design store structure, product organization, and user flows."
                    },
                    {
                        title: "Development & Customization",
                        description: "Develop and customize your WooCommerce store with required features."
                    },
                    {
                        title: "Integration & Setup",
                        description: "Integrate payment gateways, shipping methods, and third-party services."
                    },
                    {
                        title: "Testing & Optimization",
                        description: "Test all functionality and optimize for performance."
                    },
                    {
                        title: "Launch & Training",
                        description: "Launch your store and train your team on managing it."
                    }
                ]}
                relatedServices={[
                    { title: "WordPress Development", path: "/services/wordpress-development", description: "WordPress solutions" },
                    { title: "Shopify Development", path: "/services/shopify-development", description: "Shopify stores" },
                    { title: "E-Commerce Development", path: "/services/ecommerce-development", description: "Custom e-commerce" }
                ]}
            />
            <CTA />
        </>
    );
};

export default WooCommerceDevelopment;

