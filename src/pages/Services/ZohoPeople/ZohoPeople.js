import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoPeople = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho People (HR & Attendance)"
                subtitle="Zoho Solutions"
                description="Streamline your HR operations with Zoho People implementation. Manage employee data, attendance, leave, and performance all in one platform."
                overview="Zoho People is a comprehensive HR management system that simplifies human resource operations. From employee onboarding to attendance tracking, leave management, and performance reviews, our implementation ensures your HR processes are automated and efficient."
                features={[
                    {
                        title: "Employee Database",
                        description: "Centralized employee information management system."
                    },
                    {
                        title: "Attendance Management",
                        description: "Automated attendance tracking with biometric integration."
                    },
                    {
                        title: "Leave Management",
                        description: "Streamlined leave request and approval workflows."
                    },
                    {
                        title: "Performance Reviews",
                        description: "Structured performance evaluation and feedback system."
                    },
                    {
                        title: "Payroll Integration",
                        description: "Seamless integration with payroll systems."
                    },
                    {
                        title: "HR Analytics",
                        description: "Comprehensive HR reports and analytics dashboard."
                    }
                ]}
                benefits={[
                    "Automated HR processes",
                    "Reduced administrative workload",
                    "Improved employee engagement",
                    "Accurate attendance tracking",
                    "Better compliance management",
                    "Data-driven HR decisions"
                ]}
                technologies={['Zoho People', 'Zoho Recruit', 'Biometric Integration', 'Payroll Systems', 'API Integration']}
                process={[
                    { step: "Analysis", description: "Analyze current HR processes and requirements" },
                    { step: "Configuration", description: "Configure modules, workflows, and policies" },
                    { step: "Integration", description: "Integrate with existing systems and biometric devices" },
                    { step: "Data Migration", description: "Migrate existing employee data securely" },
                    { step: "Training", description: "Train HR team and employees on the system" },
                    { step: "Go-Live", description: "Launch and provide ongoing support" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoPeople;

