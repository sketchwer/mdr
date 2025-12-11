import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const SriProjectCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Automated onboarding and billing workflows"
                subtitle="Discover how we automated Sri Project's retail operations with streamlined onboarding processes and efficient billing workflows."
                clientName="Sri Project"
                clientDescription="Sri Project is a retail and multi-store business that needed automated onboarding processes for new customers and streamlined billing workflows across multiple store locations."
                website=""
                location="Global"
                industry="Retail & Multi‑Store"
                duration="4 months"
                image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Multi-Store Management",
                        description: "Managing customer onboarding and billing across multiple store locations was complex and time-consuming, with inconsistent processes across different stores."
                    },
                    {
                        title: "Manual Billing Processes",
                        description: "Billing workflows required significant manual effort, leading to delays, errors, and difficulty in tracking revenue across stores."
                    }
                ]}
                solutions={[
                    {
                        title: "Automated Onboarding",
                        description: "Implemented automated customer onboarding workflows in Zoho CRM that standardize processes across all store locations and reduce manual effort."
                    },
                    {
                        title: "Unified Billing System",
                        description: "Set up integrated billing workflows in Zoho Books that handle billing across all stores, ensuring consistency and accuracy."
                    }
                ]}
                results={[
                    "Standardized onboarding across all stores",
                    "Reduced onboarding time by 65%",
                    "Automated 85% of billing processes",
                    "Improved billing accuracy and consistency",
                    "Enhanced multi-store revenue tracking"
                ]}
                technologies={['Zoho CRM', 'Zoho Books']}
                whatWeDid={[
                    'Multi-Store CRM Setup',
                    'Automated Onboarding Workflows',
                    'Zoho Books Integration',
                    'Billing Automation Configuration',
                    'Cross-Store Reporting Setup'
                ]}
            />
            <CTA />
        </>
    );
};

export default SriProjectCaseStudy;

