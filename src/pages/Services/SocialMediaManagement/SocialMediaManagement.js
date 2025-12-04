import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const SocialMediaManagement = () => {
    return (
        <>
            <ServiceDetail
                title="Social Media Management"
                subtitle="Digital Marketing"
                description="Build your brand presence on social media. Expert social media management services to engage your audience and drive growth."
                overview="Social media is essential for building brand awareness and engaging with your audience. Our social media management services help you create and execute social media strategies that drive engagement, increase followers, and generate leads."
                stats={[
                    { number: "35+", label: "Social Media Clients" },
                    { number: "150%", label: "Avg Engagement Increase" },
                    { number: "4+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Social Media Strategy",
                        description: "Develop comprehensive social media strategies for your brand."
                    },
                    {
                        title: "Content Creation",
                        description: "Create engaging social media content including posts, images, and videos."
                    },
                    {
                        title: "Community Management",
                        description: "Manage and engage with your social media community."
                    },
                    {
                        title: "Social Media Advertising",
                        description: "Create and manage paid social media advertising campaigns."
                    },
                    {
                        title: "Analytics & Reporting",
                        description: "Track and report on social media performance and ROI."
                    },
                    {
                        title: "Multi-Platform Management",
                        description: "Manage presence across Facebook, Instagram, Twitter, LinkedIn, and more."
                    }
                ]}
                benefits={[
                    "Increased brand awareness",
                    "Better audience engagement",
                    "Higher website traffic",
                    "Lead generation",
                    "Improved customer service",
                    "Expert social media team",
                    "Strategic approach"
                ]}
                technologies={[
                    "Facebook", "Instagram", "Twitter", "LinkedIn", "Social Media Tools", "Analytics"
                ]}
                process={[
                    {
                        title: "Strategy Development",
                        description: "Develop social media strategy aligned with your business goals."
                    },
                    {
                        title: "Content Planning",
                        description: "Plan content calendar and content themes."
                    },
                    {
                        title: "Content Creation",
                        description: "Create engaging social media content."
                    },
                    {
                        title: "Publishing & Engagement",
                        description: "Publish content and engage with your audience."
                    },
                    {
                        title: "Advertising",
                        description: "Run paid social media campaigns for better reach."
                    },
                    {
                        title: "Analysis & Optimization",
                        description: "Analyze performance and optimize strategy."
                    }
                ]}
                relatedServices={[
                    { title: "Content Marketing", path: "/services/content-marketing", description: "Content strategy" },
                    { title: "PPC Management", path: "/services/ppc-management", description: "Paid advertising" },
                    { title: "Search Engine Optimisation", path: "/services/search-engine-optimisation", description: "SEO services" }
                ]}
            />
            <CTA />
        </>
    );
};

export default SocialMediaManagement;

