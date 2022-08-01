import React from 'react'
import Clock from './Clock'

const Taskbar = ({ taskbarApp }) => {
  return (
    <div className="taskbar">
        <div className='start-menu'>
          <div className='xplogo'></div>
            start
        </div>
        <div className="items">
          {taskbarApp && <p>{taskbarApp}</p>}
        </div>
        <div className='icons'>
          <Clock />
        </div>
    </div>
  )
}
export default Taskbar
