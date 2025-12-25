import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudyDetail.css';

const CaseStudyDetail = ({
    title,
    subtitle,
    clientName,
    clientDescription,
    website,
    location,
    industry,
    duration,
    image,
    challenges = [],
    solutions = [],
    results = [],
    technologies = [],
    whatWeDid = []
}) => {
    return (
        <div className="case-study-detail">
            {/* Hero Section */}
            <section className="case-study-hero">
                <div className="container">
                    <div className="case-study-hero-content">
                    
                        <h1 className="case-study-hero-title">{title}</h1>
                        <p className="case-study-hero-subtitle">{subtitle}</p>
                    </div>
                </div>
                {image && (
                    <div className="case-study-hero-image">
                        <img src={image} alt={title} />
                    </div>
                )}
            </section>

            <div className="case-study-main-content">
                <div className="container">
                    <div className="case-study-layout">
                        {/* Main Content */}
                        <div className="case-study-content-main">
                            {/* Client Section */}
                            <section className="case-study-section">
                                <h2 className="section-heading">The Client</h2>
                                <p className="section-text">{clientDescription}</p>
                            </section>

                            {/* Challenge Section */}
                            {challenges.length > 0 && (
                                <section className="case-study-section">
                                    <h2 className="section-heading">The Challenge</h2>
                                    {challenges.map((challenge, index) => (
                                        <div key={index} className="challenge-item">
                                            <h3 className="challenge-title">{challenge.title}</h3>
                                            <p className="challenge-description">{challenge.description}</p>
                                        </div>
                                    ))}
                                </section>
                            )}

                            {/* Solution Section */}
                            {solutions.length > 0 && (
                                <section className="case-study-section">
                                    <h2 className="section-heading">The Solution</h2>
                                    {solutions.map((solution, index) => (
                                        <div key={index} className="solution-item">
                                            <h3 className="solution-title">{solution.title}</h3>
                                            <p className="solution-description">{solution.description}</p>
                                        </div>
                                    ))}
                                </section>
                            )}

                            {/* Results Section */}
                            {results.length > 0 && (
                                <section className="case-study-section">
                                    <h2 className="section-heading">The Results</h2>
                                    <ul className="results-list">
                                        {results.map((result, index) => (
                                            <li key={index} className="result-item">
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="case-study-sidebar">
                            <div className="sidebar-card">
                                <h3 className="sidebar-title">THE DETAILS</h3>
                                <div className="sidebar-details">
                                    <div className="detail-row">
                                        <span className="detail-label">Company:</span>
                                        <span className="detail-value">{clientName}</span>
                                    </div>
                                    {website && (
                                        <div className="detail-row">
                                            <span className="detail-label">Website:</span>
                                            <a href={website} target="_blank" rel="noopener noreferrer" className="detail-value link">
                                                {website.replace(/^https?:\/\//, '')}
                                            </a>
                                        </div>
                                    )}
                                    {location && (
                                        <div className="detail-row">
                                            <span className="detail-label">Location:</span>
                                            <span className="detail-value">{location}</span>
                                        </div>
                                    )}
                                    {industry && (
                                        <div className="detail-row">
                                            <span className="detail-label">Industry:</span>
                                            <span className="detail-value">{industry}</span>
                                        </div>
                                    )}
                                    {duration && (
                                        <div className="detail-row">
                                            <span className="detail-label">Duration:</span>
                                            <span className="detail-value">{duration}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {whatWeDid.length > 0 && (
                                <div className="sidebar-card">
                                    <h3 className="sidebar-title">WHAT WE DID</h3>
                                    <ul className="what-we-did-list">
                                        {whatWeDid.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {technologies.length > 0 && (
                                <div className="sidebar-card">
                                    <h3 className="sidebar-title">TECHNOLOGY WE USED</h3>
                                    <div className="technologies-list">
                                        {technologies.map((tech, index) => (
                                            <span key={index} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="sidebar-card cta-card">
                                <h3 className="sidebar-title">What can we do for you?</h3>
                                <Link to="/contact" className="btn btn-primary sidebar-cta">
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetail;

