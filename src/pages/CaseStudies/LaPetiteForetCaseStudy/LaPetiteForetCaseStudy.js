import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const LaPetiteForetCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Automated formatted CV generation"
                subtitle="Discover how we automated La Petite Forêt's CV generation process with formatted templates and automated workflows."
                clientName="La Petite Forêt"
                clientDescription="La Petite Forêt is a recruitment company that needed automated CV generation with formatted templates to streamline candidate documentation processes."
                website=""
                location="Global"
                industry="Recruitment"
                duration="3 months"
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Manual CV Creation",
                        description: "Creating formatted CVs for candidates required significant manual effort and was time-consuming, especially for high-volume recruitment."
                    },
                    {
                        title: "Inconsistent Formatting",
                        description: "CV formatting was inconsistent across different candidates, affecting professional presentation and brand consistency."
                    }
                ]}
                solutions={[
                    {
                        title: "Automated CV Generation",
                        description: "Implemented automated CV generation in Zoho Recruit with formatted templates that ensure consistency and professional presentation."
                    },
                    {
                        title: "Template Customization",
                        description: "Created customizable CV templates that automatically populate candidate information while maintaining professional formatting."
                    }
                ]}
                results={[
                    "Automated CV generation process",
                    "Reduced CV creation time by 85%",
                    "Ensured consistent formatting",
                    "Improved candidate documentation efficiency",
                    "Streamlined recruitment operations"
                ]}
                technologies={['Zoho Recruit']}
                whatWeDid={[
                    'CV Generation Automation',
                    'Zoho Recruit Setup',
                    'Template Design & Configuration',
                    'Document Automation Workflows',
                    'Formatting Standardization'
                ]}
            />
            <CTA />
        </>
    );
};

export default LaPetiteForetCaseStudy;

