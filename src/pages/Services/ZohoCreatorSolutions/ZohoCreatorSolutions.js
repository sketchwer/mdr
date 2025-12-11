import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoCreatorSolutions = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho Creator Solutions"
                subtitle="Zoho Solutions"
                description="Create applications exactly the way your business works. We build custom Zoho Creator apps for production, HR, inventory, field teams, approvals, and automation — all designed using Deluge, Widgets, and advanced integrations."
                overview="Zoho Creator is a powerful low-code platform that allows you to build custom applications tailored to your unique business processes. Our Zoho Creator Solutions service helps you create applications that work exactly the way your business operates, with complete automation and seamless integrations."
                features={[
                    {
                        title: "Custom Application Development",
                        description: "Build custom applications tailored to your specific business needs."
                    },
                    {
                        title: "Production Management Apps",
                        description: "Custom apps for production planning, tracking, and management."
                    },
                    {
                        title: "HR & Attendance Systems",
                        description: "Complete HR management and attendance tracking solutions."
                    },
                    {
                        title: "Inventory Management",
                        description: "Custom inventory tracking and management applications."
                    },
                    {
                        title: "Field Team Management",
                        description: "Mobile-friendly apps for field teams and remote workers."
                    },
                    {
                        title: "Approval Workflows",
                        description: "Automated approval workflows for various business processes."
                    }
                ]}
                benefits={[
                    "Applications built exactly for your business",
                    "Complete automation for approvals and workflows",
                    "Built using Deluge, Widgets, and advanced integrations",
                    "Scalable and flexible solutions",
                    "Mobile-friendly applications",
                    "Seamless integration with other Zoho apps"
                ]}
                technologies={['Zoho Creator', 'Deluge Scripting', 'Zoho Widgets', 'API Integration', 'Mobile App Development', 'Workflow Automation']}
                process={[
                    { step: "Requirements", description: "Understand your business processes and requirements" },
                    { step: "Design", description: "Design custom application architecture" },
                    { step: "Development", description: "Develop using Deluge, Widgets, and integrations" },
                    { step: "Integration", description: "Integrate with existing systems and Zoho apps" },
                    { step: "Testing", description: "Comprehensive testing and quality assurance" },
                    { step: "Deployment", description: "Deploy and provide training" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoCreatorSolutions;

