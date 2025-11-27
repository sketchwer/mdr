import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Services from '../../components/Services/Services';
import CTA from '../../components/CTA/CTA';
import './Services.css';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <PageHeader 
                title="Our Services"
                subtitle="Comprehensive Technology Solutions"
                description="We offer a wide range of services to help your business succeed in the digital world."
            />
            <Services />
            <CTA />
        </div>
    );
};

export default ServicesPage;

