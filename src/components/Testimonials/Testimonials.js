import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            projectTitle: "Zoho expert needed to streamline business processes",
            company: "Talencity Inc",
            client: "Talencity Inc",
            feedback: "Would work with MacroEncoder again. Team was responsive and followed instructions.",
            rating: 5
        },
        {
            projectTitle: "Zoho integration and few customisation",
            company: "Matter Mind Decor & General Maint. LLC",
            client: "Matter Mind Decor & General Maint. LLC",
            location: "Abu Dhabi, UAE",
            feedback: "Team was hired to create a ZoHo CRM / Workflow customized for my business. They did a great job of understanding our requirements and adapting the options inside ZoHo to do what we need done. They have also been great about answering questions even after the contract has ended. I plan on re-hiring them when we do a next version of a ZoHo management system.",
            rating: 5
        },
        {
            projectTitle: "Zoho Developer and Customisation work, Integrate Zoho CRM, Zoho Books and other modules",
            company: "Matter Mind Decor & General Maint. LLC",
            client: "Matter Mind Decor & General Maint. LLC",
            location: "Abu Dhabi, UAE",
            feedback: "Completion on time, easy to work with. I highly recommend them.",
            rating: 5
        },
        {
            projectTitle: "Zoho Specialist to set up apps and workflow for new company (Design & Training)",
            company: "Sean Covel",
            client: "Sean Covel",
            feedback: "They were hired to create a ZoHo CRM / Workflow customized for my business. They did a great job of understanding our requirements and adapting the options inside ZoHo.",
            rating: 5
        },
        {
            projectTitle: "Zoho Creator & Zoho Sign API",
            company: "Mansel Brea",
            client: "Mansel Brea",
            feedback: "Took the time to hop on a Zoom call with me multiple times to make sure exactly what I wanted. Great team to work with.",
            rating: 5
        },
        {
            projectTitle: "Winery management app – Zoho Creator",
            company: "Irina Santiago-Brown",
            client: "Irina Santiago-Brown",
            feedback: "Team did an amazing job with my app developed using Zoho Creator. The app was extremely complex with many data fetching and relations among different forms, subforms.",
            rating: 5
        },
        {
            projectTitle: "Fix Complex Features in Zoho Creator",
            company: "Patrick",
            client: "Patrick",
            feedback: "They are a serious and committed team willing to find the right solution to your problems. They offered a smart solution to my Zoho Creator app and have implemented it.",
            rating: 5
        },
        {
            projectTitle: "Zoho One Expert or Developer",
            company: "Claire Hinds Rose",
            client: "Claire Hinds Rose",
            feedback: "Excellent work with the team. Professional approach and smooth delivery.",
            rating: 5
        },
        {
            projectTitle: "Zoho CRM & Workflow Support",
            company: "Assist A Boss",
            client: "Assist A Boss",
            feedback: "Excellent work with the team. Communication was smooth and deadlines were met.",
            rating: 5
        },
        {
            projectTitle: "Set up and Configure Zoho CRM",
            company: "CC Limited",
            client: "CC Limited",
            location: "UK",
            feedback: "Great team to work with. Clear understanding of requirements and quality delivery.",
            rating: 5
        },
        {
            projectTitle: "World Vegan Travel & Zoho Integration",
            company: "Brighde",
            client: "Brighde",
            feedback: "Excellent work. Strong Zoho integration knowledge and very cooperative team.",
            rating: 5
        },
        {
            projectTitle: "Apollo to Zoho CRM Integration via Zapier",
            company: "Talencity",
            client: "Danny Chung – Talencity",
            location: "Canada",
            feedback: "Excellent work with the team. Zapier and Zoho CRM integration handled professionally.",
            rating: 5
        },
        {
            projectTitle: "Zoho CRM Specialist",
            company: "FD Global",
            client: "Fahd Dawood – FD Global",
            location: "Dubai",
            feedback: "Excellent work with the team. Highly skilled in Zoho CRM and automation.",
            rating: 5
        },
        {
            projectTitle: "Zoho CRM, Automation & Scripting",
            company: "Alkaris Energy Pvt. Ltd.",
            client: "David Gallego – Alkaris Energy Pvt. Ltd.",
            feedback: "Skilled team with strong Zoho knowledge. Professional communication, responsive despite time difference, and great value for money.",
            rating: 5
        },
        {
            projectTitle: "Zoho CRM & Process Automation",
            company: "DTC Projects Pvt. Ltd.",
            client: "Soumalya Kundu – DTC Projects Pvt. Ltd.",
            feedback: "Outstanding service. Professional, responsive, timely delivery, and excellent quality. Truly a five-star experience.",
            rating: 5
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">Client Testimonials</h2>
                <p className="section-subtitle">See what our clients say about us</p>
                <div className="testimonial-carousel">
                    <button className="carousel-button prev" onClick={prevTestimonial} aria-label="Previous testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <div className="testimonial-rating">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <div className="testimonial-project">
                                <p className="project-title">{currentTestimonial.projectTitle}</p>
                            </div>
                            <p className="testimonial-text">"{currentTestimonial.feedback}"</p>
                            <div className="testimonial-author">
                                <h4 className="author-name">{currentTestimonial.client}</h4>
                                <p className="author-company">
                                    {currentTestimonial.company}
                                    {currentTestimonial.location && `, ${currentTestimonial.location}`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-button next" onClick={nextTestimonial} aria-label="Next testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </button>
                </div>
                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToTestimonial(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
