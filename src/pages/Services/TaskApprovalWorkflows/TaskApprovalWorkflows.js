import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const TaskApprovalWorkflows = () => {
    return (
        <>
            <ServiceDetail
                title="Task & Approval Workflows"
                subtitle="AI & Automation"
                description="Streamline your business processes with intelligent task and approval workflows. Automate approvals, reduce bottlenecks, and accelerate decision-making across your organization."
                overview="Task and approval workflows automation eliminates manual bottlenecks in your business processes. Our advanced workflow solutions automate task assignments, approvals, notifications, and escalations, ensuring faster decision-making and improved operational efficiency. From simple approval chains to complex multi-stage workflows, we create intelligent systems that adapt to your business needs."
                features={[
                    {
                        title: "Automated Task Assignment",
                        description: "Intelligently assign tasks based on roles, workload, and business rules with dynamic routing capabilities."
                    },
                    {
                        title: "Multi-Level Approval Chains",
                        description: "Configure complex approval workflows with parallel, sequential, and conditional approval paths."
                    },
                    {
                        title: "Real-Time Notifications",
                        description: "Instant notifications via email, SMS, and in-app alerts for pending tasks and approvals."
                    },
                    {
                        title: "Escalation Management",
                        description: "Automatic escalation to supervisors when approvals are delayed or pending beyond thresholds."
                    },
                    {
                        title: "Conditional Workflows",
                        description: "Smart workflows that adapt based on conditions, amounts, departments, or custom criteria."
                    },
                    {
                        title: "Audit Trail & Compliance",
                        description: "Complete audit trails for all approvals, decisions, and workflow steps for compliance tracking."
                    }
                ]}
                benefits={[
                    "Reduce approval processing time by up to 80%",
                    "Eliminate manual bottlenecks and delays",
                    "Improve accountability and transparency",
                    "Ensure compliance with approval policies",
                    "Enhance team productivity and efficiency",
                    "Real-time visibility into workflow status"
                ]}
                technologies={['Zoho Creator', 'Zoho Flow', 'Zoho CRM', 'Custom Workflow Engine', 'API Integration', 'Business Process Automation']}
                stats={[
                    { number: "80%", label: "Time Reduction" },
                    { number: "500+", label: "Workflows Automated" },
                    { number: "99%", label: "Accuracy Rate" }
                ]}
                process={[
                    { title: "Process Analysis", description: "Analyze your current approval processes and identify automation opportunities" },
                    { title: "Workflow Design", description: "Design optimal workflow structures with approval rules and conditions" },
                    { title: "Configuration", description: "Configure automation rules, notifications, and escalation policies" },
                    { title: "Integration", description: "Integrate with existing systems like CRM, ERP, and HR platforms" },
                    { title: "Testing", description: "Thorough testing of workflows with real scenarios and edge cases" },
                    { title: "Training & Deployment", description: "Train your team and deploy workflows with ongoing support" }
                ]}
                relatedServices={[
                    { title: "Business Process Automation", path: "/services/business-process-automation", description: "End-to-end process automation" },
                    { title: "Internal HR/Finance Automation", path: "/services/internal-hr-finance-automation", description: "HR and finance workflow automation" },
                    { title: "Zoho Creator Applications", path: "/services/zoho-creator-applications", description: "Custom workflow applications" }
                ]}
            />
            <CTA />
        </>
    );
};

export default TaskApprovalWorkflows;

