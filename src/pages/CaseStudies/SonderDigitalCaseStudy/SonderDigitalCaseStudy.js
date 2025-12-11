import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const SonderDigitalCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Integrated CRM with marketing automation"
                subtitle="Discover how we integrated Sonder Digital's CRM with marketing automation to streamline client management and campaign execution."
                clientName="Sonder Digital"
                clientDescription="Sonder Digital is a digital marketing company that needed integrated CRM and marketing automation to manage clients and execute campaigns efficiently."
                website=""
                location="Global"
                industry="Digital Marketing"
                duration="5 months"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Disconnected Systems",
                        description: "CRM and marketing systems were disconnected, making it difficult to track client interactions and campaign performance together."
                    },
                    {
                        title: "Manual Campaign Management",
                        description: "Marketing campaigns required significant manual effort to set up, track, and analyze, affecting efficiency and scalability."
                    }
                ]}
                solutions={[
                    {
                        title: "CRM-Marketing Integration",
                        description: "Integrated Zoho CRM with Zoho Marketing to create a unified platform for client management and campaign execution."
                    },
                    {
                        title: "Marketing Automation",
                        description: "Implemented marketing automation workflows that streamline campaign creation, execution, and performance tracking."
                    }
                ]}
                results={[
                    "Unified CRM and marketing operations",
                    "Automated 80% of marketing processes",
                    "Improved campaign performance tracking",
                    "Enhanced client relationship management",
                    "Streamlined digital marketing operations"
                ]}
                technologies={['Zoho CRM', 'Zoho Marketing']}
                whatWeDid={[
                    'Zoho CRM Implementation',
                    'Zoho Marketing Integration',
                    'Marketing Automation Setup',
                    'Campaign Management Configuration',
                    'Performance Analytics Dashboard'
                ]}
            />
            <CTA />
        </>
    );
};

export default SonderDigitalCaseStudy;

