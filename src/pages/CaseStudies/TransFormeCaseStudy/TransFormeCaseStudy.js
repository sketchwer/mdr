import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const TransFormeCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Automated facilitator and overdue task tracking"
                subtitle="Discover how we automated TransForme Project's training operations with efficient facilitator management and overdue task tracking systems."
                clientName="TransForme Project"
                clientDescription="TransForme Project is a training and education company that needed automated systems to manage facilitators and track overdue tasks efficiently."
                website=""
                location="Global"
                industry="Training & Education"
                duration="4 months"
                image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Facilitator Management",
                        description: "Managing multiple facilitators and their schedules across various training programs was complex and required significant manual coordination."
                    },
                    {
                        title: "Task Tracking Issues",
                        description: "Tracking overdue tasks and follow-ups was challenging, leading to missed deadlines and incomplete training activities."
                    }
                ]}
                solutions={[
                    {
                        title: "Automated Facilitator Management",
                        description: "Implemented automated facilitator assignment and scheduling workflows in Zoho Projects and Zoho Creator to streamline training operations."
                    },
                    {
                        title: "Overdue Task Automation",
                        description: "Set up automated tracking and notification systems for overdue tasks, ensuring timely completion and follow-ups."
                    }
                ]}
                results={[
                    "Automated facilitator assignment processes",
                    "Reduced task tracking time by 70%",
                    "Improved overdue task visibility by 90%",
                    "Enhanced training program coordination",
                    "Streamlined facilitator scheduling"
                ]}
                technologies={['Zoho Projects', 'Zoho Creator']}
                whatWeDid={[
                    'Facilitator Management System',
                    'Zoho Projects Integration',
                    'Zoho Creator Custom Apps',
                    'Task Tracking Automation',
                    'Notification System Setup'
                ]}
            />
            <CTA />
        </>
    );
};

export default TransFormeCaseStudy;

