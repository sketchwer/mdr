import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [positions, setPositions] = useState([
    { x: 40, y: 40, dx: 1.2, dy: 1.1 },
    { x: 350, y: 120, dx: -1.1, dy: 1.3 },
    { x: 200, y: 200, dx: 1.3, dy: -1.0 },
    { x: 500, y: 80, dx: -1.0, dy: -1.2 }
  ]);

  // Responsive bounds and card sizes (matching Maven)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const isSmallMobile = typeof window !== 'undefined' && window.innerWidth <= 480;
  
  const bounds = {
    width: isSmallMobile ? 260 : isMobile ? 280 : 700,
    height: isSmallMobile ? 350 : isMobile ? 400 : 500
  };
  
  const cardSize = {
    w: isSmallMobile ? 180 : isMobile ? 200 : 240,
    h: isSmallMobile ? 120 : isMobile ? 130 : 140
  };

  // Sequential border light effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(idx => (idx + 1) % 4);
    }, 900);
    return () => clearInterval(timer);
  }, []);

  // Floating movement - matching Maven's slow motion
  useEffect(() => {
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
          return { 
            x: Math.max(0, Math.min(nx, bounds.width - cardSize.w)), 
            y: Math.max(0, Math.min(ny, bounds.height - cardSize.h)), 
            dx: ndx, 
            dy: ndy 
          };
        });
      });
    }, isMobile ? 50 : 24); // Slower updates on mobile for better performance
    
    return () => clearInterval(interval);
  }, [bounds.width, bounds.height, cardSize.w, cardSize.h, isMobile]);

  const cards = [
    {
      title: "Cross-Industry Success",
      text: "150+ diversified solutions",
      color: "#0066ff",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Agile working models",
      text: "Customer-focused and results-driven",
      color: "#00ff88",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Globally Certified",
      text: "50+ Achievements in excellence",
      color: "#ff0066",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Innovation Driven",
      text: "Cutting-edge AI solutions & technology",
      color: "#a259ff",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-wrapper">

          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1 className="hero-heading">
              Your AI-First Technology Partner
            </h1>
            <p className="hero-subtitle">
              Empower your business with AI intelligence that fuses technology and strategy—driving innovation, efficiency, and growth with a competitive edge.
            </p>
            <button className="hero-cta-btn">
              Contact with our team
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="hero-right">
            <div className="hero-cards-wrapper">
              {cards.map((card, i) => (
                <div
                  key={`hero-card-${i}`}
                  className={`hero-card hero-card-${i + 1} ${activeIdx === i ? "hero-card-active" : ""}`}
                  style={{
                    '--card-color': card.color,
                    transform: `translate(${positions[i].x}px, ${positions[i].y}px)`,
                    width: `${cardSize.w}px`
                  }}
                >
                  <div className="hero-card-icon">{card.icon}</div>
                  <h3 className="hero-card-title">{card.title}</h3>
                  <p className="hero-card-text">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
