import React from 'react';
import { usePopularMoviesQuery } from '../../../../hook/UsePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import "./Banner.style.css"

const Banner = () => {

    const {data,isError,error,isLoading} = usePopularMoviesQuery()
    console.log("data",data)
    if(isLoading){
        return <Spinner animation="border" variant="danger" >Loading...</Spinner>
    }
    if(isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
  return (
    <div style={{
        backgroundImage:"url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2"+`${data?.results[0].poster_path}`+")"
    }}
    className='banner'
    >
        <div className='banner-text'>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
        </div>
        
    </div>
  );
}

export default Banner;
