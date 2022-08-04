import React from 'react'
import MoviesList from '../components/MoviesList'

const HomePage = () => {
  const sections = [
    {
      title: 'Popular',
      path: 'movie/popular'
    },
    {
      title: 'Proximamente',
      path: 'movie/upcoming'
    }
  ]
  return (
    <div className='homepage'>
      {
        sections.map((section, i) => {
          return (
            <li key={i}>
              <MoviesList title={section.title} path={section.path} />
            </li>
          )
        })
      }
    </div>
  )
}

export default HomePage
