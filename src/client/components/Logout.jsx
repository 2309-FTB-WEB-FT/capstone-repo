import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(false); 
    navigate('/'); // Redirect to the homepage
  }, [setIsLoggedIn, navigate]);

  return null; 
};

export default Logout;
