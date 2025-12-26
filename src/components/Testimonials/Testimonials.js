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
            feedback: "Team was hired to create a ZoHo CRM / Workflow customized for my business. They did a great job of understanding our requirements and adapting the options inside ZoHo to do what we need done. They have also been great about answering questions even after the contract has ended.",
            rating: 5
        },
        {
            projectTitle: "Zoho Developer and Customisation work",
            company: "Sean Covel",
            client: "Sean Covel",
            feedback: "They did a great job of understanding our requirements and adapting ZoHo perfectly.",
            rating: 5
        },
        {
            projectTitle: "Zoho Creator & Zoho Sign API",
            company: "Mansel Brea",
            client: "Mansel Brea",
            feedback: "Great team. Took the time to jump on calls and ensure clarity.",
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

    const current = testimonials[currentIndex];

    return (
        <section className="testimonials-section">
            <div className="container">

                <h2 className="section-title">Client Testimonials</h2>
                <p className="section-subtitle">
                    Trusted by businesses worldwide for Zoho & Custom Software solutions
                </p>

                <div className="testimonial-carousel">

                    <button
                        className="carousel-button prev"
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        ‹
                    </button>

                    <div className="testimonial-card">
                        <div className="testimonial-content">

                            {/* Client name on top */}
                            <div className="testimonial-author top">
                                <h4 className="author-name">{current.client}</h4>
                                <p className="author-company">
                                    {current.company}
                                    {current.location && `, ${current.location}`}
                                </p>
                            </div>

                            {/* Feedback */}
                            <p className="testimonial-text">
                                “{current.feedback}”
                            </p>

                            {/* Project */}
                            <p className="project-title">
                                {current.projectTitle}
                            </p>

                            {/* Rating at bottom */}
                            <div className="testimonial-rating bottom">
                                {[...Array(current.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>

                        </div>
                    </div>

                    <button
                        className="carousel-button next"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        ›
                    </button>

                </div>

                {/* Dots */}
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
