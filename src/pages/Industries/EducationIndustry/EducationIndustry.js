import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const EducationIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Education"
                subtitle="Cutting-Edge Solutions for Education Development"
                description="Transform education with comprehensive learning management systems and educational platforms. We build solutions for schools, universities, and online learning providers."
                bannerImages={[
                    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
                    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                ]}
                stats={[
                    { number: "25+", label: "Education Projects" },
                    { number: "100K+", label: "Students Served" },
                    { number: "96%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Learning Management Systems",
                        description: "Comprehensive LMS platforms for course delivery, student management, and assessment.",
                        examples: "Moodle, Canvas, Custom LMS"
                    },
                    {
                        title: "Student Information Systems",
                        description: "Complete SIS solutions for managing student records, enrollment, and academic progress.",
                        examples: "Student Portals, Enrollment Systems, Grade Management"
                    },
                    {
                        title: "Online Learning Platforms",
                        description: "Custom e-learning platforms with video courses, interactive content, and assessments.",
                        examples: "Course Platforms, Video Learning, Interactive Content"
                    },
                    {
                        title: "Educational Mobile Apps",
                        description: "Mobile applications for students and educators with course access and collaboration tools.",
                        examples: "Student Apps, Teacher Apps, Parent Apps"
                    },
                    {
                        title: "Virtual Classroom Solutions",
                        description: "Video-based virtual classrooms with interactive features for remote learning.",
                        examples: "Video Conferencing, Screen Sharing, Whiteboard Tools"
                    },
                    {
                        title: "Assessment & Testing",
                        description: "Online assessment platforms with automated grading and analytics.",
                        examples: "Online Exams, Automated Grading, Analytics"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Student account management",
                            "Teacher and admin accounts",
                            "Parent portal access",
                            "Role-based permissions"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Course portfolio management",
                            "Curriculum organization",
                            "Resource library management",
                            "Content catalog"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Education budget planning",
                            "Revenue forecasting",
                            "Cost analysis",
                            "Financial reporting"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "Technology investment planning",
                            "ROI analysis for ed-tech",
                            "Resource allocation",
                            "Strategic planning"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Education APIs",
                        features: [
                            "LMS integration APIs",
                            "Student information APIs",
                            "Content delivery APIs"
                        ]
                    },
                    {
                        title: "Payment APIs",
                        features: [
                            "Tuition payment APIs",
                            "Course payment processing",
                            "Subscription management"
                        ]
                    },
                    {
                        title: "Video APIs",
                        features: [
                            "Video streaming APIs",
                            "Video conferencing APIs",
                            "Content delivery networks"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding educational needs, learning objectives, and institutional requirements.",
                        items: [
                            "Educational needs analysis",
                            "Learning objective definition",
                            "Technology requirements",
                            "Integration planning"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating intuitive, accessible designs for students, teachers, and administrators.",
                        items: [
                            "User-friendly UI/UX",
                            "Accessibility compliance",
                            "Mobile-responsive design",
                            "Learning experience design"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building robust educational platforms with learning and management features.",
                        items: [
                            "Platform development",
                            "Content management",
                            "Assessment tools",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing including usability, accessibility, and functionality.",
                        items: [
                            "Functionality testing",
                            "Usability testing",
                            "Accessibility testing",
                            "Performance testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth deployment with proper hosting and configuration.",
                        items: [
                            "Hosting setup",
                            "Content migration",
                            "User training",
                            "Go-live support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support for content updates and feature enhancements.",
                        items: [
                            "Content updates",
                            "Feature enhancements",
                            "Performance optimization",
                            "User support"
                        ]
                    }
                ]}
                technologies={['LMS Platforms', 'React', 'Node.js', 'Video Streaming', 'PHP', 'MySQL']}
                faqs={[
                    {
                        question: "What learning management systems do you support?",
                        answer: "We work with all major LMS platforms including Moodle, Canvas, Blackboard, and can also build custom LMS solutions tailored to your needs."
                    },
                    {
                        question: "Can you integrate with existing student information systems?",
                        answer: "Yes, we integrate with major SIS platforms to ensure seamless data exchange between systems."
                    },
                    {
                        question: "Do you provide mobile apps for education?",
                        answer: "Absolutely. We develop mobile applications for iOS and Android that allow students and teachers to access courses and manage learning on the go."
                    },
                    {
                        question: "How do you ensure accessibility in educational platforms?",
                        answer: "We follow WCAG accessibility guidelines and implement features like screen reader support, keyboard navigation, and alternative text for all content."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default EducationIndustry;

