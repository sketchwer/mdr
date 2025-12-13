import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const AIReportsInsights = () => {
    return (
        <>
            <ServiceDetail
                title="AI Reports & Insights"
                subtitle="AI & Automation"
                description="Transform raw data into actionable insights with AI-powered reporting and analytics. Make data-driven decisions with intelligent dashboards, predictive analytics, and automated insights."
                overview="AI Reports & Insights leverage artificial intelligence and machine learning to transform business data into meaningful, actionable insights. Our advanced reporting solutions go beyond traditional dashboards by providing predictive analytics, anomaly detection, automated insights generation, and intelligent recommendations. Whether it's sales forecasting, customer behavior analysis, or operational metrics, our AI-powered reports help organizations make informed decisions faster."
                features={[
                    {
                        title: "Automated Report Generation",
                        description: "AI-driven automatic report generation based on scheduled triggers, events, or data changes."
                    },
                    {
                        title: "Predictive Analytics",
                        description: "Machine learning models for sales forecasting, trend prediction, and future performance insights."
                    },
                    {
                        title: "Natural Language Insights",
                        description: "AI-generated natural language summaries explaining key metrics and trends in plain English."
                    },
                    {
                        title: "Anomaly Detection",
                        description: "Intelligent detection of unusual patterns, outliers, and anomalies in business data."
                    },
                    {
                        title: "Custom Dashboards",
                        description: "Interactive, AI-enhanced dashboards with drill-down capabilities and real-time updates."
                    },
                    {
                        title: "Automated Alerts",
                        description: "Smart alerts for critical metrics, thresholds, and trend changes with actionable recommendations."
                    }
                ]}
                benefits={[
                    "Make faster, data-driven decisions",
                    "Identify trends and opportunities early",
                    "Reduce time spent on report generation by 75%",
                    "Improve forecast accuracy and planning",
                    "Gain deeper insights from complex data",
                    "Proactive issue identification and resolution"
                ]}
                technologies={['Zoho Analytics', 'Zoho Zia', 'Machine Learning', 'Data Science', 'Business Intelligence', 'Power BI Integration']}
                stats={[
                    { number: "75%", label: "Time Savings" },
                    { number: "90%", label: "Accuracy Improvement" },
                    { number: "500+", label: "Reports Automated" }
                ]}
                process={[
                    { title: "Data Assessment", description: "Assess data sources, quality, and identify key metrics for reporting" },
                    { title: "AI Model Development", description: "Develop machine learning models for predictions and insights" },
                    { title: "Dashboard Design", description: "Design interactive dashboards and visualization layouts" },
                    { title: "Report Automation", description: "Configure automated report generation and distribution workflows" },
                    { title: "Testing & Validation", description: "Validate AI models and test report accuracy with historical data" },
                    { title: "Deployment & Training", description: "Deploy reports and train teams on interpreting AI insights" }
                ]}
                relatedServices={[
                    { title: "Zoho Analytics", path: "/services/zoho-analytics", description: "Advanced analytics platform" },
                    { title: "Business Process Automation", path: "/services/business-process-automation", description: "Automated workflows" },
                    { title: "AI Chatbots", path: "/services/ai-chatbots", description: "AI-powered solutions" }
                ]}
            />
            <CTA />
        </>
    );
};

export default AIReportsInsights;

