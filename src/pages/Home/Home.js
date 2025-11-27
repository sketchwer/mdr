import React from 'react';
import Hero from '../../components/Hero/Hero';
import TrustedBy from '../../components/TrustedBy/TrustedBy';
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview';
import ProjectsPreview from '../../components/ProjectsPreview/ProjectsPreview';
import CaseStudiesPreview from '../../components/CaseStudiesPreview/CaseStudiesPreview';
import IndustriesPreview from '../../components/IndustriesPreview/IndustriesPreview';
import StatsSection from '../../components/StatsSection/StatsSection';
import CTA from '../../components/CTA/CTA';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <TrustedBy />
            <StatsSection />
            <ServicesPreview />
            <ProjectsPreview />
            <CaseStudiesPreview />
            <IndustriesPreview />
            <CTA />
        </div>
    );
};

export default Home;

