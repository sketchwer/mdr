import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const WilfredoLabrodaCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Optimized Desk workflows & reporting"
                subtitle="Discover how we optimized Wilfredo Labroda's customer support operations with efficient Desk workflows and comprehensive reporting."
                clientName="Wilfredo Labroda"
                clientDescription="Wilfredo Labroda needed to optimize their customer support workflows and improve reporting capabilities to better serve their clients."
                website=""
                location="Global"
                industry="Customer Support"
                duration="3 months"
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Inefficient Support Workflows",
                        description: "Customer support workflows were not optimized, leading to delayed response times and inconsistent service quality."
                    },
                    {
                        title: "Limited Reporting",
                        description: "Lack of comprehensive reporting made it difficult to track support performance, identify bottlenecks, and make data-driven decisions."
                    }
                ]}
                solutions={[
                    {
                        title: "Desk Workflow Optimization",
                        description: "Optimized Zoho Desk workflows to streamline ticket management, automate routing, and improve response times."
                    },
                    {
                        title: "Advanced Reporting Setup",
                        description: "Implemented comprehensive reporting using Zoho Analytics to track support metrics, performance, and customer satisfaction."
                    }
                ]}
                results={[
                    "Improved support response time by 60%",
                    "Enhanced workflow efficiency by 75%",
                    "Gained comprehensive support insights",
                    "Improved customer satisfaction scores",
                    "Streamlined ticket management processes"
                ]}
                technologies={['Zoho Desk', 'Zoho Analytics']}
                whatWeDid={[
                    'Zoho Desk Workflow Optimization',
                    'Ticket Management Automation',
                    'Zoho Analytics Integration',
                    'Reporting Dashboard Creation',
                    'Performance Metrics Setup'
                ]}
            />
            <CTA />
        </>
    );
};

export default WilfredoLabrodaCaseStudy;

