import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Home() {
  // Dummy data for movies
  const [movies, setMovies] = useState([
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" }
  ]);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard id={movie.id} title={movie.title} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
