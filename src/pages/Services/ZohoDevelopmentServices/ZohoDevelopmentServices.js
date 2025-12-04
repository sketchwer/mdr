import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoDevelopmentServices = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho Development Services"
                subtitle="CMS/CRM Development"
                description="Streamline scattered systems into one smooth, productive ecosystem. Custom Zoho solutions tailored to your business workflows."
                overview="Zoho is a comprehensive suite of business applications. Our Zoho development services help you customize, integrate, and implement Zoho applications to streamline your business processes. We specialize in Zoho CRM, Inventory, Books, Campaigns, Desk, Mail, and other Zoho apps."
                stats={[
                    { number: "10+", label: "Zoho Projects" },
                    { number: "50+", label: "Integrations" },
                    { number: "5+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Zoho CRM Customization",
                        description: "Customize Zoho CRM to match your sales processes and workflows."
                    },
                    {
                        title: "Zoho Integration",
                        description: "Integrate Zoho apps with your existing business systems."
                    },
                    {
                        title: "Custom Zoho Apps",
                        description: "Develop custom Zoho applications using Zoho Creator."
                    },
                    {
                        title: "Zoho Implementation",
                        description: "Complete Zoho implementation and setup for your organization."
                    },
                    {
                        title: "Zoho Workflow Automation",
                        description: "Automate business processes using Zoho workflows and Deluge scripting."
                    },
                    {
                        title: "Zoho Training & Support",
                        description: "Train your team and provide ongoing Zoho support."
                    }
                ]}
                benefits={[
                    "Unified business ecosystem",
                    "Improved productivity",
                    "Automated workflows",
                    "Better data management",
                    "Cost-effective solution",
                    "Scalable platform",
                    "Expert Zoho developers"
                ]}
                technologies={[
                    "Zoho CRM", "Zoho Creator", "Zoho API", "Deluge", "Zoho Inventory", "Zoho Books", "Zoho Campaigns"
                ]}
                process={[
                    {
                        title: "Business Analysis",
                        description: "Analyze your business processes and identify Zoho solutions."
                    },
                    {
                        title: "Zoho Setup",
                        description: "Set up and configure Zoho applications for your organization."
                    },
                    {
                        title: "Customization",
                        description: "Customize Zoho apps to match your business workflows."
                    },
                    {
                        title: "Integration",
                        description: "Integrate Zoho with existing systems and third-party apps."
                    },
                    {
                        title: "Data Migration",
                        description: "Migrate data from existing systems to Zoho."
                    },
                    {
                        title: "Training & Support",
                        description: "Train your team and provide ongoing support."
                    }
                ]}
                relatedServices={[
                    { title: "Odoo Development", path: "/services/odoo-development", description: "Odoo ERP solutions" },
                    { title: "PHP Web Development", path: "/services/php-web-development", description: "Custom web apps" },
                    { title: "Laravel Development", path: "/services/laravel-development", description: "Laravel solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoDevelopmentServices;

