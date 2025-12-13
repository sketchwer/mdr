import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoExtensions = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho Extensions Development"
                subtitle="Zoho Solutions"
                description="Custom Zoho extensions and add-ons to extend functionality. Build tailored solutions that enhance your Zoho applications with custom features."
                overview="Zoho Extensions Development allows you to add custom functionality to your Zoho applications. Whether you need custom fields, modules, workflows, or complete add-ons, our development team creates extensions that perfectly match your business requirements."
                features={[
                    {
                        title: "Custom Modules",
                        description: "Build custom modules tailored to your business needs."
                    },
                    {
                        title: "Custom Fields & Layouts",
                        description: "Add custom fields and design custom page layouts."
                    },
                    {
                        title: "Workflow Extensions",
                        description: "Extend automation workflows with custom logic."
                    },
                    {
                        title: "API Extensions",
                        description: "Custom API endpoints and integrations."
                    },
                    {
                        title: "Widget Development",
                        description: "Custom widgets and dashboards for enhanced visibility."
                    },
                    {
                        title: "Add-on Development",
                        description: "Complete add-ons and plugins for Zoho marketplace."
                    }
                ]}
                benefits={[
                    "Tailored functionality",
                    "Enhanced Zoho capabilities",
                    "Business-specific features",
                    "Seamless integration",
                    "Scalable solutions",
                    "Future-proof extensions"
                ]}
                technologies={['Zoho Deluge', 'Zoho API', 'JavaScript', 'HTML/CSS', 'REST APIs', 'Custom Development']}
                process={[
                    { step: "Requirements", description: "Gather and analyze extension requirements" },
                    { step: "Design", description: "Design extension architecture and user interface" },
                    { step: "Development", description: "Develop extension using Zoho development tools" },
                    { step: "Testing", description: "Comprehensive testing across scenarios" },
                    { step: "Deployment", description: "Deploy extension to your Zoho account" },
                    { step: "Maintenance", description: "Ongoing support and updates" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoExtensions;

