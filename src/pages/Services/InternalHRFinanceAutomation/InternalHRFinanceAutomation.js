import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const InternalHRFinanceAutomation = () => {
    return (
        <>
            <ServiceDetail
                title="Internal HR/Finance Automation"
                subtitle="AI & Automation"
                description="Transform your HR and finance operations with intelligent automation. Streamline employee management, payroll, expense processing, and financial workflows."
                overview="Internal HR and Finance automation eliminates repetitive manual tasks in human resources and finance departments. Our comprehensive automation solutions handle employee onboarding, leave management, expense approvals, invoice processing, payroll automation, and financial reporting. By automating these critical internal processes, organizations can focus on strategic initiatives while ensuring accuracy, compliance, and efficiency."
                features={[
                    {
                        title: "Employee Onboarding Automation",
                        description: "Automated onboarding workflows including document collection, system access provisioning, and welcome communications."
                    },
                    {
                        title: "Leave Management System",
                        description: "Automated leave requests, approvals, balance tracking, and calendar synchronization."
                    },
                    {
                        title: "Expense Processing",
                        description: "Streamlined expense submission, approval workflows, receipt validation, and reimbursement processing."
                    },
                    {
                        title: "Payroll Automation",
                        description: "Automated payroll calculations, tax deductions, salary processing, and payment distribution."
                    },
                    {
                        title: "Invoice Processing",
                        description: "Automated invoice capture, validation, approval workflows, and payment processing."
                    },
                    {
                        title: "Financial Reporting",
                        description: "Automated financial report generation, budget tracking, and compliance reporting."
                    }
                ]}
                benefits={[
                    "Reduce HR and finance processing time by 70%",
                    "Eliminate manual data entry errors",
                    "Improve compliance and audit readiness",
                    "Enhance employee self-service capabilities",
                    "Accelerate financial closing cycles",
                    "Real-time visibility into HR and finance metrics"
                ]}
                technologies={['Zoho People', 'Zoho Books', 'Zoho Expense', 'Zoho Creator', 'Zoho Flow', 'Zoho Analytics']}
                stats={[
                    { number: "70%", label: "Time Savings" },
                    { number: "95%", label: "Error Reduction" },
                    { number: "100+", label: "Organizations Automated" }
                ]}
                process={[
                    { title: "Assessment", description: "Analyze current HR and finance processes to identify automation opportunities" },
                    { title: "Process Mapping", description: "Map existing workflows and design optimized automated processes" },
                    { title: "System Configuration", description: "Configure automation rules, approval workflows, and integrations" },
                    { title: "Data Migration", description: "Migrate existing employee and financial data to automated systems" },
                    { title: "Testing & Validation", description: "Test all automated processes with real data and scenarios" },
                    { title: "Training & Go-Live", description: "Train HR and finance teams and deploy with continuous support" }
                ]}
                relatedServices={[
                    { title: "Task & Approval Workflows", path: "/services/task-approval-workflows", description: "Automated approval systems" },
                    { title: "Zoho People", path: "/services/zoho-people", description: "HR management solutions" },
                    { title: "Zoho Books & Inventory", path: "/services/zoho-books-inventory", description: "Financial management" }
                ]}
            />
            <CTA />
        </>
    );
};

export default InternalHRFinanceAutomation;

