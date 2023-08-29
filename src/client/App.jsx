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
        <Navbar isLoggedIn={isLoggedIn} />
        <h1>Boilerplate</h1>
        <img id="comp-img" src="./computer.png" alt="computer" />
        <p>Replace the starter code in this template with something cool</p>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows/:showId" element={<Shows />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setToken={setToken}/>} />
          {isLoggedIn && <Route path="/Profile" element={<Profile />} />}
          <Route path="/SearchResults" element={<SearchResults results={searchResults} standalone />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
