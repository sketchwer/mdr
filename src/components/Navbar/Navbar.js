import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const handleMouseEnter = (dropdownName) => {
        setActiveDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        // Small delay to allow moving to dropdown
        setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    return (
        <>
            {/* Main Navbar */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-background"></div>
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="logo">
                            <img src="/MES-Logo.jpg" alt="Macro Encoder Software Private Limited" className="logo-image" />
                        </Link>
                        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                            <li>
                                <Link to="/" className={isActive('/') ? 'active' : ''}>
                                    <span className="nav-link-text">HOME</span>
                                    <div className="nav-link-underline"></div>
                                </Link>
                            </li>
                            <li 
                                className={`nav-item-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter('services')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div 
                                    className={`nav-link-dropdown ${isActive('/services') ? 'active' : ''}`}
                                    onClick={() => toggleDropdown('services')}
                                >
                                    <span className="nav-link-text">SERVICES</span>
                                    <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="nav-link-underline"></div>
                                </div>
                                <div 
                                    className={`services-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('services')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="dropdown-simple-menu">
                                        <Link to="/services/zoho-solutions" className="dropdown-menu-item">
                                            <span className="menu-item-text">Zoho Solutions</span>
                                            <svg className="menu-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </Link>
                                        <Link to="/services/ai-automation" className="dropdown-menu-item">
                                            <span className="menu-item-text">AI & Automation</span>
                                            <svg className="menu-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </Link>
                                        <Link to="/services/software-development" className="dropdown-menu-item">
                                            <span className="menu-item-text">Software Development</span>
                                            <svg className="menu-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li 
                                className={`nav-item-dropdown ${activeDropdown === 'industries' ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter('industries')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div 
                                    className={`nav-link-dropdown ${isActive('/industries') ? 'active' : ''}`}
                                    onClick={() => toggleDropdown('industries')}
                                >
                                    <span className="nav-link-text">INDUSTRIES</span>
                                    <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="nav-link-underline"></div>
                                </div>
                                <div 
                                    className={`industries-dropdown ${activeDropdown === 'industries' ? 'active' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('industries')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="dropdown-content">
                                        <div className="dropdown-section">
                                            <ul className="industries-list">
                                                <li><Link to="/industries/travel"><span className="dropdown-icon">→</span>Travel & Hospitality</Link></li>
                                                <li><Link to="/industries/event-management"><span className="dropdown-icon">→</span>Media & Entertainment</Link></li>
                                                <li><Link to="/industries/groceries"><span className="dropdown-icon">→</span>Logistics</Link></li>
                                                <li><Link to="/industries/architecture"><span className="dropdown-icon">→</span>Energy & Utilities</Link></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-section">
                                            <ul className="industries-list">
                                                <li><Link to="/industries/real-estate"><span className="dropdown-icon">→</span>Mortgage & Lending</Link></li>
                                                <li><Link to="/industries/groceries"><span className="dropdown-icon">→</span>Food & Beverage</Link></li>
                                                <li><Link to="/industries/fashion"><span className="dropdown-icon">→</span>Automotive</Link></li>
                                                <li><Link to="/industries/event-management"><span className="dropdown-icon">→</span>Sports</Link></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-section">
                                            <ul className="industries-list">
                                                <li><Link to="/industries/real-estate"><span className="dropdown-icon">→</span>Finance</Link></li>
                                                <li><Link to="/industries/real-estate"><span className="dropdown-icon">→</span>Banking & Payment</Link></li>
                                                <li><Link to="/industries/travel"><span className="dropdown-icon">→</span>Aviation</Link></li>
                                                <li><Link to="/industries/architecture"><span className="dropdown-icon">→</span>Construction</Link></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-section">
                                            <ul className="industries-list">
                                                <li><Link to="/industries/education"><span className="dropdown-icon">→</span>E-Learning & Education</Link></li>
                                                <li><Link to="/industries/architecture"><span className="dropdown-icon">→</span>Oil & Gas</Link></li>
                                                <li><Link to="/industries/healthcare"><span className="dropdown-icon">→</span>Healthcare</Link></li>
                                                <li><Link to="/industries/groceries"><span className="dropdown-icon">→</span>Retail/FMCG</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="/case-studies" className={isActive('/case-studies') ? 'active' : ''}>
                                    <span className="nav-link-text">CASE STUDIES</span>
                                    <div className="nav-link-underline"></div>
                                </Link>
                            </li>
                          
                            <li>
                                <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>
                                    <span className="nav-link-text">BLOG</span>
                                    <div className="nav-link-underline"></div>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                                    <span className="nav-link-text">BOOK A CALL</span>
                                    <div className="nav-link-underline"></div>
                                </Link>
                            </li> */}
                        </ul>
<img
    src="/zoho.png"
    alt="Contact"
    className="image"
  />
                        <div className="contact-button-wrapper">


                            <Link to="/contact" className="contact-us-button">
                                CONTACT US
                            </Link>
                        </div>
                        <button className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
