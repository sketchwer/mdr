import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoCRMImplementation = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho CRM Implementation"
                subtitle="Zoho Solutions"
                description="Transform your sales operations with comprehensive Zoho CRM implementation. Streamline customer relationships, automate sales processes, and drive revenue growth."
                overview="Zoho CRM is a powerful customer relationship management platform that helps businesses manage their sales pipeline, track customer interactions, and automate sales processes. Our expert implementation ensures your CRM is configured to match your unique business needs, maximizing efficiency and ROI."
                features={[
                    {
                        title: "Custom CRM Setup",
                        description: "Tailored CRM configuration aligned with your sales process and business requirements."
                    },
                    {
                        title: "Sales Pipeline Management",
                        description: "Visual pipeline tracking with automated stages and deal management."
                    },
                    {
                        title: "Contact & Lead Management",
                        description: "Centralized database for all customer interactions and lead tracking."
                    },
                    {
                        title: "Email Integration",
                        description: "Seamless email integration for tracking communications within CRM."
                    },
                    {
                        title: "Reporting & Analytics",
                        description: "Advanced reporting dashboards for sales performance insights."
                    },
                    {
                        title: "Mobile CRM Access",
                        description: "Full CRM functionality on mobile devices for on-the-go access."
                    }
                ]}
                benefits={[
                    "Improved sales productivity and efficiency",
                    "Better customer relationship management",
                    "Automated sales workflows",
                    "Real-time sales insights and reporting",
                    "Enhanced team collaboration",
                    "Increased revenue and conversion rates"
                ]}
                technologies={['Zoho CRM', 'Zoho SalesIQ', 'Zoho Campaigns', 'Zoho Analytics', 'API Integration', 'Custom Modules']}
                process={[
                    { step: "Discovery", description: "Understand your business processes and sales requirements" },
                    { step: "Planning", description: "Design CRM structure and workflow mapping" },
                    { step: "Configuration", description: "Set up custom fields, modules, and automation rules" },
                    { step: "Integration", description: "Integrate with existing tools and email systems" },
                    { step: "Training", description: "Comprehensive training for your team" },
                    { step: "Support", description: "Ongoing support and optimization" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoCRMImplementation;

