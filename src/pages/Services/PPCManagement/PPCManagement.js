import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const PPCManagement = () => {
    return (
        <>
            <ServiceDetail
                title="PPC Management"
                subtitle="Digital Marketing"
                description="Maximize your ROI with expert PPC management services. Drive qualified traffic and conversions through paid advertising."
                overview="Pay-Per-Click (PPC) advertising is an effective way to drive immediate traffic and conversions. Our PPC management services help you create and manage successful advertising campaigns on Google Ads, Facebook Ads, and other platforms. We optimize your campaigns for maximum ROI."
                stats={[
                    { number: "40+", label: "PPC Campaigns" },
                    { number: "300%", label: "Avg ROI Increase" },
                    { number: "5+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Google Ads Management",
                        description: "Create and manage Google Ads campaigns for search, display, and shopping."
                    },
                    {
                        title: "Facebook Ads",
                        description: "Manage Facebook and Instagram advertising campaigns."
                    },
                    {
                        title: "Campaign Optimization",
                        description: "Continuously optimize campaigns for better performance and ROI."
                    },
                    {
                        title: "Keyword Research",
                        description: "Research and target the right keywords for your campaigns."
                    },
                    {
                        title: "Ad Copy Creation",
                        description: "Create compelling ad copy that drives clicks and conversions."
                    },
                    {
                        title: "Performance Reporting",
                        description: "Regular reports on campaign performance and ROI."
                    }
                ]}
                benefits={[
                    "Immediate results",
                    "Targeted advertising",
                    "Measurable ROI",
                    "Flexible budgets",
                    "Better conversion rates",
                    "Expert campaign management",
                    "Continuous optimization"
                ]}
                technologies={[
                    "Google Ads", "Facebook Ads", "Google Analytics", "PPC Tools"
                ]}
                process={[
                    {
                        title: "Campaign Strategy",
                        description: "Develop PPC strategy based on your business goals."
                    },
                    {
                        title: "Account Setup",
                        description: "Set up advertising accounts and tracking."
                    },
                    {
                        title: "Campaign Creation",
                        description: "Create and launch PPC campaigns."
                    },
                    {
                        title: "Ongoing Management",
                        description: "Monitor and optimize campaigns continuously."
                    },
                    {
                        title: "A/B Testing",
                        description: "Test different ad variations for better performance."
                    },
                    {
                        title: "Reporting & Analysis",
                        description: "Provide regular reports and insights."
                    }
                ]}
                relatedServices={[
                    { title: "Search Engine Optimisation", path: "/services/search-engine-optimisation", description: "SEO services" },
                    { title: "Content Marketing", path: "/services/content-marketing", description: "Content strategy" },
                    { title: "Social Media Management", path: "/services/social-media-management", description: "Social media" }
                ]}
            />
            <CTA />
        </>
    );
};

export default PPCManagement;

