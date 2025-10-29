import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-grid">
          {/* Organization Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="The Project Smile Logo" className="footer-logo-img" />
              <h3>The Project Smile</h3>
            </div>
            <p>
              Spreading happiness and positivity through simple acts of kindness. 
              Join us in making the world a brighter place.
            </p>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">📷</a>
              <a href="#">📌</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Our Programs</a></li>
              <li><a href="#donate">Donate</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul>
              <li><a href="#">Community Outreach</a></li>
              <li><a href="#">Education Support</a></li>
              <li><a href="#">Food Distribution</a></li>
              <li><a href="#">Health Camps</a></li>
              <li><a href="#">Skill Development</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>
                  123 Kindness Street<br/>
                  Hope City, HC 12345<br/>
                  India
                </p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <p>+91 98765 43210</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <p>info@smileproject.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div style={{textAlign: 'center', padding: '1rem'}}>
          <p>© 2025 The Project Smile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;