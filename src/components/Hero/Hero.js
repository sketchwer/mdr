import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background">
                <img 
                    src="/hero.png" 
                    alt="Hero Background" 
                    className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-zoho-badge">
                <img 
                    src="/zoho.png" 
                    alt="Zoho Authorized Partner" 
                    className="hero-zoho-image"
                />
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
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
