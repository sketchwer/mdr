import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const WorldVeganTravelCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Automated bookings, reminders & payment flows"
                subtitle="Discover how we automated World Vegan Travel's booking operations with seamless reminders and payment processing workflows."
                clientName="World Vegan Travel"
                clientDescription="World Vegan Travel is a travel and tourism company that needed automated systems to manage bookings, send reminders, and process payments efficiently."
                website=""
                location="Global"
                industry="Travel & Tourism"
                duration="5 months"
                image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Manual Booking Management",
                        description: "The company was handling bookings manually, which was time-consuming and prone to errors, especially during peak travel seasons."
                    },
                    {
                        title: "Payment Processing Delays",
                        description: "Payment processing required manual follow-ups and reminders, leading to delayed payments and cash flow issues."
                    }
                ]}
                solutions={[
                    {
                        title: "Automated Booking System",
                        description: "Implemented automated booking workflows in Zoho CRM that streamline reservation processes and reduce manual effort."
                    },
                    {
                        title: "Payment & Reminder Automation",
                        description: "Set up automated payment reminders and processing workflows using Zoho Campaigns, ensuring timely payments and improved cash flow."
                    }
                ]}
                results={[
                    "Automated 90% of booking processes",
                    "Reduced payment processing time by 70%",
                    "Improved cash flow with timely reminders",
                    "Enhanced customer communication",
                    "Streamlined travel booking operations"
                ]}
                technologies={['Zoho CRM', 'Zoho Campaigns']}
                whatWeDid={[
                    'Booking Automation Workflows',
                    'Zoho CRM Integration',
                    'Zoho Campaigns Setup',
                    'Payment Reminder Automation',
                    'Customer Communication System'
                ]}
            />
            <CTA />
        </>
    );
};

export default WorldVeganTravelCaseStudy;

