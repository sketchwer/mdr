import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const SalesAutomation = () => {
    return (
        <>
            <ServiceDetail
                title="Sales Automation (AI-Based)"
                subtitle="AI & Automation"
                description="AI-powered sales automation to accelerate your sales cycle. Automate lead nurturing, follow-ups, and sales processes with intelligent automation."
                overview="Sales Automation powered by AI transforms your sales operations by automating lead management, follow-ups, email sequences, and sales activities. Our AI-based solutions learn from your sales data to optimize conversion rates and help your sales team close more deals faster."
                features={[
                    {
                        title: "Lead Scoring & Prioritization",
                        description: "AI-powered lead scoring to identify high-value prospects."
                    },
                    {
                        title: "Automated Follow-ups",
                        description: "Intelligent follow-up sequences based on lead behavior."
                    },
                    {
                        title: "Email Automation",
                        description: "Personalized email campaigns with AI-driven content."
                    },
                    {
                        title: "Sales Pipeline Automation",
                        description: "Automated pipeline management and deal progression."
                    },
                    {
                        title: "Predictive Analytics",
                        description: "AI predictions for deal closure and revenue forecasting."
                    },
                    {
                        title: "Sales Activity Automation",
                        description: "Automate scheduling, reminders, and task management."
                    }
                ]}
                benefits={[
                    "Faster sales cycles",
                    "Higher conversion rates",
                    "Improved lead quality",
                    "Better sales forecasting",
                    "Increased sales productivity",
                    "Data-driven sales decisions"
                ]}
                technologies={['AI/ML', 'Zoho CRM', 'Salesforce', 'Email Marketing', 'Predictive Analytics', 'CRM Integration']}
                process={[
                    { step: "Assessment", description: "Analyze current sales process and challenges" },
                    { step: "Strategy", description: "Design AI automation strategy for sales" },
                    { step: "Implementation", description: "Implement AI models and automation workflows" },
                    { step: "Integration", description: "Integrate with CRM and sales tools" },
                    { step: "Training", description: "Train sales team on new automated processes" },
                    { step: "Optimization", description: "Continuously optimize based on results" }
                ]}
            />
            <CTA />
        </>
    );
};

export default SalesAutomation;

