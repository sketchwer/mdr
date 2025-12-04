import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const TilesIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Tiles E-Commerce"
                subtitle="Cutting-Edge Solutions for Tiles E-Commerce Development"
                description="Transform your tile business with comprehensive e-commerce solutions. We build powerful online platforms that help tile manufacturers and retailers reach customers globally."
                bannerImages={[
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
                    'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                ]}
                stats={[
                    { number: "50+", label: "Tile E-Commerce Stores" },
                    { number: "100K+", label: "Products Managed" },
                    { number: "95%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "E-Commerce Platform Development",
                        description: "Custom e-commerce platforms designed specifically for tile businesses with advanced catalog management and product visualization.",
                        examples: "Magento, Shopify, WooCommerce, Custom Platforms"
                    },
                    {
                        title: "Product Catalog Management",
                        description: "Comprehensive catalog management systems to handle thousands of tile products with variations, specifications, and high-quality images.",
                        examples: "PIM Integration, Bulk Import, Advanced Filtering"
                    },
                    {
                        title: "Visual Product Configurator",
                        description: "Interactive tools that allow customers to visualize tiles in different settings, helping them make informed purchase decisions.",
                        examples: "3D Visualization, Room Planner, Color Matching"
                    },
                    {
                        title: "Inventory Management",
                        description: "Real-time inventory tracking across multiple warehouses, automated reorder points, and stock synchronization.",
                        examples: "Multi-location Inventory, Stock Alerts, Automated Reordering"
                    },
                    {
                        title: "B2B Portal",
                        description: "Dedicated B2B portals for wholesale customers with custom pricing, bulk ordering, and account management.",
                        examples: "Custom Pricing, Volume Discounts, Account Management"
                    },
                    {
                        title: "Mobile Commerce",
                        description: "Mobile-optimized stores and apps that allow customers to browse and purchase tiles on the go.",
                        examples: "Mobile Apps, Responsive Design, Mobile Payments"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Customer account management with order history",
                            "Wishlist and saved products functionality",
                            "Quick reorder capabilities",
                            "Personalized product recommendations"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Centralized platform for product portfolio",
                            "Advanced search and filtering options",
                            "Product comparison tools",
                            "Category and collection management"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Sales forecasting based on historical data",
                            "Budget tracking and management",
                            "Revenue analytics and reporting",
                            "Inventory planning tools"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "ROI tracking for marketing campaigns",
                            "Performance analysis of product lines",
                            "Risk assessment for inventory decisions",
                            "Investment planning for business growth"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Payment Gateway APIs",
                        features: [
                            "Stripe API for secure online payments",
                            "PayPal API for international transactions",
                            "Square API for point-of-sale integration"
                        ]
                    },
                    {
                        title: "Shipping APIs",
                        features: [
                            "FedEx API for shipping calculations",
                            "UPS API for delivery tracking",
                            "DHL API for international shipping"
                        ]
                    },
                    {
                        title: "Inventory APIs",
                        features: [
                            "ERP system integration",
                            "Warehouse management APIs",
                            "Real-time stock synchronization"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding your tile business requirements, target market, and goals to create a comprehensive development plan.",
                        items: [
                            "Business requirements analysis",
                            "Market research and competitor analysis",
                            "Technology stack selection",
                            "Project roadmap creation"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating user-friendly designs that showcase your tile products effectively and provide excellent shopping experience.",
                        items: [
                            "UI/UX design for tile catalogs",
                            "Product visualization design",
                            "Mobile-responsive layouts",
                            "Brand identity integration"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building robust e-commerce platforms with custom features tailored for tile businesses.",
                        items: [
                            "E-commerce platform development",
                            "Product catalog implementation",
                            "Payment and shipping integration",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing to ensure all features work perfectly across all devices and platforms.",
                        items: [
                            "Functionality testing",
                            "Performance testing",
                            "Security testing",
                            "User acceptance testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth deployment with proper hosting setup and go-live support.",
                        items: [
                            "Hosting configuration",
                            "SSL certificate setup",
                            "Domain configuration",
                            "Go-live support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support and maintenance to keep your store updated and performing optimally.",
                        items: [
                            "Regular updates and patches",
                            "Performance monitoring",
                            "Security updates",
                            "Feature enhancements"
                        ]
                    }
                ]}
                technologies={['Magento', 'Shopify', 'WooCommerce', 'React', 'Node.js', 'PHP', 'MySQL', 'MongoDB']}
                faqs={[
                    {
                        question: "How can your services benefit my tile business?",
                        answer: "Our services can help your tile business improve online presence, reach more customers, streamline operations, enhance customer experience, and increase sales through powerful e-commerce solutions."
                    },
                    {
                        question: "What e-commerce platforms do you support for tile businesses?",
                        answer: "We support all major e-commerce platforms including Magento, Shopify, WooCommerce, and custom solutions. We choose the platform that best fits your business needs and budget."
                    },
                    {
                        question: "Can you integrate with our existing inventory management system?",
                        answer: "Yes, we can integrate your e-commerce store with existing ERP, inventory management, and warehouse systems to ensure real-time synchronization and accurate stock levels."
                    },
                    {
                        question: "Do you provide mobile apps for tile stores?",
                        answer: "Yes, we develop mobile applications for both iOS and Android platforms, allowing your customers to browse and purchase tiles conveniently from their mobile devices."
                    },
                    {
                        question: "How do you handle product visualization for tiles?",
                        answer: "We implement advanced visualization tools including 3D room planners, color matching systems, and virtual showrooms that help customers visualize tiles in their spaces before purchasing."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default TilesIndustry;

