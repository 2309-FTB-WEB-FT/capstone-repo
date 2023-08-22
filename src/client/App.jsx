import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom'; // Import useRoutes and useNavigate
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
  const navigate = useNavigate(); 

  
  const routing = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Shows', element: <Shows /> },
    {
      path: '/Login',
      element: <Login setIsLoggedIn={setIsLoggedIn} navigate={navigate} />,
    },
    {
      path: '/Profile',
      element: isLoggedIn ? <Profile /> : null,
    },
    {
      path: '/SearchResults',
      element: <SearchResults results={searchResults} standalone />,
    },
  ]);

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

        {/* Render the defined routes */}
        {routing}
      </div>
    </BrowserRouter>
  );
}

export default App;
