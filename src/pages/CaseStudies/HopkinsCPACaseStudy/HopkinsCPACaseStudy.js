import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const HopkinsCPACaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Automated document signing to subscription billing"
                subtitle="Discover how we automated Hopkins C.P.A Firm's complete workflow from document signing to subscription billing management."
                clientName="Hopkins C.P.A Firm"
                clientDescription="Hopkins C.P.A Firm is an accounting and finance company that needed to automate their document signing processes and streamline subscription billing workflows."
                website=""
                location="Global"
                industry="Accounting & Finance"
                duration="5 months"
                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Manual Document Signing",
                        description: "The firm was handling document signing processes manually, which was time-consuming and created delays in client onboarding and contract management."
                    },
                    {
                        title: "Subscription Billing Complexity",
                        description: "Managing recurring subscriptions and billing cycles required manual tracking and follow-ups, leading to billing errors and revenue leakage."
                    }
                ]}
                solutions={[
                    {
                        title: "Automated Document Signing",
                        description: "Implemented automated document signing workflows that streamline client onboarding and contract management processes."
                    },
                    {
                        title: "Subscription Billing Automation",
                        description: "Set up automated subscription billing in Zoho Billing that handles recurring charges, payment reminders, and invoice generation seamlessly."
                    }
                ]}
                results={[
                    "Automated 100% of document signing workflows",
                    "Reduced billing processing time by 75%",
                    "Eliminated billing errors and revenue leakage",
                    "Improved client onboarding speed by 80%",
                    "Enhanced subscription management efficiency"
                ]}
                technologies={['Zoho CRM', 'Zoho Billing']}
                whatWeDid={[
                    'Document Signing Automation',
                    'Zoho Billing Integration',
                    'Subscription Management Setup',
                    'Payment Workflow Configuration',
                    'Invoice Automation'
                ]}
            />
            <CTA />
        </>
    );
};

export default HopkinsCPACaseStudy;

