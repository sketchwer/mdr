import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoBooksInventory = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho Books & Inventory"
                subtitle="Zoho Solutions"
                description="Complete accounting and inventory management solution with Zoho Books. Manage finances, track inventory, and streamline your business operations."
                overview="Zoho Books is a comprehensive accounting software that combines financial management with inventory tracking. Our implementation helps you manage invoices, expenses, inventory, and financial reporting all in one integrated platform."
                features={[
                    {
                        title: "Accounting & Bookkeeping",
                        description: "Complete financial management with automated bookkeeping."
                    },
                    {
                        title: "Inventory Management",
                        description: "Real-time inventory tracking and stock management."
                    },
                    {
                        title: "Invoice Management",
                        description: "Professional invoicing with automated reminders."
                    },
                    {
                        title: "Expense Tracking",
                        description: "Track and categorize business expenses efficiently."
                    },
                    {
                        title: "Financial Reporting",
                        description: "Comprehensive financial reports and tax compliance."
                    },
                    {
                        title: "Multi-Currency Support",
                        description: "Handle transactions in multiple currencies."
                    }
                ]}
                benefits={[
                    "Automated accounting processes",
                    "Real-time inventory visibility",
                    "Improved cash flow management",
                    "Tax compliance made easy",
                    "Better financial decision-making",
                    "Reduced manual errors"
                ]}
                technologies={['Zoho Books', 'Zoho Inventory', 'Payment Gateways', 'Bank Integration', 'GST/Tax Modules']}
                process={[
                    { step: "Assessment", description: "Review current accounting and inventory processes" },
                    { step: "Setup", description: "Configure chart of accounts and inventory structure" },
                    { step: "Integration", description: "Integrate with banks and payment gateways" },
                    { step: "Data Migration", description: "Migrate existing financial and inventory data" },
                    { step: "Training", description: "Train your team on using the system" },
                    { step: "Support", description: "Ongoing support and optimization" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoBooksInventory;

