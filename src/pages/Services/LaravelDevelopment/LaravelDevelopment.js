import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const LaravelDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Laravel Development"
                subtitle="CMS/CRM Development"
                description="Cutting-edge Laravel development services that help you scale new heights in your business. Modern, secure, and scalable web applications."
                overview="Laravel is one of the most popular PHP frameworks, known for its elegant syntax and powerful features. Our Laravel development services help you build modern, secure, and scalable web applications. With 15+ Laravel applications delivered, we have the expertise to bring your ideas to life."
                stats={[
                    { number: "15+", label: "Laravel Applications" },
                    { number: "10+", label: "Laravel Developers" },
                    { number: "100%", label: "Client Satisfaction" }
                ]}
                features={[
                    {
                        title: "Custom Laravel Applications",
                        description: "Build custom web applications using Laravel's powerful framework."
                    },
                    {
                        title: "API Development",
                        description: "RESTful APIs and GraphQL endpoints for mobile and frontend applications."
                    },
                    {
                        title: "E-Commerce Platforms",
                        description: "Custom e-commerce solutions built with Laravel."
                    },
                    {
                        title: "Real-time Applications",
                        description: "Real-time features using Laravel Echo and WebSockets."
                    },
                    {
                        title: "Microservices Architecture",
                        description: "Build scalable microservices using Laravel."
                    },
                    {
                        title: "Laravel Packages",
                        description: "Custom Laravel packages for reusable functionality."
                    }
                ]}
                benefits={[
                    "Modern and elegant code",
                    "Built-in security features",
                    "Fast development time",
                    "Scalable architecture",
                    "Rich ecosystem",
                    "Active community",
                    "Expert Laravel developers"
                ]}
                technologies={[
                    "Laravel", "PHP", "MySQL", "PostgreSQL", "Redis", "Vue.js", "React", "REST API", "GraphQL"
                ]}
                process={[
                    {
                        title: "Project Planning",
                        description: "Plan your Laravel application architecture and features."
                    },
                    {
                        title: "Development Setup",
                        description: "Set up development environment and project structure."
                    },
                    {
                        title: "Core Development",
                        description: "Develop core features using Laravel best practices."
                    },
                    {
                        title: "Integration & Testing",
                        description: "Integrate third-party services and comprehensive testing."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Optimize application performance and scalability."
                    },
                    {
                        title: "Deployment & Support",
                        description: "Deploy application and provide ongoing support."
                    }
                ]}
                relatedServices={[
                    { title: "PHP Web Development", path: "/services/php-web-development", description: "PHP solutions" },
                    { title: "ReactJS Development", path: "/services/reactjs-development", description: "React frontend" },
                    { title: "WordPress Development", path: "/services/wordpress-development", description: "WordPress CMS" }
                ]}
            />
            <CTA />
        </>
    );
};

export default LaravelDevelopment;

