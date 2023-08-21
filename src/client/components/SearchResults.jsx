import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result) => (
        <div key={result.id} className="search-result">

        </div>
      ))}
    </div>
  );
};

export default SearchResults;
