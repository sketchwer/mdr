import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoIntegrations = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho Integrations"
                subtitle="Zoho Solutions"
                description="Connect Zoho with your existing business tools and create a unified ecosystem. Seamless integrations for enhanced productivity and data flow."
                overview="Zoho Integrations enable you to connect your Zoho applications with third-party tools, creating a unified business ecosystem. Our integration services ensure smooth data flow, eliminate data silos, and enhance overall business efficiency."
                features={[
                    {
                        title: "Third-Party Integrations",
                        description: "Connect Zoho with popular business tools and platforms."
                    },
                    {
                        title: "API Development",
                        description: "Custom API integrations for specific business needs."
                    },
                    {
                        title: "Data Synchronization",
                        description: "Real-time or scheduled data sync between systems."
                    },
                    {
                        title: "Workflow Automation",
                        description: "Automated workflows across integrated applications."
                    },
                    {
                        title: "Zoho Suite Integration",
                        description: "Connect multiple Zoho applications seamlessly."
                    },
                    {
                        title: "Custom Integrations",
                        description: "Tailored integrations for unique business requirements."
                    }
                ]}
                benefits={[
                    "Unified business ecosystem",
                    "Eliminated data silos",
                    "Automated data flow",
                    "Enhanced productivity",
                    "Reduced manual work",
                    "Better business insights"
                ]}
                technologies={['Zoho API', 'REST APIs', 'Webhooks', 'Zapier', 'Make.com', 'Custom Development']}
                process={[
                    { step: "Analysis", description: "Identify integration requirements and systems" },
                    { step: "Design", description: "Design integration architecture and data flow" },
                    { step: "Development", description: "Develop and configure integrations" },
                    { step: "Testing", description: "Thorough testing of data flow and workflows" },
                    { step: "Deployment", description: "Deploy integrations with monitoring" },
                    { step: "Support", description: "Ongoing maintenance and optimization" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoIntegrations;

