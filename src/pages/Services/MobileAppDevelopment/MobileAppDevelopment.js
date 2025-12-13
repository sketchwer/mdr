import React from 'react';
import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import CTA from '../../../components/CTA/CTA';

const MobileAppDevelopment = () => {
    return (
        <>
            <ServiceDetail
                title="Mobile App Development (Android / iOS / Flutter)"
                subtitle="Software Development"
                description="Build powerful native and cross-platform mobile applications for Android, iOS, and Flutter. Engaging mobile experiences that connect with your customers."
                overview="Mobile App Development services create native and cross-platform mobile applications for Android and iOS platforms. Whether you choose native development for platform-specific features or Flutter for cross-platform efficiency, we deliver high-quality mobile apps with excellent performance, beautiful UI, and seamless user experiences. From concept to app store deployment, we handle the entire mobile app development lifecycle."
                features={[
                    {
                        title: "Native Android Apps",
                        description: "Native Android applications using Kotlin and Java with Material Design and modern Android architecture."
                    },
                    {
                        title: "Native iOS Apps",
                        description: "Native iOS applications using Swift and SwiftUI with Apple's design guidelines and best practices."
                    },
                    {
                        title: "Flutter Cross-Platform",
                        description: "Cross-platform mobile apps with Flutter for shared codebase and native performance on both platforms."
                    },
                    {
                        title: "App UI/UX Design",
                        description: "Intuitive mobile interfaces with smooth animations, gestures, and platform-specific design patterns."
                    },
                    {
                        title: "Backend Integration",
                        description: "Seamless integration with REST APIs, GraphQL, real-time features, and cloud services."
                    },
                    {
                        title: "App Store Deployment",
                        description: "Complete app store submission process for Google Play Store and Apple App Store."
                    }
                ]}
                benefits={[
                    "Reach customers on their preferred devices",
                    "Enhanced user engagement and retention",
                    "Cross-platform development with Flutter",
                    "Native performance and platform features",
                    "Scalable architecture for future growth",
                    "Regular updates and maintenance support"
                ]}
                technologies={['Flutter', 'Dart', 'React Native', 'Kotlin', 'Java', 'Swift', 'SwiftUI', 'Firebase', 'REST APIs', 'GraphQL']}
                stats={[
                    { number: "150+", label: "Mobile Apps" },
                    { number: "4.8/5", label: "Average Rating" },
                    { number: "500K+", label: "App Downloads" }
                ]}
                process={[
                    { title: "Requirements & Planning", description: "Define app features, target platforms, and technical requirements" },
                    { title: "UI/UX Design", description: "Design mobile interfaces, user flows, and interactive prototypes" },
                    { title: "Development", description: "Develop mobile apps with native or cross-platform technologies" },
                    { title: "Testing", description: "Comprehensive testing on multiple devices, OS versions, and scenarios" },
                    { title: "App Store Submission", description: "Prepare and submit apps to Google Play and Apple App Store" },
                    { title: "Launch & Support", description: "App launch, marketing support, and ongoing updates" }
                ]}
                relatedServices={[
                    { title: "Flutter App Development", path: "/services/flutter-app-development", description: "Flutter applications" },
                    { title: "Android App Development", path: "/services/android-app-development", description: "Android apps" },
                    { title: "ReactJS Development", path: "/services/reactjs-frontend", description: "React Native apps" }
                ]}
            />
            <CTA />
        </>
    );
};

export default MobileAppDevelopment;

