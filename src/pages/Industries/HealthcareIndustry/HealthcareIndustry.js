import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const HealthcareIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Healthcare"
                subtitle="Cutting-Edge Solutions for Healthcare Development"
                description="Transform healthcare delivery with comprehensive digital solutions. We build patient management systems, telemedicine platforms, and healthcare applications that improve patient care."
                bannerImages={[
                    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                ]}
                stats={[
                    { number: "30+", label: "Healthcare Projects" },
                    { number: "50K+", label: "Patients Served" },
                    { number: "98%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Patient Management Systems",
                        description: "Comprehensive systems for managing patient records, appointments, and medical history securely.",
                        examples: "EMR, EHR, Patient Portals"
                    },
                    {
                        title: "Telemedicine Platforms",
                        description: "Secure video consultation platforms connecting patients with healthcare providers remotely.",
                        examples: "Video Consultations, Remote Monitoring, E-Prescriptions"
                    },
                    {
                        title: "Hospital Management Systems",
                        description: "Complete hospital management solutions for operations, billing, and resource management.",
                        examples: "HIS, Billing Systems, Inventory Management"
                    },
                    {
                        title: "Healthcare Mobile Apps",
                        description: "Mobile applications for patients and healthcare providers with appointment booking and health tracking.",
                        examples: "Patient Apps, Doctor Apps, Health Tracking"
                    },
                    {
                        title: "Medical Billing Software",
                        description: "Automated billing and insurance claim processing systems for healthcare facilities.",
                        examples: "Insurance Claims, Billing Automation, Payment Processing"
                    },
                    {
                        title: "Health Analytics",
                        description: "Data analytics platforms for healthcare insights, population health, and predictive analytics.",
                        examples: "Health Dashboards, Predictive Analytics, Reporting"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Patient account management",
                            "Provider profiles and credentials",
                            "Insurance information management",
                            "Billing account integration"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Service portfolio management",
                            "Treatment protocol management",
                            "Resource allocation",
                            "Service catalog organization"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Healthcare budget planning",
                            "Revenue forecasting",
                            "Cost analysis and reporting",
                            "Financial planning tools"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "Technology investment planning",
                            "ROI analysis for healthcare IT",
                            "Equipment investment tracking",
                            "Strategic planning tools"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Healthcare APIs",
                        features: [
                            "HL7 FHIR integration",
                            "EHR system APIs",
                            "Insurance verification APIs"
                        ]
                    },
                    {
                        title: "Payment APIs",
                        features: [
                            "Medical billing APIs",
                            "Insurance claim APIs",
                            "Payment processing"
                        ]
                    },
                    {
                        title: "Telemedicine APIs",
                        features: [
                            "Video consultation APIs",
                            "Remote monitoring APIs",
                            "E-prescription APIs"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding healthcare workflows, compliance requirements, and patient needs.",
                        items: [
                            "Healthcare workflow analysis",
                            "HIPAA compliance planning",
                            "Security requirements",
                            "Integration planning"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating user-friendly, accessible designs for healthcare professionals and patients.",
                        items: [
                            "UI/UX design",
                            "Accessibility compliance",
                            "Mobile-first design",
                            "Workflow optimization"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building secure, compliant healthcare systems with proper data protection.",
                        items: [
                            "Secure platform development",
                            "HIPAA compliance implementation",
                            "Integration development",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing including security, compliance, and usability testing.",
                        items: [
                            "Security testing",
                            "Compliance verification",
                            "Functionality testing",
                            "User acceptance testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Secure deployment with proper hosting and compliance measures.",
                        items: [
                            "Secure hosting setup",
                            "SSL and encryption",
                            "Compliance verification",
                            "Go-live support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support with security updates and compliance monitoring.",
                        items: [
                            "Security updates",
                            "Compliance monitoring",
                            "Performance optimization",
                            "Feature enhancements"
                        ]
                    }
                ]}
                technologies={['HIPAA Compliant', 'HL7 FHIR', 'React', 'Node.js', 'PostgreSQL', 'Encryption']}
                faqs={[
                    {
                        question: "How do you ensure HIPAA compliance?",
                        answer: "We implement comprehensive HIPAA compliance measures including data encryption, access controls, audit logs, and secure hosting to protect patient health information."
                    },
                    {
                        question: "Can you integrate with existing EHR systems?",
                        answer: "Yes, we integrate with major EHR systems using HL7 FHIR standards and custom APIs to ensure seamless data exchange."
                    },
                    {
                        question: "Do you provide telemedicine solutions?",
                        answer: "Absolutely. We develop secure telemedicine platforms with video consultations, remote monitoring, and e-prescription capabilities."
                    },
                    {
                        question: "How secure are your healthcare solutions?",
                        answer: "We implement enterprise-grade security including encryption, multi-factor authentication, regular security audits, and HIPAA-compliant infrastructure."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default HealthcareIndustry;

