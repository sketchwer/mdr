import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const MyWorkCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Automated candidate communication & filters"
                subtitle="Discover how we automated MyWork's candidate communication and filtering processes to streamline recruitment operations."
                clientName="MyWork"
                clientDescription="MyWork is a recruitment company that needed automated systems for candidate communication and filtering to improve recruitment efficiency."
                website=""
                location="Global"
                industry="Recruitment"
                duration="3 months"
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Manual Communication",
                        description: "Candidate communication required significant manual effort, leading to delays and inconsistent messaging."
                    },
                    {
                        title: "Inefficient Filtering",
                        description: "Candidate filtering and screening processes were manual and time-consuming, affecting recruitment speed and quality."
                    }
                ]}
                solutions={[
                    {
                        title: "Automated Communication",
                        description: "Implemented automated communication workflows in Zoho Recruit to send emails, notifications, and updates to candidates automatically."
                    },
                    {
                        title: "Smart Filtering System",
                        description: "Set up automated filtering and screening processes to identify qualified candidates quickly and efficiently."
                    }
                ]}
                results={[
                    "Automated 90% of candidate communication",
                    "Improved filtering efficiency by 80%",
                    "Reduced time-to-screen candidates",
                    "Enhanced candidate experience",
                    "Streamlined recruitment operations"
                ]}
                technologies={['Zoho Recruit']}
                whatWeDid={[
                    'Communication Automation',
                    'Zoho Recruit Setup',
                    'Candidate Filtering System',
                    'Email Automation Workflows',
                    'Screening Process Optimization'
                ]}
            />
            <CTA />
        </>
    );
};

export default MyWorkCaseStudy;

