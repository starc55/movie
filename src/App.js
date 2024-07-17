import "./App.css";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

// Your OMDb API key
const API_URL = "http://www.omdbapi.com?apikey=c2a2fdbb";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>
        Starc<span className="movie_title">Movie</span>
      </h1>
      <div className="container">
        <input
          type="text"
          className="input"
          placeholder="Search movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="search__btn"
          onClick={() => searchMovies(searchTerm)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
          >
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              fill="#efeff1"
            ></path>
          </svg>
        </button>
      </div>
      {movies?.length > 0 ? (
        <div className="container_2">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No movies found</p>
        </div>
      )}
    </div>
  );
}

export default App;
