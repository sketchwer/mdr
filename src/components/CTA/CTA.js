import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to Transform Your Business?</h2>
                    <p className="cta-description">
                        Let's discuss how our AI-powered solutions can drive innovation and growth for your organization.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">
                            Get Started Today
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link to="/about" className="btn btn-secondary">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;

