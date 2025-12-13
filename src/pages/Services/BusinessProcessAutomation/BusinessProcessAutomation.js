import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const BusinessProcessAutomation = () => {
    return (
        <>
            <ServiceDetail
                title="Business Process Automation"
                subtitle="AI & Automation"
                description="Automate repetitive business processes and workflows. Increase efficiency, reduce errors, and free up your team to focus on strategic work."
                overview="Business Process Automation eliminates manual, repetitive tasks by automating workflows across your organization. From data entry to approval processes, our automation solutions streamline operations, reduce costs, and improve accuracy while allowing your team to focus on high-value activities."
                features={[
                    {
                        title: "Workflow Automation",
                        description: "Automate complex business workflows and processes."
                    },
                    {
                        title: "Data Automation",
                        description: "Automated data entry, validation, and synchronization."
                    },
                    {
                        title: "Approval Workflows",
                        description: "Streamlined approval processes with automated routing."
                    },
                    {
                        title: "Task Automation",
                        description: "Automate routine tasks and scheduled operations."
                    },
                    {
                        title: "Integration Automation",
                        description: "Automated data flow between different systems."
                    },
                    {
                        title: "Reporting Automation",
                        description: "Automated report generation and distribution."
                    }
                ]}
                benefits={[
                    "Reduced manual work",
                    "Improved accuracy and consistency",
                    "Faster process execution",
                    "Cost savings",
                    "Better compliance",
                    "Enhanced productivity"
                ]}
                technologies={['Make.com', 'Zapier', 'Zoho Flow', 'API Integration', 'RPA', 'Custom Automation']}
                process={[
                    { step: "Analysis", description: "Identify processes suitable for automation" },
                    { step: "Design", description: "Design automated workflow architecture" },
                    { step: "Development", description: "Build and configure automation workflows" },
                    { step: "Testing", description: "Test automation in controlled environment" },
                    { step: "Deployment", description: "Deploy automation with monitoring" },
                    { step: "Optimization", description: "Continuously optimize and improve" }
                ]}
            />
            <CTA />
        </>
    );
};

export default BusinessProcessAutomation;

