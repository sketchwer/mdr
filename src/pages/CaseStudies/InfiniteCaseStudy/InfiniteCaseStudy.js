import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const InfiniteCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Field Service Management Revolutionized"
                subtitle="Discover how we transformed Infinite's field service operations with a comprehensive Zoho-based solution."
                clientName="Infinite"
                clientDescription="Infinite is a field service management company that provides on-site services to clients across multiple industries. They needed a unified system to manage technicians, schedules, work orders, and customer communications."
                website="https://infinite.com"
                location="United States"
                industry="Field Service"
                duration="5 months"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Scheduling & Dispatch",
                        description: "Managing complex scheduling for multiple technicians across different locations, ensuring optimal route planning and timely service delivery."
                    },
                    {
                        title: "Work Order Management",
                        description: "Tracking work orders from creation to completion, managing parts inventory, and ensuring accurate billing and invoicing."
                    }
                ]}
                solutions={[
                    {
                        title: "Zoho Creator Field Service App",
                        description: "Developed a custom Zoho Creator application specifically designed for field service management, including technician scheduling, route optimization, and real-time tracking."
                    },
                    {
                        title: "Mobile App Integration",
                        description: "Created mobile applications for technicians to access work orders, update job status, capture signatures, and communicate with the office in real-time."
                    }
                ]}
                results={[
                    "Improved technician utilization by 45%",
                    "Reduced scheduling conflicts by 80%",
                    "Increased first-time fix rate by 35%",
                    "Reduced administrative time by 60%"
                ]}
                technologies={['Zoho Creator', 'Zoho Field Service', 'Mobile App', 'GPS Integration']}
                whatWeDid={[
                    'Zoho Creator Custom Development',
                    'Field Service Mobile App',
                    'Scheduling & Dispatch System',
                    'Work Order Management',
                    'GPS Tracking Integration',
                    'Real-time Communication'
                ]}
            />
            <CTA />
        </>
    );
};

export default InfiniteCaseStudy;

