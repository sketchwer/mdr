import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const TimHopperCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Delivered full recruitment analytics automation"
                subtitle="Discover how we automated Tim Hopper's recruitment operations with comprehensive analytics and reporting capabilities."
                clientName="Tim Hopper (Zoho Recruit)"
                clientDescription="Tim Hopper is a recruitment firm using Zoho Recruit that needed comprehensive analytics automation to track and optimize their recruitment processes."
                website=""
                location="Global"
                industry="Recruitment"
                duration="4 months"
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Limited Analytics",
                        description: "The recruitment team lacked comprehensive analytics to track performance, identify bottlenecks, and optimize hiring processes."
                    },
                    {
                        title: "Manual Reporting",
                        description: "Generating recruitment reports required significant manual effort, making it difficult to get real-time insights."
                    }
                ]}
                solutions={[
                    {
                        title: "Recruitment Analytics Automation",
                        description: "Implemented comprehensive analytics automation in Zoho Recruit to track key recruitment metrics, candidate pipeline, and performance indicators."
                    },
                    {
                        title: "Automated Reporting",
                        description: "Set up automated reporting dashboards that provide real-time insights into recruitment performance and candidate status."
                    }
                ]}
                results={[
                    "Automated 100% of recruitment analytics",
                    "Improved recruitment visibility by 85%",
                    "Enhanced data-driven decision making",
                    "Reduced reporting time by 80%",
                    "Optimized recruitment processes"
                ]}
                technologies={['Zoho Recruit']}
                whatWeDid={[
                    'Zoho Recruit Analytics Setup',
                    'Recruitment Dashboard Creation',
                    'Performance Metrics Automation',
                    'Candidate Pipeline Tracking',
                    'Reporting Automation'
                ]}
            />
            <CTA />
        </>
    );
};

export default TimHopperCaseStudy;

