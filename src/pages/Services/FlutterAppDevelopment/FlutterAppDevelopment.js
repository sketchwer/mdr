import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const FlutterAppDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Flutter App Development"
                subtitle="Mobile App Solutions"
                description="Build beautiful, fast mobile apps with Flutter. Cross-platform mobile app development for iOS and Android."
                overview="Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Our Flutter app development services help you create beautiful, performant mobile apps that work seamlessly on both iOS and Android platforms."
                stats={[
                    { number: "25+", label: "Flutter Apps" },
                    { number: "2x", label: "Faster Development" },
                    { number: "100%", label: "Code Reusability" }
                ]}
                features={[
                    {
                        title: "Cross-Platform Development",
                        description: "Build apps for both iOS and Android from a single codebase."
                    },
                    {
                        title: "Custom UI/UX",
                        description: "Create beautiful, custom user interfaces with Flutter's rich widgets."
                    },
                    {
                        title: "Native Performance",
                        description: "Achieve native performance with Flutter's compiled code."
                    },
                    {
                        title: "Fast Development",
                        description: "Faster development with hot reload and single codebase."
                    },
                    {
                        title: "API Integration",
                        description: "Integrate with REST APIs, GraphQL, and third-party services."
                    },
                    {
                        title: "App Publishing",
                        description: "Help publish your app on Google Play and App Store."
                    }
                ]}
                benefits={[
                    "Single codebase for iOS and Android",
                    "Faster development time",
                    "Cost-effective solution",
                    "Native performance",
                    "Beautiful UI/UX",
                    "Hot reload for quick iterations",
                    "Expert Flutter developers"
                ]}
                technologies={[
                    "Flutter", "Dart", "Firebase", "REST API", "GraphQL", "State Management"
                ]}
                process={[
                    {
                        title: "App Planning",
                        description: "Plan app features, architecture, and user experience."
                    },
                    {
                        title: "UI/UX Design",
                        description: "Design beautiful user interfaces and user experiences."
                    },
                    {
                        title: "Development",
                        description: "Develop Flutter app with custom features and integrations."
                    },
                    {
                        title: "Testing",
                        description: "Test app functionality on both iOS and Android."
                    },
                    {
                        title: "Deployment",
                        description: "Deploy app to Google Play and App Store."
                    },
                    {
                        title: "Support & Maintenance",
                        description: "Provide ongoing support and app updates."
                    }
                ]}
                relatedServices={[
                    { title: "Android App Development", path: "/services/android-app-development", description: "Native Android" },
                    { title: "iPhone App Development", path: "/services/iphone-app-development", description: "Native iOS" },
                    { title: "ReactJS Development", path: "/services/reactjs-development", description: "React Native" }
                ]}
            />
            <CTA />
        </>
    );
};

export default FlutterAppDevelopment;

