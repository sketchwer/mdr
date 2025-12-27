import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const trackRecord = [
        { number: "20+", label: "Years", description: "Delivering Software that scales" },
        { number: "500+", label: "Completed Projects" },
        { number: "200+", label: "Global Clients" },
        { number: "15+", label: "Countries" },
        { number: "12+", label: "Industries" },
        
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1 className="about-hero-title">
                            Turning ideas into measurable results since 2016
                        </h1>
                        <p className="about-hero-description">
                            Our solutions help organizations modernize operations and scale confidently—with results you can measure.
                        </p>
                        <Link to="/contact" className="about-hero-cta">
                            Talk to our team
                        </Link>
                    </div>
                    <div className="about-hero-image-wrapper">
                        <div className="about-hero-background">
                            <img 
                                src="/about us.jpg" 
                                alt="About Us" 
                                className="about-hero-image"
                            />
                            <div className="about-hero-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Goal Section */}
            <section className="about-goal-section">
                <div className="container">
                    <div className="about-goal-layout">
                        {/* Left Panel */}
                        <div className="goal-left-panel">
                            <span className="section-label">OUR GOAL</span>
                            <h2 className="goal-main-heading">WHAT DRIVES US</h2>
                        </div>
                        
                        {/* Right Section */}
                        <div className="goal-right-section">
                            <p className="goal-question">
                                <strong>Solutions that prove their worth</strong>
                            </p>
                            <div className="goal-cards">
                                <div className="goal-card">
                                    <div className="goal-card-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                                            <path d="M12 17h.01"/>
                                        </svg>
                                    </div>
                                    <p className="goal-card-text">
                                        Before we build anything, we ask the right questions: the problem it solves and the results it must deliver.
                                    </p>
                                </div>
                                <div className="goal-card">
                                    <div className="goal-card-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <p className="goal-card-text">
                                        Backed by years of hands-on expertise, we build systems designed for critical business environments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="about-how-we-work">
                <div className="container">
                    <span className="section-label">How we work</span>
                    <div className="how-we-work-grid">
                        <div className="how-we-work-card">
                            <div className="work-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 11l3 3L22 4"/>
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                                </svg>
                            </div>
                            <h3 className="work-card-title">Define Before We Build</h3>
                            <p className="work-card-description">
                                Clear objectives, success metrics, and potential risks are identified upfront, ensuring every line of code aligns with the business goal and expected outcomes.
                            </p>
                        </div>
                        <div className="how-we-work-card">
                            <div className="work-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M12 6v6l4 2"/>
                                </svg>
                            </div>
                            <h3 className="work-card-title">Move Fast, Stay Focused</h3>
                            <p className="work-card-description">
                                Rapid iterations and continuous testing help us validate ideas early, reduce rework, and deliver meaningful progress without wasting time or resources.
                            </p>
                        </div>
                        <div className="how-we-work-card">
                            <div className="work-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                            </div>
                            <h3 className="work-card-title">Continuously Improve</h3>
                            <p className="work-card-description">
                                Launch is just the starting point—we monitor performance, gather insights, and keep refining solutions to maximize long-term value and results.
                            </p>
                        </div>
                        <div className="how-we-work-card">
                            <div className="work-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                            </div>
                            <h3 className="work-card-title">Collaborate Closely</h3>
                            <p className="work-card-description">
                                We work as an extension of your team, maintaining clear communication, quick feedback loops, and full transparency throughout the project.
                            </p>
                        </div>
                        <div className="how-we-work-card">
                            <div className="work-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    <path d="M9 12l2 2 4-4"/>
                                </svg>
                            </div>
                            <h3 className="work-card-title">Build Secure & Scalable</h3>
                            <p className="work-card-description">
                                Security, performance, and scalability are built into every solution, ensuring systems remain reliable as your business grows.
                            </p>
                        </div>
                        <div className="how-we-work-card">
                            <div className="work-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="20" x2="18" y2="10"/>
                                    <line x1="12" y1="20" x2="12" y2="4"/>
                                    <line x1="6" y1="20" x2="6" y2="14"/>
                                </svg>
                            </div>
                            <h3 className="work-card-title">Measure What Matters</h3>
                            <p className="work-card-description">
                                We track meaningful metrics and outcomes, using real data to guide decisions, optimize performance, and prove business impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
<section className="leadership-section">
    <div className="container">
        <span className="section-label center">Leadership</span>
        <h2 className="section-heading center">The Team That Leads Us</h2>

        <p className="leadership-intro">
            We believe leadership is not about titles — it’s about responsibility, clarity, and results.
        </p>

        <div className="leadership-grid">
            {/* Leader 1 */}
            <div className="leader-card">
                <div className="leader-avatar">MD</div>
                <h3 className="leader-name">Meenakshi Devi</h3>
                <span className="leader-role">Technology & Systems Leadership</span>
                <p className="leader-description">
                    Focused on building systems that work in real-world conditions, Meenakshi brings
                    deep technical expertise and a hands-on approach to solving complex operational challenges.
                </p>
            </div>

            {/* Leader 2 */}
            <div className="leader-card">
                <div className="leader-avatar">GV</div>
                <h3 className="leader-name">Gaurav Vashistha</h3>
                <span className="leader-role">Strategy & Execution</span>
                <p className="leader-description">
                    With strong ownership and execution focus, Gaurav ensures every solution moves
                    from strategy to delivery — practical, scalable, and built for long-term impact.
                </p>
            </div>
        </div>

        <p className="leadership-footer">
            Every project is held to the highest standard — not just in technology,
            but in the real business value it delivers.
        </p>
    </div>
</section>


            {/* Our Track Record Section */}
            <section className="about-track-record">
                <div className="container">
                    <span className="section-label center">Our track record </span>
                    <div className="track-record-grid">
                        {trackRecord.map((stat, index) => (
                            <div key={index} className="track-record-item">
                                <div className="track-record-number">{stat.number}</div>
                                <div className="track-record-label">{stat.label}</div>
                                {stat.description && (
                                    <div className="track-record-description">{stat.description}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <h2 className="cta-heading">Tired of paying for complexity?</h2>
                    <Link to="/contact" className="cta-button">Let's talk</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
