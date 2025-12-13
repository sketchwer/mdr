import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const JavaSpringBoot = () => {
    return (
        <>
            <ServiceDetail
                title="Java / Spring Boot Development"
                subtitle="Software Development"
                description="Enterprise-grade Java and Spring Boot applications for robust, scalable business solutions. Build high-performance backend systems with the power of Java ecosystem."
                overview="Java and Spring Boot Development services deliver enterprise-level backend applications known for reliability, scalability, and security. Spring Boot simplifies Java development with convention-over-configuration, allowing faster development of production-ready applications. Our expert Java developers create robust APIs, microservices, and enterprise applications that handle high traffic, complex business logic, and integration requirements."
                features={[
                    {
                        title: "Spring Boot Applications",
                        description: "Production-ready Spring Boot applications with embedded servers and minimal configuration."
                    },
                    {
                        title: "Microservices Architecture",
                        description: "Scalable microservices architecture for distributed systems and cloud-native applications."
                    },
                    {
                        title: "RESTful APIs",
                        description: "Well-designed RESTful APIs with proper documentation, versioning, and error handling."
                    },
                    {
                        title: "Database Integration",
                        description: "Seamless integration with SQL and NoSQL databases using JPA, Hibernate, and MongoDB."
                    },
                    {
                        title: "Security & Authentication",
                        description: "Enterprise security with Spring Security, JWT, OAuth2, and role-based access control."
                    },
                    {
                        title: "Cloud Deployment",
                        description: "Docker containerization, Kubernetes deployment, and cloud platform integration."
                    }
                ]}
                benefits={[
                    "High performance and scalability",
                    "Enterprise-grade security and reliability",
                    "Faster development with Spring Boot",
                    "Microservices for flexible architecture",
                    "Excellent community support and ecosystem",
                    "Cost-effective long-term maintenance"
                ]}
                technologies={['Java', 'Spring Boot', 'Spring Framework', 'Spring Security', 'JPA/Hibernate', 'Maven/Gradle', 'Docker', 'Kubernetes', 'PostgreSQL', 'MySQL', 'MongoDB']}
                stats={[
                    { number: "150+", label: "Java Projects" },
                    { number: "99.99%", label: "Reliability" },
                    { number: "8+", label: "Years Experience" }
                ]}
                process={[
                    { title: "Architecture Design", description: "Design system architecture, microservices structure, and database schema" },
                    { title: "Development Setup", description: "Set up development environment, CI/CD pipelines, and project structure" },
                    { title: "Core Development", description: "Develop business logic, APIs, and integrate with databases and services" },
                    { title: "Security Implementation", description: "Implement authentication, authorization, and security best practices" },
                    { title: "Testing & Optimization", description: "Unit testing, integration testing, and performance optimization" },
                    { title: "Deployment & Monitoring", description: "Containerization, cloud deployment, and monitoring setup" }
                ]}
                relatedServices={[
                    { title: "Web Application Development", path: "/services/web-application-development", description: "Full-stack development" },
                    { title: "Custom ERP Portals", path: "/services/custom-erp-portals", description: "Enterprise systems" },
                    { title: "Microservices Development", path: "/services/microservices", description: "Microservices architecture" }
                ]}
            />
            <CTA />
        </>
    );
};

export default JavaSpringBoot;

