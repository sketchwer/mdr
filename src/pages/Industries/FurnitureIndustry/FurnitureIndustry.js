import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const FurnitureIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Furniture E-Commerce"
                subtitle="Cutting-Edge Solutions for Furniture E-Commerce Development"
                description="Build powerful online furniture stores that showcase your products beautifully and drive sales. We create custom e-commerce solutions tailored for furniture retailers and manufacturers."
                bannerImages={[
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
                    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                ]}
                stats={[
                    { number: "40+", label: "Furniture Stores" },
                    { number: "80K+", label: "Products Managed" },
                    { number: "98%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Custom E-Commerce Development",
                        description: "Tailored e-commerce platforms designed specifically for furniture businesses with advanced product configuration and visualization.",
                        examples: "Magento, Shopify, Custom Solutions"
                    },
                    {
                        title: "3D Product Visualization",
                        description: "Interactive 3D viewers and AR tools that allow customers to visualize furniture in their spaces before purchasing.",
                        examples: "AR Integration, 3D Models, Room Planner"
                    },
                    {
                        title: "Customization Tools",
                        description: "Product customization features allowing customers to choose materials, colors, sizes, and finishes.",
                        examples: "Configurator, Material Selector, Size Calculator"
                    },
                    {
                        title: "Delivery Management",
                        description: "Comprehensive delivery management systems for scheduling, tracking, and managing furniture deliveries.",
                        examples: "Delivery Scheduling, Route Optimization, Tracking"
                    },
                    {
                        title: "Showroom Integration",
                        description: "Integration with physical showrooms for seamless omnichannel experience.",
                        examples: "Inventory Sync, Click & Collect, Store Locator"
                    },
                    {
                        title: "B2B Solutions",
                        description: "Dedicated B2B portals for wholesale customers with custom pricing and bulk ordering.",
                        examples: "Wholesale Portal, Custom Pricing, Volume Discounts"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Customer accounts with order history",
                            "Saved designs and configurations",
                            "Wishlist functionality",
                            "Quick reorder options"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Comprehensive product portfolio",
                            "Category and collection management",
                            "Product comparison tools",
                            "Advanced search and filters"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Sales forecasting and analytics",
                            "Budget tracking and management",
                            "Revenue reporting",
                            "Inventory planning"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "ROI tracking for campaigns",
                            "Product performance analysis",
                            "Inventory investment planning",
                            "Market trend analysis"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Payment Gateway APIs",
                        features: [
                            "Stripe for secure payments",
                            "PayPal for international transactions",
                            "Square for POS integration"
                        ]
                    },
                    {
                        title: "Shipping APIs",
                        features: [
                            "Delivery scheduling APIs",
                            "Carrier integration",
                            "Tracking and notifications"
                        ]
                    },
                    {
                        title: "3D Visualization APIs",
                        features: [
                            "3D model rendering",
                            "AR integration APIs",
                            "Room planning tools"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding your furniture business model, target customers, and specific requirements.",
                        items: [
                            "Business model analysis",
                            "Customer journey mapping",
                            "Feature requirements",
                            "Technology selection"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating beautiful, user-friendly designs that showcase furniture products effectively.",
                        items: [
                            "UI/UX design",
                            "Product page layouts",
                            "3D visualization design",
                            "Mobile-responsive design"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building robust e-commerce platforms with furniture-specific features.",
                        items: [
                            "Platform development",
                            "3D integration",
                            "Customization tools",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Thorough testing of all features including 3D viewers and customization tools.",
                        items: [
                            "Functionality testing",
                            "3D rendering testing",
                            "Performance testing",
                            "Cross-device testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth deployment with proper configuration and optimization.",
                        items: [
                            "Hosting setup",
                            "CDN configuration",
                            "Performance optimization",
                            "Go-live support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support to keep your store updated and performing well.",
                        items: [
                            "Regular updates",
                            "Performance monitoring",
                            "Security patches",
                            "Feature enhancements"
                        ]
                    }
                ]}
                technologies={['Magento', 'Shopify', 'React', 'Three.js', 'AR.js', 'Node.js', 'PHP']}
                faqs={[
                    {
                        question: "How can you help my furniture business go online?",
                        answer: "We provide comprehensive e-commerce solutions including custom store development, 3D product visualization, mobile apps, and integration with your existing systems to help you sell furniture online effectively."
                    },
                    {
                        question: "Do you provide 3D visualization for furniture?",
                        answer: "Yes, we integrate advanced 3D visualization and AR tools that allow customers to see how furniture looks in their space before purchasing, significantly improving conversion rates."
                    },
                    {
                        question: "Can you handle large product catalogs?",
                        answer: "Absolutely. We build scalable platforms that can handle thousands of products with variations, configurations, and high-quality images efficiently."
                    },
                    {
                        question: "How do you manage furniture delivery scheduling?",
                        answer: "We integrate delivery management systems that allow customers to schedule deliveries, track shipments, and manage delivery preferences seamlessly."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default FurnitureIndustry;

