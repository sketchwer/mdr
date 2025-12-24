import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const OrderToCashFinanceCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Order-to-Cash Finance Automation"
                subtitle="Streamlined sales order creation with automated sync between CRM and finance systems."
                clientName="Financial Services Company"
                clientDescription="A financial services company needed to streamline their order-to-cash process by automating sales order creation and ensuring seamless synchronization between their CRM and finance systems."
                website=""
                location="Global"
                industry="Finance Automation"
                duration="3 months"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Manual Order Processing",
                        description: "Sales orders were created manually in the CRM system, and then the same information had to be re-entered into the finance system, leading to duplication, errors, and delays."
                    },
                    {
                        title: "Data Synchronization Issues",
                        description: "Lack of automated sync between Zoho CRM and Zoho Books resulted in discrepancies between sales data and financial records, requiring time-consuming reconciliation."
                    },
                    {
                        title: "Delayed Invoice Generation",
                        description: "Invoice generation was delayed due to manual processes, affecting cash flow and customer satisfaction."
                    },
                    {
                        title: "Payment Tracking",
                        description: "Payment tracking and reconciliation required manual matching between CRM records and finance system entries."
                    }
                ]}
                solutions={[
                    {
                        title: "Automated Order Creation",
                        description: "Streamlined sales order creation in Zoho CRM with pre-filled templates, approval workflows, and validation rules to ensure data accuracy and completeness."
                    },
                    {
                        title: "CRM-Books Integration",
                        description: "Established seamless integration between Zoho CRM and Zoho Books, automatically syncing sales orders to create invoices, update inventory, and record receivables."
                    },
                    {
                        title: "Automated Invoice Generation",
                        description: "Automated invoice generation triggered when orders are approved in CRM, with automatic email delivery to customers and status updates back to CRM."
                    },
                    {
                        title: "Payment Reconciliation",
                        description: "Automated payment matching between CRM and Books, updating invoice status and accounts receivable automatically when payments are recorded."
                    },
                    {
                        title: "Financial Reporting",
                        description: "Created unified reporting dashboards showing order status, invoicing pipeline, payment status, and revenue recognition across both systems."
                    }
                ]}
                results={[
                    "Eliminated duplicate data entry between CRM and finance systems",
                    "Reduced order-to-invoice time from days to hours",
                    "Achieved 100% data synchronization accuracy",
                    "Improved invoice generation speed by 85%",
                    "Automated payment reconciliation process",
                    "Enhanced financial reporting accuracy and timeliness",
                    "Improved cash flow visibility with real-time metrics"
                ]}
                technologies={['Zoho CRM', 'Zoho Books']}
                whatWeDid={[
                    'Sales Order Automation Workflows',
                    'CRM-Books Integration Setup',
                    'Automated Invoice Generation',
                    'Payment Reconciliation Automation',
                    'Financial Reporting Dashboard',
                    'Order-to-Cash Process Optimization'
                ]}
            />
            <CTA />
        </>
    );
};

export default OrderToCashFinanceCaseStudy;

