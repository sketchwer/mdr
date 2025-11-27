import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>What We Do</h3>
                        <ul>
                            <li><Link to="/services">Magento Development</Link></li>
                            <li><Link to="/services">WordPress Development</Link></li>
                            <li><Link to="/services">Shopify Development</Link></li>
                            <li><Link to="/services">Zoho Development</Link></li>
                            <li><Link to="/services">Ecommerce Development</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/projects">Portfolio</Link></li>
                            <li><Link to="/about">Our Team</Link></li>
                            <li><Link to="/case-studies">Case Studies</Link></li>
                            <li><Link to="/industries">Industries</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Connect</h3>
                        <ul>
                            <li>+1 (607) 524-4040</li>
                            <li>info@techpartner.com</li>
                            <li>sales@techpartner.com</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Address</h3>
                        <p>
                            2nd Floor, Tech Building<br />
                            132 Feet Ring Rd,<br />
                            Ahmedabad, Gujarat - 380015<br />
                            +91 98986 07411
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; Copyright 2025 TechPartner. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

