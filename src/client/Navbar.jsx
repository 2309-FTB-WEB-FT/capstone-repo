// src/Navbar.js
import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Replace with logo</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shows">Shows</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
