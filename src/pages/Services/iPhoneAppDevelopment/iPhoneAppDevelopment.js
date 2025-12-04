import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const iPhoneAppDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="iPhone App Development"
                subtitle="Mobile App Solutions"
                description="Native iOS app development services. Build beautiful, high-performance iPhone and iPad applications."
                overview="iOS apps are known for their quality, security, and user experience. Our iPhone app development services help you create native iOS applications that leverage Apple's latest technologies and provide exceptional user experience. We build apps that stand out in the App Store."
                stats={[
                    { number: "35+", label: "iOS Apps" },
                    { number: "8+", label: "iOS Developers" },
                    { number: "8+", label: "Years Experience" }
                ]}
                features={[
                    {
                        title: "Native iOS Development",
                        description: "Build native iOS apps using Swift and Objective-C."
                    },
                    {
                        title: "iOS Design Guidelines",
                        description: "Follow Apple's Human Interface Guidelines for best UX."
                    },
                    {
                        title: "iOS Features Integration",
                        description: "Integrate iOS features like Face ID, Apple Pay, and more."
                    },
                    {
                        title: "API Integration",
                        description: "Integrate with REST APIs, GraphQL, and third-party services."
                    },
                    {
                        title: "App Store Optimization",
                        description: "Optimize your app for App Store visibility and downloads."
                    },
                    {
                        title: "App Store Publishing",
                        description: "Help publish your app on the Apple App Store."
                    }
                ]}
                benefits={[
                    "Native iOS performance",
                    "Access to iOS features",
                    "Premium user experience",
                    "Secure applications",
                    "App Store optimization",
                    "Expert iOS developers",
                    "Proven track record"
                ]}
                technologies={[
                    "Swift", "Objective-C", "iOS SDK", "Xcode", "Core Data", "REST API", "Firebase"
                ]}
                process={[
                    {
                        title: "App Planning",
                        description: "Plan app features, architecture, and iOS-specific requirements."
                    },
                    {
                        title: "UI/UX Design",
                        description: "Design iOS app UI following Apple's design guidelines."
                    },
                    {
                        title: "Development",
                        description: "Develop native iOS app with custom features."
                    },
                    {
                        title: "Testing",
                        description: "Test app on various iOS devices and versions."
                    },
                    {
                        title: "App Store Submission",
                        description: "Prepare and submit app to Apple App Store."
                    },
                    {
                        title: "Support & Updates",
                        description: "Provide ongoing support and app updates."
                    }
                ]}
                relatedServices={[
                    { title: "Android App Development", path: "/services/android-app-development", description: "Android apps" },
                    { title: "Flutter App Development", path: "/services/flutter-app-development", description: "Cross-platform" },
                    { title: "ReactJS Development", path: "/services/reactjs-development", description: "React Native" }
                ]}
            />
            <CTA />
        </>
    );
};

export default iPhoneAppDevelopment;

