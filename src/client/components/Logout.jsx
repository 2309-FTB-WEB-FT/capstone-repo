import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear(); // Clear the local storage to log the user out

    setIsLoggedIn(false); // Set "setIsLoggedIn" to "false"
    
    navigate("/"); // Navigate the user back to home
  }, [setIsLoggedIn, navigate]);

  return null; // Return null because it doesn't render anything
};

export default Logout;
