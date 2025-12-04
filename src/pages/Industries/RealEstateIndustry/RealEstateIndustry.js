import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const RealEstateIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Real Estate"
                subtitle="Cutting-Edge Solutions for Real Estate Development"
                description="Transform your real estate business with comprehensive digital solutions. We build property listing platforms, CRM systems, and management solutions for real estate professionals."
                bannerImages={[
                    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
                    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
                    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80'
                ]}
                stats={[
                    { number: "20+", label: "Real Estate Projects" },
                    { number: "10K+", label: "Properties Listed" },
                    { number: "97%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Property Listing Platforms",
                        description: "Comprehensive platforms for listing, searching, and managing real estate properties.",
                        examples: "Property Portals, Search Platforms, Listing Management"
                    },
                    {
                        title: "Real Estate CRM",
                        description: "Customer relationship management systems for real estate agents and brokers.",
                        examples: "Lead Management, Client Tracking, Deal Pipeline"
                    },
                    {
                        title: "Virtual Property Tours",
                        description: "360° virtual tours and AR tools for showcasing properties remotely.",
                        examples: "Virtual Tours, AR Visualization, 3D Walkthroughs"
                    },
                    {
                        title: "Property Management Systems",
                        description: "Complete solutions for managing rental properties, tenants, and maintenance.",
                        examples: "Tenant Management, Maintenance Tracking, Rent Collection"
                    },
                    {
                        title: "Real Estate Mobile Apps",
                        description: "Mobile applications for agents and clients with property search and management features.",
                        examples: "Agent Apps, Client Apps, Property Search Apps"
                    },
                    {
                        title: "Document Management",
                        description: "Secure document management for contracts, agreements, and property documents.",
                        examples: "E-Signatures, Document Storage, Contract Management"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Agent and broker accounts",
                            "Client account management",
                            "Property owner portals",
                            "Tenant accounts"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Property portfolio tracking",
                            "Investment property management",
                            "Portfolio analytics",
                            "Performance reporting"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Real estate budget planning",
                            "Revenue forecasting",
                            "Market analysis",
                            "Financial projections"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "Property investment tracking",
                            "ROI analysis",
                            "Market trend analysis",
                            "Investment planning tools"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Real Estate APIs",
                        features: [
                            "MLS integration APIs",
                            "Property data APIs",
                            "Market data APIs"
                        ]
                    },
                    {
                        title: "Payment APIs",
                        features: [
                            "Rent payment processing",
                            "Transaction APIs",
                            "Escrow management"
                        ]
                    },
                    {
                        title: "Mapping APIs",
                        features: [
                            "Google Maps integration",
                            "Geolocation APIs",
                            "Neighborhood data APIs"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding your real estate business model and requirements.",
                        items: [
                            "Business model analysis",
                            "Feature requirements",
                            "Integration needs",
                            "Technology selection"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating user-friendly designs for property listings and management.",
                        items: [
                            "UI/UX design",
                            "Property listing layouts",
                            "Search interface design",
                            "Mobile-responsive design"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building robust real estate platforms with property management features.",
                        items: [
                            "Platform development",
                            "Property search functionality",
                            "CRM integration",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing of all features and integrations.",
                        items: [
                            "Functionality testing",
                            "Search performance testing",
                            "Integration testing",
                            "User experience testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth deployment with proper configuration.",
                        items: [
                            "Hosting setup",
                            "MLS integration",
                            "Data migration",
                            "Go-live support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support for updates and enhancements.",
                        items: [
                            "Regular updates",
                            "Performance optimization",
                            "Feature enhancements",
                            "Data management"
                        ]
                    }
                ]}
                technologies={['WordPress', 'React', 'Node.js', 'Google Maps API', 'MLS Integration']}
                faqs={[
                    {
                        question: "Can you integrate with MLS systems?",
                        answer: "Yes, we integrate with major MLS systems to automatically sync property listings and ensure real-time data accuracy."
                    },
                    {
                        question: "Do you provide virtual tour solutions?",
                        answer: "Absolutely. We integrate 360° virtual tour technology and AR tools that allow potential buyers to explore properties remotely."
                    },
                    {
                        question: "Can you build CRM systems for real estate?",
                        answer: "Yes, we develop custom CRM systems specifically for real estate with lead management, client tracking, and deal pipeline features."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default RealEstateIndustry;

