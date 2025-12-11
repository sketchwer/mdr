import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const AIPythonML = () => {
    return (
        <>
            <ServiceDetail
                title="AI, Python & Machine Learning"
                subtitle="AI & Automation"
                description="Unlock powerful automation with AI-driven solutions. We build Python + ML models that read documents, extract data, predict outcomes, identify patterns, and automate daily decision-making with accuracy and speed."
                overview="Harness the power of artificial intelligence and machine learning to automate complex business processes. Our AI, Python & Machine Learning service creates intelligent solutions that can read documents, extract data, make predictions, identify patterns, and automate decision-making processes with high accuracy."
                features={[
                    {
                        title: "Python ML Models",
                        description: "Custom machine learning models built with Python for your specific needs."
                    },
                    {
                        title: "Document Reading & Extraction",
                        description: "AI models that read and extract data from various document types."
                    },
                    {
                        title: "Predictive Analytics",
                        description: "ML models that predict outcomes and trends for better decision-making."
                    },
                    {
                        title: "Pattern Recognition",
                        description: "Identify patterns and anomalies in your business data."
                    },
                    {
                        title: "Automated Decision-Making",
                        description: "AI systems that make decisions automatically based on data."
                    },
                    {
                        title: "Custom AI Solutions",
                        description: "Tailored AI solutions for your unique business requirements."
                    }
                ]}
                benefits={[
                    "Accurate and fast daily decision-making",
                    "Automated pattern identification",
                    "Predictive insights for better planning",
                    "Reduced manual analysis time",
                    "Improved accuracy in data processing",
                    "Scalable AI solutions"
                ]}
                technologies={['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Data Science']}
                process={[
                    { step: "Requirements", description: "Understand your business needs and data requirements" },
                    { step: "Data Analysis", description: "Analyze your data and identify ML opportunities" },
                    { step: "Model Development", description: "Develop custom Python ML models" },
                    { step: "Training", description: "Train models with your data" },
                    { step: "Testing", description: "Test models for accuracy and performance" },
                    { step: "Deployment", description: "Deploy models and integrate with your systems" }
                ]}
            />
            <CTA />
        </>
    );
};

export default AIPythonML;

