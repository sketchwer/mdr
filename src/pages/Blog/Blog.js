import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            title: "Expert Implementation Tips: Best Practices for Successful Zoho CRM Deployment in 2025",
            date: "September 11, 2025",
            category: "AI For Business Transformation",
            excerpt: "Implementing Zoho CRM can be a game-changer for businesses aiming to streamline customer interactions, improve efficiency, and boost sales. However, deploying a CRM system without proper planning and execution can lead to confusion, wasted resources, and unmet expectations. In 2025, with more businesses relying on digital solutions, ensuring a seamless Zoho CRM deployment is critical.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            title: "From Creation to Execution: Exploring the Zoho AI Agent Ecosystem",
            date: "August 13, 2025",
            category: "AI For Business Transformation",
            excerpt: "In today's fast-paced digital world, automation and artificial intelligence (AI) are no longer optional — they are essential for efficiency, accuracy, and growth. Zoho, known for its powerful business software suite, has taken a giant leap forward with Zoho AI Agents. These intelligent virtual agents are designed to help businesses create, deploy, and manage AI-driven solutions.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            title: "A Complete Guide to Zoho AI Agents: Features, Benefits, and Use Cases",
            date: "August 12, 2025",
            category: "AI For Business Transformation",
            excerpt: "Artificial Intelligence (AI) is transforming how businesses operate, and Zoho has taken a significant step forward with its Zoho AI Agents. Designed to streamline workflows, enhance customer experiences, and improve productivity, these AI-driven assistants are becoming a must-have for businesses of all sizes. Whether you are a sales team, support desk, or marketing department, Zoho AI Agents can revolutionize your operations.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
        }
    ];

    return (
        <div className="blog-page">
            <PageHeader 
                title="Latest AI for Business Transformation"
                subtitle="Blog"
                description="Discover the latest insights on AI-powered business transformation and automation"
            />
            <section className="blog-content">
                <div className="container">
                    <div className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <article key={index} className="blog-card">
                                <div className="blog-image-wrapper">
                                    <img src={post.image} alt={post.title} className="blog-image" />
                                </div>
                                <div className="blog-content-wrapper">
                                    <div className="blog-meta">
                                        <span className="blog-category">{post.category}</span>
                                        <span className="blog-date">{post.date}</span>
                                    </div>
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <a href={`/blog/post-${index + 1}`} className="blog-read-more">Continue Reading →</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;

