import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "854b5728a6d8248376c7e0b7934787f0"; // Replace with your TMDb API Key

function MovieDetails() {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error("Error fetching movie details:", error))
      
  }, [id]);
  if (!movie) return <h2>Loading...</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>

      <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <Link to="/">🔙 Back to Movies</Link>
    </div>
  );
}

export default MovieDetails;
