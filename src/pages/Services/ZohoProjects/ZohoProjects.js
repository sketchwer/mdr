import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoProjects = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho Projects"
                subtitle="Zoho Solutions"
                description="Manage projects efficiently with Zoho Projects implementation. Plan, track, and deliver projects on time with comprehensive project management tools."
                overview="Zoho Projects is a complete project management solution that helps teams collaborate, track progress, and deliver projects successfully. Our implementation ensures your projects are well-organized, deadlines are met, and team collaboration is seamless."
                features={[
                    {
                        title: "Project Planning",
                        description: "Comprehensive project planning with Gantt charts and milestones."
                    },
                    {
                        title: "Task Management",
                        description: "Organize tasks, assign responsibilities, and track progress."
                    },
                    {
                        title: "Time Tracking",
                        description: "Track time spent on projects and tasks accurately."
                    },
                    {
                        title: "Team Collaboration",
                        description: "Built-in collaboration tools for team communication."
                    },
                    {
                        title: "Resource Management",
                        description: "Allocate and manage project resources effectively."
                    },
                    {
                        title: "Reporting & Analytics",
                        description: "Project performance reports and analytics dashboard."
                    }
                ]}
                benefits={[
                    "Better project visibility",
                    "Improved team collaboration",
                    "On-time project delivery",
                    "Accurate time tracking",
                    "Resource optimization",
                    "Data-driven project insights"
                ]}
                technologies={['Zoho Projects', 'Zoho Sprints', 'Gantt Charts', 'Time Tracking', 'API Integration']}
                process={[
                    { step: "Planning", description: "Understand project management requirements" },
                    { step: "Setup", description: "Configure projects, templates, and workflows" },
                    { step: "Integration", description: "Integrate with other business tools" },
                    { step: "Migration", description: "Migrate existing project data" },
                    { step: "Training", description: "Train project managers and team members" },
                    { step: "Support", description: "Ongoing support and best practices" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoProjects;

