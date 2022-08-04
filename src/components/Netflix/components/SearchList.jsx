import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SearchList = () => {
  const { movie } = useParams()
  const [movies, setMovies] = useState([])
  const [loading] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${movie}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }
    getMovies()
  }, [movie])

  return (
    <section className='movies-container'>
      <h2>Search...</h2>
      {loading && <p>Loading</p>}
      {movies.length > 1
        ? <div className='movies-list'>
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
        : <p>No hay resultados</p>
      }
    </section>
  )
}

export default SearchList
