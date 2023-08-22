import React from 'react';

const SearchResults = ({ results, standalone }) => {
  if (standalone) {
    return (
      <div>
        <h2>Search Results</h2>
        {results.map((result) => (
          <div key={result.id} className="search-result">
            {/* Display the result content */}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="search-results">
      {results.map((result) => (
        <div key={result.id} className="search-result">
          {/* Display the result content */}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
