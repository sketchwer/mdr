import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const FashionIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Fashion E-Commerce"
                subtitle="Cutting-Edge Solutions for Fashion E-Commerce Development"
                description="Create stunning fashion e-commerce platforms that showcase your collections beautifully and drive sales. We build custom solutions for fashion brands, retailers, and designers."
                bannerImages={[
                    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                ]}
                stats={[
                    { number: "60+", label: "Fashion Stores" },
                    { number: "150K+", label: "Products Managed" },
                    { number: "97%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Fashion E-Commerce Platform",
                        description: "Custom e-commerce platforms designed for fashion brands with advanced catalog management, size guides, and lookbook features.",
                        examples: "Magento, Shopify, WooCommerce"
                    },
                    {
                        title: "Advanced Catalog Management",
                        description: "Comprehensive catalog systems to manage fashion products with sizes, colors, styles, and seasonal collections.",
                        examples: "PIM Integration, Bulk Import, Variant Management"
                    },
                    {
                        title: "Visual Merchandising",
                        description: "Tools for creating lookbooks, style guides, and visual product displays that inspire customers.",
                        examples: "Lookbook Builder, Style Guides, Product Styling"
                    },
                    {
                        title: "Size & Fit Tools",
                        description: "Interactive size guides, fit recommendations, and virtual try-on features to reduce returns.",
                        examples: "Size Guide, Fit Finder, Virtual Try-On"
                    },
                    {
                        title: "Multi-Channel Integration",
                        description: "Integration with marketplaces, social media, and physical stores for omnichannel retail.",
                        examples: "Marketplace Sync, Social Commerce, Store Integration"
                    },
                    {
                        title: "Personalization",
                        description: "AI-powered personalization to show relevant products and create personalized shopping experiences.",
                        examples: "Product Recommendations, Personalized Homepage, Style Matching"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Customer profiles with style preferences",
                            "Order history and tracking",
                            "Wishlist and saved items",
                            "Size and fit preferences"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Product portfolio management",
                            "Collection and category organization",
                            "Seasonal catalog management",
                            "Product lifecycle tracking"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Sales forecasting by collection",
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
                            "PayPal for global transactions",
                            "Klarna for buy now pay later"
                        ]
                    },
                    {
                        title: "Fashion APIs",
                        features: [
                            "Size chart APIs",
                            "Inventory management APIs",
                            "Fashion trend APIs"
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
                        description: "Understanding your fashion brand, target audience, and business goals.",
                        items: [
                            "Brand identity analysis",
                            "Target audience research",
                            "Competitor analysis",
                            "Feature planning"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating beautiful, on-brand designs that showcase fashion products effectively.",
                        items: [
                            "Brand-aligned UI/UX",
                            "Product page design",
                            "Lookbook layouts",
                            "Mobile-first design"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building fashion-specific e-commerce features and integrations.",
                        items: [
                            "Platform development",
                            "Catalog management",
                            "Visual merchandising tools",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing including size guides and personalization features.",
                        items: [
                            "Functionality testing",
                            "Visual testing",
                            "Performance testing",
                            "User experience testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth launch with proper optimization and marketing setup.",
                        items: [
                            "Hosting configuration",
                            "CDN setup",
                            "SEO optimization",
                            "Launch support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support for seasonal updates and new collections.",
                        items: [
                            "Seasonal updates",
                            "New collection launches",
                            "Performance optimization",
                            "Feature enhancements"
                        ]
                    }
                ]}
                technologies={['Magento', 'Shopify', 'WooCommerce', 'React', 'AI/ML', 'Node.js']}
                faqs={[
                    {
                        question: "How can you help my fashion brand online?",
                        answer: "We create custom e-commerce platforms with fashion-specific features like size guides, lookbooks, visual merchandising, and personalization to help your brand stand out and drive sales."
                    },
                    {
                        question: "Do you support multi-channel selling?",
                        answer: "Yes, we integrate with marketplaces like Amazon, eBay, and social commerce platforms to help you sell across multiple channels from one central system."
                    },
                    {
                        question: "Can you handle seasonal collections?",
                        answer: "Absolutely. We build systems that make it easy to manage seasonal collections, launch new lines, and organize products by seasons and trends."
                    },
                    {
                        question: "How do you reduce return rates?",
                        answer: "We implement size guides, fit recommendations, virtual try-on tools, and detailed product information to help customers make better purchase decisions and reduce returns."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default FashionIndustry;

