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
                src="/images/logo.jpg" 
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
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
            <a href="#donate" className="donate-btn">Donate Now</a>
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
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/programs" onClick={() => setIsMenuOpen(false)}>Programs</Link>
            <Link to="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="#donate" className="donate-btn" onClick={() => setIsMenuOpen(false)}>Donate Now</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;