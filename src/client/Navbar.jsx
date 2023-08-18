// src/Navbar.js
import React, { useState } from 'react';
import './style.css';

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
          <li><a href="/">Home</a></li>
          <li><a href="/shows">Shows</a></li>
          <li><a href="/logine">Login</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;