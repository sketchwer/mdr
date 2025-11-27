import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import CTA from '../../components/CTA/CTA';
import './CaseStudies.css';

const CaseStudiesPage = () => {
    return (
        <div className="case-studies-page">
            <PageHeader 
                title="Case Studies"
                subtitle="Success Stories"
                description="Discover how we've helped businesses achieve remarkable growth through innovative technology solutions."
            />
            <CaseStudies />
            <CTA />
        </div>
    );
};

export default CaseStudiesPage;

