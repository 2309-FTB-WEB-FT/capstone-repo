import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserProfile from './components/UserProfile'; // Remove 'username' prop
import Logout from './components/Logout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState(''); // Initialize username state

  useEffect(() => {
    // Fetch the username when the user is logged in
    if (isLoggedIn && token) {
      const fetchUsername = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/users/username', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const result = await response.json();
            setUsername(result.username);
          } else {
            // Handle API error
            console.error('API error');
          }
        } catch (error) {
          console.error('API request error:', error);
        }
      };

      fetchUsername();
    }
  }, [token, isLoggedIn]);

  return (
    <BrowserRouter>
      <div className="App">
      <div class="chromatic-aberration-overlay"></div>
      <div class="scanlines-overlay"></div>
      <div class="grainy-overlay"></div>
        <Navbar isLoggedIn={isLoggedIn} token={token} />
        <div className="App-header">
          {/*<img id="comp-img" src="./bingeit.png" alt="logo" />*/}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setToken={setToken} />} />
          <Route path="/Logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/UserProfile" element={<UserProfile token={token} />} /> {/* Remove 'username' prop */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;