import React from "react";
import MovieCard from './MovieCard';
import '../styles/movie-list.css';

const MovieList = ({isLoading,movieList}) => {

    if(isLoading){
        return "Please wait while movies are loading..."
    }

    else{
        return (
            <div className="movie-list">
                {movieList.map((movie) => <MovieCard movie={movie} key={movie.imdbID}/>)}
            </div>
        )
    }

}

export default MovieList;