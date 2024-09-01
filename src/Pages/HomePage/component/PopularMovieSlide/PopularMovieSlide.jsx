import React from 'react';
import { usePopularMoviesQuery } from '../../../../hook/UsePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import "./PopularMovieSlide.style.css"
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const PopularMovieSlide = () => {

  const {data,isError,error,isLoading} = usePopularMoviesQuery()
  if(isLoading){
    return <Spinner animation="border" variant="danger">Loading...</Spinner>
}
if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
}
  return (
    <div>
     <MovieSlider title='Popular Movies' movies = {data.results} responsive={responsive}/>
    </div>
  );
}

export default PopularMovieSlide;
