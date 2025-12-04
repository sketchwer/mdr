import React from 'react';
import { Link } from 'react-router-dom';
import ClientsSection from '../../../components/ClientsSection/ClientsSection';
import Testimonials from '../../../components/Testimonials/Testimonials';
import CTA from '../../../components/CTA/CTA';
import './ShopifyDevelopment.css';

const ShopifyDevelopment = () => {
    return (
        <div className="shopify-development-page">
            {/* Hero Section */}
            <section className="shopify-hero">
                <div className="container">
                    <div className="shopify-hero-content">
                        <span className="breadcrumb">Home / Services / Shopify Development</span>
                        <h1 className="shopify-hero-title">Shopify Development Services</h1>
                        <p className="shopify-hero-description">
                            At Elsner, we build high-performing Shopify websites and online stores designed to help businesses sell smarter and scale faster with intelligent, AI-powered solutions. As a trusted Shopify development company, we provide full-scale Shopify development services tailored to fit businesses of every size.
                        </p>
                        <Link to="/contact" className="btn btn-primary hero-cta">
                            GET FREE SHOPIFY QUOTE
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <ClientsSection />

            {/* Main Features Section */}
            <section className="shopify-features-main">
                <div className="container">
                    <h2 className="section-title-main">Tailored Shopify Store Development Services That Fit Your Needs</h2>
                    
                    {/* Speed Feature */}
                    <div className="feature-block">
                        <div className="feature-content">
                            <div className="feature-icon-large">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                </svg>
                            </div>
                            <h3 className="feature-title-large">Speed That Sells</h3>
                            <p className="feature-description-large">
                                A slow Shopify store can lead to lost sales. Customers expect fast load times when they're ready to buy. Around 40% of users will leave a page that doesn't load within three seconds.
                            </p>
                            <p className="feature-description-large">
                                As a top Shopify development company and a trusted Shopify development agency, Elsner leverages intelligent, AI-driven solutions to optimize your store's performance and keep visitors engaged.
                            </p>
                            <Link to="/contact" className="feature-link">Speed Up Your Site →</Link>
                        </div>
                        <div className="feature-image">
                            <img 
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" 
                                alt="Speed Optimization" 
                                className="feature-img"
                            />
                        </div>
                    </div>

                    {/* Mobile Feature */}
                    <div className="feature-block reverse">
                        <div className="feature-content">
                            <div className="feature-icon-large">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                                </svg>
                            </div>
                            <h3 className="feature-title-large">Mobile-First Shopping</h3>
                            <p className="feature-description-large">
                                Most shoppers use their phones to browse and buy. If your store isn't mobile-optimized, they'll leave quickly. Our Shopify website development services deliver a consistent, user-friendly experience across all screen sizes — from smartphones to desktops.
                            </p>
                            <p className="feature-description-large">
                                As a top Shopify development agency, we build touch-friendly navigation, quick checkout flows, and responsive product layouts that look great everywhere.
                            </p>
                            <Link to="/contact" className="feature-link">Go Mobile Ready →</Link>
                        </div>
                        <div className="feature-image">
                            <img 
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                                alt="Mobile Shopping" 
                                className="feature-img"
                            />
                        </div>
                    </div>

                    {/* AI Automation Feature */}
                    <div className="feature-block">
                        <div className="feature-content">
                            <div className="feature-icon-large">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                    <path d="M2 17l10 5 10-5"/>
                                    <path d="M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <h3 className="feature-title-large">AI-driven Automation & Smart Selling Features</h3>
                            <p className="feature-description-large">
                                Managing an online store doesn't have to take all your time. As a Shopify app development company, Elsner automates key processes using AI-powered solutions like inventory syncing, abandoned cart recovery, and smart product recommendations.
                            </p>
                            <p className="feature-description-large">
                                We create intelligent Shopify workflows that update stock across all sales channels, remind shoppers about items left behind, and personalize product suggestions based on behavior.
                            </p>
                            <Link to="/contact" className="feature-link">Automate Now →</Link>
                        </div>
                        <div className="feature-image">
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                                alt="AI Automation" 
                                className="feature-img"
                            />
                        </div>
                    </div>

                    {/* Global Support Feature */}
                    <div className="feature-block reverse">
                        <div className="feature-content">
                            <div className="feature-icon-large">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                </svg>
                            </div>
                            <h3 className="feature-title-large">Global & Multi-Currency Support</h3>
                            <p className="feature-description-large">
                                Planning to sell globally? We make it seamless. Elsner is a leading Shopify development agency and a trusted Shopify app development company that prepares your store for multi-currency payments, international checkout, and localized shopping experiences.
                            </p>
                            <p className="feature-description-large">
                                We fine-tune your store with language options, regional shipping methods, and rules for displaying international offers.
                            </p>
                            <Link to="/contact" className="feature-link">Expand Worldwide →</Link>
                        </div>
                        <div className="feature-image">
                            <img 
                                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                                alt="Global Commerce" 
                                className="feature-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="shopify-services-list">
                <div className="container">
                    <h2 className="section-title-main">Our Shopify Development Services include</h2>
                    <div className="services-grid-detailed">
                        <div className="service-item-detailed">
                            <div className="service-icon-box">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                                    <path d="M9 9h6v6H9z"/>
                                </svg>
                            </div>
                            <h3>Custom Shopify Website Development</h3>
                            <p>Elsner delivers custom Shopify development services designed to reflect your brand's identity, values, and goals. Every store we create is user-friendly, visually polished, and built to convert with AI-assisted design and smart optimization.</p>
                        </div>
                        <div className="service-item-detailed">
                            <div className="service-icon-box">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                </svg>
                            </div>
                            <h3>Shopify Store Migration</h3>
                            <p>Shopify store migration is made simple with our expert Shopify development services. We move your existing website to Shopify with care, protecting your data, SEO value, customer details, and site features.</p>
                        </div>
                        <div className="service-item-detailed">
                            <div className="service-icon-box">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 7h-9M14 17H5M15 3l4 4-4 4M4 21l4-4-4-4"/>
                                </svg>
                            </div>
                            <h3>Shopify Payment & Checkout Integration</h3>
                            <p>A fast and secure checkout is critical to completing sales. As a Shopify development agency, we implement trusted payment gateways and streamlined checkout flows tailored to your business.</p>
                        </div>
                        <div className="service-item-detailed">
                            <div className="service-icon-box">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                                </svg>
                            </div>
                            <h3>Shopify Mobile Store Optimization</h3>
                            <p>Mobile commerce is dominating — and your store should match. As a leading Shopify app development company, we build responsive Shopify stores that perform beautifully on smartphones and tablets.</p>
                        </div>
                        <div className="service-item-detailed">
                            <div className="service-icon-box">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                    <path d="M2 17l10 5 10-5"/>
                                    <path d="M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <h3>Shopify App Integration</h3>
                            <p>Your online store should connect with every part of your business. Our Shopify app development services cover seamless, AI-enhanced integration with top platforms — from CRMs and ERPs to inventory, analytics, and marketing tools.</p>
                        </div>
                        <div className="service-item-detailed">
                            <div className="service-icon-box">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                </svg>
                            </div>
                            <h3>Shopify Speed Optimization</h3>
                            <p>Shopify store speed is vital for both user experience and SEO. Using our Shopify website development services, we fine-tune every aspect of your store — from image loading to server response — to make sure it's fast, reliable, and conversion-ready.</p>
                        </div>
                        <div className="service-item-detailed">
                            <div className="service-icon-box">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                                </svg>
                            </div>
                            <h3>Maintenance & Support</h3>
                            <p>A successful Shopify store needs constant attention. As your Shopify app development company, Elsner offers full maintenance and support to keep your store running, secure, and up to date.</p>
                        </div>
                        <div className="service-item-detailed">
                            <div className="service-icon-box">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                                    <path d="M9 9h6v6H9z"/>
                                </svg>
                            </div>
                            <h3>Shopify UI/UX Design</h3>
                            <p>Great design is about guiding users naturally through your store. As a trusted Shopify development company, we craft custom Shopify experiences that look clean, feel intuitive, and convert smoothly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="shopify-workflow">
                <div className="container">
                    <h2 className="section-title-main">Elsner's Shopify Development Workflow</h2>
                    <div className="workflow-steps">
                        <div className="workflow-step">
                            <div className="workflow-number">1</div>
                            <h3>Analysis</h3>
                            <p>We assess your business needs and craft a suitable Shopify strategy.</p>
                        </div>
                        <div className="workflow-step">
                            <div className="workflow-number">2</div>
                            <h3>Design</h3>
                            <p>Our UI/UX experts create intuitive, user-friendly designs for a seamless experience.</p>
                        </div>
                        <div className="workflow-step">
                            <div className="workflow-number">3</div>
                            <h3>Development</h3>
                            <p>We build and customize high-performance Shopify modules tailored to your goals.</p>
                        </div>
                        <div className="workflow-step">
                            <div className="workflow-number">4</div>
                            <h3>Optimization</h3>
                            <p>We integrate the latest eCommerce trends to enhance performance and scalability.</p>
                        </div>
                        <div className="workflow-step">
                            <div className="workflow-number">5</div>
                            <h3>Deployment</h3>
                            <p>A smooth, hassle-free launch ensures your store is ready to perform from day one.</p>
                        </div>
                        <div className="workflow-step">
                            <div className="workflow-number">6</div>
                            <h3>Support</h3>
                            <p>We provide ongoing maintenance and 24/7 assistance to keep your store running.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Sections */}
            <section className="shopify-industries">
                <div className="container">
                    <h2 className="section-title-main">Shopify Solutions for Every Business Model</h2>
                    <div className="industry-cards">
                        <div className="industry-card">
                            <div className="industry-icon">
                                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                            </div>
                            <h3>B2B Shopify Stores</h3>
                            <p>Elsner builds sleek B2B Shopify stores that customers love. We design stores to increase sales and brand loyalty.</p>
                            <div className="industry-sectors">
                                <span className="sector-tag">Fashion & Apparel</span>
                                <span className="sector-tag">Beauty & Skincare</span>
                                <span className="sector-tag">Food & Beverage</span>
                                <span className="sector-tag">Health & Fitness</span>
                                <span className="sector-tag">Home & Living</span>
                            </div>
                            <Link to="/contact" className="industry-link">Request a free quote →</Link>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">
                                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <h3>B2C Shopify Stores</h3>
                            <p>Elsner builds sleek B2C Shopify stores that customers love. We design stores to increase sales and brand loyalty.</p>
                            <div className="industry-sectors">
                                <span className="sector-tag">Fashion & Apparel</span>
                                <span className="sector-tag">Beauty & Skincare</span>
                                <span className="sector-tag">Food & Beverage</span>
                                <span className="sector-tag">Health & Fitness</span>
                                <span className="sector-tag">Home & Living</span>
                            </div>
                            <Link to="/contact" className="industry-link">Request a free quote →</Link>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">
                                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6l-3-4H6z"/>
                                    <path d="M3 6h18M8 10h8M8 14h8M8 18h8"/>
                                </svg>
                            </div>
                            <h3>D2C Shopify Stores</h3>
                            <p>D2C brands need Shopify stores that speak directly to the shopper — fast, clean, and brand-driven. Our Shopify eCommerce development company specializes in D2C Shopify stores.</p>
                            <div className="industry-sectors">
                                <span className="sector-tag">Subscription Boxes</span>
                                <span className="sector-tag">Eco-Friendly Products</span>
                                <span className="sector-tag">Kids' Products & Toys</span>
                                <span className="sector-tag">Jewelry & Artisan Goods</span>
                                <span className="sector-tag">Custom Gift Items</span>
                            </div>
                            <Link to="/contact" className="industry-link">Request a free quote →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Preview */}
            <section className="shopify-case-studies">
                <div className="container">
                    <div className="case-studies-header">
                        <h2 className="section-title-main">Case studies</h2>
                        <Link to="/case-studies" className="view-all-link">View All →</Link>
                    </div>
                    <div className="case-studies-grid">
                        <div className="case-study-card-shopify">
                            <div className="case-study-image-shopify">
                                <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Nina's Jewelry" />
                            </div>
                            <div className="case-study-content-shopify">
                                <h3>Nina's Jewelry</h3>
                                <p>Elsner developed dedicated platforms for Nina's Jewellery's B2B and B2C customers, ensuring each audience received a tailored shopping experience. By integrating an Advanced Retail Management System (ARMS), we streamlined…</p>
                                <Link to="/case-studies" className="case-study-link">View Case Study →</Link>
                            </div>
                        </div>
                        <div className="case-study-card-shopify">
                            <div className="case-study-image-shopify">
                                <img src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Kushals Jewelry" />
                            </div>
                            <div className="case-study-content-shopify">
                                <h3>Kushals Jewelry Custom eCommerce Solution</h3>
                                <p>Kushals is an online platform that offers a convenient and exciting way to purchase Fashion and Silver Jewellery and Accessories. Built on the Shopify platform, it provides a smooth and user-friendly interface.</p>
                                <Link to="/case-studies" className="case-study-link">View Case Study →</Link>
                            </div>
                        </div>
                        <div className="case-study-card-shopify">
                            <div className="case-study-image-shopify">
                                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80" alt="FurnMall" />
                            </div>
                            <div className="case-study-content-shopify">
                                <h3>FurnMall Custom Store Solutions</h3>
                                <p>Furnmall, a top furniture seller, moved online after their old website struggled. The Elsner team advised using Shopify, adding fancy features and Zoho tools for a seamless experience.</p>
                                <Link to="/case-studies" className="case-study-link">View Case Study →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ Section */}
            <section className="shopify-faq">
                <div className="container">
                    <h2 className="section-title-main">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        <div className="faq-item">
                            <h3 className="faq-question">What services are included in Shopify development?</h3>
                            <p className="faq-answer">Shopify development services include everything needed to build and grow an online store, from custom Shopify website design and theme development to Shopify app integration, third-party tool setup, and store migration. As a leading Shopify development company, we also offer Shopify website development services, Shopify Plus solutions, AI-assisted speed optimization, mobile responsiveness, and long-term technical support.</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">How can I hire a Shopify developer for my project?</h3>
                            <p className="faq-answer">You can hire a Shopify developer by contacting our team through our website or booking a call. As a trusted Shopify development agency, we connect you with experienced developers who understand your goals and deliver scalable solutions — whether you need full-store setup, feature enhancements, or Shopify for enterprise customizations.</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">Why should I choose custom Shopify development?</h3>
                            <p className="faq-answer">Custom Shopify development gives your store a unique design, stronger performance, and tailored features powered by AI-enhanced solutions that fit your brand. With our Shopify development services, your store stands out from competitors, works seamlessly across devices, and converts more customers. Unlike basic templates, custom Shopify stores are built to grow intelligently with your business and deliver a better, smart shopping experience.</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">Is Shopify good for enterprise-level businesses?</h3>
                            <p className="faq-answer">Yes — Shopify for enterprise, known as Shopify Plus, is ideal for large businesses. It supports high-volume sales, automation, multi-store management, and advanced API integrations. As a Shopify development company with experience in enterprise solutions, we help businesses scale globally with Shopify Plus features and custom workflows.</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">Can you connect Shopify to my CRM or ERP system?</h3>
                            <p className="faq-answer">Absolutely. Our Shopify development agency can integrate your store with CRM systems like Salesforce and HubSpot, and ERP platforms such as NetSuite or Microsoft Dynamics. These Shopify app development services ensure your sales, inventory, and customer data stay connected and up to date across platforms.</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">Does Shopify development include SEO setup?</h3>
                            <p className="faq-answer">Yes — SEO is a core part of our Shopify website development services. We structure your store with clean URLs, optimized meta tags, alt text for images, and fast page speeds. A Shopify development company that understands ecommerce SEO ensures your store ranks better in Google and brings in more traffic.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="shopify-cta-final">
                <div className="container">
                    <h2 className="cta-title-final">Design. Develop. Dominate. Let's Build Your Custom Shopify Store - Ready to Go Live?</h2>
                    <Link to="/contact" className="btn btn-primary cta-button-large">
                        START YOUR SHOPIFY JOURNEY
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default ShopifyDevelopment;
