import React from 'react'
import './ButtonBox.css'

const ButtonBox = ({ children }) => {
  return (
        <div className="buttonbox">
            {children}
        </div>
  )
}

export default ButtonBox
