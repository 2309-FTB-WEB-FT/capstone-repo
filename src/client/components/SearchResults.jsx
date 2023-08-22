import React from 'react';

const SearchResults = ({ results, standalone }) => {
  if (standalone) {
    return (
      <div>
        <h2>Search Results</h2>
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="search-result">
              {/* Display the result content */}
            </div>
          ))
        ) : (
          <p>No results</p>
        )}
      </div>
    );
  }

  return (
    <div className="search-results">
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.id} className="search-result">
            {/* Display the result content */}
          </div>
        ))
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default SearchResults;
