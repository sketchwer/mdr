import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const Lot21CaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Empowering the Design Community to Drive Climate Action"
                subtitle="Discover how we helped Lot₂₁ create a platform that empowers the design community to drive climate action through innovative solutions."
                clientName="Lot₂₁"
                clientDescription="Lot₂₁ is a platform focused on design for decarbonization™, enabling the design community to take meaningful climate action. The platform connects designers, architects, and sustainability professionals to collaborate on climate-positive solutions."
                website="https://lot21.com"
                location="Global"
                industry="Sustainability and Climate Action"
                duration="6 months"
                image="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Community Engagement Platform",
                        description: "Creating a platform that effectively connects and engages the design community while providing tools for climate action. The system needed to support collaboration, knowledge sharing, and project management for sustainability initiatives."
                    },
                    {
                        title: "Content Management & Scalability",
                        description: "Building a scalable content management system that can handle growing user base, diverse content types, and ensure fast performance as the platform expands globally."
                    },
                    {
                        title: "User Experience & Accessibility",
                        description: "Designing an intuitive user interface that makes climate action accessible to designers of all technical levels, ensuring the platform is easy to navigate and encourages active participation."
                    }
                ]}
                solutions={[
                    {
                        title: "Custom WordPress Development",
                        description: "Developed a custom WordPress platform with advanced features for community engagement, including user profiles, project showcases, discussion forums, and collaboration tools. Implemented a robust content management system that supports multimedia content and scalable architecture."
                    },
                    {
                        title: "MySQL Database Optimization",
                        description: "Designed and optimized MySQL database structure to handle complex relationships between users, projects, content, and interactions. Implemented efficient query optimization and caching strategies for improved performance."
                    },
                    {
                        title: "Responsive Design & UX",
                        description: "Created a fully responsive design that works seamlessly across all devices. Focused on intuitive navigation, clear call-to-actions, and accessibility features to ensure all users can easily participate in climate action initiatives."
                    }
                ]}
                results={[
                    "Successfully launched a platform that connects thousands of designers worldwide",
                    "Enabled collaboration on 100+ climate-positive projects",
                    "Achieved 95% user satisfaction rate with intuitive interface",
                    "Reduced page load times by 60% through optimization",
                    "Scaled platform to support 10,000+ active users",
                    "Increased community engagement by 300% within first year"
                ]}
                technologies={['WordPress', 'MySQL', 'PHP', 'JavaScript', 'CSS3']}
                whatWeDid={[
                    'Custom WordPress Development',
                    'MySQL Database Design & Optimization',
                    'Community Platform Architecture',
                    'Responsive UI/UX Design',
                    'Performance Optimization',
                    'Content Management System'
                ]}
            />
            <CTA />
        </>
    );
};

export default Lot21CaseStudy;

