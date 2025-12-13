import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const BusinessWebsiteDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Business Website Development"
                subtitle="Website Development"
                description="Create professional, conversion-focused business websites that represent your brand and drive results. Modern designs that engage visitors and convert them into customers."
                overview="Business Website Development services create professional, responsive websites tailored to your brand and business goals. Our expert developers build modern, fast-loading websites with excellent user experience, SEO optimization, and conversion-focused design. From corporate websites to service-based business sites, we deliver websites that effectively communicate your value proposition and drive business growth."
                features={[
                    {
                        title: "Custom Website Design",
                        description: "Unique, brand-aligned website designs that reflect your business identity and values."
                    },
                    {
                        title: "Responsive Development",
                        description: "Fully responsive websites that look perfect and function seamlessly on all devices."
                    },
                    {
                        title: "SEO Optimization",
                        description: "Built-in SEO best practices for better search engine rankings and organic visibility."
                    },
                    {
                        title: "Content Management System",
                        description: "Easy-to-use CMS for updating content, blog posts, and managing website elements."
                    },
                    {
                        title: "Contact Forms & Integration",
                        description: "Contact forms, lead capture, and integration with CRM and email marketing tools."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Fast-loading websites with optimized images, code, and hosting for excellent performance."
                    }
                ]}
                benefits={[
                    "Professional online presence for your business",
                    "Improved search engine visibility",
                    "Enhanced brand credibility and trust",
                    "Better user experience and engagement",
                    "Mobile-friendly for on-the-go customers",
                    "Easy content management and updates"
                ]}
                technologies={['React.js', 'Next.js', 'WordPress', 'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB', 'Cloud Hosting']}
                stats={[
                    { number: "500+", label: "Websites Built" },
                    { number: "95%", label: "Client Satisfaction" },
                    { number: "15+", label: "Years Experience" }
                ]}
                process={[
                    { title: "Discovery & Planning", description: "Understand your business, goals, target audience, and website requirements" },
                    { title: "Design & Wireframing", description: "Create website designs, layouts, and user experience flows" },
                    { title: "Development", description: "Build responsive website with modern technologies and best practices" },
                    { title: "Content Integration", description: "Add content, images, and optimize for SEO and performance" },
                    { title: "Testing & Refinement", description: "Test across devices, browsers, and fix any issues" },
                    { title: "Launch & Support", description: "Deploy website, set up hosting, and provide ongoing support" }
                ]}
                relatedServices={[
                    { title: "WordPress Development", path: "/services/wordpress-development", description: "WordPress websites" },
                    { title: "Landing Page Design", path: "/services/landing-page-design", description: "High-converting landing pages" },
                    { title: "Website Redesign", path: "/services/website-redesign", description: "Website redesign services" }
                ]}
            />
            <CTA />
        </>
    );
};

export default BusinessWebsiteDevelopment;

