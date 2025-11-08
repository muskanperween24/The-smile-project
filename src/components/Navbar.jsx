import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} end>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
            <NavLink to="/programs" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Programs</NavLink>
            <NavLink to="/team" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Team</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact Us</NavLink>
            <Link to="/join" className="join-us-btn">Join Us</Link>
            <Link to="/donate" className="donate-btn">Donate Now</Link>
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
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <Link to="/join" className="join-us-btn mobile" onClick={() => setIsMenuOpen(false)}>Join Us</Link>
            <Link to="/donate" className="donate-btn mobile" onClick={() => setIsMenuOpen(false)}>Donate Now</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;