import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const InsuranceMortgageLeadCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Insurance & Mortgage Lead Management Automation"
                subtitle="Replaced spreadsheets with structured CRM pipelines and customer self-service tracking."
                clientName="Insurance & Mortgage Brokerage"
                clientDescription="An insurance and mortgage brokerage firm was managing leads using spreadsheets, leading to lost opportunities, poor follow-up, and lack of visibility into the sales pipeline. They needed a structured CRM system with customer self-service capabilities."
                website=""
                location="Global"
                industry="Enterprise CRM"
                duration="3 months"
                image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Spreadsheet-Based Management",
                        description: "Lead management was done through spreadsheets, making it difficult to track lead status, follow-up activities, and pipeline visibility. Data was prone to errors and version control issues."
                    },
                    {
                        title: "Poor Lead Follow-Up",
                        description: "Without automated reminders and structured workflows, leads were often forgotten or followed up inconsistently, resulting in lost sales opportunities."
                    },
                    {
                        title: "Lack of Customer Self-Service",
                        description: "Customers had no way to track the status of their insurance or mortgage applications, leading to frequent support calls and poor customer experience."
                    },
                    {
                        title: "Pipeline Visibility",
                        description: "Management had no real-time visibility into the sales pipeline, making it difficult to forecast, plan resources, and identify bottlenecks."
                    }
                ]}
                solutions={[
                    {
                        title: "Structured CRM Implementation",
                        description: "Migrated from spreadsheets to Zoho CRM with structured pipelines for both insurance and mortgage leads. Created custom fields and stages to match the business processes."
                    },
                    {
                        title: "Automated Lead Management",
                        description: "Implemented automated workflows for lead assignment, follow-up reminders, and stage progression. Set up automated email notifications for both internal teams and customers."
                    },
                    {
                        title: "Customer Self-Service Portal",
                        description: "Integrated Zoho Desk to provide customers with a self-service portal where they can track application status, view documents, submit information, and communicate with their agent."
                    },
                    {
                        title: "Zoho Forms Integration",
                        description: "Created custom forms using Zoho Forms for lead capture from website and marketing campaigns, automatically creating leads in CRM with proper categorization."
                    },
                    {
                        title: "Pipeline Analytics",
                        description: "Built comprehensive dashboards showing pipeline health, conversion rates by stage, agent performance, and forecasted revenue."
                    }
                ]}
                results={[
                    "Eliminated spreadsheet-based lead management entirely",
                    "Improved lead follow-up rate from 60% to 95%",
                    "Reduced average lead response time by 70%",
                    "Increased pipeline visibility with real-time dashboards",
                    "Enhanced customer satisfaction with self-service tracking",
                    "Improved conversion rates by 40%",
                    "Reduced administrative time by 50%"
                ]}
                technologies={['Zoho CRM', 'Zoho Desk', 'Zoho Forms']}
                whatWeDid={[
                    'CRM Implementation & Migration',
                    'Structured Pipeline Setup',
                    'Automated Lead Management Workflows',
                    'Customer Self-Service Portal Development',
                    'Lead Capture Forms Creation',
                    'Pipeline Analytics Dashboard'
                ]}
            />
            <CTA />
        </>
    );
};

export default InsuranceMortgageLeadCaseStudy;

