import React from 'react'
import { useNavigate } from 'react-router-dom'

const WindowsBar = ({ title, logo }) => {
  const navigate = useNavigate()
  return (
    <div className='windows-bar'>
      {logo && <img src={logo} alt="logo" /> }
        <h2>{title}</h2>
        <button className='btn-close' onClick={() => navigate('/')}>X</button>
    </div>
  )
}

export default WindowsBar
