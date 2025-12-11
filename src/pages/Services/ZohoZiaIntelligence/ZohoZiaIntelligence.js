import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const ZohoZiaIntelligence = () => {
    return (
        <>
            <ServiceDetail
                title="Zoho Zia Intelligence"
                subtitle="Zoho Solutions"
                description="Enhance your Zoho apps with Zia's capabilities. From predictive insights to anomaly alerts, email intelligence, chat assistance, and AI-triggered workflows — Zia brings smart automation into your everyday operations."
                overview="Zoho Zia is an AI-powered assistant that brings intelligence to your Zoho applications. Our Zoho Zia Intelligence service helps you implement and leverage Zia's capabilities including predictive insights, anomaly detection, email intelligence, chat assistance, and AI-triggered workflows to enhance your business operations."
                features={[
                    {
                        title: "Predictive Insights",
                        description: "Get AI-powered predictions and insights for better decision-making."
                    },
                    {
                        title: "Anomaly Alerts",
                        description: "Automatically detect and alert on anomalies in your business data."
                    },
                    {
                        title: "Email Intelligence",
                        description: "AI-powered email analysis and intelligent responses."
                    },
                    {
                        title: "Chat Assistance",
                        description: "Zia chat assistant for instant help and information."
                    },
                    {
                        title: "AI-Triggered Workflows",
                        description: "Automated workflows triggered by AI insights and predictions."
                    },
                    {
                        title: "Smart Automation",
                        description: "Intelligent automation for everyday business operations."
                    }
                ]}
                benefits={[
                    "Smart automation into everyday operations",
                    "Predictive insights for proactive decisions",
                    "Automated anomaly detection",
                    "Enhanced email productivity",
                    "24/7 AI chat assistance",
                    "Intelligent workflow automation"
                ]}
                technologies={['Zoho Zia', 'AI/ML', 'Predictive Analytics', 'Workflow Automation', 'Email Intelligence', 'Chatbot Integration']}
                process={[
                    { step: "Assessment", description: "Assess your Zoho apps and identify Zia opportunities" },
                    { step: "Configuration", description: "Configure Zia features for your business needs" },
                    { step: "Workflow Setup", description: "Set up AI-triggered workflows" },
                    { step: "Integration", description: "Integrate Zia across all Zoho applications" },
                    { step: "Training", description: "Train your team on Zia capabilities" },
                    { step: "Optimization", description: "Continuously optimize Zia performance" }
                ]}
            />
            <CTA />
        </>
    );
};

export default ZohoZiaIntelligence;

