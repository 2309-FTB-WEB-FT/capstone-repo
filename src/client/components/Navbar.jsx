// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
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
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;