import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import WindowsBar from '../WindowsBar'
import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import SearchList from './components/SearchList'
import HomePage from './pages/HomePage'

const Netflix = ({ setTaskbarApp }) => {
  useEffect(() => {
    setTaskbarApp('Netflix - TMDB')
    return () => setTaskbarApp()
  }, [])
  return (
    <div className="netflix">
      <WindowsBar title='Netflix - TMDB' />
      <Header />

      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='movie/:id' element={<Movie />} />
        <Route path='search/:movie' element={<SearchList />} />
      </Routes>
    </div>
  )
}

export default Netflix
