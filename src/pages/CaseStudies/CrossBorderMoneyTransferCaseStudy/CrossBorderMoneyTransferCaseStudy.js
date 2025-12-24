import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const CrossBorderMoneyTransferCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Centralized CRM & Analytics for Cross-Border Money Transfer"
                subtitle="Real-time customer, transaction, and KYC tracking with automated compliance reporting."
                clientName="Fintech Money Transfer Service"
                clientDescription="A fintech company providing cross-border money transfer services needed a centralized system to manage customers, track transactions in real-time, handle KYC (Know Your Customer) verification, and generate automated compliance reports."
                website=""
                location="Global"
                industry="Accounting & Finance"
                duration="6 months"
                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Real-Time Transaction Tracking",
                        description: "The company needed to track thousands of cross-border money transfers in real-time across multiple currencies and countries, with accurate status updates and notifications."
                    },
                    {
                        title: "KYC Compliance",
                        description: "Strict regulatory requirements demanded comprehensive KYC verification, document management, and automated compliance reporting for regulatory authorities."
                    },
                    {
                        title: "Customer Data Management",
                        description: "Customer information was scattered across multiple systems, making it difficult to maintain a single source of truth for customer profiles, transaction history, and compliance status."
                    },
                    {
                        title: "Compliance Reporting",
                        description: "Manual compliance reporting was time-consuming and error-prone, requiring automated generation of reports for various regulatory requirements."
                    }
                ]}
                solutions={[
                    {
                        title: "Centralized CRM System",
                        description: "Implemented Zoho CRM as the central hub for all customer data, providing a unified view of customer profiles, transaction history, KYC status, and compliance records."
                    },
                    {
                        title: "Real-Time Transaction Integration",
                        description: "Integrated the money transfer platform with Zoho CRM to automatically capture and sync transaction data in real-time, including sender/receiver details, amounts, currencies, and status updates."
                    },
                    {
                        title: "KYC Management Workflow",
                        description: "Created automated workflows for KYC verification, document collection, validation, and status tracking. Set up alerts for expiring documents and pending verifications."
                    },
                    {
                        title: "Automated Compliance Reporting",
                        description: "Built automated reporting system using Zoho Analytics that generates compliance reports based on transaction thresholds, customer risk profiles, and regulatory requirements."
                    },
                    {
                        title: "Application Integration",
                        description: "Integrated multiple applications (payment gateways, banking APIs, document verification services) with Zoho CRM to create a seamless workflow from customer onboarding to transaction completion."
                    }
                ]}
                results={[
                    "Centralized all customer and transaction data in one system",
                    "Achieved real-time transaction tracking across all channels",
                    "Automated 95% of KYC verification workflows",
                    "Reduced compliance reporting time from days to hours",
                    "Improved regulatory compliance accuracy to 100%",
                    "Enhanced customer service with unified transaction history",
                    "Enabled proactive compliance monitoring and alerts"
                ]}
                technologies={['Zoho CRM', 'Zoho Analytics', 'Application Integration']}
                whatWeDid={[
                    'Centralized CRM Implementation',
                    'Real-Time Transaction Integration',
                    'KYC Management Workflow Automation',
                    'Compliance Reporting Automation',
                    'Multi-Application Integration',
                    'Risk Monitoring Dashboard Creation'
                ]}
            />
            <CTA />
        </>
    );
};

export default CrossBorderMoneyTransferCaseStudy;

