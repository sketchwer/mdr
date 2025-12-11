import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const AIDocumentScanning = () => {
    return (
        <>
            <ServiceDetail
                title="AI Document Scanning, Reading & Automation"
                subtitle="AI & Automation"
                description="AI can scan any document—invoice, bill, form, ID, report, or receipt—and instantly read and extract the important information for you. Using OpenAI and smart OCR, all your paperwork becomes digital, organised, and ready to use."
                overview="Transform your document processing with AI-powered scanning and extraction. Our AI Document Scanning service uses OpenAI and advanced OCR technology to automatically read, extract, and organize information from any document type, eliminating manual data entry and saving hours of work every day."
                features={[
                    {
                        title: "Multi-Document Support",
                        description: "Scan and process invoices, bills, forms, IDs, reports, receipts, and more."
                    },
                    {
                        title: "OpenAI Integration",
                        description: "Leverage OpenAI for intelligent document understanding and extraction."
                    },
                    {
                        title: "Smart OCR Technology",
                        description: "Advanced OCR for accurate text recognition from scanned documents."
                    },
                    {
                        title: "Automatic Data Extraction",
                        description: "Automatically extract key information from documents."
                    },
                    {
                        title: "Digital Organization",
                        description: "Convert all paperwork into digital, organized format."
                    },
                    {
                        title: "System Integration",
                        description: "Automatically update systems and trigger workflows from extracted data."
                    }
                ]}
                benefits={[
                    "No typing, no manual checking — fully automated",
                    "Saves your team hours of effort every day",
                    "Instant data extraction and processing",
                    "Accurate and reliable document reading",
                    "Seamless integration with your systems",
                    "Complete digital transformation of paperwork"
                ]}
                technologies={['OpenAI', 'OCR Technology', 'AI/ML Models', 'Document Processing', 'Data Extraction', 'Workflow Automation']}
                process={[
                    { step: "Document Analysis", description: "Analyze document types and extraction requirements" },
                    { step: "AI Model Setup", description: "Configure OpenAI and OCR models for your documents" },
                    { step: "Integration", description: "Integrate with your existing systems and databases" },
                    { step: "Workflow Setup", description: "Set up automated workflows for data processing" },
                    { step: "Testing", description: "Test with various document types and formats" },
                    { step: "Deployment", description: "Deploy and monitor the system" }
                ]}
            />
            <CTA />
        </>
    );
};

export default AIDocumentScanning;

