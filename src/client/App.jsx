import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shows from './components/Shows';
import UserProfile from './components/UserProfile';
import Logout from './components/Logout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} token={token} />
        <div className="App-header">
          {/*<img id="comp-img" src="./bingeit.png" alt="logo" />*/}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setToken={setToken} />} />
          <Route path="/Logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/UserProfile" element={<UserProfile token={token} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
