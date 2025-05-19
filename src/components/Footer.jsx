import React from "react";

import '../styles/Footer.css'

function Footer(){
    return (
    <>
    <footer className="footer-section">
        <div className="footer-container">
            <div className="footer-columns">
                <div className="footer-left">
                    <a href="/">Mind Haven</a>
                </div>
                <div className="footer-middle">
                    <h3>Explore</h3>
                    <a href="#features">Features</a>
                    <a href="#faq">FAQ</a>
                </div>
                <div className="footer-right">
                    <h3>Legal</h3>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms"> Terms of Service</a>
                    <a href="/cookie-policy">Cookie Policy</a>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copy">© 2025 MindHaven. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    
    </>
    )
}

export default Footer