import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../services/fetch'

const MoviesList = ({ title, path }) => {
  const [movies, setMovies] = useState()
  const [loading] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      setMovies(await getCategories(path))
    }
    getMovies()
  }, [])

  return (
    <section className='movies-container'>
      <h2>{title}</h2>
      {loading && <p>Loading</p>}
      {movies &&
        <div className='movies-list'>
          {
            movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/netflix/movie/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='poster' />
                    <h2>{movie.title}</h2>
                  </Link>
                </li>
              )
            })
          }
        </div>
      }
    </section>
  )
}

export default MoviesList
