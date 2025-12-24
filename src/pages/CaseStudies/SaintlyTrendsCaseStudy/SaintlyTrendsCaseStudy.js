import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const SaintlyTrendsCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Saintly Trends – Shopify–Zoho One Commerce Automation"
                subtitle="Fully automated Shopify order lifecycle across CRM, inventory, finance, logistics, and marketing."
                clientName="Saintly Trends"
                clientDescription="An e-commerce business needed to automate their manual order processing, invoicing, GST calculations, and inventory management by integrating Shopify with Zoho One."
                website=""
                location="Global"
                industry="E‑Commerce"
                duration="5 months"
                image="/case study/Saintly Trends .jpg"
                challenges={[
                    {
                        title: "Manual Order & Accounting Work",
                        description: "Invoices, GST, and inventory were handled manually."
                    }
                ]}
                solutions={[
                    {
                        title: "Shopify as Single Source of Truth",
                        description: "Real-time sync across CRM, Books, Inventory, Logistics, and Support."
                    }
                ]}
                results={[
                    "Fully automated order lifecycle from Shopify to fulfillment",
                    "Automated GST invoicing eliminating manual calculations",
                    "Real-time inventory and shipment tracking",
                    "Seamless integration across CRM, finance, and logistics",
                    "Automated marketing and support workflows",
                    "Comprehensive analytics dashboards for business insights"
                ]}
                technologies={['Shopify', 'Zoho One', 'Shiprocket', 'WhatsApp API']}
                whatWeDid={[
                    'Shopify ↔ Zoho One integration',
                    'Automated GST invoicing',
                    'Inventory & shipment tracking',
                    'Marketing & support automation',
                    'Analytics dashboards'
                ]}
            />
            <CTA />
        </>
    );
};

export default SaintlyTrendsCaseStudy;

