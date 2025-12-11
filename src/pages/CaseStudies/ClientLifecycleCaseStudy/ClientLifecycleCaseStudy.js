import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const ClientLifecycleCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Automated complete lead‑to‑post‑sale cycle"
                subtitle="Discover how we automated Client Lifecycle Management Suite's complete customer journey from lead generation to post-sale support."
                clientName="Client Lifecycle Management Suite"
                clientDescription="Client Lifecycle Management Suite is an enterprise CRM solution that needed to automate the complete customer lifecycle from lead generation through post-sale support."
                website=""
                location="Global"
                industry="Accounting"
                duration="6 months"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Fragmented Customer Journey",
                        description: "The customer lifecycle was managed across multiple disconnected systems, leading to gaps in customer experience and inefficient processes."
                    },
                    {
                        title: "Manual Process Management",
                        description: "Managing leads, sales, and post-sale support required significant manual effort, resulting in delays and inconsistent service."
                    }
                ]}
                solutions={[
                    {
                        title: "End-to-End Automation",
                        description: "Implemented comprehensive automation across Zoho CRM, Books, and Desk to manage the complete customer lifecycle seamlessly."
                    },
                    {
                        title: "Unified Customer View",
                        description: "Created a unified view of each customer across all stages, from initial lead to post-sale support, ensuring consistent service delivery."
                    }
                ]}
                results={[
                    "Automated complete customer lifecycle",
                    "Reduced manual process time by 80%",
                    "Improved customer experience consistency",
                    "Enhanced lead-to-sale conversion rates",
                    "Streamlined post-sale support operations"
                ]}
                technologies={['Zoho CRM', 'Zoho Books', 'Zoho Desk']}
                whatWeDid={[
                    'End-to-End Lifecycle Automation',
                    'Zoho CRM Implementation',
                    'Zoho Books Integration',
                    'Zoho Desk Setup',
                    'Unified Customer Dashboard'
                ]}
            />
            <CTA />
        </>
    );
};

export default ClientLifecycleCaseStudy;

