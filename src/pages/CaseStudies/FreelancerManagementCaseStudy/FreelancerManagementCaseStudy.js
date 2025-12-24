import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const FreelancerManagementCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Scalable Lead Assignment & Freelancer Management System"
                subtitle="Automated lead capture and intelligent freelancer assignment while avoiding CRM licensing for thousands of freelancers."
                clientName="Freelancer Management Platform"
                clientDescription="A consulting and support organization needed a scalable solution to manage leads and assign them to thousands of freelancers without incurring expensive CRM licensing costs for each freelancer."
                website=""
                location="Global"
                industry="Consulting & Support"
                duration="4 months"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Scalable Lead Management",
                        description: "The organization needed to manage and assign leads to thousands of freelancers efficiently. Traditional CRM solutions would require licensing each freelancer individually, making it cost-prohibitive."
                    },
                    {
                        title: "Intelligent Assignment",
                        description: "Manual lead assignment was time-consuming and error-prone. The system needed to intelligently match leads to freelancers based on availability, skills, and workload."
                    },
                    {
                        title: "Portal Access for Freelancers",
                        description: "Freelancers required portal-based access to view their assigned leads and update status without needing full CRM licenses."
                    }
                ]}
                solutions={[
                    {
                        title: "Custom Zoho Creator Solution",
                        description: "Built a custom Zoho Creator application that allows lead capture and management without requiring individual CRM licenses for each freelancer. The solution leverages Zoho Creator's per-application pricing model instead."
                    },
                    {
                        title: "Intelligent Assignment Algorithm",
                        description: "Implemented automated workflows that intelligently assign leads to freelancers based on availability status, skill match, current workload, and geographic preferences."
                    },
                    {
                        title: "Custom Widget Portal",
                        description: "Created custom widgets that provide freelancers with portal access to view assigned leads, update status, and track their performance without needing CRM access."
                    }
                ]}
                results={[
                    "Eliminated CRM licensing costs for thousands of freelancers",
                    "Automated 100% of lead assignment processes",
                    "Reduced lead assignment time from hours to minutes",
                    "Improved freelancer utilization rates by 45%",
                    "Enhanced lead distribution fairness across freelancer pool",
                    "Increased system scalability to handle unlimited freelancers"
                ]}
                technologies={['Zoho CRM', 'Zoho Creator', 'Custom Widgets']}
                whatWeDid={[
                    'Custom Zoho Creator Application Development',
                    'Intelligent Lead Assignment Automation',
                    'Freelancer Portal Widget Creation',
                    'Availability Tracking System',
                    'Workload Balancing Algorithm',
                    'Lead Capture Automation'
                ]}
            />
            <CTA />
        </>
    );
};

export default FreelancerManagementCaseStudy;

