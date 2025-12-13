import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const WebsiteRedesign = () => {
    return (
        <>
            <ServiceDetail
                title="Website Redesign"
                subtitle="Website Development"
                description="Transform your outdated website into a modern, high-performing digital asset. Redesign services that improve user experience, conversions, and business results."
                overview="Website Redesign services modernize your existing website with fresh designs, improved user experience, better performance, and updated technologies. We analyze your current website, identify improvement opportunities, and create a redesigned version that better serves your business goals. From visual refresh to complete overhaul, we ensure your redesigned website reflects your brand evolution and drives better results."
                features={[
                    {
                        title: "Modern Design Refresh",
                        description: "Contemporary design updates that align with current trends and your brand identity."
                    },
                    {
                        title: "Improved User Experience",
                        description: "Enhanced navigation, intuitive layouts, and improved usability for better user engagement."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Faster load times, optimized code, and improved Core Web Vitals for better SEO and UX."
                    },
                    {
                        title: "Mobile-First Approach",
                        description: "Mobile-responsive redesign ensuring excellent experience across all devices."
                    },
                    {
                        title: "Content Migration",
                        description: "Careful migration of existing content while improving structure and SEO optimization."
                    },
                    {
                        title: "SEO Enhancement",
                        description: "Improved SEO structure, meta tags, and technical SEO during redesign process."
                    }
                ]}
                benefits={[
                    "Modern, professional online presence",
                    "Improved user engagement and conversions",
                    "Better search engine rankings",
                    "Enhanced mobile experience",
                    "Faster loading times and better performance",
                    "Updated technologies and security"
                ]}
                technologies={['React.js', 'Next.js', 'WordPress', 'Modern CSS', 'Performance Optimization', 'SEO Tools', 'Analytics']}
                stats={[
                    { number: "200+", label: "Websites Redesigned" },
                    { number: "60%", label: "Avg Performance Improvement" },
                    { number: "45%", label: "Avg Conversion Increase" }
                ]}
                process={[
                    { title: "Current Site Audit", description: "Analyze existing website, identify issues, and improvement opportunities" },
                    { title: "Strategy & Planning", description: "Define redesign goals, user personas, and success metrics" },
                    { title: "Design & Prototyping", description: "Create new designs, layouts, and interactive prototypes" },
                    { title: "Development", description: "Build redesigned website with modern technologies and best practices" },
                    { title: "Content Migration", description: "Migrate and optimize existing content for new structure" },
                    { title: "Testing & Launch", description: "Thorough testing, launch, and monitoring for improvements" }
                ]}
                relatedServices={[
                    { title: "Business Website Development", path: "/services/business-website-development", description: "New websites" },
                    { title: "Website Maintenance", path: "/services/website-maintenance", description: "Ongoing maintenance" },
                    { title: "Landing Page Design", path: "/services/landing-page-design", description: "Landing pages" }
                ]}
            />
            <CTA />
        </>
    );
};

export default WebsiteRedesign;

