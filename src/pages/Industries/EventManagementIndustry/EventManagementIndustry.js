import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const EventManagementIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Event Management"
                subtitle="Cutting-Edge Solutions for Event Management Development"
                description="Transform your event management business with comprehensive digital solutions. We build event planning platforms, ticketing systems, and management tools for event organizers."
                bannerImages={[
                    'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
                    'https://images.unsplash.com/photo-1478146897153-1977b0d0fd89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                ]}
                stats={[
                    { number: "12+", label: "Event Platforms" },
                    { number: "50K+", label: "Events Managed" },
                    { number: "95%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Event Management Platforms",
                        description: "Comprehensive platforms for planning, organizing, and managing events of all sizes.",
                        examples: "Event Planning, Registration, Management"
                    },
                    {
                        title: "Ticketing Systems",
                        description: "Advanced ticketing platforms with QR codes, mobile tickets, and check-in systems.",
                        examples: "Online Ticketing, QR Codes, Check-in Systems"
                    },
                    {
                        title: "Event Registration",
                        description: "Custom registration forms with payment processing and attendee management.",
                        examples: "Registration Forms, Payment Processing, Attendee Management"
                    },
                    {
                        title: "Event Mobile Apps",
                        description: "Mobile applications for event attendees with schedules, networking, and updates.",
                        examples: "Attendee Apps, Networking Apps, Schedule Apps"
                    },
                    {
                        title: "Venue Management",
                        description: "Systems for managing venues, bookings, and event logistics.",
                        examples: "Venue Booking, Logistics Management, Resource Planning"
                    },
                    {
                        title: "Event Marketing Tools",
                        description: "Marketing automation and promotional tools for event promotion.",
                        examples: "Email Marketing, Social Promotion, Campaign Management"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Event organizer accounts",
                            "Attendee account management",
                            "Vendor and sponsor accounts",
                            "Team collaboration accounts"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Event portfolio management",
                            "Past events archive",
                            "Event analytics",
                            "Success metrics tracking"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Event budget planning",
                            "Revenue forecasting",
                            "Cost tracking",
                            "Financial reporting"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "Marketing ROI tracking",
                            "Technology investment planning",
                            "Resource allocation",
                            "Strategic planning"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Payment Gateway APIs",
                        features: [
                            "Stripe for ticket payments",
                            "PayPal for transactions",
                            "Refund management APIs"
                        ]
                    },
                    {
                        title: "Event APIs",
                        features: [
                            "Ticketing APIs",
                            "Registration APIs",
                            "Check-in APIs"
                        ]
                    },
                    {
                        title: "Marketing APIs",
                        features: [
                            "Email marketing APIs",
                            "Social media APIs",
                            "Analytics APIs"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding event management workflows and requirements.",
                        items: [
                            "Workflow analysis",
                            "Feature requirements",
                            "Integration needs",
                            "Technology selection"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating attractive, user-friendly designs for event platforms.",
                        items: [
                            "Event page design",
                            "Registration flow design",
                            "Mobile-responsive design",
                            "User experience optimization"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building robust event management platforms with ticketing and registration.",
                        items: [
                            "Platform development",
                            "Ticketing system",
                            "Payment integration",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing including registration flows and payment processing.",
                        items: [
                            "Registration flow testing",
                            "Payment testing",
                            "Ticketing testing",
                            "Performance testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth deployment with proper configuration.",
                        items: [
                            "Hosting setup",
                            "Payment gateway setup",
                            "Email configuration",
                            "Go-live support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support for events and feature updates.",
                        items: [
                            "Event support",
                            "Feature enhancements",
                            "Performance optimization",
                            "Technical support"
                        ]
                    }
                ]}
                technologies={['WordPress', 'React', 'Node.js', 'Payment Gateways', 'QR Code Systems']}
                faqs={[
                    {
                        question: "Can you build ticketing systems?",
                        answer: "Yes, we develop comprehensive ticketing systems with QR codes, mobile tickets, and check-in functionality for seamless event management."
                    },
                    {
                        question: "Do you provide event registration platforms?",
                        answer: "Absolutely. We build custom registration forms with payment processing, attendee management, and automated confirmations."
                    },
                    {
                        question: "Can you handle large-scale events?",
                        answer: "Yes, we build scalable platforms that can handle thousands of attendees, high traffic during registration, and real-time check-ins."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default EventManagementIndustry;

