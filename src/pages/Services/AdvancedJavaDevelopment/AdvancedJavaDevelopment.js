import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const AdvancedJavaDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Advanced Java Development"
                subtitle="Software Development"
                description="We engineer secure, scalable, enterprise-grade Java applications using Spring Boot, MVC, WebFlux, Hibernate, Struts, and JSF. Perfect for businesses needing high-performance backends and powerful custom software."
                overview="Our Advanced Java Development service delivers enterprise-grade Java applications built with modern frameworks and best practices. We specialize in Spring Boot, Spring MVC, WebFlux, Hibernate, Struts, and JSF to create secure, scalable, and high-performance solutions for your business."
                features={[
                    {
                        title: "Spring Boot Development",
                        description: "Modern Spring Boot applications for rapid development and deployment."
                    },
                    {
                        title: "Spring MVC & WebFlux",
                        description: "Reactive and traditional web applications using Spring frameworks."
                    },
                    {
                        title: "Hibernate ORM",
                        description: "Efficient database operations using Hibernate ORM."
                    },
                    {
                        title: "Struts Framework",
                        description: "Enterprise applications using Apache Struts framework."
                    },
                    {
                        title: "JSF Applications",
                        description: "JavaServer Faces for rich web user interfaces."
                    },
                    {
                        title: "Enterprise Architecture",
                        description: "Scalable and secure enterprise-grade architecture."
                    }
                ]}
                benefits={[
                    "Secure, scalable, enterprise-grade solutions",
                    "High-performance backends",
                    "Powerful custom software",
                    "Modern Java frameworks",
                    "Robust and reliable applications",
                    "Perfect for enterprise businesses"
                ]}
                technologies={['Java', 'Spring Boot', 'Spring MVC', 'Spring WebFlux', 'Hibernate', 'Struts', 'JSF', 'Maven', 'Gradle']}
                process={[
                    { step: "Architecture", description: "Design scalable and secure application architecture" },
                    { step: "Development", description: "Develop using modern Java frameworks and best practices" },
                    { step: "Integration", description: "Integrate with databases and third-party services" },
                    { step: "Security", description: "Implement enterprise-grade security measures" },
                    { step: "Testing", description: "Comprehensive testing and quality assurance" },
                    { step: "Deployment", description: "Deploy and provide ongoing support" }
                ]}
            />
            <CTA />
        </>
    );
};

export default AdvancedJavaDevelopment;

