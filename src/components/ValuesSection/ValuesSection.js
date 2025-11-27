import React from 'react';
import './ValuesSection.css';

const ValuesSection = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Innovation',
            description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
        },
        {
            icon: '🤝',
            title: 'Partnership',
            description: 'We believe in building long-term relationships with our clients based on trust and mutual success.'
        },
        {
            icon: '⚡',
            title: 'Excellence',
            description: 'We strive for excellence in everything we do, ensuring the highest quality standards.'
        },
        {
            icon: '💡',
            title: 'Creativity',
            description: 'We bring creative solutions to complex problems, thinking outside the box.'
        }
    ];

    return (
        <section className="values-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Values</h2>
                    <p className="section-description">
                        The principles that guide everything we do.
                    </p>
                </div>
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div key={index} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;

