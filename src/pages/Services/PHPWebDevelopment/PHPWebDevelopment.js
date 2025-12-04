import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const PHPWebDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="PHP Web Development"
                subtitle="CMS/CRM Development"
                description="Robust, scalable web applications built with PHP. Expert PHP development services for your business needs."
                overview="PHP is one of the most popular server-side programming languages, powering millions of websites and web applications. Our PHP web development services help you build robust, scalable, and secure web applications that drive business growth. We leverage modern PHP frameworks and best practices to deliver high-quality solutions."
                stats={[
                    { number: "100+", label: "PHP Projects" },
                    { number: "15+", label: "Years Experience" },
                    { number: "50+", label: "PHP Developers" }
                ]}
                features={[
                    {
                        title: "Custom Web Applications",
                        description: "Build custom web applications tailored to your business requirements."
                    },
                    {
                        title: "Framework Development",
                        description: "Develop using Laravel, CodeIgniter, Symfony, and other modern PHP frameworks."
                    },
                    {
                        title: "API Development",
                        description: "RESTful and GraphQL APIs for mobile apps and third-party integrations."
                    },
                    {
                        title: "E-Commerce Solutions",
                        description: "Custom e-commerce platforms and integrations with existing systems."
                    },
                    {
                        title: "CMS Development",
                        description: "Custom content management systems for easy content management."
                    },
                    {
                        title: "Legacy System Migration",
                        description: "Migrate legacy PHP applications to modern frameworks."
                    }
                ]}
                benefits={[
                    "Cost-effective development",
                    "Fast development time",
                    "Large developer community",
                    "Extensive libraries",
                    "Scalable solutions",
                    "Secure applications",
                    "Expert PHP developers"
                ]}
                technologies={[
                    "PHP", "Laravel", "CodeIgniter", "Symfony", "MySQL", "PostgreSQL", "REST API", "GraphQL"
                ]}
                process={[
                    {
                        title: "Requirements Analysis",
                        description: "Analyze your business requirements and technical needs."
                    },
                    {
                        title: "Architecture Design",
                        description: "Design scalable architecture using best practices."
                    },
                    {
                        title: "Development",
                        description: "Develop your application using modern PHP frameworks."
                    },
                    {
                        title: "Testing & QA",
                        description: "Comprehensive testing including unit, integration, and security testing."
                    },
                    {
                        title: "Deployment",
                        description: "Deploy your application with proper configuration and optimization."
                    },
                    {
                        title: "Support & Maintenance",
                        description: "Ongoing support and maintenance services."
                    }
                ]}
                relatedServices={[
                    { title: "Laravel Development", path: "/services/laravel-development", description: "Laravel solutions" },
                    { title: "WordPress Development", path: "/services/wordpress-development", description: "WordPress development" },
                    { title: "ReactJS Development", path: "/services/reactjs-development", description: "React development" }
                ]}
            />
            <CTA />
        </>
    );
};

export default PHPWebDevelopment;

