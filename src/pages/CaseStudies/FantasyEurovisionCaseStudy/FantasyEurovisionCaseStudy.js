import React from 'react';
import CaseStudyDetail from '../../../components/CaseStudyDetail/CaseStudyDetail';
import CTA from '../../../components/CTA/CTA';

const FantasyEurovisionCaseStudy = () => {
    return (
        <>
            <CaseStudyDetail
                title="Driving Fan Engagement Through Eurovision's Premier Fantasy Prediction Game"
                subtitle="Discover how we created an engaging fantasy prediction game that enhanced fan experience during the Eurovision Song Contest."
                clientName="Fantasy Eurovision"
                clientDescription="EUROVISION SONG CONTEST is one of the world's largest music competitions, watched by millions globally. The fantasy prediction game allows fans to predict winners, create their own leaderboards, and compete with friends during the contest."
                website="https://eurovision.tv"
                location="Europe"
                industry="Fantasy Gaming"
                duration="3 months"
                image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                challenges={[
                    {
                        title: "Real-time Updates & Scoring",
                        description: "Creating a system that can handle real-time updates during live broadcasts, automatically calculate scores based on predictions, and update leaderboards instantly as results are announced."
                    },
                    {
                        title: "High Traffic Management",
                        description: "Building a platform capable of handling millions of concurrent users during peak viewing times, ensuring the system remains stable and responsive even under extreme load."
                    },
                    {
                        title: "User Engagement & Gamification",
                        description: "Designing engaging game mechanics that keep users active throughout the contest, including social features, achievements, and competitive elements that encourage participation."
                    }
                ]}
                solutions={[
                    {
                        title: "WordPress Custom Development",
                        description: "Developed a custom WordPress solution with advanced real-time features, including live scoring algorithms, automatic leaderboard updates, and seamless integration with Eurovision's official data feeds."
                    },
                    {
                        title: "Scalable Architecture",
                        description: "Implemented a scalable architecture using caching strategies, CDN integration, and optimized database queries to handle high traffic volumes during peak times without performance degradation."
                    },
                    {
                        title: "Gamification Features",
                        description: "Built comprehensive gamification features including user profiles, friend challenges, achievement badges, and social sharing capabilities that increased user engagement and retention."
                    }
                ]}
                results={[
                    "Launched successfully during Eurovision 2024 with 500,000+ active users",
                    "Achieved 99.9% uptime during peak viewing hours",
                    "Increased user engagement by 400% compared to previous year",
                    "Reduced server response time to under 200ms",
                    "Generated 1M+ predictions during the contest period",
                    "Achieved 4.8/5 user rating for game experience"
                ]}
                technologies={['WordPress', 'PHP', 'MySQL', 'JavaScript', 'REST API']}
                whatWeDid={[
                    'Custom WordPress Development',
                    'Real-time Scoring System',
                    'High-traffic Architecture',
                    'Gamification Features',
                    'Performance Optimization',
                    'Social Integration'
                ]}
            />
            <CTA />
        </>
    );
};

export default FantasyEurovisionCaseStudy;

