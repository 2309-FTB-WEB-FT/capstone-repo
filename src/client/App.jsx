import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shows from "./components/Shows";
import UserProfile from "./components/UserProfile";
import Logout from "./components/Logout";
import useToken from "./components/useToken";

function App() {
  // track user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // manage authentication token
  const { token, setToken } = useToken();

  // handle user login
  const handleLogin = (loginName, userToken) => {
    console.log("Received userToken:", userToken);
    setToken(userToken);
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* Retro filters */}
        <div className="grainy-overlay"></div>
        <div className="scanlines-overlay"></div>
        {/* Render the navbar */}
        <Navbar isLoggedIn={isLoggedIn} token={token} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Route for the Login */}
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
          {/* Route for the Logout */}
          <Route
            path="/Logout"
            element={<Logout setIsLoggedIn={setIsLoggedIn} />}
          />
          {/* Route for the UserProfile  */}
          <Route path="/UserProfile" element={<UserProfile token={token} />} />
          {/* Route for the Shows */}
          <Route path="/Shows/:showId" element={<Shows />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
