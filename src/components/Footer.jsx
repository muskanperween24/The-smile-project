import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-grid">
          {/* Organization Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/logo.jpg" alt="The Project Smile Logo" className="footer-logo-img" />
              <h3>The Project Smile</h3>
            </div>
            <p>
              Spreading happiness and positivity through simple acts of kindness. 
              Join us in making the world a brighter place.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/17GWnGkQV2/" target="_blank" rel="noopener noreferrer" title="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/join">Join Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul>
              <li><Link to="/programs">View All Programs</Link></li>
              <li><Link to="/about">Our Mission</Link></li>
              <li><Link to="/team">Meet Our Team</Link></li>
              <li><Link to="/contact">Get In Touch</Link></li>
              <li><Link to="/">Learn More</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
                    <div className="footer-contact">
            <h4>Contact Info</h4>
            <br></br>
            <p>📍 Village: Dalua Hat,   P.O.: Taiyabpur,  P.S. : Pothia, District: Kishanganj, Bihar – 855117</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@smilenko.org</p>
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