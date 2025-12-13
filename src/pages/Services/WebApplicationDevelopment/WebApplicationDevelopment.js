import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const WebApplicationDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Web Application Development"
                subtitle="Software Development"
                description="Build powerful, scalable web applications tailored to your business needs. From custom web apps to enterprise solutions, we deliver cutting-edge web applications that drive growth."
                overview="Web Application Development services create custom, scalable web applications designed to solve specific business challenges. Our expert developers build responsive, secure, and high-performance web applications using modern technologies and best practices. Whether you need a customer portal, internal tool, e-commerce platform, or enterprise application, we deliver solutions that enhance productivity and drive business success."
                features={[
                    {
                        title: "Custom Web Applications",
                        description: "Bespoke web applications designed and developed specifically for your business requirements and workflows."
                    },
                    {
                        title: "Responsive Design",
                        description: "Fully responsive applications that work seamlessly across desktop, tablet, and mobile devices."
                    },
                    {
                        title: "API Integration",
                        description: "Seamless integration with third-party services, payment gateways, and enterprise systems via APIs."
                    },
                    {
                        title: "Real-Time Features",
                        description: "Real-time collaboration, notifications, and live updates using modern web technologies."
                    },
                    {
                        title: "Cloud Deployment",
                        description: "Cloud-native applications with scalable architecture and automated deployment pipelines."
                    },
                    {
                        title: "Security & Compliance",
                        description: "Enterprise-grade security, data encryption, and compliance with industry standards (GDPR, HIPAA)."
                    }
                ]}
                benefits={[
                    "Streamlined business operations and workflows",
                    "Improved user experience and engagement",
                    "Scalable architecture for business growth",
                    "Reduced operational costs and inefficiencies",
                    "Enhanced data security and compliance",
                    "Real-time collaboration and productivity tools"
                ]}
                technologies={['React.js', 'Node.js', 'Next.js', 'Vue.js', 'Angular', 'Python', 'Django', 'PHP', 'Laravel', 'Java', 'Spring Boot']}
                stats={[
                    { number: "200+", label: "Web Apps Delivered" },
                    { number: "99.9%", label: "Uptime" },
                    { number: "10+", label: "Years Experience" }
                ]}
                process={[
                    { title: "Requirements Analysis", description: "Gather and analyze business requirements to define application scope and features" },
                    { title: "Design & Architecture", description: "Design user interface, user experience, and technical architecture" },
                    { title: "Development", description: "Agile development with regular iterations and client feedback" },
                    { title: "Testing & QA", description: "Comprehensive testing including unit, integration, and user acceptance testing" },
                    { title: "Deployment", description: "Cloud deployment with CI/CD pipelines and monitoring setup" },
                    { title: "Support & Maintenance", description: "Ongoing support, updates, and feature enhancements" }
                ]}
                relatedServices={[
                    { title: "ReactJS Development", path: "/services/reactjs-frontend", description: "React-based applications" },
                    { title: "PHP / Laravel Development", path: "/services/php-laravel", description: "Laravel web development" },
                    { title: "Custom ERP Portals", path: "/services/custom-erp-portals", description: "Enterprise portals" }
                ]}
            />
            <CTA />
        </>
    );
};

export default WebApplicationDevelopment;

