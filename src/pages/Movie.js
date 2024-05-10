import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data based on the ID
    // Replace this with your actual API call to fetch movie data
    // For demo purposes, we're using a dummy movie object
    const dummyMovie = {
      title: "Dummy Movie",
      time: "2h 30m",
      genres: ["Action", "Adventure", "Sci-Fi"]
    };

    // Set the movie data
    setMovie(dummyMovie);
  }, [id]);

  return (
    <>
      <header>
        <h1>{movie ? movie.title : "Loading..."}</h1>
      </header>
      <main>
        {movie && (
          <div>
            <p>Time: {movie.time}</p>
            <p>
              Genres:{" "}
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default Movie;
