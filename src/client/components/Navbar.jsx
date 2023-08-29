import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ isLoggedIn, token }) => {
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
          <img src="/computer.png" alt="placeholder logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Shows">Shows</Link></li>
          {!isLoggedIn ? (
            <li><Link to="/Login">Login</Link></li>
          ) : (
            <li><Link to={`/profile/${token}`}>Profile</Link></li>
          )}
        </ul>
      </div>
    </div>
  );
};


export default Navbar;
