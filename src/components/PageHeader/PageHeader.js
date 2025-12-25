import React from 'react';
import './PageHeader.css';

const PageHeader = ({ title, subtitle, description }) => {
    return (
        <section className="page-header">
            <div className="page-header-background">
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
                    alt="Background" 
                    className="page-header-image"
                />
                <div className="page-header-overlay"></div>
            </div>
            <div className="container">
                <div className="page-header-content">
                    
                    <h1 className="page-title">{title}</h1>
                    <p className="page-description">{description}</p>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;

