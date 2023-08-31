import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [allShows, setAllShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/shows/");
        const result = await response.json();
        setAllShows(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const getFilteredShows = (query, shows) => {
    if (!query) {
      return shows;
    }
    return shows.filter((show) => {
      const lowerCaseQuery = query.toLowerCase();
      const nameMatches = show.name?.toLowerCase().includes(lowerCaseQuery) ?? false;
      const genreMatches = show.genre?.toLowerCase().includes(lowerCaseQuery) ?? false;
      const descriptionMatches = show.description?.toLowerCase().includes(lowerCaseQuery) ?? false;
      return nameMatches || genreMatches || descriptionMatches;
    });
  };
  

  const filteredShows = getFilteredShows(searchQuery, allShows);

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search shows..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Display Filtered Shows */}
      <div className="showcontainer">
        {filteredShows.map((show) => (
          <div className="singleshow" key={show.id}>
            <img
              src={show.image}
              alt={show.name}
              className="imgbutton"
              onClick={() => navigate(`/Shows/${show.id}`)}
            />
            <p className="showtitle">{show.name}</p>
            <p className="genre">{show.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
