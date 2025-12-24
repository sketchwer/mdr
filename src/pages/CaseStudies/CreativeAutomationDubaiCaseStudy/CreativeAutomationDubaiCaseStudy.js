import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const CreativeAutomationDubaiCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Creative Automation Dubai – Unified Business Automation Platform"
                subtitle="Zoho Creator-driven ERP replacing spreadsheets across sales, finance, inventory, and HR."
                clientName="Creative Automation Dubai"
                clientDescription="An advertising and ERP company needed to replace their disconnected tools and spreadsheets with a unified automation platform using Zoho Creator as the core engine."
                website=""
                location="Dubai"
                industry="Advertising & ERP"
                duration="6 months"
                image="/case study/Creative Automation Dubai .jpg"
                challenges={[
                    {
                        title: "Multiple Disconnected Tools",
                        description: "Sales, finance, inventory, and HR worked independently."
                    }
                ]}
                solutions={[
                    {
                        title: "Zoho Creator as Core Automation Engine",
                        description: "Creator controlled logic, approvals, validations, and cross-module workflows beyond standard CRM limits."
                    }
                ]}
                results={[
                    "Unified all business operations in one platform",
                    "Replaced spreadsheets with automated workflows",
                    "Cross-module automation beyond standard CRM capabilities",
                    "Streamlined approvals and validations",
                    "Unified dashboards and reports across all departments",
                    "Improved efficiency and data accuracy"
                ]}
                technologies={['Zoho Creator', 'Zoho CRM', 'Zoho Books', 'Zoho People']}
                whatWeDid={[
                    'Custom Zoho Creator applications',
                    'Sales-to-finance automation',
                    'Inventory & HR workflows',
                    'Unified dashboards & reports'
                ]}
            />
            <CTA />
        </>
    );
};

export default CreativeAutomationDubaiCaseStudy;

