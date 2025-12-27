import React from 'react';
import Hero from '../../components/Hero/Hero';
import ServicesWeProvide from '../../components/ServicesWeProvide/ServicesWeProvide';
import Testimonials from '../../components/Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            
            {/* Stats Section - Mixed from both sites */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Global Clients</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Developers Working</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Years of Experience</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">800+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert IT Section */}
            <section className="expert-it-section">
                <div className="container">
                    <div className="expert-it-content">
                        <div className="expert-it-text">
                            <h2 className="expert-it-title">Let our expert IT brains solve your toughest business challenges</h2>
                            <div className="expert-it-description">
                                <p>
                                    With 12+ years of experience, we help all types of businesses reduce manual work and move towards smart digital systems. No matter which industry you belong to — automobile, food, appliances, manufacturing, trading, or services — our solutions fit perfectly into your daily workflow. You don't need any technical knowledge; our tools are easy for anyone to use. From attendance and production to billing and customer management, our AI-powered systems make your work smoother, more accurate, and more productive.
                                </p>
                            </div>
                        </div>
                        <div className="expert-it-image">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                                alt="Team working together on laptops" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <ServicesWeProvide />
            
            {/* Zoho Solutions Section - Mixed Content */}
            <section className="zoho-solutions-section">
                <div className="container">
                    <div className="zoho-solutions-content">
                        <div className="zoho-solutions-image">
                            <img 
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                                alt="Zoho Solutions" 
                            />
                        </div>
                        <div className="zoho-solutions-text">
                            <h2 className="section-title">Zoho - A Complete Business Suite</h2>
                            <p className="section-description">
                                Zoho is a one-of-a-kind and brilliant suite of tools to operate your complete business venture, brought to you by a firm with a long-term goal of changing the way you work. With 45+ linked applications, you can run your entire group.
                            </p>
                            <div className="zoho-features">
                                <div className="zoho-feature-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <polyline points="22 4 12 14.01 9 11.01"/>
                                    </svg>
                                    <span>Business CRM & Email Automation</span>
                                </div>
                                <div className="zoho-feature-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <polyline points="22 4 12 14.01 9 11.01"/>
                                    </svg>
                                    <span>Document Automation & KPIs</span>
                                </div>
                                <div className="zoho-feature-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <polyline points="22 4 12 14.01 9 11.01"/>
                                    </svg>
                                    <span>VoIP & Call Center Solutions</span>
                                </div>
                                <div className="zoho-feature-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <polyline points="22 4 12 14.01 9 11.01"/>
                                    </svg>
                                    <span>Centralized Database & Analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
            <section className="why-choose-section">
                <div className="container">
                    <h2 className="section-title">Why Choose Us</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                    <path d="M2 12h20"/>
                                </svg>
                            </div>
                            <h3>Cross-Industry Success</h3>
                            <p>150+ diversified solutions</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                </svg>
                            </div>
                            <h3>Agile working models</h3>
                            <p>Customer-focused and results-driven</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                            </div>
                            <h3>Zoho Authorized Partner & Certified</h3>
                            <p>Official Zoho certifications across multiple Zoho products</p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Home;
