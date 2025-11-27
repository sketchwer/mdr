import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const [counters, setCounters] = useState({ clients: 0, developers: 0, years: 0, projects: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const handleParallax = () => {
            const scrolled = window.pageYOffset;
            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleParallax);
        return () => window.removeEventListener('scroll', handleParallax);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const targets = { clients: 6200, developers: 250, years: 19, projects: 9500 };
        const duration = 2000;
        const steps = 60;
        const increment = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounters({
                clients: Math.floor(targets.clients * progress),
                developers: Math.floor(targets.developers * progress),
                years: Math.floor(targets.years * progress),
                projects: Math.floor(targets.projects * progress)
            });

            if (currentStep >= steps) {
                clearInterval(timer);
                setCounters(targets);
            }
        }, increment);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Technology Background" 
                    className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
                <div className="hero-particles">
                    {[...Array(50)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
                <div className="floating-bubbles">
                    {[...Array(25)].map((_, i) => (
                        <div 
                            key={`bubble-${i}`} 
                            className="bubble" 
                            style={{
                                left: `${Math.random() * 100}%`,
                                width: `${15 + Math.random() * 35}px`,
                                height: `${15 + Math.random() * 35}px`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${18 + Math.random() * 12}s`,
                                '--bubble-x': Math.random() * 2 - 1
                            }}
                        ></div>
                    ))}
                </div>
                <div className="floating-dots">
                    {[...Array(35)].map((_, i) => (
                        <div 
                            key={`dot-${i}`} 
                            className="dot" 
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${10 + Math.random() * 8}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="hero-content" ref={heroRef}>
                    <div className="hero-badge">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                        <span>AI-Powered Solutions</span>
                    </div>
                    <h1 className="hero-title">
                        <span className="title-line">Your AI-First</span>
                        <span className="title-line gradient-text">Technology Partner</span>
                    </h1>
                    <p className="hero-subtitle">
                        Empower your business with AI intelligence that fuses technology and strategy—driving innovation, efficiency, and growth with a competitive edge.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-primary">
                            <span>GET QUOTE</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link to="/case-studies" className="btn btn-secondary">
                            View Case Studies
                        </Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                </svg>
                            </div>
                            <div className="stat-number">{counters.clients.toLocaleString()}+</div>
                            <div className="stat-label">Global Clients</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                            </div>
                            <div className="stat-number">{counters.developers}+</div>
                            <div className="stat-label">Developers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="stat-number">{counters.years}+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <circle cx="12" cy="12" r="6"/>
                                    <circle cx="12" cy="12" r="2"/>
                                </svg>
                            </div>
                            <div className="stat-number">{counters.projects.toLocaleString()}+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

