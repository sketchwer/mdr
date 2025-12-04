import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ContentMarketing = () => {
    return (
        <>
            <ServiceDetail
                title="Content Marketing"
                subtitle="Digital Marketing"
                description="Drive engagement and conversions with strategic content marketing. Create content that attracts, engages, and converts your audience."
                overview="Content marketing is about creating valuable, relevant content that attracts and engages your target audience. Our content marketing services help you create content that drives traffic, builds brand awareness, and converts visitors into customers."
                stats={[
                    { number: "30+", label: "Content Clients" },
                    { number: "500+", label: "Articles Created" },
                    { number: "4+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Content Strategy",
                        description: "Develop comprehensive content strategies aligned with your business goals."
                    },
                    {
                        title: "Blog Writing",
                        description: "Create SEO-optimized blog posts that rank well and engage readers."
                    },
                    {
                        title: "Content Creation",
                        description: "Create various types of content including articles, infographics, and videos."
                    },
                    {
                        title: "Content Optimization",
                        description: "Optimize existing content for better performance and SEO."
                    },
                    {
                        title: "Content Calendar",
                        description: "Plan and schedule content publication with editorial calendars."
                    },
                    {
                        title: "Content Distribution",
                        description: "Distribute content across multiple channels for maximum reach."
                    }
                ]}
                benefits={[
                    "Increased brand awareness",
                    "Better SEO rankings",
                    "Higher engagement",
                    "Lead generation",
                    "Cost-effective marketing",
                    "Expert content creators",
                    "Strategic approach"
                ]}
                technologies={[
                    "Content Management", "SEO Tools", "Analytics", "Design Tools"
                ]}
                process={[
                    {
                        title: "Content Strategy",
                        description: "Develop content strategy based on your audience and goals."
                    },
                    {
                        title: "Content Planning",
                        description: "Plan content topics and create editorial calendar."
                    },
                    {
                        title: "Content Creation",
                        description: "Create high-quality, engaging content."
                    },
                    {
                        title: "Content Optimization",
                        description: "Optimize content for SEO and engagement."
                    },
                    {
                        title: "Content Distribution",
                        description: "Publish and distribute content across channels."
                    },
                    {
                        title: "Performance Analysis",
                        description: "Analyze content performance and optimize strategy."
                    }
                ]}
                relatedServices={[
                    { title: "Search Engine Optimisation", path: "/services/search-engine-optimisation", description: "SEO services" },
                    { title: "Social Media Management", path: "/services/social-media-management", description: "Social media" },
                    { title: "PPC Management", path: "/services/ppc-management", description: "Paid advertising" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ContentMarketing;

