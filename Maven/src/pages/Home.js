import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiPlay, FiStar, FiTrendingUp, FiShield, FiZap, FiUsers, FiGlobe, FiAward, FiTarget } from 'react-icons/fi';
import { FaRocket, FaBrain, FaGraduationCap, FaBriefcase, FaHandshake, FaChartLine, FaUserTie, FaGlobe as FaGlobeIcon } from 'react-icons/fa';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  
  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 0;
    height: auto;
    display: block;
    align-items: flex-start;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 0, 102, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(0, 102, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 0;
    margin: 0;
    align-items: flex-start;
    grid-template-columns: 1fr;
  }
  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 0;
    margin: 0;
    align-items: flex-start;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    color: white;
    
    @media (max-width: 768px) {
      margin-bottom: 0;
    }
    
    span {
      color: white;
    }
  }
  p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0;
  }
`;

const PrimaryButton = styled(Link)`
  background: var(--gradient-primary);
  color: var(--background);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-glow);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: var(--text-primary);
  padding: 1rem 2rem;
  border: 2px solid var(--border);
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: var(--primary);
    color: var(--primary);
    box-shadow: var(--shadow-glow);
  }
`;

const FloatingCardsSection = styled.section`
  position: relative;
  height: 500px;
  width: 100%;
  min-width: 300px;
  background: radial-gradient(circle at 50% 50%, rgba(0,255,136,0.04) 0%, transparent 80%);
  overflow: visible;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const AnimatedCard = styled(motion.div)`
  position: absolute;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: 18px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  width: 240px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  transition: box-shadow 0.4s cubic-bezier(.4,2,.6,1), border-color 0.3s;
  will-change: transform, box-shadow;
  
  @media (max-width: 768px) {
    width: 200px;
    padding: 1.5rem 1rem 1rem 1rem;
  }
  
  @media (max-width: 480px) {
    width: 180px;
    padding: 1.2rem 0.8rem 0.8rem 0.8rem;
  }
  
  &.crash {
    box-shadow: 0 0 40px 10px var(--secondary), 0 0 0 0 var(--primary);
    border-color: var(--secondary);
    animation: shake 0.3s linear;
  }
  @keyframes shake {
    0% { transform: translate(0, 0) rotate(0deg); }
    20% { transform: translate(-8px, 2px) rotate(-2deg); }
    40% { transform: translate(8px, -2px) rotate(2deg); }
    60% { transform: translate(-4px, 2px) rotate(-1deg); }
    80% { transform: translate(4px, -2px) rotate(1deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
`;

const AnimatedCardIcon = styled.div`
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }
`;

const AnimatedCardTitle = styled.h4`
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }
`;

const AnimatedCardText = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.3;
  }
`;

const FeaturesSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const WhySection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--surface) 0%, var(--background) 100%);
  
  @media (max-width: 768px) {
    padding: 0;
    margin-top: 0;
  }
`;

const WhyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin: 0;
    padding: 0 1rem;
    margin-top: 0;
  }
`;

const WhyHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const WhySubheading = styled.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
`;

const WhyCard = styled.div`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  box-shadow: 0 6px 24px rgba(0,0,0,0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s, border-color 0.3s;
  &:hover {
    box-shadow: 0 0 32px 0 var(--primary), 0 6px 24px rgba(0,0,0,0.18);
    border-color: var(--primary);
  }
`;

const WhyIcon = styled.div`
  width: 54px;
  height: 54px;
  background: var(--gradient-primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 1.2rem;
`;

const WhyTitle = styled.h4`
  color: var(--text-primary);
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const WhyText = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.5;
`;

const floatingCards = [
  {
    icon: <FaGraduationCap />,
    title: 'Skill Development',
    text: 'Industry-focused training for job-ready skills.'
  },
  {
    icon: <FaUserTie />,
    title: 'Expert Mentorship',
    text: 'Personalized guidance from industry professionals.'
  },
  {
    icon: <FaBriefcase />,
    title: 'Job Placement',
    text: 'Direct connections to global employment opportunities.'
  },
  {
    icon: <FaGlobeIcon />,
    title: 'Global Exposure',
    text: 'Opportunities and networking on a worldwide scale.'
  }
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const crackSVG = (
  <svg width="60" height="60" viewBox="0 0 60 60" style={{position:'absolute',top:10,left:90,pointerEvents:'none'}}>
    <polyline points="30,0 30,60" stroke="#ff0066" strokeWidth="3" />
    <polyline points="30,30 40,40 30,50 20,40 30,30" stroke="#00ff88" strokeWidth="2" fill="none" />
  </svg>
);

const FloatingCardsAnimated = () => {
  const CARD_COUNT = 4;
  const COLORS = [
    '0 0 40px 10px #ff0066', // red
    '0 0 40px 10px #ffe600', // yellow
    '0 0 40px 10px #00ff88', // green
    '0 0 40px 10px #0066ff', // blue
    '0 0 40px 10px #a259ff', // purple
    '0 0 40px 10px #ff6600', // orange
  ];
  const [positions, setPositions] = React.useState([
    { x: 40, y: 40, dx: 1.2, dy: 1.1 },
    { x: 350, y: 120, dx: -1.1, dy: 1.3 },
    { x: 600, y: 220, dx: 1.0, dy: -1.2 },
    { x: 200, y: 200, dx: 1.3, dy: -1.0 }
  ]);
  const [activeIdx, setActiveIdx] = React.useState(0);
  
  // Responsive bounds and card sizes
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;
  
  const bounds = {
    width: isSmallMobile ? 260 : isMobile ? 280 : 700,
    height: isSmallMobile ? 350 : isMobile ? 400 : 500
  };
  
  const cardSize = {
    w: isSmallMobile ? 180 : isMobile ? 200 : 240,
    h: isSmallMobile ? 120 : isMobile ? 130 : 140
  };

  // Floating movement
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPositions(prev => {
        return prev.map((pos) => {
          let nx = pos.x + pos.dx * (isMobile ? 0.5 : 0.7); // Slower movement on mobile
          let ny = pos.y + pos.dy * (isMobile ? 0.5 : 0.7);
          let ndx = pos.dx;
          let ndy = pos.dy;
          // Bounce off walls
          if (nx < 0 || nx > bounds.width - cardSize.w) ndx = -ndx;
          if (ny < 0 || ny > bounds.height - cardSize.h) ndy = -ndy;
          return { x: Math.max(0, Math.min(nx, bounds.width - cardSize.w)), y: Math.max(0, Math.min(ny, bounds.height - cardSize.h)), dx: ndx, dy: ndy };
        });
      });
    }, isMobile ? 50 : 24); // Slower updates on mobile for better performance
    return () => clearInterval(interval);
  }, [bounds, cardSize, isMobile]);

  // Color-cycling shadow effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(idx => (idx + 1) % CARD_COUNT);
    }, 900);
    return () => clearInterval(timer);
  }, []);

  // Helper to get shadow for each card (active only)
  function getShadow(idx) {
    return activeIdx === idx
      ? `${COLORS[activeIdx % COLORS.length]}, 0 10px 30px rgba(0,0,0,0.4)`
      : '0 10px 30px rgba(0,0,0,0.4)';
  }

  return (
    <FloatingCardsSection>
      <div style={{ 
        position: 'relative', 
        width: bounds.width, 
        height: bounds.height, 
        margin: '0 auto',
        maxWidth: '100%',
        overflow: 'hidden'
      }}>
        {floatingCards.map((card, i) => (
          <AnimatedCard
            key={i}
            style={{
              transform: `translate(${positions[i].x}px, ${positions[i].y}px)`,
              boxShadow: getShadow(i),
              borderColor: activeIdx === i ? '#fff' : 'var(--border)'
            }}
          >
            <AnimatedCardIcon>{card.icon}</AnimatedCardIcon>
            <AnimatedCardTitle>{card.title}</AnimatedCardTitle>
            <AnimatedCardText>{card.text}</AnimatedCardText>
          </AnimatedCard>
        ))}
      </div>
    </FloatingCardsSection>
  );
};

const whyProps = [
  {
    icon: <FiUsers />,
    title: 'Industry Mentors',
    text: 'Learn from top professionals and leaders in your field.'
  },
  {
    icon: <FiGlobe />,
    title: 'Global Network',
    text: 'Connect with peers and employers worldwide for limitless opportunities.'
  },
  {
    icon: <FiTrendingUp />,
    title: 'Job Guarantee',
    text: '100% job-oriented programs with placement support.'
  },
  {
    icon: <FiZap />,
    title: 'AI-Powered Learning',
    text: 'Personalized, adaptive learning powered by advanced AI tools.'
  }
];

const HowSection = styled.section`
  padding: 5rem 0 3rem 0;
  background: var(--background);
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const HowContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;
const HowHeading = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--primary);
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const HowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
`;
const HowCard = styled.div`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s, border-color 0.3s;
  &:hover {
    box-shadow: 0 0 32px 0 var(--primary), 0 6px 24px rgba(0,0,0,0.18);
    border-color: var(--primary);
  }
`;
const HowIcon = styled.div`
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background);
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;
const HowTitle = styled.h4`
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
const HowText = styled.p`
  color: var(--text-secondary);
  font-size: 0.98rem;
`;

const howSteps = [
  {
    icon: <FiTarget />,
    title: 'Choose Your Path',
    text: 'Select from a range of skill-based, job-oriented programs.'
  },
  {
    icon: <FiAward />,
    title: 'Learn & Grow',
    text: 'Engage in hands-on learning, mentorship, and real projects.'
  },
  {
    icon: <FiTrendingUp />,
    title: 'Get Placed',
    text: 'Land your dream job with our placement support and network.'
  }
];

const TrustedSection = styled.section`
  padding: 2.5rem 0 2rem 0;
  background: var(--background);
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const TrustedContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;
const TrustedHeading = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
`;
const LogoStrip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
`;
const LogoPlaceholder = styled.div`
  width: 90px;
  height: 38px;
  background: var(--surface-light);
  border-radius: 8px;
  border: 1.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 700;
`;

const CTASection = styled.section`
  padding: 3.5rem 0;
  background: linear-gradient(90deg, #00ff88 0%, #00ccff 100%);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const CTAText = styled.h3`
  color: #000;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
`;
const CTAButton = styled(Link)`
  background: #000;
  color: #00ff88;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #00ff88;
    color: #000;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Helmet>
        <title>Maven - Futuristic Education & Career Platform</title>
        <meta name="description" content="Maven bridges education and real-world employment with skill-based training, mentorship, and global job opportunities." />
      </Helmet>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <h1>
              Transform <span>Education</span> into <br /> Career <span>Success</span>
            </h1>
            <p>
              Maven bridges the gap between academic learning and real-world employment. We empower students with industry-recognized skills, expert mentorship, and direct job placement opportunities to unlock their full career potential.
            </p>
            <HeroButtons>
              <PrimaryButton to="/courses">
                Explore Courses <FiArrowRight />
              </PrimaryButton>
              <SecondaryButton>
                <FiPlay /> Watch Success Stories
              </SecondaryButton>
            </HeroButtons>
          </HeroText>
          {window.innerWidth > 768 && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              minHeight: 500
            }}>
              <FloatingCardsAnimated />
            </div>
          )}
        </HeroContent>
      </HeroSection>
      <WhySection>
        <WhyContainer>
          <WhyHeading>Why Choose Maven?</WhyHeading>
          <WhySubheading>
            Unlock your potential with a platform designed for real-world success. Experience the future of education and career growth.
          </WhySubheading>
          <WhyGrid>
            {whyProps.map((item, i) => (
              <WhyCard key={i}>
                <WhyIcon>{item.icon}</WhyIcon>
                <WhyTitle>{item.title}</WhyTitle>
                <WhyText>{item.text}</WhyText>
              </WhyCard>
            ))}
          </WhyGrid>
        </WhyContainer>
      </WhySection>
      <HowSection>
        <HowContainer>
          <HowHeading>How It Works</HowHeading>
          <HowGrid>
            {howSteps.map((step, i) => (
              <HowCard key={i}>
                <HowIcon>{step.icon}</HowIcon>
                <HowTitle>{step.title}</HowTitle>
                <HowText>{step.text}</HowText>
              </HowCard>
            ))}
          </HowGrid>
        </HowContainer>
      </HowSection>
      <TrustedSection>
        <TrustedContainer>
          <TrustedHeading>Trusted by leading companies and institutions</TrustedHeading>
          <LogoStrip>
            <LogoPlaceholder>LOGO 1</LogoPlaceholder>
            <LogoPlaceholder>LOGO 2</LogoPlaceholder>
            <LogoPlaceholder>LOGO 3</LogoPlaceholder>
            <LogoPlaceholder>LOGO 4</LogoPlaceholder>
            <LogoPlaceholder>LOGO 5</LogoPlaceholder>
          </LogoStrip>
        </TrustedContainer>
      </TrustedSection>
      <CTASection>
        <CTAText>Ready to transform your future with Maven?</CTAText>
        <CTAButton to="/courses">Get Started</CTAButton>
      </CTASection>
      <FeaturesSection>
        <SectionContainer>
          {/* ...rest of your home page content... */}
        </SectionContainer>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home; 