import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoCRMAutomation = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho CRM Automation"
                subtitle="Zoho Solutions"
                description="Transform your sales operations with smart CRM workflows. We set up lead routing, follow-ups, Zia insights, scoring rules, quotations, and automated tasks, giving your sales team a clean, fast, and organised system."
                overview="Zoho CRM Automation helps you transform your sales operations by implementing intelligent workflows and automation. Our service includes lead routing, automated follow-ups, AI-powered insights through Zia, lead scoring, quotation automation, and task management to create an efficient sales system."
                features={[
                    {
                        title: "Lead Routing Automation",
                        description: "Automatically route leads to the right sales representatives."
                    },
                    {
                        title: "Automated Follow-ups",
                        description: "Set up automated follow-up sequences for leads and customers."
                    },
                    {
                        title: "Zia AI Insights",
                        description: "Leverage Zoho Zia for predictive insights and recommendations."
                    },
                    {
                        title: "Lead Scoring Rules",
                        description: "Automated lead scoring to prioritize high-value opportunities."
                    },
                    {
                        title: "Quotation Automation",
                        description: "Automated quotation generation and management."
                    },
                    {
                        title: "Task Automation",
                        description: "Automated task creation and assignment for sales activities."
                    }
                ]}
                benefits={[
                    "Clean, fast, and organised sales system",
                    "Improved lead conversion rates",
                    "Automated lead routing and follow-ups",
                    "AI-powered insights for better decisions",
                    "Reduced manual work for sales team",
                    "Better sales pipeline management"
                ]}
                technologies={['Zoho CRM', 'Zoho Zia AI', 'Workflow Automation', 'Deluge Scripting', 'API Integration', 'Sales Automation']}
                process={[
                    { step: "Analysis", description: "Analyze current sales processes and identify automation opportunities" },
                    { step: "Configuration", description: "Configure Zoho CRM with custom fields and modules" },
                    { step: "Automation Setup", description: "Set up workflows, rules, and automation" },
                    { step: "Zia Integration", description: "Configure Zia AI for insights and predictions" },
                    { step: "Testing", description: "Test all automation workflows thoroughly" },
                    { step: "Training", description: "Train your sales team on the new system" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoCRMAutomation;

