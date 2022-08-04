import React, { useState } from 'react'
import Desktop from './components/Desktop'
import { Routes, Route } from 'react-router-dom'
import './style.scss'
import Taskbar from './components/Taskbar'
import Readme from './components/Readme'
import Calculator from './components/Calculator/Calculator'
import Netflix from './components/Netflix/Netflix'

function App () {
  const [taskbarApp, setTaskbarApp] = useState()
  return (
    <div className="portfolio">
      <div className='border'>
        <main>
          <Routes>
            <Route path='/*' element={<Desktop />} />
            <Route path='/readme' element={<Readme setTaskbarApp={setTaskbarApp}/>} />
            <Route path='/calc' element={<Calculator setTaskbarApp={setTaskbarApp}/>} />
            <Route path='/netflix/*' element={<Netflix setTaskbarApp={setTaskbarApp}/>} />
          </Routes>
        </main>
        <Taskbar taskbarApp={taskbarApp}/>
      </div>
    </div>
  )
}

export default App
