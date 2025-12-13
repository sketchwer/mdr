import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ReactJSFrontend = () => {
    return (
        <>
            <ServiceDetail
                title="ReactJS / Frontend Development"
                subtitle="Software Development"
                description="Create stunning, high-performance frontend applications with React.js. Modern, responsive, and user-friendly interfaces that engage users and drive conversions."
                overview="ReactJS and Frontend Development services create dynamic, interactive user interfaces using React.js and modern frontend technologies. React's component-based architecture enables building reusable, maintainable, and scalable frontend applications. Our frontend experts deliver pixel-perfect designs, smooth animations, responsive layouts, and optimized performance across all devices and browsers."
                features={[
                    {
                        title: "React Applications",
                        description: "Single-page applications (SPAs) and progressive web apps (PWAs) built with React.js and Next.js."
                    },
                    {
                        title: "Component Library",
                        description: "Reusable component libraries with Storybook for consistent UI across applications."
                    },
                    {
                        title: "State Management",
                        description: "Efficient state management with Redux, Context API, and modern state management solutions."
                    },
                    {
                        title: "Responsive Design",
                        description: "Mobile-first responsive design that works seamlessly on all screen sizes and devices."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Code splitting, lazy loading, memoization, and optimization for fast load times."
                    },
                    {
                        title: "API Integration",
                        description: "Seamless integration with REST APIs, GraphQL, and real-time data synchronization."
                    }
                ]}
                benefits={[
                    "Fast, responsive user interfaces",
                    "Reusable components for faster development",
                    "Excellent user experience and engagement",
                    "SEO-friendly with Next.js SSR",
                    "Cross-platform compatibility",
                    "Easy maintenance and updates"
                ]}
                technologies={['React.js', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Material-UI', 'GraphQL', 'Jest', 'React Testing Library']}
                stats={[
                    { number: "250+", label: "React Projects" },
                    { number: "98%", label: "Performance Score" },
                    { number: "7+", label: "Years Experience" }
                ]}
                process={[
                    { title: "UI/UX Design", description: "Design user interface mockups and user experience flows" },
                    { title: "Component Architecture", description: "Plan component structure, state management, and routing" },
                    { title: "Development", description: "Develop React components with best practices and clean code" },
                    { title: "Integration", description: "Integrate with backend APIs and third-party services" },
                    { title: "Testing & Optimization", description: "Unit testing, performance optimization, and cross-browser testing" },
                    { title: "Deployment", description: "Deploy to production with CI/CD and monitoring" }
                ]}
                relatedServices={[
                    { title: "Web Application Development", path: "/services/web-application-development", description: "Full-stack development" },
                    { title: "Mobile App Development", path: "/services/mobile-app-development", description: "React Native apps" },
                    { title: "Website Development", path: "/services/business-website-development", description: "Business websites" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ReactJSFrontend;

