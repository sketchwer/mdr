import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const KANOMedicalCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Implemented CRM & marketing automation"
                subtitle="Discover how we implemented KANO Medical's CRM and marketing automation to streamline patient management and marketing campaigns."
                clientName="KANO Medical"
                clientDescription="KANO Medical is a healthcare company that needed CRM and marketing automation to manage patient relationships and marketing campaigns effectively."
                website=""
                location="Global"
                industry="Healthcare"
                duration="5 months"
                image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Patient Management Complexity",
                        description: "Managing patient relationships and follow-ups required significant manual effort, leading to missed appointments and poor patient engagement."
                    },
                    {
                        title: "Marketing Inefficiency",
                        description: "Marketing campaigns were not automated, making it difficult to reach patients effectively and track campaign performance."
                    }
                ]}
                solutions={[
                    {
                        title: "CRM Implementation",
                        description: "Implemented Zoho CRM to manage patient relationships, appointments, and follow-ups efficiently."
                    },
                    {
                        title: "Marketing Automation",
                        description: "Set up Zoho Marketing automation to create targeted campaigns, track performance, and improve patient engagement."
                    }
                ]}
                results={[
                    "Improved patient management efficiency by 70%",
                    "Automated marketing campaign processes",
                    "Enhanced patient engagement",
                    "Improved appointment follow-up rates",
                    "Streamlined healthcare operations"
                ]}
                technologies={['Zoho CRM', 'Zoho Marketing']}
                whatWeDid={[
                    'Zoho CRM Implementation',
                    'Zoho Marketing Setup',
                    'Patient Management Automation',
                    'Marketing Campaign Configuration',
                    'Healthcare Workflow Optimization'
                ]}
            />
            <CTA />
        </>
    );
};

export default KANOMedicalCaseStudy;

