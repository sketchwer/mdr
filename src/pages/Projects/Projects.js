import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Projects from '../../components/Projects/Projects';
import CTA from '../../components/CTA/CTA';
import './Projects.css';

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <PageHeader 
                title="Our Projects"
                subtitle="Portfolio"
                description="Explore our successful projects that have transformed businesses across various industries."
            />
            <Projects />
            <CTA />
        </div>
    );
};

export default ProjectsPage;

