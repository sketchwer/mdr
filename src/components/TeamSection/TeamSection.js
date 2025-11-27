import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
            name: 'Jane Smith',
            role: 'CTO',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
            name: 'Mike Johnson',
            role: 'Lead Developer',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
            name: 'Sarah Williams',
            role: 'Design Director',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }
    ];

    return (
        <section className="team-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Team</h2>
                    <p className="section-description">
                        Meet the talented individuals who make our success possible.
                    </p>
                </div>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="team-image-wrapper">
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className="team-overlay">
                                    <div className="team-social">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼</a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

