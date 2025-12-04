import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ShoplineDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Shopline Development"
                subtitle="E-Commerce Solution"
                description="Professional Shopline stores for your online business. Expert Shopline development services tailored to your needs."
                overview="Shopline is a popular e-commerce platform, especially in Asian markets. Our Shopline development services help you create professional online stores with beautiful designs and powerful features. We build stores that are optimized for conversions and user experience."
                stats={[
                    { number: "10+", label: "Shopline Projects" },
                    { number: "100%", label: "Mobile Optimized" },
                    { number: "95%", label: "Client Satisfaction" }
                ]}
                features={[
                    {
                        title: "Store Design & Setup",
                        description: "Beautiful store designs and complete setup tailored to your brand."
                    },
                    {
                        title: "Theme Customization",
                        description: "Customize Shopline themes to match your brand identity."
                    },
                    {
                        title: "Product Management",
                        description: "Set up and organize products with proper categorization."
                    },
                    {
                        title: "Payment Integration",
                        description: "Integrate local and international payment gateways."
                    },
                    {
                        title: "Marketing Tools",
                        description: "Set up marketing tools and campaigns for customer acquisition."
                    },
                    {
                        title: "Multi-language Support",
                        description: "Set up multi-language stores for global reach."
                    }
                ]}
                benefits={[
                    "User-friendly platform",
                    "Beautiful templates",
                    "Mobile-responsive",
                    "Marketing tools included",
                    "Multi-language support",
                    "Local payment options",
                    "Expert Shopline developers"
                ]}
                technologies={[
                    "Shopline", "HTML/CSS", "JavaScript", "Shopline API"
                ]}
                process={[
                    {
                        title: "Store Planning",
                        description: "Plan your store structure, design, and functionality."
                    },
                    {
                        title: "Design & Development",
                        description: "Design and develop your Shopline store."
                    },
                    {
                        title: "Product Setup",
                        description: "Import and organize products."
                    },
                    {
                        title: "Configuration",
                        description: "Configure payment, shipping, and other settings."
                    },
                    {
                        title: "Testing & Launch",
                        description: "Test and launch your store."
                    },
                    {
                        title: "Training & Support",
                        description: "Train your team and provide support."
                    }
                ]}
                relatedServices={[
                    { title: "Shopify Development", path: "/services/shopify-development", description: "Shopify solutions" },
                    { title: "E-Commerce Development", path: "/services/ecommerce-development", description: "Custom e-commerce" },
                    { title: "WooCommerce Development", path: "/services/woocommerce-development", description: "WooCommerce stores" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ShoplineDevelopment;

