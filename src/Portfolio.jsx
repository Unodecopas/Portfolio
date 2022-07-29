import React from 'react'
import Desktop from './components/Desktop'
import { Routes, Route } from 'react-router-dom'
import './style.scss'
import Taskbar from './components/Taskbar'

function App () {
  return (
    <div className="portfolio">
      <div className='border'>
        <main>
          <Routes>
            <Route path='/' element={<Desktop />} />
          </Routes>
        </main>
        <Taskbar />
      </div>
    </div>
  )
}

export default App
