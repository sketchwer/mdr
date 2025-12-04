import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ReactJSDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="ReactJS Development"
                subtitle="CMS/CRM Development"
                description="Modern, interactive web applications built with React. Expert ReactJS development services for scalable frontend solutions."
                overview="React is one of the most popular JavaScript libraries for building user interfaces. Our ReactJS development services help you create fast, interactive, and scalable web applications. We build modern frontend solutions using React, Next.js, and other React ecosystem tools."
                stats={[
                    { number: "30+", label: "React Projects" },
                    { number: "15+", label: "React Developers" },
                    { number: "100%", label: "Modern Stack" }
                ]}
                features={[
                    {
                        title: "React Web Applications",
                        description: "Build modern, interactive web applications using React."
                    },
                    {
                        title: "Next.js Development",
                        description: "Server-side rendered React applications using Next.js framework."
                    },
                    {
                        title: "React Native Apps",
                        description: "Cross-platform mobile applications using React Native."
                    },
                    {
                        title: "Component Libraries",
                        description: "Reusable React component libraries for consistent UI."
                    },
                    {
                        title: "State Management",
                        description: "Implement Redux, Context API, or other state management solutions."
                    },
                    {
                        title: "API Integration",
                        description: "Integrate React applications with REST and GraphQL APIs."
                    }
                ]}
                benefits={[
                    "Fast and interactive UIs",
                    "Component-based architecture",
                    "Large ecosystem",
                    "Great developer experience",
                    "SEO-friendly with Next.js",
                    "Reusable components",
                    "Expert React developers"
                ]}
                technologies={[
                    "React", "Next.js", "React Native", "Redux", "TypeScript", "GraphQL", "REST API", "Material-UI", "Tailwind CSS"
                ]}
                process={[
                    {
                        title: "Project Planning",
                        description: "Plan your React application architecture and component structure."
                    },
                    {
                        title: "UI/UX Design",
                        description: "Design user interfaces and user experiences."
                    },
                    {
                        title: "Development",
                        description: "Develop React components and features using best practices."
                    },
                    {
                        title: "State Management",
                        description: "Implement state management and API integrations."
                    },
                    {
                        title: "Testing & Optimization",
                        description: "Test components and optimize application performance."
                    },
                    {
                        title: "Deployment",
                        description: "Deploy React application with proper configuration."
                    }
                ]}
                relatedServices={[
                    { title: "Laravel Development", path: "/services/laravel-development", description: "Laravel backend" },
                    { title: "PHP Web Development", path: "/services/php-web-development", description: "PHP backend" },
                    { title: "WordPress Development", path: "/services/wordpress-development", description: "WordPress CMS" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ReactJSDevelopment;

