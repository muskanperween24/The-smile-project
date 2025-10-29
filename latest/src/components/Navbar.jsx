import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <Link to="/" className="logo-link">
              <img 
                src="/logo.jpg" 
                alt="The Project Smile Logo" 
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.paddingLeft = '0';
                }}
              />
              <span className="logo-text">The Project Smile</span>
            </Link>
          </div>

          <div className="nav-menu desktop-menu">
            <Link to="/">Home</Link>
            {/* For now using anchor links, friends can change to <Link to="/about"> when About component is ready */}
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#team">Team</a>
            <a href="#get-involved">Donate</a>
            <a href="#contact" className="contact-btn">Contact</a>
          </div>

          <div className="mobile-menu-btn">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            {/* Friends can change these to <Link to="/about"> etc. when components are ready */}
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#programs" onClick={() => setIsMenuOpen(false)}>Programs</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#get-involved" onClick={() => setIsMenuOpen(false)}>Donate</a>
            <a href="#contact" className="contact-btn" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;