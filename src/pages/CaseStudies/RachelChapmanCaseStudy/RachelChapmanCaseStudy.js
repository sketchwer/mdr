import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const RachelChapmanCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Enabled real‑time Shopify to CRM sync"
                subtitle="Discover how we enabled Rachel Chapman's e-commerce operations with real-time synchronization between Shopify and Zoho CRM."
                clientName="Rachel Chapman (Shopify Integration)"
                clientDescription="Rachel Chapman is an e-commerce business that needed real-time synchronization between their Shopify store and Zoho CRM to manage customer data and orders efficiently."
                website=""
                location="Global"
                industry="E‑Commerce"
                duration="3 months"
                image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Data Silos",
                        description: "Customer and order data in Shopify was disconnected from CRM, requiring manual data entry and leading to inconsistencies."
                    },
                    {
                        title: "Delayed Updates",
                        description: "Lack of real-time sync meant CRM updates were delayed, affecting customer service and sales follow-up processes."
                    }
                ]}
                solutions={[
                    {
                        title: "Real-Time Integration",
                        description: "Established real-time synchronization between Shopify and Zoho CRM, ensuring instant updates of customer and order information."
                    },
                    {
                        title: "Automated Data Flow",
                        description: "Implemented automated workflows that sync orders, customers, and inventory data between Shopify and CRM seamlessly."
                    }
                ]}
                results={[
                    "Achieved real-time data synchronization",
                    "Eliminated manual data entry",
                    "Improved customer data accuracy by 95%",
                    "Enhanced order management efficiency",
                    "Streamlined e-commerce operations"
                ]}
                technologies={['Shopify', 'Zoho CRM']}
                whatWeDid={[
                    'Shopify-Zoho CRM Integration',
                    'Real-Time Sync Configuration',
                    'Order Automation Setup',
                    'Customer Data Synchronization',
                    'Inventory Management Integration'
                ]}
            />
            <CTA />
        </>
    );
};

export default RachelChapmanCaseStudy;

