import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
    const companies = [
        { 
            name: 'TechCorp', 
            logo: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="8" width="18" height="12" rx="2"/>
                    <path d="M3 10h18M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
            ),
            gradient: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)'
        },
        { 
            name: 'InnovateLab', 
            logo: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
            ),
            gradient: 'linear-gradient(135deg, #2d2d2d 0%, #5a5a5a 100%)'
        },
        { 
            name: 'DigitalPro', 
            logo: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
            ),
            gradient: 'linear-gradient(135deg, #3a3a3a 0%, #6a6a6a 100%)'
        },
        { 
            name: 'CloudTech', 
            logo: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>
            ),
            gradient: 'linear-gradient(135deg, #4a4a4a 0%, #7a7a7a 100%)'
        },
        { 
            name: 'DataFlow', 
            logo: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
            ),
            gradient: 'linear-gradient(135deg, #2d2d2d 0%, #5a5a5a 100%)'
        },
        { 
            name: 'WebSolutions', 
            logo: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
            ),
            gradient: 'linear-gradient(135deg, #3a3a3a 0%, #6a6a6a 100%)'
        }
    ];

    return (
        <section className="trusted-by">
            <div className="container">
                <h3 className="section-subtitle">Trusted by 100+ companies</h3>
                <div className="trusted-logos">
                    {companies.map((company, index) => (
                        <div 
                            key={index} 
                            className="logo-item"
                            style={{ animationDelay: `${index * 0.1}s`, '--logo-gradient': company.gradient }}
                        >
                            <div className="logo-icon-wrapper">
                                <div className="logo-icon">{company.logo}</div>
                            </div>
                            <div className="logo-name">{company.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;

