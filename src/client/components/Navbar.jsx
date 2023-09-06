import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

// Props for login status
const Navbar = ({ isLoggedIn, token, username }) => {
  // controls the sidebar's open/close state
  const [isOpen, setIsOpen] = useState(false);

  // toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Render the navbar
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        ☰
      </div>
      <div className="sidebar">
        <div className="logo">
          <img src="/bingeit.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* These paths render only if the user is logged in */}
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/UserProfile">Profile</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/Login">Login</Link>
            </li>
          )}
        </ul>
        <div className="promo-blurb">
          <p className="promo-text">
            🚀 Ready to dive into the world of TV shows? Join{" "}
            <strong>BINGE IT</strong> and share your binge-worthy reviews with
            fellow TV enthusiasts! 🍿
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;