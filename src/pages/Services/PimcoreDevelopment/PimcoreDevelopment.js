import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const PimcoreDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="PIMCore Development"
                subtitle="E-Commerce Solution"
                description="Streamline complex business data with PIMCore. Turn information into actionable insights with our PIMCore development services."
                overview="PIMCore is a powerful open-source platform for Product Information Management (PIM), Customer Data Management (CDM), Digital Asset Management (DAM), and e-commerce. Our PIMCore development services help organizations manage complex product data and create seamless customer experiences."
                stats={[
                    { number: "10+", label: "PIMCore Projects" },
                    { number: "1000+", label: "Products Managed" },
                    { number: "5+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Product Information Management",
                        description: "Centralized management of product data across all channels."
                    },
                    {
                        title: "Digital Asset Management",
                        description: "Organize and manage all your digital assets in one place."
                    },
                    {
                        title: "Customer Data Management",
                        description: "Unified customer data management for better insights."
                    },
                    {
                        title: "E-Commerce Integration",
                        description: "Seamless integration with e-commerce platforms."
                    },
                    {
                        title: "Multi-channel Publishing",
                        description: "Publish product information across multiple channels."
                    },
                    {
                        title: "Custom Development",
                        description: "Custom PIMCore solutions tailored to your needs."
                    }
                ]}
                benefits={[
                    "Centralized data management",
                    "Improved data quality",
                    "Faster time to market",
                    "Better customer experience",
                    "Reduced errors",
                    "Scalable solution",
                    "Expert PIMCore developers"
                ]}
                technologies={[
                    "PIMCore", "PHP", "Symfony", "MySQL", "Elasticsearch", "REST API"
                ]}
                process={[
                    {
                        title: "Requirements Analysis",
                        description: "Analyze your data management needs and requirements."
                    },
                    {
                        title: "PIMCore Setup",
                        description: "Install and configure PIMCore for your organization."
                    },
                    {
                        title: "Data Migration",
                        description: "Migrate existing product and customer data to PIMCore."
                    },
                    {
                        title: "Custom Development",
                        description: "Develop custom features and integrations."
                    },
                    {
                        title: "Integration",
                        description: "Integrate with e-commerce platforms and other systems."
                    },
                    {
                        title: "Training & Support",
                        description: "Train your team and provide ongoing support."
                    }
                ]}
                relatedServices={[
                    { title: "E-Commerce Development", path: "/services/ecommerce-development", description: "E-commerce solutions" },
                    { title: "Magento Development", path: "/services/magento-development", description: "Magento stores" },
                    { title: "Shopify Development", path: "/services/shopify-development", description: "Shopify stores" }
                ]}
            />
            <CTA />
        </>
    );
};

export default PimcoreDevelopment;

