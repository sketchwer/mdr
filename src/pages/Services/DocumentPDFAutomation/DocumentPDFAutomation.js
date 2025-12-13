import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const DocumentPDFAutomation = () => {
    return (
        <>
            <ServiceDetail
                title="Document & PDF Automation"
                subtitle="AI & Automation"
                description="Automate document processing, PDF generation, and data extraction. Transform manual document handling into efficient automated workflows."
                overview="Document and PDF Automation eliminates manual document processing by automatically generating, processing, and extracting data from documents. From invoice processing to contract generation, our solutions streamline document workflows, reduce errors, and save significant time and resources."
                features={[
                    {
                        title: "Document Generation",
                        description: "Automated generation of invoices, contracts, and reports."
                    },
                    {
                        title: "PDF Processing",
                        description: "Automated PDF creation, merging, and splitting."
                    },
                    {
                        title: "Data Extraction",
                        description: "AI-powered extraction of data from documents and PDFs."
                    },
                    {
                        title: "Document Templates",
                        description: "Custom templates for consistent document formatting."
                    },
                    {
                        title: "OCR & Text Recognition",
                        description: "Extract text from scanned documents and images."
                    },
                    {
                        title: "Workflow Integration",
                        description: "Seamless integration with business workflows."
                    }
                ]}
                benefits={[
                    "Eliminated manual data entry",
                    "Faster document processing",
                    "Reduced errors",
                    "Consistent document formatting",
                    "Improved compliance",
                    "Time and cost savings"
                ]}
                technologies={['OCR', 'AI/ML', 'PDF Libraries', 'Document APIs', 'Template Engines', 'Workflow Automation']}
                process={[
                    { step: "Assessment", description: "Identify document processing requirements" },
                    { step: "Design", description: "Design document templates and workflows" },
                    { step: "Development", description: "Develop automation and extraction logic" },
                    { step: "Integration", description: "Integrate with business systems" },
                    { step: "Testing", description: "Test document processing accuracy" },
                    { step: "Deployment", description: "Deploy and provide training" }
                ]}
            />
            <CTA />
        </>
    );
};

export default DocumentPDFAutomation;

