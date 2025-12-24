import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiCheck, FiPlay, FiDownload, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';
import { FaCogs, FaRocket, FaCog, FaEye, FaHandshake, FaBrain } from 'react-icons/fa';

const DevOpsContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`;

const HeroSection = styled.section`
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  
  h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 900;
    margin-bottom: 2rem;
    color: white;
    
    span {
      color: white;
    }
  }
  
  p {
    font-size: 1.3rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.7;
  }
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ServiceCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: var(--gradient-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--background);
  font-size: 1.8rem;
`;

const ServiceTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  
  svg {
    color: var(--primary);
    font-size: 0.8rem;
  }
`;

const SolutionsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
`;

const SolutionCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SolutionIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: var(--background);
  font-size: 2rem;
`;

const ProcessSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -1rem;
    width: 2rem;
    height: 2px;
    background: var(--gradient-primary);
    transform: translateY(-50%);
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--background);
  font-size: 1.5rem;
  font-weight: 900;
`;

const StepTitle = styled.h4`
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StepDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    color: var(--background);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  background: var(--background);
  color: var(--primary);
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const DevOps = () => {
  const services = [
    {
      icon: <FaCogs />,
      title: 'CI/CD Pipeline Development',
      description: 'Automated continuous integration and deployment pipelines for faster delivery.',
      features: [
        'Pipeline automation',
        'Build optimization',
        'Deployment automation',
        'Quality gates'
      ]
    },
    {
      icon: <FaRocket />,
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code for consistency and scalability.',
      features: [
        'Terraform implementation',
        'CloudFormation templates',
        'Configuration management',
        'Infrastructure automation'
      ]
    },
    {
      icon: <FaCog />,
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker solutions for scalable container management.',
      features: [
        'Kubernetes deployment',
        'Docker containerization',
        'Service mesh setup',
        'Auto-scaling configuration'
      ]
    },
    {
      icon: <FaEye />,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and logging solutions for better visibility.',
      features: [
        'Application monitoring',
        'Infrastructure monitoring',
        'Log aggregation',
        'Alert management'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'DevOps Consulting',
      description: 'Strategic guidance for DevOps transformation and best practices.',
      features: [
        'DevOps assessment',
        'Process optimization',
        'Tool selection',
        'Team training'
      ]
    },
    {
      icon: <FaBrain />,
      title: 'Site Reliability Engineering',
      description: 'SRE practices for building reliable, scalable systems.',
      features: [
        'SLO/SLI definition',
        'Error budget management',
        'Incident response',
        'Performance optimization'
      ]
    }
  ];

  const solutions = [
    {
      icon: <FaCogs />,
      title: 'End-to-End DevOps',
      description: 'Complete DevOps transformation from development to deployment.'
    },
    {
      icon: <FaRocket />,
      title: 'Cloud-Native DevOps',
      description: 'DevOps solutions optimized for cloud environments.'
    },
    {
      icon: <FaCog />,
      title: 'Managed DevOps',
      description: 'Fully managed DevOps services for your development teams.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Assessment & Planning',
      description: 'Evaluate current processes and plan DevOps transformation'
    },
    {
      number: '02',
      title: 'Tool Selection',
      description: 'Choose and implement appropriate DevOps tools and platforms'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Deploy CI/CD pipelines and automation solutions'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous improvement and performance optimization'
    }
  ];

  return (
    <DevOpsContainer>
      <Helmet>
        <title>DevOps Services - Maven</title>
        <meta name="description" content="Comprehensive DevOps services including CI/CD, infrastructure as code, monitoring, and SRE practices." />
      </Helmet>

      <HeroSection>
        <SectionContainer>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              DevOps <span>Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Accelerate your software delivery with modern DevOps practices. From CI/CD pipelines 
              to infrastructure automation, we help you build faster, more reliable systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CTAButton>
                <FiPlay />
                Watch Demo
              </CTAButton>
            </motion.div>
          </HeroContent>
          
          <HeroStats>
            {[
              { number: '90%', label: 'Faster Deployment' },
              { number: '99.9%', label: 'Uptime SLA' },
              { number: '24/7', label: 'Monitoring' },
              { number: '50+', label: 'DevOps Projects' }
            ].map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </StatCard>
            ))}
          </HeroStats>
        </SectionContainer>
      </HeroSection>

      <ServicesSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our DevOps Services</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive DevOps solutions to accelerate your software delivery pipeline
            </p>
          </motion.div>

          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, featureIndex) => (
                    <ServiceFeature key={featureIndex}>
                      <FiCheck />
                      {feature}
                    </ServiceFeature>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </SectionContainer>
      </ServicesSection>

      <SolutionsSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>DevOps Solutions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Tailored DevOps solutions for your specific development and deployment needs
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <SolutionIcon>{solution.icon}</SolutionIcon>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  {solution.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {solution.description}
                </p>
              </SolutionCard>
            ))}
          </div>
        </SectionContainer>
      </SolutionsSection>

      <ProcessSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our DevOps Process</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              A proven methodology for implementing successful DevOps practices
            </p>
          </motion.div>

          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </SectionContainer>
      </ProcessSection>

      <CTASection>
        <SectionContainer>
          <CTAContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Accelerate Your Delivery?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how DevOps can transform your software delivery and operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CTAButton>
                <FiArrowRight />
                Start Your DevOps Journey
              </CTAButton>
            </motion.div>
          </CTAContent>
        </SectionContainer>
      </CTASection>
    </DevOpsContainer>
  );
};

export default DevOps; 