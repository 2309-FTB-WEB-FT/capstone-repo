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
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearch = async (query) => {
    try {
      if (!query) {
        console.error('Search query is empty');
        return;
      }

      const response = await fetch(`/api/shows/:name/${query}`);
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setSearchResults(data); // Update search results with fetched data
        } else {
          console.error('Empty response or invalid JSON format');
        }
      } else {
        console.error('Failed to fetch show data');
      }
    } catch (error) {
      console.error('Error fetching show data:', error);
    }
  };


  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <Navbar isLoggedIn={isLoggedIn} />
        <h1>Boilerplate</h1>
        <img id="comp-img" src="./computer.png" alt="computer" />
        <p>Replace the starter code in this template with something cool</p>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {isLoggedIn && <Route path="/Profile" element={<Profile />} />}
          {/* Pass search results directly as a prop */}
          <Route
            path="/SearchResults"
            element={<SearchResults results={searchResults} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
