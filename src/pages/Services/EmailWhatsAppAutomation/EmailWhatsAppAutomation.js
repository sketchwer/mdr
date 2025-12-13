import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const EmailWhatsAppAutomation = () => {
    return (
        <>
            <ServiceDetail
                title="Email & WhatsApp Notification Automation"
                subtitle="AI & Automation"
                description="Automate email and WhatsApp notifications for your business. Send timely alerts, updates, and communications automatically based on triggers and schedules."
                overview="Email and WhatsApp Notification Automation ensures your customers, employees, and stakeholders receive timely, relevant communications automatically. From order confirmations to appointment reminders, our automation solutions keep everyone informed while reducing manual communication overhead."
                features={[
                    {
                        title: "Trigger-Based Notifications",
                        description: "Automated notifications based on business events and triggers."
                    },
                    {
                        title: "Multi-Channel Support",
                        description: "Send notifications via email, WhatsApp, and SMS."
                    },
                    {
                        title: "Template Management",
                        description: "Customizable templates for consistent messaging."
                    },
                    {
                        title: "Scheduled Notifications",
                        description: "Schedule notifications for specific dates and times."
                    },
                    {
                        title: "Personalization",
                        description: "Personalized messages with dynamic content."
                    },
                    {
                        title: "Delivery Tracking",
                        description: "Track delivery status and engagement metrics."
                    }
                ]}
                benefits={[
                    "Timely communications",
                    "Reduced manual work",
                    "Improved customer engagement",
                    "Consistent messaging",
                    "Better customer experience",
                    "Scalable communication"
                ]}
                technologies={['Email APIs', 'WhatsApp Business API', 'SMS Gateways', 'Template Engines', 'Automation Tools', 'CRM Integration']}
                process={[
                    { step: "Analysis", description: "Identify notification requirements and triggers" },
                    { step: "Design", description: "Design notification templates and workflows" },
                    { step: "Development", description: "Build automation workflows and integrations" },
                    { step: "Integration", description: "Integrate with business systems" },
                    { step: "Testing", description: "Test notification delivery and formatting" },
                    { step: "Launch", description: "Deploy and monitor notification performance" }
                ]}
            />
            <CTA />
        </>
    );
};

export default EmailWhatsAppAutomation;

