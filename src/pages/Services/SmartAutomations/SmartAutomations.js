import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const SmartAutomations = () => {
    return (
        <>
            <ServiceDetail
                title="Smart Automations & Integrations"
                subtitle="AI & Automation"
                description="Connect all your apps and make daily work automatic. With AI, Make.com, and API integrations, your tasks happen on their own — updates, approvals, reminders, data movement, and reports."
                overview="Transform your business operations with intelligent automation that connects all your applications seamlessly. Our Smart Automations & Integrations service leverages AI, Make.com, and advanced API integrations to eliminate manual work and create smooth, automated workflows across your entire business ecosystem."
                features={[
                    {
                        title: "App Integration",
                        description: "Connect all your business applications and tools into one unified system."
                    },
                    {
                        title: "AI-Powered Automation",
                        description: "Leverage artificial intelligence to automate complex business processes."
                    },
                    {
                        title: "Make.com Workflows",
                        description: "Build powerful automation workflows using Make.com platform."
                    },
                    {
                        title: "API Integrations",
                        description: "Seamless API integrations for real-time data synchronization."
                    },
                    {
                        title: "Automated Updates & Reminders",
                        description: "Automatic updates, approvals, reminders, and notifications."
                    },
                    {
                        title: "Data Movement Automation",
                        description: "Automated data transfer and synchronization across systems."
                    }
                ]}
                benefits={[
                    "Eliminate manual work completely",
                    "Everything works together smoothly",
                    "Automated updates and approvals",
                    "Real-time data synchronization",
                    "Reduced operational costs",
                    "Improved efficiency and productivity"
                ]}
                technologies={['Make.com', 'AI Integration', 'API Development', 'Workflow Automation', 'Zoho Integration', 'Custom Integrations']}
                process={[
                    { step: "Analysis", description: "Analyze your current systems and identify automation opportunities" },
                    { step: "Design", description: "Design custom automation workflows tailored to your needs" },
                    { step: "Integration", description: "Integrate all your apps and systems seamlessly" },
                    { step: "Implementation", description: "Implement and configure automation workflows" },
                    { step: "Testing", description: "Thorough testing to ensure everything works perfectly" },
                    { step: "Support", description: "Ongoing support and optimization" }
                ]}
            />
            <CTA />
        </>
    );
};

export default SmartAutomations;

