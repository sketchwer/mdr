import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const CustomApplicationDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Custom Application Development"
                subtitle="Software Development"
                description="Get business applications built uniquely for you — ERP, HRMS, attendance, inventory, finance, production, service management, and more. Clean UI, fast performance, and complete automation for smooth operations."
                overview="Our Custom Application Development service creates unique business applications tailored to your specific needs. We build comprehensive solutions including ERP systems, HRMS, attendance management, inventory systems, finance applications, production management, and service management with modern UI and complete automation."
                features={[
                    {
                        title: "ERP Development",
                        description: "Complete Enterprise Resource Planning systems for your business."
                    },
                    {
                        title: "HRMS Solutions",
                        description: "Human Resource Management Systems with all HR functions."
                    },
                    {
                        title: "Attendance Management",
                        description: "Automated attendance tracking and management systems."
                    },
                    {
                        title: "Inventory Management",
                        description: "Complete inventory tracking and management solutions."
                    },
                    {
                        title: "Finance Applications",
                        description: "Financial management and accounting applications."
                    },
                    {
                        title: "Production Management",
                        description: "Production planning and management systems."
                    },
                    {
                        title: "Service Management",
                        description: "Customer service and support management systems."
                    }
                ]}
                benefits={[
                    "Built uniquely for your business needs",
                    "Clean UI with fast performance",
                    "Complete automation for smooth operations",
                    "Comprehensive business solutions",
                    "Scalable and flexible applications",
                    "Seamless integration capabilities"
                ]}
                technologies={['Java', 'Spring Boot', 'React', 'Node.js', 'Python', 'Database Design', 'API Development', 'Cloud Services']}
                process={[
                    { step: "Discovery", description: "Understand your business requirements and processes" },
                    { step: "Design", description: "Design application architecture and user interface" },
                    { step: "Development", description: "Develop custom applications with modern technologies" },
                    { step: "Integration", description: "Integrate with existing systems and databases" },
                    { step: "Testing", description: "Comprehensive testing and quality assurance" },
                    { step: "Deployment", description: "Deploy and provide training and support" }
                ]}
            />
            <CTA />
        </>
    );
};

export default CustomApplicationDevelopment;

