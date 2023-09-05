import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shows from './components/Shows';
import UserProfile from './components/UserProfile';
import Logout from './components/Logout';
import useToken from './components/useToken'; 
//Import useToken which gets tokeb from local storage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { token, setToken } = useToken(); //initialize token

  const handleLogin = (loginName, userToken) => {
    console.log("Received userToken:", userToken);
    setToken(userToken); //Set token when user logs in
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className= "grainy-overlay"></div>
        <div className= "scanlines-overlay"></div>
        <Navbar isLoggedIn={isLoggedIn} token={token} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setToken={setToken}
                onLogin={handleLogin}
              />
            }
          />
          <Route path="/Logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/UserProfile" element={<UserProfile token={token} />} /> 
          {/* Render UserProfile component */}
          <Route path="/Shows/:showId" element={<Shows />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
