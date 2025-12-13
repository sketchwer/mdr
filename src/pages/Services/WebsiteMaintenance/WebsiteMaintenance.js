import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const WebsiteMaintenance = () => {
    return (
        <>
            <ServiceDetail
                title="Website Maintenance & Support"
                subtitle="Website Development"
                description="Keep your website running smoothly with comprehensive maintenance and support services. Regular updates, security, backups, and ongoing optimization for peak performance."
                overview="Website Maintenance and Support services ensure your website remains secure, updated, and performing optimally. Regular maintenance prevents security vulnerabilities, improves performance, and keeps your website compatible with the latest technologies. From security updates and backups to content updates and performance optimization, we provide ongoing support to keep your website running smoothly and effectively."
                features={[
                    {
                        title: "Security Updates & Monitoring",
                        description: "Regular security patches, vulnerability scanning, and malware protection to keep your site secure."
                    },
                    {
                        title: "Regular Backups",
                        description: "Automated daily/weekly backups with secure storage and quick restoration capabilities."
                    },
                    {
                        title: "Content Updates",
                        description: "Regular content updates, blog posts, images, and text changes as needed."
                    },
                    {
                        title: "Performance Monitoring",
                        description: "Continuous monitoring of website speed, uptime, and performance metrics."
                    },
                    {
                        title: "Plugin & Theme Updates",
                        description: "Regular updates for CMS, plugins, themes, and third-party integrations."
                    },
                    {
                        title: "Technical Support",
                        description: "24/7 technical support for issues, bugs, and website emergencies."
                    }
                ]}
                benefits={[
                    "Enhanced website security and protection",
                    "Improved performance and speed",
                    "Regular backups for data safety",
                    "Uptime monitoring and quick issue resolution",
                    "Updated content keeping site fresh",
                    "Peace of mind with professional maintenance"
                ]}
                technologies={['WordPress', 'CMS Maintenance', 'Security Tools', 'Backup Solutions', 'Performance Monitoring', 'Cloud Hosting']}
                stats={[
                    { number: "99.9%", label: "Uptime" },
                    { number: "24/7", label: "Support" },
                    { number: "500+", label: "Websites Maintained" }
                ]}
                process={[
                    { title: "Initial Assessment", description: "Audit current website, identify maintenance needs, and create maintenance plan" },
                    { title: "Maintenance Setup", description: "Set up monitoring, backups, and security tools" },
                    { title: "Regular Updates", description: "Schedule and perform regular updates, backups, and security checks" },
                    { title: "Performance Optimization", description: "Monitor performance and optimize as needed for speed and efficiency" },
                    { title: "Content Updates", description: "Handle content updates and changes as requested" },
                    { title: "Ongoing Support", description: "Provide 24/7 support and quick resolution of any issues" }
                ]}
                relatedServices={[
                    { title: "Website Redesign", path: "/services/website-redesign", description: "Website redesign" },
                    { title: "Business Website Development", path: "/services/business-website-development", description: "New websites" },
                    { title: "WordPress Support", path: "/services/wordpress-support-plans", description: "WordPress support" }
                ]}
            />
            <CTA />
        </>
    );
};

export default WebsiteMaintenance;

