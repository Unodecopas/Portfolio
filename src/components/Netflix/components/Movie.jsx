import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieID } from '../services/fetch'
const Movie = () => {
  const [movie, setMovie] = useState()
  const { id } = useParams()
  useEffect(() => {
    const getMovie = async () => {
      setMovie(await getMovieID(id))
    }
    getMovie()
  }, [])

  return (
    <section>
      {movie && <div className='movie'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='poster' />
        <div className='info'>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <p>KIDS{movie.adults ? <span>⛔️</span> : <span>🟢</span>}</p>
        </div>
      </div>

      }
    </section>
  )
}

export default Movie
