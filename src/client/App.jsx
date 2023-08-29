import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shows from './components/Shows';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import UserProfile from './components/UserProfile';
import Logout from './components/Logout';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const handleSearch = (query) => {
    setSearchResults([
      { id: 1, title: 'Search Result Placeholder' },
    ]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <Navbar isLoggedIn={isLoggedIn} token={token} />
        <h1>Boilerplate</h1>
        <img id="comp-img" src="./computer.png" alt="computer" />
        <p>Replace the starter code in this template with something cool</p>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setToken={setToken} />} />
          <Route path="/Logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="/SearchResults" element={<SearchResults results={searchResults} standalone />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
