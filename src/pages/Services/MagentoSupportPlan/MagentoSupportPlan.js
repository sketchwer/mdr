import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const MagentoSupportPlan = () => {
    return (
        <>
            <ServiceDetail
                title="Magento Support Plan"
                subtitle="Magento Commerce"
                description="24/7 Magento support and maintenance services to keep your store running smoothly, securely, and efficiently."
                overview="Our Magento support plans ensure your e-commerce store remains secure, updated, and performing at its best. With round-the-clock monitoring, regular updates, and expert support, you can focus on growing your business while we handle the technical aspects."
                stats={[
                    { number: "24/7", label: "Support Available" },
                    { number: "99.9%", label: "Uptime SLA" },
                    { number: "1hr", label: "Response Time" }
                ]}
                features={[
                    {
                        title: "24/7 Technical Support",
                        description: "Round-the-clock support from certified Magento experts to resolve issues quickly."
                    },
                    {
                        title: "Regular Updates & Patches",
                        description: "Keep your store updated with the latest security patches and Magento updates."
                    },
                    {
                        title: "Performance Monitoring",
                        description: "Continuous monitoring of your store's performance and proactive optimization."
                    },
                    {
                        title: "Security Management",
                        description: "Regular security audits, vulnerability scans, and security patches."
                    },
                    {
                        title: "Backup & Recovery",
                        description: "Automated daily backups and quick recovery options in case of issues."
                    },
                    {
                        title: "Custom Development",
                        description: "Minor customizations and feature additions as part of the support plan."
                    }
                ]}
                benefits={[
                    "Peace of mind with 24/7 support",
                    "Reduced downtime and faster issue resolution",
                    "Enhanced security and compliance",
                    "Improved performance and speed",
                    "Cost-effective maintenance",
                    "Expert Magento knowledge",
                    "Scalable support plans"
                ]}
                technologies={[
                    "Magento 2", "Monitoring Tools", "Backup Solutions", "Security Tools", "Performance Optimization"
                ]}
                process={[
                    {
                        title: "Store Assessment",
                        description: "Comprehensive analysis of your current Magento store setup and requirements."
                    },
                    {
                        title: "Support Plan Selection",
                        description: "Choose the support plan that best fits your business needs and budget."
                    },
                    {
                        title: "Onboarding & Setup",
                        description: "Set up monitoring tools, backup systems, and establish communication channels."
                    },
                    {
                        title: "Ongoing Support",
                        description: "Continuous monitoring, regular updates, and immediate response to any issues."
                    },
                    {
                        title: "Regular Reporting",
                        description: "Monthly reports on performance, security, and support activities."
                    }
                ]}
                relatedServices={[
                    { title: "Magento Development", path: "/services/magento-development", description: "Custom development" },
                    { title: "Magento 2 Migration", path: "/services/magento-2-migration", description: "Upgrade to Magento 2" },
                    { title: "Hyvä Theme Development", path: "/services/hyva-theme-development", description: "Frontend solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default MagentoSupportPlan;

