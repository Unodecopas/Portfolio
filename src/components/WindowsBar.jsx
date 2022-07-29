import React from 'react'
import { useNavigate } from 'react-router-dom'

const WindowsBar = ({ title }) => {
  const navigate = useNavigate()
  return (
    <div className='windows-bar'>
        <h2>{title}</h2>
        <button className='btn-close' onClick={() => navigate('/')}>X</button>
    </div>
  )
}

export default WindowsBar
