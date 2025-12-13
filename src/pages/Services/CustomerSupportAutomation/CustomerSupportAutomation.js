import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const CustomerSupportAutomation = () => {
    return (
        <>
            <ServiceDetail
                title="Customer Support Automation"
                subtitle="AI & Automation"
                description="Elevate your customer support with intelligent automation. Automate ticket routing, responses, escalations, and resolution workflows to deliver exceptional customer experiences."
                overview="Customer Support Automation transforms your support operations by intelligently handling routine inquiries, routing tickets to the right agents, escalating critical issues, and automating resolution workflows. Our AI-powered automation solutions ensure faster response times, consistent service quality, and improved customer satisfaction while reducing support costs and agent workload."
                features={[
                    {
                        title: "Intelligent Ticket Routing",
                        description: "AI-powered ticket routing to the right agent based on expertise, workload, and ticket priority."
                    },
                    {
                        title: "Automated Responses",
                        description: "Smart auto-responses and canned replies for common inquiries with AI-enhanced personalization."
                    },
                    {
                        title: "SLA Management",
                        description: "Automated SLA tracking, breach prevention, and escalation for time-sensitive tickets."
                    },
                    {
                        title: "Self-Service Portal",
                        description: "AI chatbot and knowledge base integration for instant customer self-service support."
                    },
                    {
                        title: "Sentiment Analysis",
                        description: "AI-powered sentiment analysis to prioritize urgent issues and identify at-risk customers."
                    },
                    {
                        title: "Automated Escalation",
                        description: "Smart escalation workflows based on ticket type, customer value, and resolution time."
                    }
                ]}
                benefits={[
                    "Reduce average response time by 60%",
                    "Improve first contact resolution rates",
                    "Enhance customer satisfaction scores",
                    "Reduce support costs and agent workload",
                    "24/7 automated customer support availability",
                    "Real-time support metrics and insights"
                ]}
                technologies={['Zoho Desk', 'Zoho SalesIQ', 'AI Chatbots', 'Zoho Flow', 'Zoho CRM', 'Natural Language Processing']}
                stats={[
                    { number: "60%", label: "Faster Response" },
                    { number: "85%", label: "Satisfaction Rate" },
                    { number: "50%", label: "Cost Reduction" }
                ]}
                process={[
                    { title: "Support Analysis", description: "Analyze current support processes, ticket volume, and pain points" },
                    { title: "Automation Strategy", description: "Design automation strategy for routing, responses, and escalations" },
                    { title: "AI Configuration", description: "Configure AI chatbots, ticket routing rules, and automation workflows" },
                    { title: "Integration Setup", description: "Integrate with CRM, knowledge base, and communication channels" },
                    { title: "Testing & Optimization", description: "Test automation with real tickets and optimize based on results" },
                    { title: "Deployment & Training", description: "Deploy automation and train support team on new workflows" }
                ]}
                relatedServices={[
                    { title: "Zoho Desk", path: "/services/zoho-desk", description: "Help desk management" },
                    { title: "AI Chatbots", path: "/services/ai-chatbots", description: "Intelligent chatbots" },
                    { title: "Business Process Automation", path: "/services/business-process-automation", description: "Process automation" }
                ]}
            />
            <CTA />
        </>
    );
};

export default CustomerSupportAutomation;

