import React, { useState, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import './style.scss'
import Taskbar from './components/Taskbar'
const Readme = lazy(() => import('./components/Readme'))
const Calculator = lazy(() => import('./components/Calculator/Calculator'))
const Netflix = lazy(() => import('./components/Netflix/Netflix'))
const Iframe = lazy(() => import('./components/Iframe'))
const Desktop = lazy(() => import('./components/Desktop'))

function App () {
  const [taskbarApp, setTaskbarApp] = useState()
  return (
    <div className="portfolio">
      <div className='border'>
        <main>
          <Suspense fallback={<div/>}>
          <Routes>
            <Route path='/*' element={<Desktop />} />
            <Route path='/readme' element={<Readme setTaskbarApp={setTaskbarApp} />} />
            <Route path='/calc' element={<Calculator setTaskbarApp={setTaskbarApp} />} />
            <Route path='/netflix/*' element={<Netflix setTaskbarApp={setTaskbarApp} />} />
            <Route path='/iframe/:url' element={<Iframe setTaskbarApp={setTaskbarApp}/>} />
          </Routes>
          </Suspense>
        </main>
        <Taskbar taskbarApp={taskbarApp} />
      </div>
    </div>
  )
}

export default App
