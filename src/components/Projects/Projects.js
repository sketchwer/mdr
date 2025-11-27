import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

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
            category: 'magento',
            title: 'Saree E-Commerce',
            description: 'Scalable Magento 2 platform with intuitive filters, Trustpilot integration, and seamless shopping experience.',
            tag: 'Magento',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            id: 3,
            category: 'wordpress',
            title: 'KUKUI',
            description: 'Responsive WordPress (WooCommerce) site with WPML integration and streamlined warehouse management.',
            tag: 'WordPress',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80'
        },
        {
            id: 4,
            category: 'wordpress',
            title: 'Grill Symbol',
            description: 'E-Commerce platform that achieved remarkable growth with scaling solutions and customer engagement.',
            tag: 'WordPress',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            id: 5,
            category: 'react',
            title: 'Artboxy Platform',
            description: 'Online platform that allows artists to exhibit their work in selected high-quality galleries worldwide.',
            tag: 'React JS',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
        },
        {
            id: 6,
            category: 'mobile',
            title: 'Hive Chat',
            description: 'Professional social media platform that strikes balance between formality and engagement.',
            tag: 'Mobile',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            id: 7,
            category: 'drupal',
            title: 'Employment Community Portal',
            description: 'One of the largest employment provider in Australia, delivering opportunities to employers with comprehensive solutions.',
            tag: 'Drupal',
            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80'
        },
        {
            id: 8,
            category: 'drupal',
            title: 'E-Commerce Platform',
            description: 'E-Commerce Platform supplies specialty artisan products and essentials to quality restaurants, cafes, caterers, wholesalers, airlines and retailers.',
            tag: 'Drupal',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            id: 9,
            category: 'wordpress',
            title: 'Fleurestelle eCommerce',
            description: 'One of the leading American Company, which is involved in providing ecommerce services to users.',
            tag: 'WordPress',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        }
    ];

    const filters = [
        { id: 'all', label: 'All eCommerce Projects' },
        { id: 'magento', label: 'Magento' },
        { id: 'wordpress', label: 'WordPress' },
        { id: 'drupal', label: 'Drupal' },
        { id: 'web', label: 'Web' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'php', label: 'PHP' },
        { id: 'react', label: 'React JS' }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Our Featured Projects</h2>
                <div className="project-filters">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="project-card" 
                            data-category={project.category}
                            style={{ animationDelay: `${index * 0.1}s` }}
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
                                        <a href="/projects" className="project-view-btn">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="white" strokeWidth="2"/>
                                                <path d="M2.458 12C3.732 7.943 7.523 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.523 19 3.732 16.057 2.458 12Z" stroke="white" strokeWidth="2"/>
                                            </svg>
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href="/projects" className="project-link">
                                    <span>View Project</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

