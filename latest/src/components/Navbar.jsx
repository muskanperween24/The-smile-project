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
            <a href="#about">About</a>
            <a href="#programs">Our Program</a>
            <a href="#team">Team</a>
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
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#programs" onClick={() => setIsMenuOpen(false)}>Our Program</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#donate" className="donate-btn" onClick={() => setIsMenuOpen(false)}>Donate Now</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;