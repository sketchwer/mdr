import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const MagentoDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Magento Development"
                subtitle="Magento Commerce"
                description="Build powerful, scalable e-commerce solutions with our expert Magento development services. We create custom stores that drive sales and growth."
                overview="Our Magento development services are designed to help businesses create robust, feature-rich e-commerce platforms. With years of experience and a team of certified Magento developers, we deliver solutions that are not just functional but also optimized for performance, security, and user experience."
                stats={[
                    { number: "250+", label: "Magento Stores" },
                    { number: "50+", label: "Certified Developers" },
                    { number: "19+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Custom Development",
                        description: "Tailored Magento solutions designed to meet your specific business requirements and goals."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Lightning-fast page load times and optimized performance for better user experience and SEO."
                    },
                    {
                        title: "Third-Party Integrations",
                        description: "Seamless integration with payment gateways, shipping providers, ERP systems, and more."
                    },
                    {
                        title: "Mobile Responsive",
                        description: "Fully responsive designs that work perfectly on all devices and screen sizes."
                    },
                    {
                        title: "Security & Compliance",
                        description: "Enterprise-grade security measures and PCI DSS compliance for safe transactions."
                    },
                    {
                        title: "Ongoing Support",
                        description: "24/7 support and maintenance services to keep your store running smoothly."
                    }
                ]}
                benefits={[
                    "Expert team of certified Magento developers",
                    "Custom solutions tailored to your business needs",
                    "Fast and optimized performance",
                    "Secure and PCI compliant",
                    "Scalable architecture for growth",
                    "Comprehensive testing and quality assurance",
                    "Timely delivery and ongoing support"
                ]}
                technologies={[
                    "Magento 2", "PHP", "MySQL", "JavaScript", "jQuery", "REST API", "GraphQL", "Redis", "Varnish", "Elasticsearch"
                ]}
                process={[
                    {
                        title: "Discovery & Planning",
                        description: "We analyze your business requirements, target audience, and goals to create a comprehensive development plan."
                    },
                    {
                        title: "Design & Architecture",
                        description: "Our team designs the store architecture and user interface that aligns with your brand and user expectations."
                    },
                    {
                        title: "Development & Integration",
                        description: "We build your Magento store with custom features and integrate all necessary third-party services."
                    },
                    {
                        title: "Testing & Quality Assurance",
                        description: "Rigorous testing ensures your store is bug-free, secure, and performs optimally across all devices."
                    },
                    {
                        title: "Deployment & Launch",
                        description: "We handle the deployment process and ensure a smooth launch with minimal downtime."
                    },
                    {
                        title: "Support & Maintenance",
                        description: "Ongoing support and maintenance to keep your store updated, secure, and performing at its best."
                    }
                ]}
                relatedServices={[
                    { title: "Magento 2 Migration", path: "/services/magento-2-migration", description: "Migrate to Magento 2 seamlessly" },
                    { title: "Magento Support Plan", path: "/services/magento-support-plan", description: "24/7 support and maintenance" },
                    { title: "Hyvä Theme Development", path: "/services/hyva-theme-development", description: "Modern frontend solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default MagentoDevelopment;

