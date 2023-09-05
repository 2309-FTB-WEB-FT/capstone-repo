import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {

    localStorage.clear();
    

    setIsLoggedIn(false);


    navigate('/');
  }, [setIsLoggedIn, navigate]);

  return null;
};

export default Logout;
