import React, { useState } from 'react';

const SearchResults = ({ results, standalone }) => {
  const [sortBy, setSortBy] = useState('relevance'); // Default sorting option
  const [filterByGenre, setFilterByGenre] = useState('all'); // Default genre filter

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleGenreChange = (e) => {
    setFilterByGenre(e.target.value);
  };

  // Sorting and filtering logic based on selected options
  const sortedAndFilteredResults = [...results]; // Clone the results array
  if (sortBy === 'date') {
    sortedAndFilteredResults.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === 'mostReviewed') {
    sortedAndFilteredResults.sort((a, b) => b.reviews - a.reviews);
  } else if (sortBy === 'alphabetical') {
    sortedAndFilteredResults.sort((a, b) => a.title.localeCompare(b.title));
  }

  const filteredResults = filterByGenre !== 'all'
    ? sortedAndFilteredResults.filter(result => result.genre === filterByGenre)
    : sortedAndFilteredResults;

  if (standalone) {
    return (
      <div>
        <h2>Search Results</h2>
        <div className="select-container">
          {/* Sorting dropdown */}
          <select value={sortBy} onChange={handleSortChange}>
            <option value="relevance">Relevance</option>
            <option value="date">Date</option>
            <option value="mostReviewed">Most Reviewed</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>

        <div className="select-container">
          {/* Genre filter dropdown */}
          <select value={filterByGenre} onChange={handleGenreChange}>
          <option value="all">All Genres</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="musical">Musical</option>
          <option value="romance">Romance</option>
          <option value="science fiction">Science Fiction</option>
            {/* ... (other genre options) */}
          </select>
        </div>

        {filteredResults.length > 0 ? (
          filteredResults.map((result) => (
            <div key={result.id} className="search-result">
              {/* Display the sorted and filtered result content */}
              <h3>{result.title}</h3>
              {/* ... (other result content) */}
            </div>
          ))
        ) : (
          <p>No results</p>
        )}
      </div>
    );
  }
};

export default SearchResults;
