import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const SearchEngineOptimisation = () => {
    return (
        <>
            <ServiceDetail
                title="Search Engine Optimisation"
                subtitle="Digital Marketing"
                description="Improve your search engine rankings and drive organic traffic with our comprehensive SEO services."
                overview="SEO is essential for improving your website's visibility in search engines. Our SEO services help you rank higher in search results, drive organic traffic, and increase conversions. We use proven strategies and techniques to improve your search engine rankings."
                stats={[
                    { number: "50+", label: "SEO Clients" },
                    { number: "200%", label: "Avg Traffic Increase" },
                    { number: "5+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "On-Page SEO",
                        description: "Optimize your website's content, meta tags, and structure for search engines."
                    },
                    {
                        title: "Off-Page SEO",
                        description: "Build quality backlinks and improve your website's authority."
                    },
                    {
                        title: "Technical SEO",
                        description: "Fix technical issues and optimize site speed, mobile-friendliness, and crawlability."
                    },
                    {
                        title: "Keyword Research",
                        description: "Identify and target the right keywords for your business."
                    },
                    {
                        title: "Content Optimization",
                        description: "Optimize existing content and create SEO-friendly new content."
                    },
                    {
                        title: "SEO Reporting",
                        description: "Regular reports on rankings, traffic, and SEO performance."
                    }
                ]}
                benefits={[
                    "Increased organic traffic",
                    "Better search rankings",
                    "Higher conversion rates",
                    "Long-term results",
                    "Cost-effective marketing",
                    "Targeted traffic",
                    "Expert SEO team"
                ]}
                technologies={[
                    "Google Analytics", "Google Search Console", "SEO Tools", "Keyword Research Tools"
                ]}
                process={[
                    {
                        title: "SEO Audit",
                        description: "Comprehensive audit of your website's current SEO status."
                    },
                    {
                        title: "Keyword Research",
                        description: "Research and identify target keywords for your business."
                    },
                    {
                        title: "On-Page Optimization",
                        description: "Optimize website content, meta tags, and structure."
                    },
                    {
                        title: "Off-Page SEO",
                        description: "Build quality backlinks and improve domain authority."
                    },
                    {
                        title: "Content Creation",
                        description: "Create SEO-optimized content that ranks well."
                    },
                    {
                        title: "Monitoring & Reporting",
                        description: "Monitor rankings and provide regular performance reports."
                    }
                ]}
                relatedServices={[
                    { title: "PPC Management", path: "/services/ppc-management", description: "Paid advertising" },
                    { title: "Content Marketing", path: "/services/content-marketing", description: "Content strategy" },
                    { title: "Social Media Management", path: "/services/social-media-management", description: "Social media" }
                ]}
            />
            <CTA />
        </>
    );
};

export default SearchEngineOptimisation;

