import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const ShopifyZohoERPCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Shopify–Zoho ERP Integration"
                subtitle="Centralized customers, orders, inventory, invoicing, and delivery tracking into one automated ERP system."
                clientName="E-Commerce Retailer"
                clientDescription="An e-commerce business operating on Shopify needed to integrate their online store with a comprehensive ERP system to centralize customer data, order management, inventory tracking, invoicing, and delivery management."
                website=""
                location="Global"
                industry="E-Commerce"
                duration="3 months"
                image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Disconnected Systems",
                        description: "Shopify store data was siloed from backend operations. Customer information, orders, inventory, and invoicing were managed in separate systems, leading to data discrepancies and manual reconciliation."
                    },
                    {
                        title: "Inventory Synchronization",
                        description: "Real-time inventory synchronization between Shopify and warehouse systems was non-existent, causing overselling and stock discrepancies."
                    },
                    {
                        title: "Order Fulfillment Tracking",
                        description: "Order processing, invoicing, and delivery tracking required manual intervention, leading to delays and errors in customer service."
                    }
                ]}
                solutions={[
                    {
                        title: "Shopify-Zoho CRM Integration",
                        description: "Established real-time bi-directional integration between Shopify and Zoho CRM, automatically syncing customer data, order details, and purchase history."
                    },
                    {
                        title: "Inventory Management Automation",
                        description: "Integrated Zoho Inventory with Shopify to provide real-time stock levels, automated inventory updates, and low-stock alerts."
                    },
                    {
                        title: "Automated Order Processing",
                        description: "Automated the complete order-to-cash cycle: order creation in CRM, invoice generation in Zoho Books, inventory deduction, and delivery tracking synchronization."
                    },
                    {
                        title: "Analytics Dashboard",
                        description: "Created comprehensive analytics in Zoho Analytics combining Shopify sales data with inventory and financial metrics for unified business insights."
                    }
                ]}
                results={[
                    "Eliminated manual data entry for orders and customers",
                    "Achieved 100% real-time inventory synchronization",
                    "Reduced order processing time by 75%",
                    "Improved inventory accuracy to 99.5%",
                    "Automated invoice generation for all orders",
                    "Enhanced customer service with unified order tracking"
                ]}
                technologies={['Shopify', 'Zoho CRM', 'Zoho Inventory', 'Zoho Analytics']}
                whatWeDid={[
                    'Shopify-Zoho CRM Integration Setup',
                    'Real-time Inventory Synchronization',
                    'Automated Order-to-Cash Workflow',
                    'Invoice Generation Automation',
                    'Delivery Tracking Integration',
                    'Unified Analytics Dashboard Creation'
                ]}
            />
            <CTA />
        </>
    );
};

export default ShopifyZohoERPCaseStudy;

