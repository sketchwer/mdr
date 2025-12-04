import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const VIACaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Efficient Insurance Claims Processing System"
                subtitle="Discover how we streamlined VIA's insurance claims processing with a comprehensive Zoho CRM solution."
                clientName="VIA"
                clientDescription="VIA is an insurance company specializing in claims processing. They needed a system to manage claims from submission to settlement, track documentation, and ensure compliance with regulations."
                website="https://via.com"
                location="United States"
                industry="Insurance"
                duration="6 months"
                image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Claims Processing Workflow",
                        description: "Managing complex claims workflows with multiple approval stages, documentation requirements, and regulatory compliance checks."
                    },
                    {
                        title: "Document Management",
                        description: "Organizing and tracking thousands of claim documents, ensuring proper version control and secure access."
                    }
                ]}
                solutions={[
                    {
                        title: "Zoho CRM Claims Module",
                        description: "Developed a custom claims management module in Zoho CRM with automated workflows, approval processes, and document tracking capabilities."
                    },
                    {
                        title: "Document Management Integration",
                        description: "Integrated document management system with Zoho CRM for seamless document storage, retrieval, and version control."
                    }
                ]}
                results={[
                    "Reduced claims processing time by 50%",
                    "Improved accuracy by 95%",
                    "Enhanced compliance tracking",
                    "Increased customer satisfaction by 40%"
                ]}
                technologies={['Zoho CRM', 'Document Management', 'Workflow Automation', 'Compliance Tracking']}
                whatWeDid={[
                    'Zoho CRM Custom Development',
                    'Claims Processing Workflow',
                    'Document Management Integration',
                    'Approval Process Automation',
                    'Compliance Tracking System',
                    'Custom Reporting & Analytics'
                ]}
            />
            <CTA />
        </>
    );
};

export default VIACaseStudy;

