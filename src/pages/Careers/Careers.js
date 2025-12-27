import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Careers.css';

const Careers = () => {
    const partnershipOptions = [
        {
            title: "Client Partnership",
            icon: "🤝",
            description: "Partner with us to transform your business operations. We offer comprehensive Zoho solutions tailored to your specific needs, ensuring seamless integration and maximum ROI.",
            benefits: [
                "Customized Zoho implementations",
                "Dedicated support team",
                "Ongoing consultation and optimization",
                "Training and knowledge transfer"
            ]
        },
        {
            title: "Technology Partnership",
            icon: "🔧",
            description: "Join hands with us as a technology partner. We collaborate with businesses to integrate Zoho solutions with your existing systems and create powerful automation workflows.",
            benefits: [
                "System integration services",
                "API development and customization",
                "Workflow automation",
                "Technical consultation"
            ]
        },
        {
            title: "Strategic Alliance",
            icon: "🎯",
            description: "Form strategic alliances with us to expand your business reach. We work with agencies, consultants, and businesses to deliver exceptional Zoho solutions to end clients.",
            benefits: [
                "White-label solutions",
                "Referral programs",
                "Co-marketing opportunities",
                "Revenue sharing models"
            ]
        },
        {
            title: "Consulting Services",
            icon: "💼",
            description: "Leverage our expertise for your Zoho projects. Our experienced consultants provide strategic guidance, implementation support, and best practices to ensure your success.",
            benefits: [
                "Expert consultation",
                "Project management",
                "Best practices implementation",
                "Performance optimization"
            ]
        }
    ];

    return (
        <div className="careers-page">
            <PageHeader 
                title="Partner With Us"
                
                description="Let's work together to transform businesses with innovative Zoho solutions and create lasting value"
            />
            <section className="careers-content">
                <div className="container">
                    <div className="careers-intro">
                        <h2>Why Work With Us?</h2>
                        <p>
                            At Macro Encoder Software Pvt Ltd, we create an environment where ideas thrive, teamwork is encouraged, and professional development is a priority. As a trusted Zoho Partner in India, we provide opportunities to work with modern technologies and play a key role in helping organizations streamline and elevate their business processes.
                        </p>
                    </div>
                    <div className="job-openings">
                        <h2 className="section-title">Partnership Opportunities</h2>
                        <div className="jobs-grid">
                            {partnershipOptions.map((option, index) => (
                                <div key={index} className="job-card">
                                    <div className="job-header">
                                        <h3 className="job-title">
                                            <span className="partnership-icon">{option.icon}</span>
                                            {option.title}
                                        </h3>
                                    </div>
                                    <p className="job-description">{option.description}</p>
                                    <div className="benefits-list">
                                        <h4>Key Benefits:</h4>
                                        <ul>
                                            {option.benefits.map((benefit, idx) => (
                                                <li key={idx}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="apply-button">Get Started</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="partnership-cta">
                        <h2>Ready to Partner With Us?</h2>
                        <p>Let's discuss how we can work together to achieve your business goals. Contact us today to explore partnership opportunities.</p>
                        <a href="/contact" className="cta-button">Contact Us</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;

