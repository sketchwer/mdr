import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const TimNoyeCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Connected meetings, campaigns & calendar sync"
                subtitle="Discover how we connected Tim Noye's business operations with integrated meeting management, campaign automation, and calendar synchronization."
                clientName="Tim Noye (Zoho One)"
                clientDescription="Tim Noye is a business consulting firm using Zoho One that needed integrated systems to connect meetings, marketing campaigns, and calendar synchronization."
                website=""
                location="Global"
                industry="Business Consulting"
                duration="4 months"
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Disconnected Systems",
                        description: "Meetings, campaigns, and calendar were managed separately, leading to scheduling conflicts and inefficient coordination."
                    },
                    {
                        title: "Manual Coordination",
                        description: "Coordinating between meetings, marketing campaigns, and calendar required significant manual effort and was prone to errors."
                    }
                ]}
                solutions={[
                    {
                        title: "Meeting Integration",
                        description: "Integrated Zoho Meeting with CRM to automatically sync meeting schedules and update customer records."
                    },
                    {
                        title: "Campaign & Calendar Sync",
                        description: "Connected marketing campaigns with calendar synchronization, ensuring seamless coordination across all business activities."
                    }
                ]}
                results={[
                    "Eliminated scheduling conflicts",
                    "Automated meeting and campaign coordination",
                    "Improved calendar synchronization by 90%",
                    "Enhanced business activity coordination",
                    "Streamlined consulting operations"
                ]}
                technologies={['Zoho Meeting', 'Zoho CRM']}
                whatWeDid={[
                    'Zoho Meeting Integration',
                    'Zoho CRM Setup',
                    'Campaign Automation',
                    'Calendar Synchronization',
                    'Business Activity Coordination'
                ]}
            />
            <CTA />
        </>
    );
};

export default TimNoyeCaseStudy;

