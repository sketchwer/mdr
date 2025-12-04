import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const WordPressSupportPlans = () => {
    return (
        <>
            <ServiceDetail
                title="WordPress Support Plans"
                subtitle="Support & Packages"
                description="Comprehensive WordPress support and maintenance plans. Keep your WordPress site secure, updated, and performing at its best."
                overview="WordPress websites require regular maintenance to stay secure, updated, and performing well. Our WordPress support plans provide comprehensive maintenance services including updates, security monitoring, backups, and technical support. Choose a plan that fits your needs."
                stats={[
                    { number: "100+", label: "WordPress Sites Maintained" },
                    { number: "99.9%", label: "Uptime" },
                    { number: "24/7", label: "Support" }
                ]}
                features={[
                    {
                        title: "Regular Updates",
                        description: "Keep WordPress core, themes, and plugins updated to latest versions."
                    },
                    {
                        title: "Security Monitoring",
                        description: "Continuous security monitoring and malware scanning."
                    },
                    {
                        title: "Daily Backups",
                        description: "Automated daily backups with quick recovery options."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Regular performance audits and optimization for faster loading."
                    },
                    {
                        title: "Technical Support",
                        description: "24/7 technical support for any WordPress issues."
                    },
                    {
                        title: "Monthly Reports",
                        description: "Monthly reports on site health, performance, and security."
                    }
                ]}
                benefits={[
                    "Reduced downtime",
                    "Enhanced security",
                    "Better performance",
                    "Peace of mind",
                    "Cost-effective",
                    "Expert WordPress team",
                    "Regular maintenance"
                ]}
                technologies={[
                    "WordPress", "Security Plugins", "Backup Solutions", "Performance Tools", "Monitoring Tools"
                ]}
                process={[
                    {
                        title: "Site Assessment",
                        description: "Comprehensive assessment of your WordPress site."
                    },
                    {
                        title: "Plan Selection",
                        description: "Choose the support plan that fits your needs."
                    },
                    {
                        title: "Setup & Configuration",
                        description: "Set up monitoring, backup, and security tools."
                    },
                    {
                        title: "Ongoing Maintenance",
                        description: "Regular updates, monitoring, and optimization."
                    },
                    {
                        title: "Support & Reporting",
                        description: "24/7 support and monthly performance reports."
                    }
                ]}
                relatedServices={[
                    { title: "WordPress Development", path: "/services/wordpress-development", description: "WordPress development" },
                    { title: "WooCommerce Development", path: "/services/woocommerce-development", description: "E-commerce" },
                    { title: "E-Commerce Maintenance", path: "/services/ecommerce-maintenance", description: "E-commerce maintenance" }
                ]}
            />
            <CTA />
        </>
    );
};

export default WordPressSupportPlans;

