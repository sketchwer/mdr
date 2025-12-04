import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const MFABICaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Streamlined Fulfillment Operations with Custom Zoho Solution"
                subtitle="Discover how we transformed MFABI's fulfillment operations with a comprehensive Zoho-based solution that automated workflows and improved efficiency."
                clientName="MFABI"
                clientDescription="MFABI is a fulfillment company that manages inventory, shipping, and logistics for multiple e-commerce businesses. They needed a unified system to manage orders, inventory, and customer communications efficiently."
                website="https://mfabi.com"
                location="United States"
                industry="Logistics & Fulfillment"
                duration="4 months"
                image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Multi-Channel Order Management",
                        description: "Managing orders from multiple e-commerce platforms (Shopify, WooCommerce, Amazon) in a unified system, ensuring accurate inventory tracking and preventing overselling across channels."
                    },
                    {
                        title: "Inventory Synchronization",
                        description: "Maintaining real-time inventory synchronization across all sales channels and warehouse locations, ensuring accurate stock levels and preventing fulfillment errors."
                    },
                    {
                        title: "Workflow Automation",
                        description: "Automating repetitive tasks such as order processing, label generation, shipping notifications, and inventory updates to reduce manual work and improve accuracy."
                    }
                ]}
                solutions={[
                    {
                        title: "Zoho Creator Custom Application",
                        description: "Built a custom Zoho Creator application that integrates with all major e-commerce platforms, providing a unified dashboard for order management, inventory tracking, and fulfillment operations."
                    },
                    {
                        title: "Zoho Inventory Integration",
                        description: "Integrated Zoho Inventory for comprehensive inventory management, including multi-location tracking, automated reorder points, and real-time stock synchronization across all channels."
                    },
                    {
                        title: "Automated Workflows",
                        description: "Created automated workflows using Zoho's Deluge scripting to handle order processing, generate shipping labels, send customer notifications, and update inventory levels automatically."
                    }
                ]}
                results={[
                    "Reduced order processing time by 70% through automation",
                    "Achieved 99.5% inventory accuracy across all channels",
                    "Eliminated overselling incidents completely",
                    "Reduced manual data entry by 80%",
                    "Improved order fulfillment speed by 50%",
                    "Increased customer satisfaction scores by 35%"
                ]}
                technologies={['Zoho Creator', 'Zoho Inventory', 'Deluge', 'REST API', 'Webhooks']}
                whatWeDid={[
                    'Zoho Creator Custom Development',
                    'Multi-platform Integration',
                    'Inventory Management System',
                    'Workflow Automation',
                    'API Integration',
                    'Custom Reporting & Analytics'
                ]}
            />
            <CTA />
        </>
    );
};

export default MFABICaseStudy;

