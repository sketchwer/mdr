import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMenu, FiX, FiChevronDown, FiUser, FiGlobe, FiArrowRight } from 'react-icons/fi';
import { FaDiscord, FaTwitter, FaLinkedin } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
  
  ${props => props.scrolled && `
    background: rgba(0, 0, 0, 0.98);
    box-shadow: 0 4px 20px rgba(0, 255, 136, 0.1);
  `}
`;

const NavContainer = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 70px;
  }
`;

const Logo = styled(Link)`
  font-family: 'Orbitron', monospace;
  font-size: 1.8rem;
  font-weight: 900;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  
  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  
  &:hover {
    color: var(--primary);
    background: rgba(0, 255, 136, 0.1);
  }
  
  &.active {
    color: var(--primary);
    background: rgba(0, 255, 136, 0.1);
  }
`;

const CollaboratorsButton = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%);
  border: 2px solid rgba(0, 255, 136, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ff88 0%, #00ccff 50%, #ff0066 100%);
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    color: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 255, 136, 0.3);
    border-color: rgba(0, 255, 136, 0.6);
    
    &::before {
      opacity: 1;
    }
  }
  
  &.active {
    color: var(--primary);
    background: linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 204, 255, 0.2) 100%);
    border-color: rgba(0, 255, 136, 0.6);
    box-shadow: 0 8px 25px rgba(0, 255, 136, 0.3);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 280px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 20px;
    width: 16px;
    height: 16px;
    background: var(--surface);
    border-left: 1px solid var(--border);
    border-top: 1px solid var(--border);
    transform: rotate(45deg);
  }
  
  @media (max-width: 768px) {
    min-width: 240px;
    padding: 1rem;
  }
`;

const DropdownSection = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DropdownTitle = styled.h3`
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
`;

const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const DropdownItem = styled.li`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  
  &:hover {
    color: var(--primary);
    background: rgba(0, 255, 136, 0.08);
    transform: translateX(4px);
    
    .arrow-icon {
      opacity: 1;
      transform: translateX(4px);
    }
  }
`;

const ArrowIcon = styled(FiArrowRight)`
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 0.8rem;
`;

const MegaMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 700px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 20px;
    width: 16px;
    height: 16px;
    background: var(--surface);
    border-left: 1px solid var(--border);
    border-top: 1px solid var(--border);
    transform: rotate(45deg);
  }
  
  @media (max-width: 768px) {
    width: 350px;
    padding: 1.5rem;
  }
`;

const MegaMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const MegaMenuSection = styled.div`
  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--text-secondary);
        text-decoration: none;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        font-size: 0.95rem;
        
        &:hover {
          color: var(--primary);
          background: rgba(0, 255, 136, 0.08);
          transform: translateX(4px);
          
          .arrow-icon {
            opacity: 1;
            transform: translateX(4px);
          }
        }
      }
    }
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-left: 1rem;
  
  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const SearchInput = styled.input`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 25px;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  color: var(--text-primary);
  width: 200px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
    width: 300px;
  }
  
  @media (max-width: 768px) {
    width: 150px;
    
    &:focus {
      width: 200px;
    }
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-top: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1001;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
`;

const SearchResult = styled.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: var(--surface-light);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--background);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-y: auto;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileNavItem = styled.div`
  a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 1rem 0;
    display: block;
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--surface-light);
      color: var(--primary);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    color: var(--text-muted);
    font-size: 1.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      // Simulate search results
      const results = [
        { id: 1, title: 'About Us', url: '/about' },
        { id: 2, title: 'Our Team', url: '/team' },
        { id: 3, title: 'AI & ML Solutions', url: '/ai-ml' },
        { id: 4, title: 'Cloud Services', url: '/cloud-services' },
        { id: 5, title: 'Digital Transformation', url: '/digital-transformation' },
        { id: 6, title: 'Security Solutions', url: '/security' },
        { id: 7, title: 'DevOps Services', url: '/devops' },
        { id: 8, title: 'Data Analytics', url: '/data-analytics' },
        { id: 9, title: 'Documentation', url: '/documentation' },
        { id: 10, title: 'Case Studies', url: '/case-studies' },
        { id: 11, title: 'Whitepapers', url: '/whitepapers' },
        { id: 12, title: 'Blog', url: '/blog' },
        { id: 13, title: 'Support', url: '/support' },
        { id: 14, title: 'Contact Us', url: '/contact' },
      ].filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    {
      title: 'Company',
      path: '/about',
      dropdown: [
        { title: 'About Us', path: '/about' },
        { title: 'Our Team', path: '/team' },
        { title: 'Careers', path: '/careers' },
        { title: 'News', path: '/news' },
        { title: 'Events', path: '/events' },
      ],
    },
    {
      title: 'Solutions',
      path: '/solutions',
      dropdown: [
        { title: 'AI & ML', path: '/ai-ml' },
        { title: 'Cloud Services', path: '/cloud-services' },
        { title: 'Digital Transformation', path: '/digital-transformation' },
        { title: 'Security', path: '/security' },
        { title: 'DevOps', path: '/devops' },
      ],
    },
    {
      title: 'Services',
      path: '/services',
      dropdown: [
        { title: 'All Services', path: '/services' },
        { title: 'Consulting', path: '/services/consulting' },
        { title: 'Development', path: '/services/development' },
        { title: 'Support', path: '/services/support' },
        { title: 'Training', path: '/services/training' },
        { title: 'Maintenance', path: '/services/maintenance' },
      ],
    },


    { title: 'Contact', path: '/contact' },
    { title: 'Our Collaborators', path: '/collaborators', isButton: true },
  ];

  return (
    <HeaderContainer scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">MAVEN</Logo>
        
        <NavMenu>
          {menuItems.map((item, index) => (
            <NavItem key={index}>
              {item.isButton ? (
                <CollaboratorsButton 
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.title}
                </CollaboratorsButton>
              ) : (
                <>
                  <NavLink 
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    {item.title}
                    {item.dropdown && <FiChevronDown />}
                  </NavLink>
                  {item.dropdown && (
                    <DropdownMenu className="dropdown-menu">
                      <DropdownSection>
                        <DropdownTitle>{item.title}</DropdownTitle>
                        <DropdownList>
                          {item.dropdown.map((drop, i) => (
                            <DropdownItem key={i}>
                              <DropdownLink to={drop.path}>
                                {drop.title}
                                <ArrowIcon className="arrow-icon" />
                              </DropdownLink>
                            </DropdownItem>
                          ))}
                        </DropdownList>
                      </DropdownSection>
                    </DropdownMenu>
                  )}
                </>
              )}
            </NavItem>
          ))}
        </NavMenu>
        
        <SearchContainer ref={searchRef}>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {searchResults.length > 0 && (
            <SearchResults>
              {searchResults.map((result) => (
                <SearchResult key={result.id}>
                  <Link to={result.url}>{result.title}</Link>
                </SearchResult>
              ))}
            </SearchResults>
          )}
        </SearchContainer>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </NavContainer>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenuHeader>
              <Logo to="/">MAVEN</Logo>
              <MobileMenuButton onClick={() => setMobileMenuOpen(false)}>
                <FiX />
              </MobileMenuButton>
            </MobileMenuHeader>
            
            {menuItems.map((item, index) => (
              <MobileNavItem key={index}>
                {item.isButton ? (
                  <CollaboratorsButton to={item.path}>{item.title}</CollaboratorsButton>
                ) : (
                  <Link to={item.path}>{item.title}</Link>
                )}
              </MobileNavItem>
            ))}
            
            <SocialLinks>
              <a href="#"><FaDiscord /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </SocialLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 