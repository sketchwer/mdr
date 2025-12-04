import React from 'react';
import { Link } from 'react-router-dom';
import './Industries.css';

const Industries = () => {
    const industries = [
        { 
            icon: '🏠', 
            title: 'Tiles', 
            description: 'E-Commerce solutions for tile manufacturers and retailers',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80'
        },
        { 
            icon: '🪑', 
            title: 'Furniture', 
            description: 'Custom e-commerce platforms for furniture businesses',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80'
        },
        { 
            icon: '👗', 
            title: 'Fashion', 
            description: 'Fashion e-commerce with advanced catalog management',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        { 
            icon: '💎', 
            title: 'Jewellery', 
            description: 'Luxury jewellery e-commerce platforms',
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        { 
            icon: '🏥', 
            title: 'Healthcare', 
            description: 'Healthcare management systems and patient portals',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        { 
            icon: '🎓', 
            title: 'Education', 
            description: 'Learning management systems and educational platforms',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
        },
        { 
            icon: '🏗️', 
            title: 'Architecture', 
            description: 'Portfolio and project management solutions',
            image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        { 
            icon: '🏢', 
            title: 'Real Estate', 
            description: 'Property listing and management platforms',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80'
        },
        { 
            icon: '✈️', 
            title: 'Travel', 
            description: 'Booking systems and travel management solutions',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        { 
            icon: '🎉', 
            title: 'Event Management', 
            description: 'Event planning and ticketing platforms',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
        },
        { 
            icon: '🛒', 
            title: 'Groceries', 
            description: 'Online grocery stores with delivery management',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        { 
            icon: '💄', 
            title: 'Beauty & Care', 
            description: 'Beauty and personal care e-commerce solutions',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80'
        }
    ];

    return (
        <section id="industries" className="industries">
            <div className="container">
                <h2 className="section-title">Industries We Serve</h2>
                <p className="section-description">Serving our clients across diverse industries</p>
                <div className="industries-grid">
                    {industries.map((industry, index) => {
                        const industryRoutes = {
                            'Tiles': '/industries/tiles',
                            'Furniture': '/industries/furniture',
                            'Fashion': '/industries/fashion',
                            'Jewellery': '/industries/jewellery',
                            'Healthcare': '/industries/healthcare',
                            'Education': '/industries/education',
                            'Architecture': '/industries/architecture',
                            'Real Estate': '/industries/real-estate',
                            'Travel': '/industries/travel',
                            'Event Management': '/industries/event-management',
                            'Groceries': '/industries/groceries',
                            'Beauty & Care': '/industries/beauty-care'
                        };
                        const route = industryRoutes[industry.title] || '/industries';
                        
                        return (
                            <Link 
                                key={index} 
                                to={route}
                                className="industry-card-link"
                            >
                                <div 
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
                                    </div>
                                    <div className="industry-content">
                                        <h3>{industry.title}</h3>
                                        <p>{industry.description}</p>
                                        <span className="industry-view-more">Learn More →</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Industries;

