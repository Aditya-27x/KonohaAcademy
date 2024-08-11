import React from 'react';
import '/src/App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Konoha Academy. All rights reserved.</p>
                <nav>
                    <ul>
                        <li><a href="#privacy-policy">About Konoha Academy</a></li>
                        <li><a href="#privacy-policy">Privacy Policy</a></li>
                        <li><a href="#terms-of-service">Terms of Service</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
