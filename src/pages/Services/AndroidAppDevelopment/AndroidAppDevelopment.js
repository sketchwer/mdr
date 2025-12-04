import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const AndroidAppDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Android App Development"
                subtitle="Mobile App Solutions"
                description="Native Android app development services. Build powerful, feature-rich Android applications for your business."
                overview="Android is the most popular mobile operating system globally. Our Android app development services help you create native Android applications that are fast, secure, and provide excellent user experience. We build apps that leverage Android's full potential."
                stats={[
                    { number: "40+", label: "Android Apps" },
                    { number: "10+", label: "Android Developers" },
                    { number: "8+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Native Android Development",
                        description: "Build native Android apps using Kotlin and Java."
                    },
                    {
                        title: "Material Design",
                        description: "Implement Google's Material Design for modern UI/UX."
                    },
                    {
                        title: "API Integration",
                        description: "Integrate with REST APIs, GraphQL, and third-party services."
                    },
                    {
                        title: "Push Notifications",
                        description: "Implement push notifications for user engagement."
                    },
                    {
                        title: "Offline Functionality",
                        description: "Build apps that work offline with local data storage."
                    },
                    {
                        title: "Google Play Publishing",
                        description: "Help publish your app on Google Play Store."
                    }
                ]}
                benefits={[
                    "Native performance",
                    "Access to Android features",
                    "Better user experience",
                    "Scalable architecture",
                    "Secure applications",
                    "Expert Android developers",
                    "Proven track record"
                ]}
                technologies={[
                    "Kotlin", "Java", "Android SDK", "Firebase", "REST API", "Room Database", "Retrofit"
                ]}
                process={[
                    {
                        title: "App Planning",
                        description: "Plan app features, architecture, and Android-specific requirements."
                    },
                    {
                        title: "UI/UX Design",
                        description: "Design Android app UI following Material Design guidelines."
                    },
                    {
                        title: "Development",
                        description: "Develop native Android app with custom features."
                    },
                    {
                        title: "Testing",
                        description: "Test app on various Android devices and versions."
                    },
                    {
                        title: "Optimization",
                        description: "Optimize app performance and battery usage."
                    },
                    {
                        title: "Publishing & Support",
                        description: "Publish on Google Play and provide ongoing support."
                    }
                ]}
                relatedServices={[
                    { title: "iPhone App Development", path: "/services/iphone-app-development", description: "iOS apps" },
                    { title: "Flutter App Development", path: "/services/flutter-app-development", description: "Cross-platform" },
                    { title: "ReactJS Development", path: "/services/reactjs-development", description: "React Native" }
                ]}
            />
            <CTA />
        </>
    );
};

export default AndroidAppDevelopment;

