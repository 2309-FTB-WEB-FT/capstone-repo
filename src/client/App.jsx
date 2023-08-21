import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shows from './components/Shows';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults'; // Import the SearchResults component

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
        <img id='comp-img' src='./computer.png' alt="computer" />
        <p>Replace the starter code in this template with something cool</p>

        {searchResults.length > 0 && <SearchResults results={searchResults} />} /* Display search results */
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> /* Pass setIsLoggedIn */
          {isLoggedIn && <Route path="/Profile" element={<Profile />} />} /* Render Profile route only when logged in */
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
