import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const LandingPageDesign = () => {
    return (
        <>
            <ServiceDetail
                title="Landing Page Design"
                subtitle="Website Development"
                description="Create high-converting landing pages that turn visitors into customers. Data-driven designs optimized for conversions and lead generation."
                overview="Landing Page Design services create focused, conversion-optimized pages designed to achieve specific business goals. Whether you need a product launch page, lead generation form, event registration, or sales page, we build landing pages with compelling headlines, clear value propositions, strong calls-to-action, and conversion-focused design. Our data-driven approach ensures your landing pages deliver measurable results."
                features={[
                    {
                        title: "Conversion-Focused Design",
                        description: "Strategic design elements optimized to guide visitors toward your desired action and maximize conversions."
                    },
                    {
                        title: "Compelling Headlines & Copy",
                        description: "Persuasive headlines and copywriting that communicate value and drive action."
                    },
                    {
                        title: "Strong Call-to-Actions",
                        description: "Prominent, action-oriented CTAs strategically placed for maximum impact and click-through rates."
                    },
                    {
                        title: "Lead Capture Forms",
                        description: "Optimized forms with minimal fields, validation, and integration with email marketing tools."
                    },
                    {
                        title: "A/B Testing Ready",
                        description: "Built for A/B testing different variations to continuously improve conversion rates."
                    },
                    {
                        title: "Mobile Optimization",
                        description: "Mobile-first design ensuring perfect experience and conversions on all devices."
                    }
                ]}
                benefits={[
                    "Higher conversion rates and lead generation",
                    "Focused messaging for specific campaigns",
                    "Improved ROI on advertising spend",
                    "Faster page load times for better engagement",
                    "Easy integration with marketing tools",
                    "Data-driven optimization opportunities"
                ]}
                technologies={['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Unbounce', 'Leadpages', 'WordPress', 'Email Marketing Integration']}
                stats={[
                    { number: "300+", label: "Landing Pages" },
                    { number: "35%", label: "Avg Conversion Rate" },
                    { number: "2.5s", label: "Avg Load Time" }
                ]}
                process={[
                    { title: "Goal Definition", description: "Define landing page goals, target audience, and conversion objectives" },
                    { title: "Wireframing & Design", description: "Create wireframes and high-converting design layouts" },
                    { title: "Copywriting", description: "Write compelling headlines, copy, and CTAs that resonate with audience" },
                    { title: "Development", description: "Build landing page with fast loading times and mobile optimization" },
                    { title: "Integration", description: "Integrate forms, analytics, and email marketing tools" },
                    { title: "Testing & Launch", description: "Test functionality, launch, and set up conversion tracking" }
                ]}
                relatedServices={[
                    { title: "Business Website Development", path: "/services/business-website-development", description: "Business websites" },
                    { title: "Website Redesign", path: "/services/website-redesign", description: "Website redesign" },
                    { title: "PPC Management", path: "/services/ppc-management", description: "PPC campaigns" }
                ]}
            />
            <CTA />
        </>
    );
};

export default LandingPageDesign;

