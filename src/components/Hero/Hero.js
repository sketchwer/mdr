import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background">
                <img 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80" 
                    alt="Business Meeting" 
                    className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text-section">
                        <h1 className="hero-title">
                            Your AI-First Technology Partner
                        </h1>
                        <p className="hero-description">
                            Empower your business with AI intelligence that fuses technology and strategy—driving innovation, efficiency, and growth with a competitive edge.
                        </p>
                        <Link to="/contact" className="hero-cta-button">
                            GET QUOTE
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
