import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows } from '../../feature/movies/movieSlice'
import MovieCard from '../MovieCard/MoveCard'
import "./MoveListing.scss"
const  MovieListing = () => {
  const movies =useSelector(getAllMovies)
  const shows =useSelector(getAllShows)
  console.log(movies)
  let renderMovies,renderShows="";

  renderMovies=movies.Response==='True' ? (
    movies.Search.map((movie,idx)=>(
      <MovieCard key={idx} data={movie}/>
    ))
  ) :(
    <div className='movies-error'>
    <h3> {movies.Error}</h3>
    </div>

  )
  renderShows=shows.Response==='True' ? (
    shows.Search.map((movie,idx)=>(
      <MovieCard key={idx} data={movie}/>
    ))
  ) :(
    <div className='movies-error'>
    <h3> {shows.Error}</h3>
    </div>

  )
  
  return (
    <div className='movies-wrapper'> 

    <div className='movies-list'>
      <h2>Movies</h2>
      <div className='movies-container'> {renderMovies}</div>
    </div>
    <div className='series-list'>
      <h2>Series</h2>
      <div className='series-container'> {renderShows}</div>
    </div>


    </div>
  )
}
export default MovieListing