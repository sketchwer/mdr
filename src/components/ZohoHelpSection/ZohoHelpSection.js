import React from 'react';
import './ZohoHelpSection.css';

const ZohoHelpSection = () => {
    const zohoProducts = [
        {
            title: "Zoho CRM",
            description: "Zoho CRM (Customer Relationship Management) is a complete software system that helps to manage customer relationships. You can manage, analyze and improve your customer relationships with comprehensive cloud solutions. Get a complete set of data-driven CRM tools that supports you beyond the sales process.",
            features: [
                "It helps to convert your leads into potential buyers. CRM's Lead Management Software systematically converts qualified and analyzed leads into new business opportunities.",
                "It gives you a Contact Management System to organize your business contacts in one place. You will be able to know when you contacted a customer the last time and the best time to reach them.",
                "The Deal Management Feature in CRM gives you complete information on current and future deals. It allows you to segment deals based on their current stage."
            ],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            imagePosition: "left"
        },
        {
            title: "Zoho Campaigns",
            description: "Craft high-converting email campaigns without needing technical people and get sales poppin with drag and drop interface. Zoho Campaigns is the Best Email Marketing Software to engage your audience, create responsive designs, and connect with new customers.",
            features: [
                "Dynamic personalization to change email content and CTAs",
                "Email interactivity to connect recipients by using incredible elements like images and videos",
                "Real-time A/B Testing and drag and drop workflow",
                "Increase your open rates with optimized emails"
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            imagePosition: "right"
        },
        {
            title: "Zoho Bookings",
            description: "Zoho Bookings is your hub for scheduling meetings professionally. It syncs your calendars to eliminate the hassle of back-and-forth emails. Get the best consultation with a user-friendly interface.",
            features: [
                "Reduce email back and forth",
                "Eliminate no-shows",
                "Generate more revenue with hassle-free scheduling",
                "On-demand scheduling to make more connections"
            ],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80",
            imagePosition: "left"
        },
        {
            title: "Zoho Books",
            description: "Online Accounting Software to manage your finances, automate business workflows, and handle mundane accounting tasks to focus on your business. Run every aspect of your business from wherever you are.",
            features: [
                "Send estimates, convert to invoices, and get paid online, on time",
                "Keep you at the top of your payables and track the payments you have made",
                "Capture the goods and services you offer and track entire inventory levels",
                "Manage multiple projects and get all your contacts in one place"
            ],
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2011&q=80",
            imagePosition: "right"
        },
        {
            title: "Zoho Analytics",
            description: "Zoho Analytics is the world's leading analytics software for successful business forecasts. Modern self-service BI and Analytics Platform help you to create stunning data visualizations, analyze your data and discover hidden insights within a few minutes.",
            features: [
                "Connect and blend data from multiple sources",
                "Transform, enrich, and catalog the data with self-service data preparation modules",
                "Generate automated insights with a single click by using an intelligent AI assistant",
                "Build insightful & interactive reports with drag and drop interface"
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            imagePosition: "left"
        },
        {
            title: "Zoho Creator",
            description: "The best low-code custom application development platform allows you to create personalized applications without hassles. It gives you ready-to-use business applications that meet your unique needs.",
            features: [
                "Multi-device app creator to create incredible applications with advanced features",
                "550+ prebuilt integrations to run your business from one platform",
                "Business process creator to stay on top of all your business processes",
                "Add AI without coding algorithms and quickly create smart business apps"
            ],
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
            imagePosition: "right"
        }
    ];

    return (
        <section className="zoho-help-section">
            <div className="section-header">
                <div className="container">
                    <h2 className="section-title">HOW CAN ZOHO HELP YOU IN YOUR BUSINESS?</h2>
                </div>
            </div>
            <div className="zoho-products-list">
                {zohoProducts.map((product, index) => (
                    <div key={index} className={`zoho-product-item ${product.imagePosition === 'right' ? 'reverse' : ''}`}>
                        <div className="container">
                            <div className="product-content-wrapper">
                                <div className="product-text">
                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-description">{product.description}</p>
                                    <ul className="product-features">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    {product.title === "Zoho CRM" && (
                                        <p className="product-cta">Let's cover every aspect of your business cycle with the Best CRM Software.</p>
                                    )}
                                </div>
                                <div className="product-image-wrapper">
                                    <div className="product-image-container">
                                        <img src={product.image} alt={product.title} className="product-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ZohoHelpSection;

