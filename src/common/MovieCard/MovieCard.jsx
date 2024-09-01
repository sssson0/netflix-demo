import React from 'react';
import Badge from 'react-bootstrap/Badge';
import "./MovieCard.style.css"
import {UseMovieGenreQuery} from "../../hook/UseMovieGenre"
const MovieCard = ({movie}) => {

  const {data:genreData} = UseMovieGenreQuery()
  return (
    <div
    style ={{backgroundImage: "url(" + 
    `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")" }}
    className='movie-card'
    >
        <div className='overlay'>
            <div className='card-title'>{movie.title}</div>
            {movie.genre_ids.map((id)=>(
            <Badge className='card-badge' bg="danger">{id}</Badge>))}
            <div>
                <div className='card-average'>{movie.vote_average}</div>
                <div className='card-popularity'>{movie.popularity}</div>
                <div className='card-adult'>{movie.adult?'over18':'under18'}</div>
            </div>
        </div>
    </div>
  );
}

export default MovieCard;
