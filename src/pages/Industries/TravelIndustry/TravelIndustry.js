import React from 'react';
import IndustryDetail from '../../../components/IndustryDetail/IndustryDetail';
import CTA from '../../../components/CTA/CTA';

const TravelIndustry = () => {
    return (
        <>
            <IndustryDetail
                title="Travel & Hospitality"
                subtitle="Cutting-Edge Solutions for Travel & Hospitality Development"
                description="Transform your travel business with comprehensive booking platforms and management systems. We build solutions for travel agencies, hotels, and hospitality businesses."
                bannerImages={[
                    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                ]}
                stats={[
                    { number: "15+", label: "Travel Projects" },
                    { number: "5K+", label: "Bookings Processed" },
                    { number: "95%", label: "Client Satisfaction" }
                ]}
                services={[
                    {
                        title: "Booking Platforms",
                        description: "Comprehensive booking systems for hotels, flights, tours, and travel packages.",
                        examples: "Hotel Booking, Flight Booking, Tour Booking"
                    },
                    {
                        title: "Hotel Management Systems",
                        description: "Complete PMS solutions for hotel operations, reservations, and guest management.",
                        examples: "PMS, Reservation Systems, Guest Management"
                    },
                    {
                        title: "Travel Agency Software",
                        description: "Custom software for travel agencies with booking management and customer relations.",
                        examples: "Booking Management, CRM, Itinerary Planning"
                    },
                    {
                        title: "Mobile Travel Apps",
                        description: "Mobile applications for travelers with booking, check-in, and travel management features.",
                        examples: "Travel Apps, Hotel Apps, Booking Apps"
                    },
                    {
                        title: "API Integrations",
                        description: "Integration with GDS, hotel APIs, and airline systems for real-time availability.",
                        examples: "GDS Integration, Hotel APIs, Airline APIs"
                    },
                    {
                        title: "Revenue Management",
                        description: "Dynamic pricing and revenue optimization systems for hotels and travel businesses.",
                        examples: "Dynamic Pricing, Revenue Analytics, Yield Management"
                    }
                ]}
                solutions={[
                    {
                        title: "Account Management",
                        features: [
                            "Travel agent accounts",
                            "Customer account management",
                            "Hotel property accounts",
                            "Loyalty program management"
                        ]
                    },
                    {
                        title: "Portfolio Management",
                        features: [
                            "Property portfolio management",
                            "Service portfolio tracking",
                            "Package management",
                            "Inventory management"
                        ]
                    },
                    {
                        title: "Budgeting and Forecasting",
                        features: [
                            "Revenue forecasting",
                            "Occupancy forecasting",
                            "Budget planning",
                            "Financial analytics"
                        ]
                    },
                    {
                        title: "Investment Management",
                        features: [
                            "Property investment tracking",
                            "Marketing ROI analysis",
                            "Technology investment planning",
                            "Strategic planning"
                        ]
                    }
                ]}
                apiIntegrations={[
                    {
                        title: "Travel APIs",
                        features: [
                            "GDS integration (Amadeus, Sabre)",
                            "Hotel booking APIs",
                            "Flight booking APIs"
                        ]
                    },
                    {
                        title: "Payment APIs",
                        features: [
                            "Multi-currency payment processing",
                            "Booking payment APIs",
                            "Refund management"
                        ]
                    },
                    {
                        title: "Mapping APIs",
                        features: [
                            "Location services",
                            "Route planning APIs",
                            "Destination information"
                        ]
                    }
                ]}
                process={[
                    {
                        title: "Planning & Consultation",
                        description: "Understanding travel business requirements and integration needs.",
                        items: [
                            "Business model analysis",
                            "GDS integration planning",
                            "Feature requirements",
                            "API integration planning"
                        ]
                    },
                    {
                        title: "Design",
                        description: "Creating attractive, user-friendly designs for travel booking.",
                        items: [
                            "Booking interface design",
                            "Property display layouts",
                            "Mobile-responsive design",
                            "User experience optimization"
                        ]
                    },
                    {
                        title: "Development",
                        description: "Building robust booking platforms with real-time integrations.",
                        items: [
                            "Platform development",
                            "GDS integration",
                            "Payment integration",
                            "Mobile app development"
                        ]
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing including booking flows and integrations.",
                        items: [
                            "Booking flow testing",
                            "Integration testing",
                            "Payment testing",
                            "Performance testing"
                        ]
                    },
                    {
                        title: "Deployment",
                        description: "Smooth deployment with proper configuration.",
                        items: [
                            "Hosting setup",
                            "API configuration",
                            "Payment gateway setup",
                            "Go-live support"
                        ]
                    },
                    {
                        title: "Maintenance",
                        description: "Ongoing support for updates and new features.",
                        items: [
                            "Regular updates",
                            "API maintenance",
                            "Performance optimization",
                            "Feature enhancements"
                        ]
                    }
                ]}
                technologies={['GDS Integration', 'React', 'Node.js', 'Payment Gateways', 'Hotel APIs']}
                faqs={[
                    {
                        question: "Can you integrate with GDS systems?",
                        answer: "Yes, we integrate with major GDS systems like Amadeus, Sabre, and Travelport for real-time flight and hotel availability."
                    },
                    {
                        question: "Do you provide hotel management systems?",
                        answer: "Absolutely. We develop comprehensive PMS solutions for hotels including reservations, guest management, and operations."
                    },
                    {
                        question: "Can you handle multi-currency transactions?",
                        answer: "Yes, we implement multi-currency support with real-time exchange rates and secure payment processing for international bookings."
                    }
                ]}
            />
            <CTA />
        </>
    );
};

export default TravelIndustry;

