import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

const StatsSection = () => {
    const [counters, setCounters] = useState({ clients: 0, developers: 0, years: 0, projects: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
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

    const stats = [
        { 
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
            ), 
            number: counters.clients, 
            suffix: '+', 
            label: 'Global Clients', 
            color: '#2563eb',
            gradient: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)'
        },
        { 
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            ), 
            number: counters.developers, 
            suffix: '+', 
            label: 'Expert Developers', 
            color: '#4a4a4a',
            gradient: 'linear-gradient(135deg, #2d2d2d 0%, #5a5a5a 100%)'
        },
        { 
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            ), 
            number: counters.years, 
            suffix: '+', 
            label: 'Years Experience', 
            color: '#3a3a3a',
            gradient: 'linear-gradient(135deg, #3a3a3a 0%, #6a6a6a 100%)'
        },
        { 
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                </svg>
            ), 
            number: counters.projects, 
            suffix: '+', 
            label: 'Projects Delivered', 
            color: '#2d2d2d',
            gradient: 'linear-gradient(135deg, #2d2d2d 0%, #5a5a5a 100%)'
        }
    ];

    return (
        <section ref={sectionRef} className="stats-section">
            <div className="floating-bubbles">
                {[...Array(12)].map((_, i) => (
                    <div 
                        key={`bubble-${i}`} 
                        className="bubble" 
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${10 + Math.random() * 18}px`,
                            height: `${10 + Math.random() * 18}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${16 + Math.random() * 8}s`
                        }}
                    ></div>
                ))}
            </div>
            <div className="floating-dots">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={`dot-${i}`} 
                        className="dot" 
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${8 + Math.random() * 6}s`
                        }}
                    ></div>
                ))}
            </div>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card" style={{ '--stat-color': stat.color, '--stat-gradient': stat.gradient }}>
                            <div className="stat-icon-wrapper">
                                <div className="stat-icon">{stat.icon}</div>
                            </div>
                            <div className="stat-number">
                                {stat.number.toLocaleString()}{stat.suffix}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

