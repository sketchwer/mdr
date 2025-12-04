import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const EcommerceMaintenance = () => {
    return (
        <>
            <ServiceDetail
                title="E-Commerce Maintenance"
                subtitle="E-Commerce Solution"
                description="Keep your e-commerce store running smoothly with our comprehensive maintenance services. Regular updates, security, and performance optimization."
                overview="E-commerce maintenance is crucial for keeping your online store secure, updated, and performing at its best. Our e-commerce maintenance services cover everything from regular updates and security patches to performance optimization and backup management. We ensure your store remains operational and optimized 24/7."
                stats={[
                    { number: "50+", label: "Stores Maintained" },
                    { number: "99.9%", label: "Uptime" },
                    { number: "24/7", label: "Monitoring" }
                ]}
                features={[
                    {
                        title: "Regular Updates",
                        description: "Keep your platform, themes, and plugins updated to the latest versions."
                    },
                    {
                        title: "Security Monitoring",
                        description: "Continuous security monitoring and vulnerability scanning."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Regular performance audits and optimization for faster loading times."
                    },
                    {
                        title: "Backup Management",
                        description: "Automated daily backups with quick recovery options."
                    },
                    {
                        title: "Bug Fixes",
                        description: "Quick identification and resolution of bugs and issues."
                    },
                    {
                        title: "Technical Support",
                        description: "24/7 technical support for any issues or questions."
                    }
                ]}
                benefits={[
                    "Reduced downtime",
                    "Enhanced security",
                    "Better performance",
                    "Peace of mind",
                    "Cost-effective",
                    "Expert support",
                    "Regular updates"
                ]}
                technologies={[
                    "Magento", "Shopify", "WooCommerce", "BigCommerce", "Monitoring Tools", "Backup Solutions"
                ]}
                process={[
                    {
                        title: "Store Assessment",
                        description: "Comprehensive assessment of your current store setup and needs."
                    },
                    {
                        title: "Maintenance Plan",
                        description: "Create a customized maintenance plan based on your requirements."
                    },
                    {
                        title: "Setup & Configuration",
                        description: "Set up monitoring, backup, and maintenance tools."
                    },
                    {
                        title: "Ongoing Maintenance",
                        description: "Regular updates, monitoring, and optimization."
                    },
                    {
                        title: "Reporting",
                        description: "Monthly reports on maintenance activities and store health."
                    }
                ]}
                relatedServices={[
                    { title: "Magento Support Plan", path: "/services/magento-support-plan", description: "Magento maintenance" },
                    { title: "WordPress Support Plans", path: "/services/wordpress-support-plans", description: "WordPress maintenance" },
                    { title: "E-Commerce Development", path: "/services/ecommerce-development", description: "E-commerce solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default EcommerceMaintenance;

