import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const BeautyCareIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Beauty & Personal Care"
                subtitle="Cutting-Edge Solutions for Beauty & Personal Care E-Commerce"
                description="Create stunning beauty e-commerce platforms that showcase your products beautifully. We build custom solutions for beauty brands, cosmetics retailers, and personal care businesses."
                bannerImages={[
                    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
                    'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
                    'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80'
                ]}
                stats={[
                    { number: "25+", label: "Beauty Stores" },
                    { number: "100K+", label: "Products Managed" },
                    { number: "97%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Beauty E-Commerce Platform",
                        description: "Custom e-commerce platforms designed for beauty brands with advanced product displays and personalization.",
                        examples: "Magento, Shopify, WooCommerce"
                    },
                    {
                        title: "Product Visualization",
                        description: "Advanced visualization tools including swatches, shade matching, and virtual try-on features.",
                        examples: "Color Swatches, Shade Matching, Virtual Try-On"
                    },
                    {
                        title: "Beauty Quiz & Recommendations",
                        description: "Interactive quizzes and AI-powered recommendations to help customers find the right products.",
                        examples: "Skin Type Quiz, Product Recommendations, Personalized Suggestions"
                    },
                    {
                        title: "Subscription Services",
                        description: "Beauty box subscriptions and recurring order management for regular product deliveries.",
                        examples: "Beauty Boxes, Auto Reorder, Subscription Management"
                    },
                    {
                        title: "Social Commerce Integration",
                        description: "Integration with social media platforms for shoppable posts and influencer marketing.",
                        examples: "Instagram Shopping, Social Commerce, Influencer Tools"
                    },
                    {
                        title: "Loyalty Programs",
                        description: "Comprehensive loyalty programs with points, rewards, and exclusive offers.",
                        examples: "Points System, Rewards Program, VIP Benefits"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Customer beauty profiles",
                            "Skin type and preferences",
                            "Order history and favorites",
                            "Loyalty account management"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Product portfolio management",
                            "Category organization",
                            "Collection management",
                            "Brand portfolio tracking"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Sales forecasting by category",
                            "Inventory budget planning",
                            "Seasonal trend analysis",
                            "Revenue projections"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "Marketing ROI tracking",
                            "Product performance analysis",
                            "Collection investment planning",
                            "Trend-based forecasting"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Payment Gateway APIs",
                        features: [
                            "Stripe for secure payments",
                            "PayPal for transactions",
                            "Buy now pay later options"
                        ]
                    },
                    {
                        title: "Beauty APIs",
                        features: [
                            "Shade matching APIs",
                            "Product recommendation APIs",
                            "Beauty trend APIs"
                        ]
                    },
                    {
                        title: "Social Commerce APIs",
                        features: [
                            "Instagram Shopping API",
                            "Facebook Shop integration",
                            "Pinterest Buyable Pins"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding your beauty brand and target audience.",
                        items: [
                            "Brand identity analysis",
                            "Target audience research",
                            "Feature requirements",
                            "Technology selection"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating beautiful, on-brand designs for beauty products.",
                        items: [
                            "Brand-aligned UI/UX",
                            "Product page design",
                            "Visualization tools design",
                            "Mobile-first design"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building beauty-specific e-commerce features and integrations.",
                        items: [
                            "Platform development",
                            "Visualization tools",
                            "Recommendation engine",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing including visualization and personalization.",
                        items: [
                            "Functionality testing",
                            "Visualization testing",
                            "Recommendation testing",
                            "User experience testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth launch with proper optimization.",
                        items: [
                            "Hosting configuration",
                            "CDN setup",
                            "SEO optimization",
                            "Launch support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support for new products and features.",
                        items: [
                            "Product updates",
                            "Feature enhancements",
                            "Performance optimization",
                            "Trend updates"
                        ]
                    }
                ]}
                technologies={['Magento', 'Shopify', 'React', 'AI/ML', 'AR/VR', 'Node.js']}
                faqs={[
                    {
                        question: "Do you provide virtual try-on features?",
                        answer: "Yes, we integrate AR and virtual try-on technology that allows customers to see how beauty products look on them before purchasing."
                    },
                    {
                        question: "Can you build beauty subscription boxes?",
                        answer: "Absolutely. We develop subscription management systems for beauty boxes with customization options and recurring billing."
                    },
                    {
                        question: "How do you help with product recommendations?",
                        answer: "We implement AI-powered recommendation engines that analyze customer preferences, skin type, and purchase history to suggest relevant beauty products."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default BeautyCareIndustry;

