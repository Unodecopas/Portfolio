import React from 'react'
import { useParams } from 'react-router-dom'
import WindowsBar from './WindowsBar'

const Iframe = () => {
  const { url } = useParams()
  return <div className='iframe-container'>
    <WindowsBar title='Notas WEB' />
    <iframe src={`https://${url}`} frameBorder="0"></iframe>
  </div>
}

export default Iframe
