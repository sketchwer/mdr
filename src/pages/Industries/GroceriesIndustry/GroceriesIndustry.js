import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const GroceriesIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Groceries"
                subtitle="Cutting-Edge Solutions for Grocery E-Commerce Development"
                description="Build powerful online grocery stores with delivery management. We create comprehensive e-commerce solutions for grocery retailers and supermarkets."
                bannerImages={[
                    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                ]}
                stats={[
                    { number: "20+", label: "Grocery Stores" },
                    { number: "200K+", label: "Products Managed" },
                    { number: "96%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Grocery E-Commerce Platform",
                        description: "Custom e-commerce platforms designed for grocery businesses with advanced inventory and delivery management.",
                        examples: "Magento, Shopify, Custom Platforms"
                    },
                    {
                        title: "Delivery Management",
                        description: "Comprehensive delivery systems with scheduling, route optimization, and real-time tracking.",
                        examples: "Delivery Scheduling, Route Optimization, Tracking"
                    },
                    {
                        title: "Inventory Management",
                        description: "Real-time inventory tracking with expiry date management and automated reordering.",
                        examples: "Stock Management, Expiry Tracking, Auto Reorder"
                    },
                    {
                        title: "Mobile Grocery Apps",
                        description: "Mobile applications for customers to order groceries with quick checkout and delivery tracking.",
                        examples: "Customer Apps, Delivery Apps, Admin Apps"
                    },
                    {
                        title: "Subscription Services",
                        description: "Recurring order and subscription management for regular grocery deliveries.",
                        examples: "Weekly Subscriptions, Auto Reorder, Meal Plans"
                    },
                    {
                        title: "Multi-Store Management",
                        description: "Centralized management for multiple store locations with local inventory.",
                        examples: "Store Management, Local Inventory, Multi-location"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Customer account management",
                            "Order history and favorites",
                            "Delivery address management",
                            "Payment method storage"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Product portfolio management",
                            "Category organization",
                            "Brand management",
                            "Promotional management"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Sales forecasting",
                            "Inventory budget planning",
                            "Revenue analytics",
                            "Cost analysis"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "Technology investment planning",
                            "ROI analysis",
                            "Growth planning",
                            "Strategic investments"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Payment Gateway APIs",
                        features: [
                            "Stripe for secure payments",
                            "PayPal for transactions",
                            "Mobile wallet integration"
                        ]
                    },
                    {
                        title: "Delivery APIs",
                        features: [
                            "Delivery service APIs",
                            "Route optimization APIs",
                            "Tracking APIs"
                        ]
                    },
                    {
                        title: "Inventory APIs",
                        features: [
                            "ERP integration",
                            "Warehouse management APIs",
                            "Stock synchronization"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding grocery business operations and delivery requirements.",
                        items: [
                            "Business model analysis",
                            "Delivery workflow planning",
                            "Inventory requirements",
                            "Integration planning"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating user-friendly designs for grocery shopping and ordering.",
                        items: [
                            "Shopping interface design",
                            "Product catalog layouts",
                            "Checkout flow design",
                            "Mobile-first design"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building robust grocery platforms with delivery and inventory features.",
                        items: [
                            "Platform development",
                            "Delivery system integration",
                            "Inventory management",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing including ordering flows and delivery systems.",
                        items: [
                            "Order flow testing",
                            "Delivery system testing",
                            "Inventory testing",
                            "Payment testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth deployment with proper configuration.",
                        items: [
                            "Hosting setup",
                            "Delivery integration",
                            "Payment setup",
                            "Go-live support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support for inventory updates and feature enhancements.",
                        items: [
                            "Product updates",
                            "Inventory synchronization",
                            "Performance optimization",
                            "Feature enhancements"
                        ]
                    }
                ]}
                technologies={['Magento', 'Shopify', 'React', 'Node.js', 'Delivery APIs', 'Inventory Systems']}
                faqs={[
                    {
                        question: "How do you handle grocery delivery management?",
                        answer: "We implement comprehensive delivery management systems with scheduling, route optimization, real-time tracking, and driver management to ensure efficient grocery deliveries."
                    },
                    {
                        question: "Can you manage perishable inventory?",
                        answer: "Yes, we build systems that track expiry dates, manage FIFO inventory, send alerts for expiring products, and automate reordering for perishable items."
                    },
                    {
                        question: "Do you provide subscription services?",
                        answer: "Absolutely. We implement recurring order systems, weekly subscriptions, and meal plan features that allow customers to set up regular grocery deliveries."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default GroceriesIndustry;

