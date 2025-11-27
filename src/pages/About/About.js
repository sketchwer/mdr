import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import StatsSection from '../../components/StatsSection/StatsSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import ValuesSection from '../../components/ValuesSection/ValuesSection';
import CTA from '../../components/CTA/CTA';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <PageHeader 
                title="About Us"
                subtitle="Your Technology Partner"
                description="We are a team of passionate developers and designers dedicated to delivering exceptional digital solutions."
            />
            <StatsSection />
            <ValuesSection />
            <TeamSection />
            <CTA />
        </div>
    );
};

export default About;

