import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const TalencityCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Cleaned & optimized recruitment operations"
                subtitle="Discover how we cleaned and optimized Talencity Inc.'s recruitment operations with efficient data management and process automation."
                clientName="Talencity Inc."
                clientDescription="Talencity Inc. is a recruitment company that needed to clean their existing data and optimize recruitment operations for better efficiency."
                website=""
                location="Global"
                industry="Recruitment"
                duration="5 months"
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Data Quality Issues",
                        description: "The recruitment database contained duplicate, outdated, and incomplete candidate records, affecting operational efficiency."
                    },
                    {
                        title: "Inefficient Processes",
                        description: "Recruitment processes were not optimized, leading to delays in candidate screening, interviews, and placements."
                    }
                ]}
                solutions={[
                    {
                        title: "Data Cleaning & Deduplication",
                        description: "Cleaned and deduplicated candidate data in Zoho Recruit and CRM, ensuring data accuracy and quality."
                    },
                    {
                        title: "Process Optimization",
                        description: "Optimized recruitment workflows to streamline candidate screening, interview scheduling, and placement processes."
                    }
                ]}
                results={[
                    "Cleaned and optimized candidate database",
                    "Improved data quality by 90%",
                    "Enhanced recruitment process efficiency by 75%",
                    "Reduced time-to-hire",
                    "Streamlined recruitment operations"
                ]}
                technologies={['Zoho Recruit', 'Zoho CRM']}
                whatWeDid={[
                    'Data Cleaning & Deduplication',
                    'Zoho Recruit Optimization',
                    'Zoho CRM Integration',
                    'Recruitment Workflow Automation',
                    'Process Optimization'
                ]}
            />
            <CTA />
        </>
    );
};

export default TalencityCaseStudy;

