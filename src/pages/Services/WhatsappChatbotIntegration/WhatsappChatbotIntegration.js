import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const WhatsappChatbotIntegration = () => {
    return (
        <>
            <ServiceDetail
                title="WhatsApp Chatbot Integration"
                subtitle="Mobile App Solutions"
                description="Automate customer communication with WhatsApp chatbots. Improve customer service and engagement with AI-powered chatbots."
                overview="WhatsApp chatbots help you automate customer communication and provide instant responses 24/7. Our WhatsApp chatbot integration services help you create intelligent chatbots that handle customer queries, provide support, and drive engagement through WhatsApp Business API."
                stats={[
                    { number: "20+", label: "Chatbot Integrations" },
                    { number: "80%", label: "Query Resolution" },
                    { number: "24/7", label: "Availability" }
                ]}
                features={[
                    {
                        title: "Chatbot Development",
                        description: "Develop intelligent WhatsApp chatbots using AI and NLP."
                    },
                    {
                        title: "WhatsApp Business API",
                        description: "Integrate with WhatsApp Business API for official messaging."
                    },
                    {
                        title: "Natural Language Processing",
                        description: "Implement NLP for understanding and responding to customer queries."
                    },
                    {
                        title: "Multi-language Support",
                        description: "Support multiple languages for global reach."
                    },
                    {
                        title: "CRM Integration",
                        description: "Integrate chatbots with CRM systems for seamless customer management."
                    },
                    {
                        title: "Analytics & Reporting",
                        description: "Track chatbot performance and customer interactions."
                    }
                ]}
                benefits={[
                    "24/7 customer support",
                    "Instant responses",
                    "Reduced support costs",
                    "Better customer experience",
                    "Increased engagement",
                    "Scalable solution",
                    "Expert chatbot developers"
                ]}
                technologies={[
                    "WhatsApp Business API", "Dialogflow", "Chatbot Platforms", "NLP", "AI", "CRM Integration"
                ]}
                process={[
                    {
                        title: "Requirements Analysis",
                        description: "Analyze your customer support needs and chatbot requirements."
                    },
                    {
                        title: "Chatbot Design",
                        description: "Design chatbot conversation flows and user experience."
                    },
                    {
                        title: "Development",
                        description: "Develop chatbot using AI and NLP technologies."
                    },
                    {
                        title: "Integration",
                        description: "Integrate with WhatsApp Business API and CRM systems."
                    },
                    {
                        title: "Testing",
                        description: "Test chatbot functionality and conversation flows."
                    },
                    {
                        title: "Launch & Training",
                        description: "Launch chatbot and train your team on management."
                    }
                ]}
                relatedServices={[
                    { title: "Flutter App Development", path: "/services/flutter-app-development", description: "Mobile apps" },
                    { title: "Android App Development", path: "/services/android-app-development", description: "Android apps" },
                    { title: "iPhone App Development", path: "/services/iphone-app-development", description: "iOS apps" }
                ]}
            />
            <CTA />
        </>
    );
};

export default WhatsappChatbotIntegration;

