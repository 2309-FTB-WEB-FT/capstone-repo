import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shows from './components/Shows';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]); // State for search results

  const handleSearch = (query) => {
    // Replace this with actual search logic when you have it
    setSearchResults([
      { id: 1, title: 'Search Result 1' },
      { id: 2, title: 'Search Result 2' },
    ]);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar component */}
        <Navbar isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn to Navbar */}
        <h1>Boilerplate</h1>
        <img id="comp-img" src="./computer.png" alt="computer" />
        <p>Replace the starter code in this template with something cool</p>

        {/* Display search results */}
        {searchResults.length > 0 && (
          <SearchResults results={searchResults} standalone />
        )}

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows" element={<Shows />} />
          <Route
            path="/Login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          {/* Render Profile route only when logged in */}
          {isLoggedIn && <Route path="/Profile" element={<Profile />} />}
          {/* Standalone SearchResults route */}
          <Route
            path="/SearchResults"
            element={<SearchResults results={searchResults} standalone />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
