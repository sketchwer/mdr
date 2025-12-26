import React from 'react';
import { Link } from 'react-router-dom';
import './SoftwareDevelopment.css';

const SoftwareDevelopment = () => {
    const services = [
        {
            title: "Web App Development",
            description: "Macro Encoder Software develops powerful, browser-based web applications designed for speed, security, and scalability. Our web applications are built with strong backend architectures using Node.js, Java, and Python, combined with modern APIs and real-time data processing. These applications are ideal for dashboards, portals, SaaS platforms, and automation-driven systems.",
            link: "/services/web-application-development"
        },
        {
            title: "Java Development",
            description: "Macro Encoder Software builds enterprise-grade Java applications using modern frameworks such as Spring Boot, RESTful services, and microservices architecture. Our Java solutions are designed for high-traffic environments, secure integrations, and business-critical systems. Java remains a core technology for platforms that demand reliability and long-term stability.",
            link: "/services/java-spring-boot"
        },
        {
            title: "PHP Development",
            description: "Macro Encoder Software delivers flexible and cost-effective PHP solutions for dynamic web and backend systems. We build structured PHP applications with clean architecture, database-driven logic, and seamless API integrations. Our PHP solutions are optimized for performance, security, and ease of maintenance.",
            link: "/services/php-laravel"
        },
        {
            title: "Frontend Development",
            description: "Macro Encoder Software creates modern, responsive, and high-performing user interfaces using React.js, along with HTML5, CSS3, and modern JavaScript practices. Our frontends are designed to work seamlessly with backend systems built in Node.js, Java, and Python. We focus on usability, speed, and smooth user interaction.",
            link: "/services/reactjs-frontend"
        },
        {
            title: "Mobile App Development",
            description: "Macro Encoder Software develops mobile applications that integrate tightly with backend systems and cloud platforms. Our mobile apps connect with APIs built using Node.js, Java, and Python, enabling real-time data access and automation. We ensure mobile experiences are fast, reliable, and scalable.",
            link: "/services/mobile-app-development"
        },
        {
            title: "Website Development",
            description: "Macro Encoder Software creates professional, high-performance websites that are SEO-friendly, mobile-responsive, and optimized for speed. Our websites are supported by secure backend logic and scalable infrastructure, ensuring reliability as traffic grows.",
            link: "/services/business-website-development"
        },
        {
            title: "WordPress Development",
            description: "Macro Encoder Software builds advanced WordPress solutions with custom themes, plugin development, and performance optimization. We integrate WordPress with backend systems, APIs, and automation tools built using PHP, Node.js, and Python, making WordPress a powerful business platform.",
            link: "/services/wordpress-development"
        },
        {
            title: "Cloud Platform Development",
            description: "Macro Encoder Software designs and deploys cloud-based platforms using AWS, Microsoft Azure, and Google Cloud. Our cloud solutions support applications built with Node.js, Java, Python, and Machine Learning workloads. We also deploy Machine Learning models and data analytics systems built using Python and R, enabling intelligent automation, reporting, and decision-making at scale.",
            link: "/services/custom-erp-portals"
        },
        {
            title: "Machine Learning & Data Intelligence",
            description: "Macro Encoder Software builds intelligent systems using Machine Learning, Python, and R to help businesses automate decisions, analyze data, and generate insights. These solutions are integrated directly into business workflows, dashboards, and automation systems. From predictive analytics to intelligent reports, our ML-driven systems turn data into action.",
            link: "/services/ai-python-ml"
        }
    ];

    const features = [
        "Secure & Scalable",
        "Modern Technologies",
        "Enterprise-Grade",
        "24/7 Support"
    ];

    return (
        <div className="software-development-page">
            <div className="page-hero">
                <div className="hero-background-animation"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Software Development
                        </h1>
                        <p className="hero-description">
                            Macro Encoder Software designs and builds custom software solutions aligned with real business needs. We develop secure, scalable, and high-performance software using modern backend technologies including Java, Node.js, Python, and data-driven systems built with R and Machine Learning models.
                        </p>
                        <div className="hero-features">
                            {features.map((feature, index) => (
                                <span key={index} className="hero-feature-badge">{feature}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="intro-section">
                <div className="container">
                    <div className="intro-content">
                        <h2 className="intro-title">Custom Software Solutions for Your Business</h2>
                        <p className="intro-description">
                            Our solutions are designed to support complex business logic, automation, analytics, and long-term scalability. We combine cutting-edge technology with proven methodologies to deliver software that grows with your business.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content-sections">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Development Services</h2>
                        <p className="section-subtitle">Comprehensive software solutions across all platforms and technologies</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                to={service.link}
                                className="service-content-card"
                                style={{ 
                                    animationDelay: `${index * 0.08}s`
                                }}
                            >
                                <div className="service-card-number">{String(index + 1).padStart(2, '0')}</div>
                                <div className="service-card-header">
                                    <h2 className="service-card-title">
                                        {service.title}
                                    </h2>
                                    <div className="service-arrow-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="service-card-body">
                                    <p className="service-card-description">{service.description}</p>
                                </div>
                                <div className="service-card-footer">
                                    <span className="learn-more-text">
                                        Explore Service
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Build Your Next Software Solution?</h2>
                        <p>Let's turn your ideas into powerful, scalable applications that drive your business forward</p>
                        <Link to="/contact" className="cta-button">Get Started Today</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareDevelopment;
