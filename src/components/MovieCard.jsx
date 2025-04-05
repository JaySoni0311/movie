import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import { Link } from "react-router-dom"

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
        <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
            </Link>
        </div>
        
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date.split('-').reverse().join('-')}</p>
        </div>
    </div>
}

export default MovieCard