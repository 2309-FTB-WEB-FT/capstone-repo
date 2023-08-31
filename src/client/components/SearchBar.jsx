import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

const SearchBar = ({ setFilteredShows, allShows }) => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    const filteredShows = allShows.filter((show) =>
      show.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredShows(filteredShows);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
