import React, { useState } from 'react';

const SearchResults = ({ results, standalone }) => {
  const [sortBy, setSortBy] = useState('relevance'); // Default sorting option
  const [filterByGenre, setFilterByGenre] = useState('all'); // Default genre filter
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10); // Number of results to display per page

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

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleResultsPerPageChange = (e) => {
    setResultsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing results per page
  };

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
            {/* ... (other genre options?) */}
          </select>
        </div>

        <div className="select-container">
          {/* Results per page dropdown */}
          <select value={resultsPerPage} onChange={handleResultsPerPageChange}>
          <option value="10"># of results</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          </select>
        </div>

         {/* Display search results, pagination, and result counter */}
         {currentResults.length > 0 ? (
          <div>
            {currentResults.map((result) => (
              <div key={result.id} className="search-result">
                {/* Display the sorted and filtered result content */}
                <h3>{result.title}</h3>
                {/* ... (other result content) */}
              </div>
            ))}
            <div className="pagination">
              {Array.from({ length: Math.ceil(filteredResults.length / resultsPerPage) }).map((_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
            </div>
            <p>{filteredResults.length} results found</p>
          </div>
        ) : (
          <p>No results</p>
        )}
      </div>
    );
  }
};

export default SearchResults;