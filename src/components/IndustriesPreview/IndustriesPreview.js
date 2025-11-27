import React from 'react';
import { Link } from 'react-router-dom';
import './IndustriesPreview.css';

const IndustriesPreview = () => {
    const industries = [
        { 
            icon: '🏠', 
            title: 'Tiles', 
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80'
        },
        { 
            icon: '👗', 
            title: 'Fashion', 
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        { 
            icon: '🏥', 
            title: 'Healthcare', 
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        { 
            icon: '🎓', 
            title: 'Education', 
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
        },
        { 
            icon: '🏢', 
            title: 'Real Estate', 
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80'
        },
        { 
            icon: '✈️', 
            title: 'Travel', 
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        }
    ];

    return (
        <section className="industries-preview">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Industries We Serve</h2>
                    <p className="section-description">
                        We provide tailored solutions across diverse industries, helping businesses thrive in the digital age.
                    </p>
                </div>
                <div className="industries-grid">
                    {industries.map((industry, index) => (
                        <div 
                            key={index} 
                            className="industry-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="industry-image-wrapper">
                                <img 
                                    src={industry.image} 
                                    alt={industry.title}
                                    className="industry-image"
                                    loading="lazy"
                                />
                                <div className="industry-overlay"></div>
                                <div className="industry-icon">{industry.icon}</div>
                            </div>
                            <div className="industry-content">
                                <h3>{industry.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-footer">
                    <Link to="/industries" className="btn-view-all">
                        View All Industries
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default IndustriesPreview;

