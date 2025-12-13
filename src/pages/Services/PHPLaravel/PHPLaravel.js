import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const PHPLaravel = () => {
    return (
        <>
            <ServiceDetail
                title="PHP / Laravel Development"
                subtitle="Software Development"
                description="Build elegant, robust web applications with PHP and Laravel framework. Fast, secure, and scalable solutions for modern businesses."
                overview="PHP and Laravel Development services leverage the power of PHP with the elegant Laravel framework to build modern, secure, and scalable web applications. Laravel's expressive syntax, powerful features, and extensive ecosystem enable rapid development of complex applications. Our Laravel experts create custom web applications, APIs, e-commerce platforms, and enterprise solutions with clean code, best practices, and long-term maintainability."
                features={[
                    {
                        title: "Laravel Applications",
                        description: "Custom Laravel applications with MVC architecture, Eloquent ORM, and Blade templating."
                    },
                    {
                        title: "RESTful APIs",
                        description: "Robust RESTful APIs with Laravel's API resources, authentication, and versioning."
                    },
                    {
                        title: "Database Management",
                        description: "Eloquent ORM for database operations, migrations, and query optimization."
                    },
                    {
                        title: "Authentication & Authorization",
                        description: "Laravel's built-in authentication, multi-auth, and role-based permissions."
                    },
                    {
                        title: "Queue & Job Processing",
                        description: "Background job processing with queues for improved performance and user experience."
                    },
                    {
                        title: "Testing & Quality",
                        description: "PHPUnit testing, code quality tools, and continuous integration for reliable applications."
                    }
                ]}
                benefits={[
                    "Fast development with Laravel's conventions",
                    "Secure applications with built-in protection",
                    "Scalable architecture for growing businesses",
                    "Cost-effective PHP-based solutions",
                    "Rich ecosystem and community support",
                    "Easy maintenance and updates"
                ]}
                technologies={['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Redis', 'Composer', 'PHPUnit', 'Vue.js', 'React', 'Tailwind CSS']}
                stats={[
                    { number: "300+", label: "Laravel Projects" },
                    { number: "95%", label: "Client Satisfaction" },
                    { number: "12+", label: "Years Experience" }
                ]}
                process={[
                    { title: "Requirements & Planning", description: "Gather requirements, plan application structure, and define features" },
                    { title: "Architecture Design", description: "Design database schema, application architecture, and API structure" },
                    { title: "Development", description: "Agile development with Laravel best practices and clean code principles" },
                    { title: "Testing", description: "Comprehensive testing with PHPUnit and automated testing workflows" },
                    { title: "Deployment", description: "Deploy to production with optimized configuration and monitoring" },
                    { title: "Support & Maintenance", description: "Ongoing support, updates, and feature enhancements" }
                ]}
                relatedServices={[
                    { title: "Web Application Development", path: "/services/web-application-development", description: "Full-stack solutions" },
                    { title: "WordPress Development", path: "/services/wordpress-development", description: "WordPress customization" },
                    { title: "E-Commerce Development", path: "/services/ecommerce-development", description: "E-commerce platforms" }
                ]}
            />
            <CTA />
        </>
    );
};

export default PHPLaravel;

