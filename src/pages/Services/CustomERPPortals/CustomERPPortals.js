import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const CustomERPPortals = () => {
    return (
        <>
            <ServiceDetail
                title="Custom ERP & Business Portals"
                subtitle="Software Development"
                description="Build custom ERP systems and business portals tailored to your unique processes. Streamline operations, integrate departments, and gain complete visibility into your business."
                overview="Custom ERP and Business Portals development creates integrated enterprise resource planning systems designed specifically for your business needs. Unlike off-the-shelf solutions, custom ERPs align perfectly with your workflows, integrate all departments, and provide complete control over your business processes. From finance and HR to inventory and customer management, we build comprehensive portals that unify your operations."
                features={[
                    {
                        title: "Integrated Business Modules",
                        description: "Unified modules for finance, HR, inventory, sales, procurement, and customer management in one system."
                    },
                    {
                        title: "Custom Workflows",
                        description: "Tailored business workflows and approval processes matching your organizational structure."
                    },
                    {
                        title: "Real-Time Dashboards",
                        description: "Executive dashboards with real-time KPIs, reports, and business intelligence insights."
                    },
                    {
                        title: "Multi-User Portal",
                        description: "Role-based access control with different portals for employees, managers, and executives."
                    },
                    {
                        title: "Third-Party Integration",
                        description: "Integration with existing systems, payment gateways, accounting software, and cloud services."
                    },
                    {
                        title: "Mobile Access",
                        description: "Mobile-responsive portals and dedicated mobile apps for on-the-go access."
                    }
                ]}
                benefits={[
                    "Complete integration of all business functions",
                    "Improved operational efficiency and productivity",
                    "Real-time visibility into business performance",
                    "Reduced manual work and errors",
                    "Scalable system for business growth",
                    "Customized to your exact requirements"
                ]}
                technologies={['Laravel', 'PHP', 'Java/Spring Boot', 'React.js', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS/Azure']}
                stats={[
                    { number: "50+", label: "ERP Systems" },
                    { number: "40%", label: "Efficiency Gain" },
                    { number: "15+", label: "Years Experience" }
                ]}
                process={[
                    { title: "Business Analysis", description: "Analyze all business processes, departments, and integration requirements" },
                    { title: "ERP Architecture", description: "Design system architecture, database schema, and module structure" },
                    { title: "Module Development", description: "Develop individual modules and integrate into unified system" },
                    { title: "Integration & Testing", description: "Integrate with existing systems and conduct comprehensive testing" },
                    { title: "Data Migration", description: "Migrate data from legacy systems to new ERP platform" },
                    { title: "Training & Go-Live", description: "User training, deployment, and ongoing support" }
                ]}
                relatedServices={[
                    { title: "Web Application Development", path: "/services/web-application-development", description: "Custom web apps" },
                    { title: "Java / Spring Boot", path: "/services/java-spring-boot", description: "Enterprise Java apps" },
                    { title: "Zoho CRM Implementation", path: "/services/zoho-crm-implementation", description: "Zoho ERP solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default CustomERPPortals;

