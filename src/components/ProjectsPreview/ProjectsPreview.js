import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPreview.css';

const ProjectsPreview = () => {
    const projects = [
        {
            id: 1,
            category: 'magento',
            title: 'Sheet Plastic',
            description: 'Scalable Magento 2 platform with intuitive filters, Mailchimp integration, and global shipping solutions.',
            tag: 'Magento',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            id: 2,
            category: 'wordpress',
            title: 'KUKUI',
            description: 'Responsive WordPress (WooCommerce) site with WPML integration and streamlined warehouse management.',
            tag: 'WordPress',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80'
        },
        {
            id: 3,
            category: 'react',
            title: 'Artboxy Platform',
            description: 'Online platform that allows artists to exhibit their work in selected high-quality galleries worldwide.',
            tag: 'React JS',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
        }
    ];

    return (
        <section className="projects-preview">
            <div className="floating-bubbles">
                {[...Array(15)].map((_, i) => (
                    <div 
                        key={`bubble-${i}`} 
                        className="bubble" 
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${12 + Math.random() * 20}px`,
                            height: `${12 + Math.random() * 20}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${18 + Math.random() * 10}s`
                        }}
                    ></div>
                ))}
            </div>
            <div className="floating-dots">
                {[...Array(25)].map((_, i) => (
                    <div 
                        key={`dot-${i}`} 
                        className="dot" 
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${9 + Math.random() * 7}s`
                        }}
                    ></div>
                ))}
            </div>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-description">
                        Explore our portfolio of successful projects that have transformed businesses across various industries.
                    </p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="project-image-wrapper">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="project-image"
                                    loading="lazy"
                                />
                                <div className="project-overlay">
                                    <span className="project-tag">{project.tag}</span>
                                    <div className="project-hover-content">
                                        <Link to="/projects" className="project-view-btn">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="white" strokeWidth="2"/>
                                                <path d="M2.458 12C3.732 7.943 7.523 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.523 19 3.732 16.057 2.458 12Z" stroke="white" strokeWidth="2"/>
                                            </svg>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <Link to="/projects" className="project-link">
                                    <span>View Project</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-footer">
                    <Link to="/projects" className="btn-view-all">
                        View All Projects
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;

