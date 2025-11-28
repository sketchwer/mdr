import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Careers.css';

const Careers = () => {
    const jobOpenings = [
        {
            title: "Zoho CRM Consultant",
            department: "Consulting",
            location: "Mohali, Punjab",
            type: "Full-time",
            description: "We are looking for an experienced Zoho CRM Consultant to help our clients implement and optimize their CRM solutions."
        },
        {
            title: "Zoho Creator Developer",
            department: "Development",
            location: "Mohali, Punjab",
            type: "Full-time",
            description: "Join our team as a Zoho Creator Developer and help build custom applications for our clients using low-code platforms."
        },
        {
            title: "Business Analyst",
            department: "Analytics",
            location: "Mohali, Punjab",
            type: "Full-time",
            description: "We need a Business Analyst to analyze client requirements and design effective Zoho solutions."
        },
        {
            title: "Sales Executive",
            department: "Sales",
            location: "Mohali, Punjab",
            type: "Full-time",
            description: "Looking for a motivated Sales Executive to help grow our client base and promote Zoho solutions."
        }
    ];

    return (
        <div className="careers-page">
            <PageHeader 
                title="Join Our Team"
                subtitle="Careers"
                description="Be part of a leading Zoho Partner in India and help businesses transform their operations"
            />
            <section className="careers-content">
                <div className="container">
                    <div className="careers-intro">
                        <h2>Why Work With Us?</h2>
                        <p>
                            At KG CRM Solutions, we believe in fostering a culture of innovation, collaboration, and growth. 
                            As a leading Zoho Partner in India, we offer exciting opportunities to work with cutting-edge technology 
                            and help businesses transform their operations.
                        </p>
                    </div>
                    <div className="job-openings">
                        <h2 className="section-title">Current Openings</h2>
                        <div className="jobs-grid">
                            {jobOpenings.map((job, index) => (
                                <div key={index} className="job-card">
                                    <div className="job-header">
                                        <h3 className="job-title">{job.title}</h3>
                                        <span className="job-type">{job.type}</span>
                                    </div>
                                    <div className="job-meta">
                                        <span className="job-department">{job.department}</span>
                                        <span className="job-location">{job.location}</span>
                                    </div>
                                    <p className="job-description">{job.description}</p>
                                    <button className="apply-button">Apply Now</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;

