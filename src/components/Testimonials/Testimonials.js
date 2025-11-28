import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Rachel",
            text: "I just wanted to share how pleased I am with the relationship between Elsner and us so far. You are always a pleasure to work with and respond so quickly – and your team is very responsive and makes the whole process very easy for us. PMS is also proving to be an excellent tool too. I am very grateful for your very quick response and turnaround on the project. it is very much appreciated. Thank you for all your hard work so far, and I am excited to see what we can achieve together in the future.",
            rating: 5
        },
        {
            name: "Marvin",
            text: "It seems at this time you and your team have completed the awards website by fixing all the issues that was keeping it from being world-class. I want you to be as proud as I am that we have a website that is totally different from our competitors and that works at the level of being unique and world-class. Please continue to look for how the web site can be continuously improved. Thank you for your efforts!",
            rating: 5
        },
        {
            name: "Zack",
            text: "First off would like to say how honoured I am to work with this team they have been nothing short of incredible. Very hands-on teamwork ethic everyone is willing to learn and great communication to anyone thinking about using There service I would highly recommend.",
            rating: 5
        },
        {
            name: "Laur",
            text: "Very professional approach. Even we have faced with a lot of technical challenges during website building, Elsner guys have always found the solution. My strong recommendation.",
            rating: 5
        },
        {
            name: "Malcolm",
            text: "I am so grateful to have the Elsner Team working with me on my project. The entire teams work is impeccable. I could not have hoped to have found a better partner to help me build my website.",
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
                <h2 className="section-title">Happy Client Words (350+)</h2>
                <div className="testimonial-carousel">
                    <button className="carousel-button prev" onClick={prevTestimonial}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <div className="testimonial-rating">
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">"{currentTestimonial.text}"</p>
                            <div className="testimonial-author">
                                <h4 className="author-name">{currentTestimonial.name}</h4>
                                {currentTestimonial.company && (
                                    <p className="author-company">{currentTestimonial.company}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <button className="carousel-button next" onClick={nextTestimonial}>
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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

