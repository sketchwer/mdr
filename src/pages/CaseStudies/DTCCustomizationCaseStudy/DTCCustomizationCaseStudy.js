import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const DTCCustomizationCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Implemented secure email authentication"
                subtitle="Discover how we secured DTC Customization's email infrastructure with SPF and DKIM authentication protocols."
                clientName="DTC Customization"
                clientDescription="DTC Customization needed to implement secure email authentication to protect their email communications and prevent phishing attacks."
                website=""
                location="Global"
                industry="Email Infrastructure"
                duration="2 months"
                image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Email Security Vulnerabilities",
                        description: "The company's email infrastructure lacked proper authentication mechanisms, making it vulnerable to spoofing and phishing attacks."
                    },
                    {
                        title: "Email Deliverability Issues",
                        description: "Without proper SPF and DKIM records, emails were being marked as spam or rejected by recipient servers, affecting communication reliability."
                    }
                ]}
                solutions={[
                    {
                        title: "SPF Record Implementation",
                        description: "Configured SPF (Sender Policy Framework) records to authenticate outgoing emails and prevent email spoofing."
                    },
                    {
                        title: "DKIM Authentication Setup",
                        description: "Implemented DKIM (DomainKeys Identified Mail) authentication to ensure email integrity and improve deliverability rates."
                    }
                ]}
                results={[
                    "Achieved 100% email authentication compliance",
                    "Improved email deliverability by 95%",
                    "Eliminated email spoofing risks",
                    "Enhanced email security and trust",
                    "Reduced spam classification issues"
                ]}
                technologies={['SPF', 'DKIM']}
                whatWeDid={[
                    'SPF Record Configuration',
                    'DKIM Authentication Setup',
                    'Email Security Audit',
                    'DNS Configuration',
                    'Email Deliverability Testing'
                ]}
            />
            <CTA />
        </>
    );
};

export default DTCCustomizationCaseStudy;

