import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const CCLimitedCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Structured pipeline for spare parts sales"
                subtitle="Discover how we structured CC Limited's sales pipeline for spare parts with efficient CRM workflows and sales management."
                clientName="CC Limited"
                clientDescription="CC Limited is an automobile company that needed a structured sales pipeline to manage spare parts sales efficiently."
                website=""
                location="Global"
                industry="Automobile"
                duration="4 months"
                image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Unstructured Sales Process",
                        description: "The spare parts sales process was unstructured, making it difficult to track leads, manage inventory, and close deals efficiently."
                    },
                    {
                        title: "Inventory Management",
                        description: "Lack of integration between sales and inventory led to stock issues and delayed order fulfillment."
                    }
                ]}
                solutions={[
                    {
                        title: "Structured Sales Pipeline",
                        description: "Implemented a structured sales pipeline in Zoho CRM to manage spare parts sales from lead to order fulfillment."
                    },
                    {
                        title: "Inventory Integration",
                        description: "Integrated sales pipeline with inventory management to ensure real-time stock availability and efficient order processing."
                    }
                ]}
                results={[
                    "Structured spare parts sales pipeline",
                    "Improved sales tracking and visibility",
                    "Enhanced inventory management",
                    "Reduced order processing time by 60%",
                    "Streamlined automobile sales operations"
                ]}
                technologies={['Zoho CRM']}
                whatWeDid={[
                    'Sales Pipeline Structure',
                    'Zoho CRM Implementation',
                    'Inventory Integration',
                    'Sales Workflow Automation',
                    'Order Management Setup'
                ]}
            />
            <CTA />
        </>
    );
};

export default CCLimitedCaseStudy;

