import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (!searchQuery) {
        console.error('Search query is empty');
        return;
      }
  
      const response = await fetch(`/api/shows/show/${searchQuery}`);
      if (response.ok) {
        try {
          const data = await response.json();
          if (data) {
            onSearch(data); // Pass the fetched data to the parent component
            navigate('/SearchResults'); // Navigate to SearchResults page
          } else {
            console.error('Empty response or invalid JSON format');
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      } else {
        console.error('Failed to fetch show data');
      }
    } catch (error) {
      console.error('Error fetching show data:', error);
    }
  };  

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
