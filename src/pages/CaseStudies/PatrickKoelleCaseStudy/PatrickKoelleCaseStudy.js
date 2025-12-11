import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const PatrickKoelleCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Unified CRM, Desk & Books workflows"
                subtitle="Discover how we unified Patrick Koelle's business operations with integrated CRM, customer support, and accounting workflows."
                clientName="Patrick Koelle"
                clientDescription="Patrick Koelle is a consulting and support company that needed unified workflows across CRM, customer support, and accounting to streamline operations."
                website=""
                location="Global"
                industry="Consulting & Support"
                duration="4 months"
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Disconnected Workflows",
                        description: "CRM, customer support, and accounting workflows were managed separately, leading to inefficiencies and data inconsistencies."
                    },
                    {
                        title: "Manual Coordination",
                        description: "Coordinating between sales, support, and billing required significant manual effort and was prone to errors."
                    }
                ]}
                solutions={[
                    {
                        title: "Unified Platform Integration",
                        description: "Integrated Zoho Desk, CRM, and Books into a unified platform, ensuring seamless workflow across all business functions."
                    },
                    {
                        title: "Automated Workflow Coordination",
                        description: "Implemented automated workflows that coordinate between sales, support, and billing, reducing manual effort and improving accuracy."
                    }
                ]}
                results={[
                    "Unified all business workflows",
                    "Reduced manual coordination by 75%",
                    "Improved data consistency across systems",
                    "Enhanced operational efficiency",
                    "Streamlined consulting operations"
                ]}
                technologies={['Zoho Desk', 'Zoho CRM', 'Zoho Books']}
                whatWeDid={[
                    'Zoho Desk Integration',
                    'Zoho CRM Setup',
                    'Zoho Books Integration',
                    'Workflow Automation',
                    'Cross-Platform Coordination'
                ]}
            />
            <CTA />
        </>
    );
};

export default PatrickKoelleCaseStudy;

