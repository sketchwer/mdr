import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const OdooDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Odoo Development"
                subtitle="CMS/CRM Development"
                description="Comprehensive Odoo ERP solutions for your business. Custom Odoo development, implementation, and integration services."
                overview="Odoo is a powerful open-source ERP solution that integrates all business functions into one platform. Our Odoo development services help you implement, customize, and integrate Odoo to streamline your business operations. We provide end-to-end Odoo solutions from implementation to custom development."
                stats={[
                    { number: "15+", label: "Odoo Projects" },
                    { number: "20+", label: "Modules Implemented" },
                    { number: "100%", label: "Client Satisfaction" }
                ]}
                features={[
                    {
                        title: "Odoo Implementation",
                        description: "Complete Odoo ERP implementation for your organization."
                    },
                    {
                        title: "Custom Module Development",
                        description: "Develop custom Odoo modules for unique business requirements."
                    },
                    {
                        title: "Odoo Integration",
                        description: "Integrate Odoo with existing systems and third-party applications."
                    },
                    {
                        title: "Odoo Migration",
                        description: "Migrate from other ERP systems to Odoo."
                    },
                    {
                        title: "Odoo Customization",
                        description: "Customize Odoo modules and workflows to match your processes."
                    },
                    {
                        title: "Odoo Support & Training",
                        description: "Ongoing support and training for your team."
                    }
                ]}
                benefits={[
                    "Integrated business solution",
                    "Open-source platform",
                    "Highly customizable",
                    "Cost-effective ERP",
                    "Scalable solution",
                    "Active community",
                    "Expert Odoo developers"
                ]}
                technologies={[
                    "Odoo", "Python", "PostgreSQL", "JavaScript", "XML", "Odoo API"
                ]}
                process={[
                    {
                        title: "Requirements Analysis",
                        description: "Analyze your business requirements and identify Odoo modules needed."
                    },
                    {
                        title: "Odoo Installation",
                        description: "Install and configure Odoo for your organization."
                    },
                    {
                        title: "Module Configuration",
                        description: "Configure Odoo modules based on your business processes."
                    },
                    {
                        title: "Custom Development",
                        description: "Develop custom modules and features as needed."
                    },
                    {
                        title: "Integration & Testing",
                        description: "Integrate with existing systems and comprehensive testing."
                    },
                    {
                        title: "Training & Go-Live",
                        description: "Train your team and go live with Odoo."
                    }
                ]}
                relatedServices={[
                    { title: "Zoho Development Services", path: "/services/zoho-development-services", description: "Zoho solutions" },
                    { title: "Laravel Development", path: "/services/laravel-development", description: "Laravel development" },
                    { title: "PHP Web Development", path: "/services/php-web-development", description: "PHP solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default OdooDevelopment;

