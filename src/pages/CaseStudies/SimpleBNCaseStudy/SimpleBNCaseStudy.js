import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const SimpleBNCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Advanced CRM Automation for Business Networking"
                subtitle="Discover how we helped SimpleBN streamline their business networking operations with advanced Zoho CRM automation."
                clientName="SimpleBN"
                clientDescription="SimpleBN is a business networking platform that connects professionals and facilitates B2B relationships. They needed an advanced CRM system to manage contacts, events, memberships, and automated communications."
                website="https://simplebn.com"
                location="Global"
                industry="Business Networking"
                duration="4 months"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Contact Management",
                        description: "Managing thousands of contacts, tracking interactions, and maintaining relationship history across multiple touchpoints."
                    },
                    {
                        title: "Event Management",
                        description: "Organizing and managing networking events, tracking registrations, sending automated reminders, and following up with attendees."
                    }
                ]}
                solutions={[
                    {
                        title: "Zoho CRM Customization",
                        description: "Customized Zoho CRM with advanced automation workflows, custom modules for events and memberships, and integrated communication tools."
                    },
                    {
                        title: "Automation Workflows",
                        description: "Created automated workflows for lead nurturing, event follow-ups, membership renewals, and personalized communications based on member preferences."
                    }
                ]}
                results={[
                    "Increased member engagement by 50%",
                    "Automated 80% of routine communications",
                    "Improved event attendance by 35%",
                    "Reduced manual data entry by 70%"
                ]}
                technologies={['Zoho CRM', 'Zoho Automation', 'Email Marketing', 'Event Management']}
                whatWeDid={[
                    'Zoho CRM Customization',
                    'Advanced Automation Workflows',
                    'Event Management System',
                    'Membership Management',
                    'Email Automation',
                    'Custom Reporting'
                ]}
            />
            <CTA />
        </>
    );
};

export default SimpleBNCaseStudy;

