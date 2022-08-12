import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import WindowsBar from './WindowsBar'

const Iframe = ({ setTaskbarApp }) => {
  useEffect(() => {
    setTaskbarApp('Explorer')
    return () => setTaskbarApp('')
  }, [])

  const { url } = useParams()
  return <div className='iframe-container'>
    <WindowsBar title='Explorer' />
    <iframe src={`https://${url}`} frameBorder="0"></iframe>
  </div>
}

export default Iframe
