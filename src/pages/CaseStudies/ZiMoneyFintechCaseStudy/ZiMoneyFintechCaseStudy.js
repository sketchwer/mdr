import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const ZiMoneyFintechCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="ZiMoney – Fintech CRM, Compliance & Analytics Transformation"
                subtitle="Unified CRM, KYC, compliance, transactions, and support into one secure fintech ecosystem with real-time analytics."
                clientName="ZiMoney"
                clientDescription="ZiMoney needed to transform their fragmented customer and transaction management system into a unified fintech platform with automated KYC, compliance tracking, and real-time analytics."
                website=""
                location="Global"
                industry="Accounting & Finance"
                duration="4 months"
                image="/case study/zi-money.jpg"
                challenges={[
                    {
                        title: "Fragmented Customer & Transaction Management",
                        description: "ZiMoney was using multiple disconnected systems to manage customer onboarding, KYC, transactions, and complaints. This made it difficult to get a complete view of customer activity and transaction history in one place."
                    },
                    {
                        title: "Manual KYC & Compliance Tracking",
                        description: "KYC verification, validation checks, and compliance reporting involved manual processes, increasing the risk of errors and delays in a highly regulated fintech environment."
                    },
                    {
                        title: "Inefficient Complaint & Support Handling",
                        description: "Customer complaints were handled manually without SLA tracking or structured escalation, resulting in slower resolution times and limited visibility for management."
                    },
                    {
                        title: "Limited Reporting & Audit Visibility",
                        description: "There was no centralized reporting system to support audits, compliance reviews, or leadership-level decision-making."
                    }
                ]}
                solutions={[
                    {
                        title: "Centralized Fintech CRM Platform",
                        description: "A unified Zoho CRM system was implemented to manage customers, KYC data, transactions, and complaints from a single platform with full lifecycle visibility."
                    },
                    {
                        title: "Automated KYC & Compliance Workflows",
                        description: "Automation was introduced for onboarding, document validation, follow-ups, and compliance checks, reducing manual intervention and improving accuracy."
                    },
                    {
                        title: "Structured Support & SLA Management",
                        description: "Zoho Desk was integrated to manage customer complaints with defined SLAs, automated escalations, and real-time status tracking."
                    },
                    {
                        title: "Real-Time Analytics & Compliance Dashboards",
                        description: "Zoho Analytics dashboards were built to provide live insights into transactions, KYC status, complaints, and compliance metrics for audits and management reviews."
                    }
                ]}
                results={[
                    "Unified customer and transaction management in a single platform",
                    "Automated KYC workflows reducing processing time by 70%",
                    "Improved compliance tracking and audit readiness",
                    "Structured support with SLA management and automated escalations",
                    "Real-time analytics for transactions, KYC, and compliance metrics",
                    "Enhanced security with role-based access control and audit logs",
                    "Seamless integration with mobile and web platforms via APIs"
                ]}
                technologies={['Zoho CRM', 'Zoho Desk', 'Zoho Analytics', 'API & Webhooks']}
                whatWeDid={[
                    'Custom CRM modules for Customers, KYC, Transactions, and Complaints',
                    'Automated onboarding, validation, and follow-up workflows',
                    'Zoho Desk integration for ticket management and SLA tracking',
                    'Zoho Analytics dashboards for compliance, audits, and leadership insights',
                    'API & webhook integrations with ZiMoney mobile and web platforms',
                    'Role-based access control, audit logs, and security configurations'
                ]}
            />
            <CTA />
        </>
    );
};

export default ZiMoneyFintechCaseStudy;

