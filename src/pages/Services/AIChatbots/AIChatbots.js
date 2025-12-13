import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const AIChatbots = () => {
    return (
        <>
            <ServiceDetail
                title="AI Chatbots (Website & WhatsApp)"
                subtitle="AI & Automation"
                description="Intelligent AI-powered chatbots for your website and WhatsApp. Engage customers 24/7 with automated conversations that understand context and provide instant support."
                overview="AI Chatbots revolutionize customer engagement by providing instant, intelligent responses to customer queries. Our AI chatbot solutions work seamlessly on websites and WhatsApp, understanding natural language, learning from interactions, and providing personalized customer experiences around the clock."
                features={[
                    {
                        title: "Natural Language Processing",
                        description: "Advanced NLP for understanding customer intent and context."
                    },
                    {
                        title: "Multi-Channel Support",
                        description: "Deploy on website, WhatsApp, and other messaging platforms."
                    },
                    {
                        title: "24/7 Availability",
                        description: "Round-the-clock customer support without human intervention."
                    },
                    {
                        title: "Context Awareness",
                        description: "Maintains conversation context for meaningful interactions."
                    },
                    {
                        title: "Lead Qualification",
                        description: "Automatically qualify leads and route to sales team."
                    },
                    {
                        title: "Analytics & Insights",
                        description: "Track conversations, satisfaction, and conversion metrics."
                    }
                ]}
                benefits={[
                    "Instant customer responses",
                    "24/7 availability",
                    "Reduced support costs",
                    "Improved customer satisfaction",
                    "Lead generation and qualification",
                    "Scalable customer support"
                ]}
                technologies={['OpenAI GPT', 'Dialogflow', 'WhatsApp Business API', 'NLP', 'Machine Learning', 'Custom AI Models']}
                process={[
                    { step: "Discovery", description: "Understand your business and customer interaction patterns" },
                    { step: "Design", description: "Design conversation flows and chatbot personality" },
                    { step: "Development", description: "Develop and train AI chatbot models" },
                    { step: "Integration", description: "Integrate with website and WhatsApp" },
                    { step: "Testing", description: "Test conversations and refine responses" },
                    { step: "Launch", description: "Deploy and monitor chatbot performance" }
                ]}
            />
            <CTA />
        </>
    );
};

export default AIChatbots;

