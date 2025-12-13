import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoDesk = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho Desk"
                subtitle="Zoho Solutions"
                description="Deliver exceptional customer support with Zoho Desk implementation. Manage tickets, automate responses, and improve customer satisfaction."
                overview="Zoho Desk is a powerful customer support platform that helps businesses manage customer inquiries, track support tickets, and deliver exceptional customer service. Our implementation ensures your support team can efficiently handle customer requests and maintain high satisfaction levels."
                features={[
                    {
                        title: "Ticket Management",
                        description: "Centralized ticket system for all customer inquiries."
                    },
                    {
                        title: "Multi-Channel Support",
                        description: "Support across email, phone, chat, and social media."
                    },
                    {
                        title: "Automation Rules",
                        description: "Automated ticket routing and response workflows."
                    },
                    {
                        title: "Knowledge Base",
                        description: "Self-service portal with articles and FAQs."
                    },
                    {
                        title: "SLA Management",
                        description: "Service level agreement tracking and compliance."
                    },
                    {
                        title: "Analytics & Reports",
                        description: "Comprehensive support metrics and performance reports."
                    }
                ]}
                benefits={[
                    "Faster response times",
                    "Improved customer satisfaction",
                    "Automated ticket routing",
                    "Better team productivity",
                    "Reduced support costs",
                    "Data-driven support insights"
                ]}
                technologies={['Zoho Desk', 'Zoho Chat', 'Email Integration', 'Social Media Integration', 'API Integration']}
                process={[
                    { step: "Analysis", description: "Analyze current support processes and channels" },
                    { step: "Configuration", description: "Set up ticket workflows and automation rules" },
                    { step: "Integration", description: "Integrate with communication channels" },
                    { step: "Knowledge Base", description: "Create and organize support articles" },
                    { step: "Training", description: "Train support team on the platform" },
                    { step: "Launch", description: "Go live with ongoing support" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoDesk;

