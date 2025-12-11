import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const InfinityAdvertisingCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Built a complete Zoho‑based ERP ecosystem"
                subtitle="Discover how we built Infinity Advertising Pvt. Ltd. a comprehensive Zoho-based ERP ecosystem to manage all business operations."
                clientName="Infinity Advertising Pvt. Ltd."
                clientDescription="Infinity Advertising Pvt. Ltd. is an advertising and ERP company that needed a complete business management system to handle CRM, accounting, and operations in one unified platform."
                website=""
                location="Global"
                industry="Advertising & ERP"
                duration="6 months"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Fragmented Systems",
                        description: "The company was using multiple disconnected systems for CRM, accounting, and operations, leading to data silos and inefficient workflows."
                    },
                    {
                        title: "Lack of Integration",
                        description: "No integration between different business functions resulted in duplicate data entry, delayed reporting, and poor visibility across operations."
                    }
                ]}
                solutions={[
                    {
                        title: "Complete ERP Ecosystem",
                        description: "Built a comprehensive Zoho-based ERP ecosystem using Zoho Creator, CRM, and Books, integrating all business functions into one unified platform."
                    },
                    {
                        title: "Unified Data Management",
                        description: "Established seamless data flow between CRM, accounting, and operations, ensuring real-time visibility and accurate reporting across all departments."
                    }
                ]}
                results={[
                    "Unified all business operations in one platform",
                    "Eliminated data silos and duplicate entry",
                    "Improved operational efficiency by 80%",
                    "Enhanced real-time reporting capabilities",
                    "Streamlined business workflows across departments"
                ]}
                technologies={['Zoho Creator', 'Zoho CRM', 'Zoho Books']}
                whatWeDid={[
                    'Zoho Creator Custom Applications',
                    'Zoho CRM Implementation',
                    'Zoho Books Integration',
                    'ERP Ecosystem Architecture',
                    'Cross-Platform Data Synchronization'
                ]}
            />
            <CTA />
        </>
    );
};

export default InfinityAdvertisingCaseStudy;

