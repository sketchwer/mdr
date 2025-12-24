import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const VEHKAxleCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="VEHK Axle – Smart Franchise & Operations Management System"
                subtitle="Unified sales, billing, subscriptions, support, and franchise operations in one Zoho One ecosystem."
                clientName="VEHK Axle"
                clientDescription="An automobile company needed to unify their disconnected business systems and implement smart franchise allocation logic that standard CRM could not handle."
                website=""
                location="Global"
                industry="Automobile"
                duration="6 months"
                image="/case study/VEHK Axle .jpg"
                challenges={[
                    {
                        title: "Disconnected Business Systems",
                        description: "Sales, billing, subscriptions, and support were running separately."
                    },
                    {
                        title: "Franchise Allocation Not Possible",
                        description: "Standard CRM could not assign leads based on region, vehicle type, and service rules."
                    }
                ]}
                solutions={[
                    {
                        title: "Unified Zoho One Platform",
                        description: "All operations were connected into one system."
                    },
                    {
                        title: "Custom CRM Widget for Franchise Logic (Key Highlight)",
                        description: "A custom widget was built to apply rule-based franchise assignment, map leads and customers automatically, and show franchise ownership across CRM, deals, and invoices. This removed CRM constraints and enabled unlimited franchise scaling."
                    }
                ]}
                results={[
                    "Unified all business operations in one Zoho One ecosystem",
                    "Automated franchise allocation based on complex business rules",
                    "Eliminated CRM limitations for franchise management",
                    "Real-time visibility across sales, billing, and support",
                    "Scalable franchise system without constraints",
                    "Centralized CXO dashboards for decision-making"
                ]}
                technologies={['Zoho One', 'Custom CRM Widget', 'Zoho Analytics']}
                whatWeDid={[
                    'Zoho CRM customization & automation',
                    'Zoho Books subscription & billing integration',
                    'Zoho Desk support automation',
                    'Custom CRM widget for franchise allocation',
                    'Zoho Analytics CXO dashboards',
                    'End-to-end system automation'
                ]}
            />
            <CTA />
        </>
    );
};

export default VEHKAxleCaseStudy;

