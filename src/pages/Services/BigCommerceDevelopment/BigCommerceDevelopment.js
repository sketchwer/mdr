import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const BigCommerceDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="BigCommerce Development"
                subtitle="E-Commerce Solution"
                description="Cost-effective BigCommerce stores with easy customization. Start your online business and earn more with our BigCommerce services."
                overview="BigCommerce is a powerful, scalable e-commerce platform that's perfect for businesses of all sizes. Our BigCommerce development services help you create professional online stores with easy customization and powerful functionality. We build stores that are optimized for conversions and growth."
                stats={[
                    { number: "5+", label: "BigCommerce Stores" },
                    { number: "100%", label: "Mobile Responsive" },
                    { number: "24/7", label: "Support" }
                ]}
                features={[
                    {
                        title: "Store Setup & Configuration",
                        description: "Complete store setup with proper configuration and optimization."
                    },
                    {
                        title: "Custom Theme Development",
                        description: "Custom themes designed to match your brand and business needs."
                    },
                    {
                        title: "App Integration",
                        description: "Integrate essential BigCommerce apps for enhanced functionality."
                    },
                    {
                        title: "Payment & Shipping",
                        description: "Configure multiple payment gateways and shipping options."
                    },
                    {
                        title: "SEO Optimization",
                        description: "Optimize your store for search engines to drive organic traffic."
                    },
                    {
                        title: "Performance Tuning",
                        description: "Optimize store performance for fast loading times."
                    }
                ]}
                benefits={[
                    "Cost-effective solution",
                    "Easy to customize",
                    "Scalable platform",
                    "Built-in features",
                    "No transaction fees",
                    "Mobile-responsive",
                    "Expert BigCommerce developers"
                ]}
                technologies={[
                    "BigCommerce", "Stencil Framework", "JavaScript", "HTML/CSS", "BigCommerce API", "GraphQL"
                ]}
                process={[
                    {
                        title: "Store Planning",
                        description: "Plan your store structure, design, and functionality requirements."
                    },
                    {
                        title: "Design & Development",
                        description: "Design and develop your BigCommerce store with custom features."
                    },
                    {
                        title: "Product Import",
                        description: "Import and organize products with proper categorization."
                    },
                    {
                        title: "Configuration",
                        description: "Configure payment, shipping, taxes, and other settings."
                    },
                    {
                        title: "Testing & Launch",
                        description: "Test all functionality and launch your store."
                    },
                    {
                        title: "Training & Support",
                        description: "Train your team and provide ongoing support."
                    }
                ]}
                relatedServices={[
                    { title: "Shopify Development", path: "/services/shopify-development", description: "Shopify solutions" },
                    { title: "WooCommerce Development", path: "/services/woocommerce-development", description: "WooCommerce stores" },
                    { title: "E-Commerce Development", path: "/services/ecommerce-development", description: "Custom e-commerce" }
                ]}
            />
            <CTA />
        </>
    );
};

export default BigCommerceDevelopment;

