import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Industries from '../../components/Industries/Industries';
import CTA from '../../components/CTA/CTA';
import './Industries.css';

const IndustriesPage = () => {
    return (
        <div className="industries-page">
            <PageHeader 
                title="Industries We Serve"
                subtitle="Diverse Solutions"
                description="We provide tailored solutions across diverse industries, helping businesses thrive in the digital age."
            />
            <Industries />
            <CTA />
        </div>
    );
};

export default IndustriesPage;

