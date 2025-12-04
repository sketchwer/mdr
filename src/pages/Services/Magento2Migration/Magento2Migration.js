import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const Magento2Migration = () => {
    return (
        <>
            <ServiceDetail
                title="Magento 2 Migration"
                subtitle="Magento Commerce"
                description="Seamlessly migrate from Magento 1 to Magento 2 with zero downtime. Upgrade your e-commerce platform to the latest technology."
                overview="Migrating to Magento 2 is essential for staying competitive in today's e-commerce landscape. Our expert migration services ensure a smooth transition with no data loss, improved performance, and enhanced features. We handle everything from data migration to theme customization and extension compatibility."
                stats={[
                    { number: "100+", label: "Successful Migrations" },
                    { number: "0%", label: "Data Loss" },
                    { number: "99.9%", label: "Uptime Guarantee" }
                ]}
                features={[
                    {
                        title: "Complete Data Migration",
                        description: "Migrate products, customers, orders, categories, and all other data without any loss."
                    },
                    {
                        title: "Theme & Design Upgrade",
                        description: "Modern, responsive themes that enhance user experience and conversion rates."
                    },
                    {
                        title: "Extension Compatibility",
                        description: "Ensure all your existing extensions work seamlessly with Magento 2 or find suitable alternatives."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Leverage Magento 2's improved architecture for faster page loads and better performance."
                    },
                    {
                        title: "SEO Preservation",
                        description: "Maintain all your SEO rankings and URLs during the migration process."
                    },
                    {
                        title: "Training & Support",
                        description: "Comprehensive training for your team and ongoing support after migration."
                    }
                ]}
                benefits={[
                    "Zero downtime migration process",
                    "Improved performance and speed",
                    "Enhanced security features",
                    "Better mobile experience",
                    "Access to latest Magento features",
                    "Future-proof your e-commerce platform",
                    "Expert migration team"
                ]}
                technologies={[
                    "Magento 2", "Magento 1", "PHP", "MySQL", "Data Migration Tool", "Elasticsearch", "Redis"
                ]}
                process={[
                    {
                        title: "Pre-Migration Analysis",
                        description: "Comprehensive audit of your current Magento 1 store, including extensions, customizations, and data."
                    },
                    {
                        title: "Migration Planning",
                        description: "Create a detailed migration plan with timelines, resource allocation, and risk mitigation strategies."
                    },
                    {
                        title: "Development Environment Setup",
                        description: "Set up a staging environment to test the migration without affecting your live store."
                    },
                    {
                        title: "Data Migration",
                        description: "Migrate all data including products, customers, orders, categories, CMS pages, and configurations."
                    },
                    {
                        title: "Theme & Extension Migration",
                        description: "Migrate or rebuild themes and ensure all extensions are compatible with Magento 2."
                    },
                    {
                        title: "Testing & Quality Assurance",
                        description: "Thorough testing of all functionality, performance, and data integrity."
                    },
                    {
                        title: "Go-Live & Support",
                        description: "Execute the migration with minimal downtime and provide post-migration support."
                    }
                ]}
                relatedServices={[
                    { title: "Magento Development", path: "/services/magento-development", description: "Custom Magento solutions" },
                    { title: "Magento Support Plan", path: "/services/magento-support-plan", description: "Ongoing maintenance" },
                    { title: "Adobe Commerce Development", path: "/services/adobe-commerce-development", description: "Enterprise solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default Magento2Migration;

