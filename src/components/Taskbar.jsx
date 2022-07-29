import React from 'react'
import Clock from './Clock'

const Taskbar = () => {
  return (
    <div className="taskbar">
        <div className='start-menu'>
          <div className='xplogo'></div>
            start
        </div>
        <div className="items">Items</div>
        <div className='icons'>
          <Clock />
        </div>
    </div>
  )
}
export default Taskbar
