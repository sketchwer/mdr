import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const MagentoEnterprise = () => {
    return (
        <>
            <ServiceDetail
                title="Magento Enterprise"
                subtitle="Magento Commerce"
                description="Unlock the full potential of Magento Enterprise with advanced features, B2B capabilities, and enterprise-grade support."
                overview="Magento Enterprise (Adobe Commerce) provides powerful features designed for large-scale businesses. Our Magento Enterprise services help you implement and leverage advanced features like B2B commerce, content staging, customer segmentation, and more to drive business growth."
                stats={[
                    { number: "25+", label: "Enterprise Clients" },
                    { number: "1000+", label: "SKUs Managed" },
                    { number: "99.9%", label: "Uptime" }
                ]}
                features={[
                    {
                        title: "B2B Commerce Suite",
                        description: "Complete B2B solution with company accounts, quotes, and custom catalogs."
                    },
                    {
                        title: "Advanced Reporting",
                        description: "Comprehensive reporting and analytics for better business insights."
                    },
                    {
                        title: "Content Management",
                        description: "Advanced CMS and content staging for marketing teams."
                    },
                    {
                        title: "Customer Experience",
                        description: "Personalized shopping experiences with customer segmentation."
                    },
                    {
                        title: "Performance & Scalability",
                        description: "Optimized for high traffic and large product catalogs."
                    },
                    {
                        title: "Security & Compliance",
                        description: "Enterprise-grade security with PCI DSS compliance."
                    }
                ]}
                benefits={[
                    "Advanced B2B capabilities",
                    "Enterprise-grade features",
                    "Scalable for growth",
                    "Enhanced security",
                    "Better customer experience",
                    "Advanced analytics",
                    "Dedicated support"
                ]}
                technologies={[
                    "Magento Enterprise", "Adobe Commerce", "B2B Module", "Elasticsearch", "Redis", "Varnish"
                ]}
                process={[
                    {
                        title: "Enterprise Assessment",
                        description: "Evaluate your current setup and identify opportunities for Magento Enterprise features."
                    },
                    {
                        title: "Feature Implementation",
                        description: "Implement and configure enterprise features based on your requirements."
                    },
                    {
                        title: "B2B Setup",
                        description: "Configure B2B commerce features including company accounts and quotes."
                    },
                    {
                        title: "Customization",
                        description: "Customize enterprise features to match your business workflows."
                    },
                    {
                        title: "Training & Documentation",
                        description: "Train your team on using enterprise features effectively."
                    },
                    {
                        title: "Ongoing Optimization",
                        description: "Continuously optimize and enhance your enterprise setup."
                    }
                ]}
                relatedServices={[
                    { title: "Adobe Commerce Development", path: "/services/adobe-commerce-development", description: "Enterprise solutions" },
                    { title: "Magento Development", path: "/services/magento-development", description: "Custom development" },
                    { title: "Magento Support Plan", path: "/services/magento-support-plan", description: "Support services" }
                ]}
            />
            <CTA />
        </>
    );
};

export default MagentoEnterprise;

