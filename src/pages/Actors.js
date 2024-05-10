import React, { useEffect, useState } from "react";

function Actors() {
  // Dummy data for actors
  const [actors, setActors] = useState([
    { id: 1, name: "Actor 1", movies: ["Movie 1", "Movie 2"] },
    { id: 2, name: "Actor 2", movies: ["Movie 3", "Movie 4"] },
    { id: 3, name: "Actor 3", movies: ["Movie 5", "Movie 6"] }
  ]);

  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
