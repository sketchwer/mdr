import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const CleverCafeCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Unified meetings, bookings & CRM updates"
                subtitle="Discover how we integrated Clever Café's service operations with unified meeting management, booking systems, and automated CRM updates."
                clientName="Clever Café"
                clientDescription="Clever Café is a service and training company that needed a unified system to manage meetings, bookings, and customer relationship management all in one place."
                website=""
                location="Global"
                industry="Service & Training"
                duration="4 months"
                image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Disconnected Systems",
                        description: "The company was using separate systems for meetings, bookings, and CRM, leading to fragmented customer data and inefficient workflow management."
                    },
                    {
                        title: "Manual Updates",
                        description: "CRM updates required manual entry after each meeting or booking, resulting in delays and potential data inconsistencies."
                    }
                ]}
                solutions={[
                    {
                        title: "Unified Platform Integration",
                        description: "Integrated Zoho Meeting, Zoho Bookings, and Zoho CRM into a unified platform, ensuring seamless data flow between all systems."
                    },
                    {
                        title: "Automated CRM Updates",
                        description: "Implemented automated workflows that update CRM records automatically when meetings are scheduled or bookings are made, eliminating manual data entry."
                    }
                ]}
                results={[
                    "Unified all service operations in one platform",
                    "Automated 90% of CRM update processes",
                    "Reduced booking processing time by 60%",
                    "Improved customer data accuracy",
                    "Enhanced meeting scheduling efficiency"
                ]}
                technologies={['Zoho CRM', 'Zoho Meeting', 'Zoho Bookings']}
                whatWeDid={[
                    'Zoho Meeting Integration',
                    'Zoho Bookings Setup',
                    'CRM Automation Workflows',
                    'Unified Dashboard Creation',
                    'Data Synchronization Configuration'
                ]}
            />
            <CTA />
        </>
    );
};

export default CleverCafeCaseStudy;

