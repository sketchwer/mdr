import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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

    return (
        <>
            {/* Top Contact Bar */}
            <div className={`top-contact-bar ${isScrolled ? 'hidden' : ''}`}>
                <div className="container">
                    <div className="contact-numbers">
                        <span className="contact-item">
                            <span className="region">UK</span>
                            <span className="number">+000 000 000000</span>
                        </span>
                        <span className="contact-item">
                            <span className="region">AUS</span>
                            <span className="number">+000 0 0000 0000</span>
                        </span>
                        <span className="contact-item">
                            <span className="region">US</span>
                            <span className="number">+000 000 000 0000</span>
                        </span>
                        <span className="contact-item">
                            <span className="region">IND</span>
                            <span className="number">+000 00000 00000</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-background"></div>
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="logo">
                            <img src="/MES-Logo.jpg" alt="Company Logo" className="logo-image" />
                        </Link>
                        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                            <li>
                                <Link to="/services" className={isActive('/services') ? 'active' : ''}>
                                    <span className="nav-link-text">Services</span>
                                    <div className="nav-link-underline"></div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
                                    <span className="nav-link-text">Projects</span>
                                    <div className="nav-link-underline"></div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/case-studies" className={isActive('/case-studies') ? 'active' : ''}>
                                    <span className="nav-link-text">Case Studies</span>
                                    <div className="nav-link-underline"></div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/industries" className={isActive('/industries') ? 'active' : ''}>
                                    <span className="nav-link-text">Industries</span>
                                    <div className="nav-link-underline"></div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                                    <span className="nav-link-text">About</span>
                                    <div className="nav-link-underline"></div>
                                </Link>
                            </li>
                        </ul>
                        <div className="nav-actions">
                            <button className="menu-icon-btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                            <button className="search-btn">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <Link to="/contact" className={`contact-link ${isActive('/contact') ? 'active' : ''}`}>
                                <span className="contact-link-text">Contact Us</span>
                                <div className="contact-link-shine"></div>
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
