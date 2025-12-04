import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const JewelleryIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Jewellery E-Commerce"
                subtitle="Cutting-Edge Solutions for Jewellery E-Commerce Development"
                description="Create luxurious jewellery e-commerce platforms that showcase your precious collections beautifully. We build custom solutions for jewellery retailers, designers, and brands."
                bannerImages={[
                    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
                ]}
                stats={[
                    { number: "35+", label: "Jewellery Stores" },
                    { number: "50K+", label: "Products Managed" },
                    { number: "99%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Luxury E-Commerce Platform",
                        description: "Premium e-commerce platforms designed for jewellery businesses with high-quality product displays and luxury shopping experience.",
                        examples: "Magento, Shopify Plus, Custom Luxury Platforms"
                    },
                    {
                        title: "High-Resolution Product Display",
                        description: "Advanced image galleries with zoom, 360° views, and high-resolution images to showcase jewellery details beautifully.",
                        examples: "360° Views, Zoom Features, Video Integration"
                    },
                    {
                        title: "Customization Tools",
                        description: "Tools for custom jewellery design, engraving options, and personalization features.",
                        examples: "Design Configurator, Engraving Tool, Personalization"
                    },
                    {
                        title: "Certificate Management",
                        description: "Digital certificate management for authenticity, grading, and warranty documentation.",
                        examples: "GIA Integration, Certificate Display, Warranty Management"
                    },
                    {
                        title: "VIP Customer Portal",
                        description: "Exclusive portals for VIP customers with special pricing, early access, and personalized services.",
                        examples: "VIP Accounts, Exclusive Access, Personal Shopping"
                    },
                    {
                        title: "Security & Authentication",
                        description: "Enhanced security features for high-value transactions and customer data protection.",
                        examples: "2FA, SSL Encryption, Fraud Detection"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Luxury customer accounts",
                            "Purchase history and certificates",
                            "Wishlist and favorites",
                            "VIP membership management"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Jewellery portfolio management",
                            "Collection organization",
                            "Category management",
                            "Precious metal tracking"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Sales forecasting by collection",
                            "Inventory value tracking",
                            "Precious metal pricing",
                            "Revenue analytics"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "ROI tracking for campaigns",
                            "Product performance analysis",
                            "Collection investment planning",
                            "Market value tracking"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Payment Gateway APIs",
                        features: [
                            "Stripe for secure payments",
                            "PayPal for international",
                            "Luxury payment options"
                        ]
                    },
                    {
                        title: "Jewellery APIs",
                        features: [
                            "GIA certificate APIs",
                            "Precious metal pricing APIs",
                            "Authentication APIs"
                        ]
                    },
                    {
                        title: "Shipping APIs",
                        features: [
                            "Insured shipping APIs",
                            "Secure delivery tracking",
                            "Signature confirmation"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding your jewellery business, brand positioning, and luxury requirements.",
                        items: [
                            "Brand positioning analysis",
                            "Luxury market research",
                            "Feature requirements",
                            "Security planning"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating elegant, luxurious designs that reflect your brand and showcase jewellery beautifully.",
                        items: [
                            "Luxury UI/UX design",
                            "Product display layouts",
                            "Certificate presentation",
                            "Mobile luxury experience"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building premium e-commerce platforms with jewellery-specific features.",
                        items: [
                            "Platform development",
                            "High-res image handling",
                            "Customization tools",
                            "Security implementation"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Thorough testing including image quality, security, and luxury features.",
                        items: [
                            "Image quality testing",
                            "Security testing",
                            "Performance testing",
                            "Luxury experience testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Premium hosting and deployment with enhanced security and performance.",
                        items: [
                            "Premium hosting setup",
                            "SSL and security",
                            "CDN configuration",
                            "Launch support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support for new collections and luxury features.",
                        items: [
                            "Collection updates",
                            "Security monitoring",
                            "Performance optimization",
                            "Feature enhancements"
                        ]
                    }
                ]}
                technologies={['Magento', 'Shopify Plus', 'React', 'Node.js', 'High-Res Imaging', 'Security Tools']}
                faqs={[
                    {
                        question: "How can you help my jewellery business online?",
                        answer: "We create luxury e-commerce platforms with high-resolution product displays, customization tools, certificate management, and VIP features tailored for jewellery businesses."
                    },
                    {
                        question: "Do you handle high-resolution images?",
                        answer: "Yes, we implement advanced image handling with zoom features, 360° views, and high-resolution displays to showcase jewellery details beautifully."
                    },
                    {
                        question: "Can you integrate certificate management?",
                        answer: "Absolutely. We integrate with certification bodies like GIA and create systems to display and manage authenticity certificates digitally."
                    },
                    {
                        question: "How do you ensure security for high-value transactions?",
                        answer: "We implement enhanced security including 2FA, SSL encryption, fraud detection, and secure payment processing for high-value jewellery transactions."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default JewelleryIndustry;

