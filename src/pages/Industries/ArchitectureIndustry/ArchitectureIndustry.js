import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const ArchitectureIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Architecture & Interior Design"
                subtitle="Cutting-Edge Solutions for Architecture & Interior Design"
                description="Transform your architecture and interior design business with comprehensive digital solutions. We build portfolio platforms, project management systems, and client collaboration tools."
                bannerImages={[
                    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
                    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
                ]}
                stats={[
                    { number: "18+", label: "Architecture Projects" },
                    { number: "500+", label: "Portfolios Created" },
                    { number: "94%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Portfolio Websites",
                        description: "Stunning portfolio websites to showcase your architectural and design projects beautifully.",
                        examples: "Portfolio Sites, Project Galleries, Case Studies"
                    },
                    {
                        title: "Project Management Systems",
                        description: "Comprehensive project management tools for tracking projects, timelines, and resources.",
                        examples: "Project Tracking, Timeline Management, Resource Planning"
                    },
                    {
                        title: "3D Visualization Tools",
                        description: "Interactive 3D visualization and rendering tools for presenting designs to clients.",
                        examples: "3D Rendering, Virtual Tours, AR Visualization"
                    },
                    {
                        title: "Client Collaboration Platforms",
                        description: "Platforms for sharing designs, collecting feedback, and managing client communications.",
                        examples: "Design Sharing, Feedback Collection, Client Portals"
                    },
                    {
                        title: "CAD Integration",
                        description: "Integration with CAD software for seamless workflow and file management.",
                        examples: "AutoCAD Integration, Revit Integration, File Management"
                    },
                    {
                        title: "Mobile Apps",
                        description: "Mobile applications for architects and designers to manage projects on the go.",
                        examples: "Project Apps, Portfolio Apps, Client Apps"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Architect and designer accounts",
                            "Client account management",
                            "Team collaboration accounts",
                            "Vendor and contractor accounts"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Project portfolio management",
                            "Image and media library",
                            "Case study organization",
                            "Award and recognition tracking"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Project budget planning",
                            "Revenue forecasting",
                            "Cost estimation tools",
                            "Financial reporting"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "Technology investment planning",
                            "ROI analysis for tools",
                            "Resource allocation",
                            "Strategic planning"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Design APIs",
                        features: [
                            "CAD software APIs",
                            "3D rendering APIs",
                            "Image processing APIs"
                        ]
                    },
                    {
                        title: "Project Management APIs",
                        features: [
                            "Project tracking APIs",
                            "Timeline management APIs",
                            "Collaboration APIs"
                        ]
                    },
                    {
                        title: "Cloud Storage APIs",
                        features: [
                            "File storage APIs",
                            "Document management APIs",
                            "Media library APIs"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding your architecture business and workflow requirements.",
                        items: [
                            "Workflow analysis",
                            "Feature requirements",
                            "Integration needs",
                            "Technology selection"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating elegant, professional designs that showcase architectural work.",
                        items: [
                            "Portfolio design",
                            "Project page layouts",
                            "3D visualization design",
                            "Mobile-responsive design"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building robust platforms with architecture-specific features.",
                        items: [
                            "Platform development",
                            "3D integration",
                            "CAD integration",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing including 3D rendering and file handling.",
                        items: [
                            "Functionality testing",
                            "3D rendering testing",
                            "File upload testing",
                            "Performance testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth deployment with proper hosting for large files.",
                        items: [
                            "Hosting setup",
                            "CDN configuration",
                            "File storage setup",
                            "Go-live support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support for new projects and feature updates.",
                        items: [
                            "Content updates",
                            "Performance optimization",
                            "Feature enhancements",
                            "Technical support"
                        ]
                    }
                ]}
                technologies={['WordPress', 'React', 'Three.js', 'CAD Integration', 'Cloud Storage']}
                faqs={[
                    {
                        question: "Can you integrate with CAD software?",
                        answer: "Yes, we integrate with major CAD software like AutoCAD and Revit to streamline workflow and file management."
                    },
                    {
                        question: "Do you provide 3D visualization tools?",
                        answer: "Absolutely. We integrate 3D rendering and visualization tools that help you present designs to clients effectively."
                    },
                    {
                        question: "Can you handle large image and file uploads?",
                        answer: "Yes, we implement cloud storage solutions and CDN to handle large architectural files, high-resolution images, and 3D models efficiently."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default ArchitectureIndustry;

