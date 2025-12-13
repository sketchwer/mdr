import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const LeadQualification = () => {
    return (
        <>
            <ServiceDetail
                title="Lead Qualification & Follow-Up Automation"
                subtitle="AI & Automation"
                description="Automate lead qualification and follow-up processes. Identify quality leads, nurture prospects, and convert more effectively with intelligent automation."
                overview="Lead Qualification and Follow-Up Automation ensures your sales team focuses on high-quality leads while automated systems handle initial qualification and nurturing. Our solution uses AI to score leads, automate follow-ups, and route qualified prospects to the right sales representatives at the optimal time."
                features={[
                    {
                        title: "Automated Lead Scoring",
                        description: "AI-powered scoring to identify high-value leads automatically."
                    },
                    {
                        title: "Qualification Workflows",
                        description: "Automated qualification questions and assessment workflows."
                    },
                    {
                        title: "Follow-Up Sequences",
                        description: "Intelligent follow-up campaigns based on lead behavior."
                    },
                    {
                        title: "Lead Routing",
                        description: "Automated routing of qualified leads to appropriate sales reps."
                    },
                    {
                        title: "Nurture Campaigns",
                        description: "Automated email and messaging campaigns for lead nurturing."
                    },
                    {
                        title: "Conversion Tracking",
                        description: "Track lead progression and conversion metrics."
                    }
                ]}
                benefits={[
                    "Higher quality leads",
                    "Improved conversion rates",
                    "Faster response times",
                    "Better lead nurturing",
                    "Optimized sales team focus",
                    "Increased revenue"
                ]}
                technologies={['AI/ML', 'CRM Integration', 'Email Automation', 'Chatbots', 'Lead Scoring', 'Marketing Automation']}
                process={[
                    { step: "Analysis", description: "Analyze lead sources and qualification criteria" },
                    { step: "Design", description: "Design qualification workflows and scoring models" },
                    { step: "Development", description: "Build automation workflows and AI models" },
                    { step: "Integration", description: "Integrate with CRM and marketing tools" },
                    { step: "Testing", description: "Test qualification and follow-up processes" },
                    { step: "Launch", description: "Deploy and monitor performance" }
                ]}
            />
            <CTA />
        </>
    );
};

export default LeadQualification;

