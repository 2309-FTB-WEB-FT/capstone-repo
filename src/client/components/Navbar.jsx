import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ isLoggedIn, token, username }) => {
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
          <img src="/bingeit.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {isLoggedIn ? (
            <>
              {/* Link to the UserProfile using the username */}
              <li><Link to="/UserProfile">Profile</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          ) : (
            <li><Link to="/Login">Login</Link></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
