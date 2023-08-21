import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ isLoggedIn }) => { // Accept isLoggedIn prop
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        ☰
      </div>
      <div className="sidebar">
        <div className="logo">
          <img src="https://logodownload.org/wp-content/uploads/2015/02/burger-king-logo-6.png" alt="placeholder logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Shows">Shows</Link></li>
          {!isLoggedIn ? (
            <li><Link to="/Login">Login</Link></li>
          ) : (
            <>
              <li><Link to="/Profile">Profile</Link></li>
              {/* Add Logout link if desired */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
