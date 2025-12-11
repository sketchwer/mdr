import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const PausProjectCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Streamlined order creation with automated sync"
                subtitle="Discover how we transformed Pau's Project with automated finance workflows and seamless CRM-Books integration."
                clientName="Pau's Project"
                clientDescription="Pau's Project is a finance automation company that needed streamlined order creation processes with automated synchronization between their CRM and accounting systems."
                website=""
                location="Global"
                industry="Finance Automation"
                duration="3 months"
                image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Manual Order Processing",
                        description: "The company was struggling with manual order creation processes that were time-consuming and prone to errors. There was no synchronization between the CRM system and accounting books, leading to data discrepancies."
                    },
                    {
                        title: "Data Synchronization",
                        description: "Lack of automated sync between Zoho CRM and Zoho Books resulted in duplicate data entry, delayed invoicing, and reconciliation issues."
                    }
                ]}
                solutions={[
                    {
                        title: "Automated Order Creation",
                        description: "Implemented automated workflows in Zoho CRM that streamline order creation processes, reducing manual effort and ensuring data accuracy."
                    },
                    {
                        title: "CRM-Books Integration",
                        description: "Established seamless integration between Zoho CRM and Zoho Books, enabling automatic synchronization of orders, invoices, and payment information in real-time."
                    }
                ]}
                results={[
                    "Reduced order processing time by 70%",
                    "Eliminated manual data entry errors",
                    "Achieved 100% synchronization between CRM and Books",
                    "Improved invoice generation speed by 80%",
                    "Enhanced data accuracy and reporting capabilities"
                ]}
                technologies={['Zoho CRM', 'Zoho Books']}
                whatWeDid={[
                    'Automated Order Creation Workflows',
                    'CRM-Books Integration Setup',
                    'Data Synchronization Configuration',
                    'Custom Automation Rules',
                    'Reporting & Analytics Setup'
                ]}
            />
            <CTA />
        </>
    );
};

export default PausProjectCaseStudy;

