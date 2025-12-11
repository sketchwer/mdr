import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const MatterMindDecorCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Automated post‑sale workflows & billing sync"
                subtitle="Discover how we automated Matter Mind Decor's post-sale workflows and billing synchronization to streamline interior design operations."
                clientName="Matter Mind Decor"
                clientDescription="Matter Mind Decor is an interior design company that needed automated post-sale workflows and billing synchronization to manage projects and payments efficiently."
                website=""
                location="Global"
                industry="Interior Design"
                duration="4 months"
                image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Manual Post-Sale Processes",
                        description: "Post-sale workflows including follow-ups, project updates, and client communication required significant manual effort."
                    },
                    {
                        title: "Billing Synchronization Issues",
                        description: "Billing and payment tracking was not synchronized with project management, leading to payment delays and accounting discrepancies."
                    }
                ]}
                solutions={[
                    {
                        title: "Post-Sale Workflow Automation",
                        description: "Implemented automated post-sale workflows in Zoho CRM to manage follow-ups, project updates, and client communications."
                    },
                    {
                        title: "Billing Sync Integration",
                        description: "Established seamless synchronization between project management and billing in Zoho Books, ensuring accurate and timely invoicing."
                    }
                ]}
                results={[
                    "Automated post-sale workflows",
                    "Improved billing synchronization by 90%",
                    "Reduced payment processing delays",
                    "Enhanced project management efficiency",
                    "Streamlined interior design operations"
                ]}
                technologies={['Zoho CRM', 'Zoho Books']}
                whatWeDid={[
                    'Post-Sale Workflow Automation',
                    'Zoho CRM Implementation',
                    'Zoho Books Integration',
                    'Billing Synchronization Setup',
                    'Project Management Integration'
                ]}
            />
            <CTA />
        </>
    );
};

export default MatterMindDecorCaseStudy;

