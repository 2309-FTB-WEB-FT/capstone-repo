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
  const [results, setResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

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
          setSearchResults(data); 
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
    <div className="search-bar-container">
      <SearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
    </div>
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
