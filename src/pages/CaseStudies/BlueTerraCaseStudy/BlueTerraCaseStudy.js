import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const BlueTerraCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="BlueTerra – AI-Enabled Franchise Lead Management Platform"
                subtitle="AI-powered lead qualification, website engagement, and accurate franchise routing."
                clientName="BlueTerra"
                clientDescription="A retail and multi-store business needed to improve website lead quality and implement accurate franchise routing that standard CRM could not handle due to complex business rules."
                website=""
                location="Global"
                industry="Retail & Multi-Store"
                duration="4 months"
                image="/case study/blueterra.jpg"
                challenges={[
                    {
                        title: "Unqualified Website Leads",
                        description: "Visitors were leaving without proper interaction."
                    },
                    {
                        title: "Franchise Allocation Not Directly Possible",
                        description: "Complex business rules could not be handled inside CRM."
                    }
                ]}
                solutions={[
                    {
                        title: "Custom Website Widget (Key Highlight)",
                        description: "A custom JavaScript widget was built to capture location & intent, validate inputs dynamically, pass structured data into CRM, and enable indirect but accurate franchise allocation."
                    },
                    {
                        title: "AI-Driven Lead Scoring",
                        description: "AI ranked leads based on behavior and intent."
                    }
                ]}
                results={[
                    "Improved website lead quality through interactive widget",
                    "Accurate franchise allocation based on complex business rules",
                    "AI-powered lead scoring for better qualification",
                    "Structured data capture enabling better CRM automation",
                    "SLA-based follow-ups and alerts for timely responses",
                    "Enhanced franchise dashboards for visibility"
                ]}
                technologies={['Zoho CRM', 'AI Lead Scoring', 'Custom Website Widget']}
                whatWeDid={[
                    'Custom website widget development',
                    'AI conversational flow & lead scoring',
                    'CRM automation & franchise dashboards',
                    'SLA-based follow-ups & alerts'
                ]}
            />
            <CTA />
        </>
    );
};

export default BlueTerraCaseStudy;

