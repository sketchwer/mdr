import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const HyvaThemeDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Hyvä Theme Development"
                subtitle="Magento Commerce"
                description="Modern, fast, and beautiful Magento stores with Hyvä theme. Experience the future of Magento frontend development."
                overview="Hyvä is a modern, headless-ready theme for Magento 2 that provides exceptional performance and developer experience. Our Hyvä theme development services help you create stunning, fast-loading stores that provide an excellent user experience and drive conversions."
                stats={[
                    { number: "50+", label: "Hyvä Projects" },
                    { number: "3x", label: "Faster Performance" },
                    { number: "100%", label: "Mobile Optimized" }
                ]}
                features={[
                    {
                        title: "Modern Architecture",
                        description: "Built with Alpine.js and Tailwind CSS for modern, maintainable code."
                    },
                    {
                        title: "Lightning Fast",
                        description: "Significantly faster page load times compared to traditional Magento themes."
                    },
                    {
                        title: "Mobile-First Design",
                        description: "Responsive designs that work perfectly on all devices and screen sizes."
                    },
                    {
                        title: "Developer Friendly",
                        description: "Clean, modern codebase that's easy to customize and maintain."
                    },
                    {
                        title: "SEO Optimized",
                        description: "Built-in SEO best practices for better search engine rankings."
                    },
                    {
                        title: "Custom Components",
                        description: "Custom Hyvä components tailored to your brand and business needs."
                    }
                ]}
                benefits={[
                    "Faster page load times",
                    "Better user experience",
                    "Modern and maintainable code",
                    "Mobile-first approach",
                    "Improved conversion rates",
                    "Future-proof technology",
                    "Expert Hyvä developers"
                ]}
                technologies={[
                    "Hyvä Theme", "Alpine.js", "Tailwind CSS", "Magento 2", "JavaScript", "PHP"
                ]}
                process={[
                    {
                        title: "Design & Planning",
                        description: "Create custom designs that align with your brand and user experience goals."
                    },
                    {
                        title: "Theme Installation",
                        description: "Install and configure Hyvä theme on your Magento 2 store."
                    },
                    {
                        title: "Custom Development",
                        description: "Develop custom components and features using Hyvä's modern architecture."
                    },
                    {
                        title: "Integration & Testing",
                        description: "Integrate with third-party services and thoroughly test all functionality."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Optimize for speed and ensure excellent performance across all devices."
                    },
                    {
                        title: "Launch & Support",
                        description: "Deploy your new theme and provide ongoing support and maintenance."
                    }
                ]}
                relatedServices={[
                    { title: "Magento Development", path: "/services/magento-development", description: "Full Magento solutions" },
                    { title: "Magento 2 Migration", path: "/services/magento-2-migration", description: "Upgrade your store" },
                    { title: "Adobe Commerce Development", path: "/services/adobe-commerce-development", description: "Enterprise solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default HyvaThemeDevelopment;

