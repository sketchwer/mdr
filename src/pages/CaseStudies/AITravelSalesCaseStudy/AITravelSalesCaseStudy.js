import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const AITravelSalesCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="AI-Powered Travel Sales Automation"
                subtitle="Automated the complete travel booking journey from inquiry to payment and post-trip feedback."
                clientName="Travel & Tourism Agency"
                clientDescription="A travel and tourism agency needed to automate their entire sales process from initial customer inquiry through booking, payment processing, and post-trip feedback collection."
                website=""
                location="Global"
                industry="Travel & Tourism"
                duration="5 months"
                image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80"
                challenges={[
                    {
                        title: "Manual Booking Process",
                        description: "The travel agency was handling inquiries, bookings, payments, and follow-ups manually, leading to long response times, booking errors, and missed opportunities."
                    },
                    {
                        title: "Customer Engagement",
                        description: "There was no automated system to engage customers at different stages of their travel journey, from inquiry to post-trip feedback."
                    },
                    {
                        title: "Payment Processing",
                        description: "Payment collection and reconciliation required manual tracking, often leading to delays and accounting discrepancies."
                    }
                ]}
                solutions={[
                    {
                        title: "AI-Powered Chatbot",
                        description: "Implemented an AI chatbot integrated with Zoho CRM that handles initial inquiries 24/7, qualifies leads, provides travel information, and schedules consultations with travel agents."
                    },
                    {
                        title: "Automated Booking Workflow",
                        description: "Created automated workflows in Zoho CRM that capture booking details, generate itineraries, send confirmation emails, and update customer records automatically."
                    },
                    {
                        title: "Payment Automation",
                        description: "Integrated payment gateway with Zoho CRM to automate payment collection, invoice generation, and receipt delivery. Set up automated reminders for pending payments."
                    },
                    {
                        title: "Post-Trip Engagement",
                        description: "Automated feedback collection through Zoho Campaigns, sending post-trip surveys and review requests, and creating follow-up opportunities for future bookings."
                    },
                    {
                        title: "Analytics & Reporting",
                        description: "Built comprehensive dashboards in Zoho Analytics tracking inquiry sources, conversion rates, booking values, payment status, and customer satisfaction metrics."
                    }
                ]}
                results={[
                    "Automated 80% of initial customer inquiries through AI chatbot",
                    "Reduced booking processing time by 60%",
                    "Improved lead response time from hours to seconds",
                    "Increased booking conversion rate by 35%",
                    "Achieved 100% automated payment tracking and reconciliation",
                    "Enhanced customer satisfaction with proactive engagement"
                ]}
                technologies={['Zoho CRM', 'AI Chatbot', 'Zoho Analytics']}
                whatWeDid={[
                    'AI Chatbot Development & Integration',
                    'Complete Booking Journey Automation',
                    'Payment Gateway Integration',
                    'Automated Itinerary Generation',
                    'Post-Trip Feedback Automation',
                    'Sales Analytics Dashboard Creation'
                ]}
            />
            <CTA />
        </>
    );
};

export default AITravelSalesCaseStudy;

