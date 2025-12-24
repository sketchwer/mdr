import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const SHIFTProgramCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="SHIFT Program – End-to-End Client Journey Automation"
                subtitle="Automated a 6-week coaching journey covering payments, sessions, assignments, and performance tracking."
                clientName="SHIFT Program"
                clientDescription="A training and education program needed to automate their complex 6-week coaching journey with 15 sessions, 12 assignments, and multiple roles to eliminate manual coordination and follow-ups."
                website=""
                location="Global"
                industry="Training & Education"
                duration="3 months"
                image="/case study/shift program.jpg"
                challenges={[
                    {
                        title: "Complex Multi-Week Journey",
                        description: "15 sessions, 12 assignments, and multiple roles created coordination issues."
                    },
                    {
                        title: "Manual Follow-Ups",
                        description: "Heavy dependency on people for reminders and tracking."
                    }
                ]}
                solutions={[
                    {
                        title: "Structured CRM-Driven Journey",
                        description: "A linear, role-based workflow automated onboarding, sessions, assignments, and scoring."
                    }
                ]}
                results={[
                    "Automated 6-week coaching journey from start to finish",
                    "Eliminated manual coordination between sessions and assignments",
                    "Automated WhatsApp reminders reducing manual follow-ups",
                    "Streamlined payment and invoice tracking",
                    "Automated assignment review and scoring",
                    "Centralized performance dashboards for tracking progress"
                ]}
                technologies={['CRM Automation', 'WhatsApp Automation', 'Payment Systems']}
                whatWeDid={[
                    'CRM journey design for 6-week program',
                    'Automated WhatsApp reminders & updates',
                    'Payment & invoice tracking',
                    'Assignment review & scoring automation',
                    'Centralized performance dashboards'
                ]}
            />
            <CTA />
        </>
    );
};

export default SHIFTProgramCaseStudy;

