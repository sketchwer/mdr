import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const EcommerceDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="E-Commerce Development"
                subtitle="E-Commerce Solution"
                description="Transform your online presence with enterprise e-commerce solutions powered by AI. Custom development, platform migration, and secure integrations."
                overview="Our comprehensive e-commerce development services help businesses create powerful online stores that drive sales and growth. With 19+ years of experience and 6200+ successful projects, we deliver custom e-commerce solutions that are scalable, secure, and optimized for conversions."
                stats={[
                    { number: "200+", label: "E-Commerce Stores" },
                    { number: "100+", label: "E-Commerce Websites" },
                    { number: "19+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Custom E-Commerce Development",
                        description: "Tailored e-commerce solutions built from scratch to meet your unique requirements."
                    },
                    {
                        title: "Platform Migration",
                        description: "Seamless migration between e-commerce platforms with zero data loss."
                    },
                    {
                        title: "Mobile-First Design",
                        description: "Responsive designs optimized for mobile devices and tablets."
                    },
                    {
                        title: "Payment Integration",
                        description: "Secure integration with multiple payment gateways and methods."
                    },
                    {
                        title: "Third-Party Integrations",
                        description: "Integrate with ERP, CRM, shipping, and other business systems."
                    },
                    {
                        title: "AI-Powered Features",
                        description: "Leverage AI for personalized experiences and recommendations."
                    }
                ]}
                benefits={[
                    "Custom solutions for your business",
                    "Scalable architecture",
                    "Secure and PCI compliant",
                    "Mobile-optimized",
                    "Fast and performant",
                    "Expert development team",
                    "Proven track record"
                ]}
                technologies={[
                    "Magento", "Shopify", "WooCommerce", "BigCommerce", "Custom Platforms", "PHP", "Node.js", "React", "Vue.js"
                ]}
                process={[
                    {
                        title: "Discovery & Strategy",
                        description: "Understand your business goals and create a comprehensive e-commerce strategy."
                    },
                    {
                        title: "Design & UX",
                        description: "Design user-friendly interfaces that drive conversions."
                    },
                    {
                        title: "Development",
                        description: "Build your e-commerce store with custom features and integrations."
                    },
                    {
                        title: "Integration & Testing",
                        description: "Integrate all systems and thoroughly test functionality."
                    },
                    {
                        title: "Launch & Optimization",
                        description: "Launch your store and continuously optimize for better performance."
                    },
                    {
                        title: "Support & Maintenance",
                        description: "Ongoing support and maintenance to keep your store running smoothly."
                    }
                ]}
                relatedServices={[
                    { title: "Magento Development", path: "/services/magento-development", description: "Magento solutions" },
                    { title: "Shopify Development", path: "/services/shopify-development", description: "Shopify stores" },
                    { title: "WooCommerce Development", path: "/services/woocommerce-development", description: "WooCommerce stores" }
                ]}
            />
            <CTA />
        </>
    );
};

export default EcommerceDevelopment;

