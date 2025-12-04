import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const AdobeCommerceDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Adobe Commerce Development"
                subtitle="Magento Commerce"
                description="Enterprise-grade e-commerce solutions with Adobe Commerce (formerly Magento Commerce). Scale your business with powerful features."
                overview="Adobe Commerce is the enterprise version of Magento, offering advanced features for large-scale businesses. Our Adobe Commerce development services help you leverage powerful B2B features, advanced analytics, and enterprise-grade capabilities to drive growth and efficiency."
                stats={[
                    { number: "30+", label: "Enterprise Projects" },
                    { number: "500+", label: "B2B Features" },
                    { number: "24/7", label: "Enterprise Support" }
                ]}
                features={[
                    {
                        title: "B2B Commerce Features",
                        description: "Advanced B2B features including company accounts, quote management, and custom pricing."
                    },
                    {
                        title: "Advanced Analytics",
                        description: "Built-in analytics and reporting tools for data-driven decision making."
                    },
                    {
                        title: "Content Staging",
                        description: "Schedule content updates and promotions without developer intervention."
                    },
                    {
                        title: "Customer Segmentation",
                        description: "Advanced customer segmentation and targeted marketing capabilities."
                    },
                    {
                        title: "Page Builder",
                        description: "Drag-and-drop page builder for easy content management."
                    },
                    {
                        title: "Enterprise Support",
                        description: "Dedicated support and SLAs for enterprise customers."
                    }
                ]}
                benefits={[
                    "Enterprise-grade features and capabilities",
                    "Advanced B2B commerce functionality",
                    "Scalable architecture for growth",
                    "Enhanced security and compliance",
                    "Dedicated enterprise support",
                    "Advanced analytics and insights",
                    "Future-proof platform"
                ]}
                technologies={[
                    "Adobe Commerce", "Magento Commerce", "B2B Module", "Page Builder", "Advanced Analytics", "PHP", "MySQL"
                ]}
                process={[
                    {
                        title: "Requirements Analysis",
                        description: "Deep dive into your business requirements, workflows, and enterprise needs."
                    },
                    {
                        title: "Architecture Design",
                        description: "Design scalable architecture that supports your current and future needs."
                    },
                    {
                        title: "B2B Configuration",
                        description: "Configure B2B features including company accounts, quotes, and custom pricing."
                    },
                    {
                        title: "Custom Development",
                        description: "Develop custom features and integrations specific to your business."
                    },
                    {
                        title: "Testing & QA",
                        description: "Comprehensive testing including load testing and security audits."
                    },
                    {
                        title: "Deployment & Training",
                        description: "Deploy your solution and provide training to your team."
                    }
                ]}
                relatedServices={[
                    { title: "Magento Development", path: "/services/magento-development", description: "Custom Magento solutions" },
                    { title: "Magento Enterprise", path: "/services/magento-enterprise", description: "Enterprise features" },
                    { title: "Magento Support Plan", path: "/services/magento-support-plan", description: "Ongoing support" }
                ]}
            />
            <CTA />
        </>
    );
};

export default AdobeCommerceDevelopment;

