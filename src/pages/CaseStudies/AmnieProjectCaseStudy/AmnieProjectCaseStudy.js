import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const AmnieProjectCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Amnie's Project – Automated Lead-to-Freelancer Assignment & Portal Management System"
                subtitle="Automated lead intake, freelancer assignment, and franchise ownership using a custom portal and CRM extensions."
                clientName="Amnie's Project"
                clientDescription="A business consulting firm needed to automate their lead-to-freelancer assignment process and manage franchise ownership through a unified portal system with custom CRM widgets."
                website=""
                location="Global"
                industry="Business Consulting"
                duration="5 months"
                image="/case study/Amnie Project .jpg"
                challenges={[
                    {
                        title: "Unstructured Lead Flow",
                        description: "Leads were coming from multiple sources with no single workflow or visibility."
                    },
                    {
                        title: "Manual Freelancer Assignment",
                        description: "Assigning freelancers based on skills and service type was slow and error-prone."
                    },
                    {
                        title: "Franchise Allocation Limitation",
                        description: "Zoho CRM's standard functionality could not handle complex franchise allocation logic."
                    },
                    {
                        title: "Widgets Were Required",
                        description: "The client needed to schedule demo sessions based on a lead's preferred date and time, already stored in the CRM. However, Zoho CRM's standard interface could not dynamically check faculty availability across modules or convert a date-time into valid booking slots. Manual checking caused delays, errors, and overlapping demo bookings."
                    }
                ]}
                solutions={[
                    {
                        title: "Automated Lead & Freelancer Assignment",
                        description: "Leads were captured centrally and auto-assigned based on skill and availability."
                    },
                    {
                        title: "Custom Freelancer Portal",
                        description: "A Zoho Creator portal allowed freelancers to view leads, clients, quotations, and updates in real time."
                    },
                    {
                        title: "Custom CRM Widget for Franchise Allocation (Key Highlight)",
                        description: "A custom CRM widget was developed to apply franchise logic outside CRM limitations, assign franchise ownership based on rules, and sync franchise data instantly with CRM and the portal. This widget eliminated manual mapping completely. We implemented a custom Zoho CRM widget inside the Lead screen. The widget reads the lead's Demo Time Slot, automatically derives the correct date and time window, checks real-time faculty availability, and shows only those faculty members who are free during that slot. All booking details are auto-prefilled, enabling quick and accurate demo scheduling."
                    }
                ]}
                results={[
                    "Centralized lead capture with single workflow visibility",
                    "Automated skill-based freelancer assignment reducing manual errors",
                    "Custom CRM widget eliminating franchise allocation limitations",
                    "Real-time portal synchronization for freelancers",
                    "Automated demo scheduling with faculty availability checking",
                    "Eliminated overlapping bookings and scheduling conflicts",
                    "Streamlined quotation and notification processes"
                ]}
                technologies={['Zoho CRM', 'Zoho Creator', 'Custom CRM Widget', 'APIs']}
                whatWeDid={[
                    'Centralized lead capture in Zoho CRM',
                    'Skill-based freelancer assignment automation',
                    'Zoho Creator freelancer portal',
                    'Custom CRM widget for franchise mapping & ownership',
                    'Real-time CRM ↔ Portal synchronization',
                    'Automated notifications and quotations'
                ]}
            />
            <CTA />
        </>
    );
};

export default AmnieProjectCaseStudy;

