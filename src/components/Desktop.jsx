import React from 'react'
import { Link } from 'react-router-dom'
import cv from '../data/cv.pdf'
const Desktop = () => {
  return (
    <div className="desktop">
       <article>
        <a href="https://github.com/unodecopas" target='_blank' rel="noopener noreferrer">
          <div className='githubIcon'></div>
          <p>Github</p>
        </a>
       </article>

       <article>
        <a href={cv} target='_blank' rel="noopener noreferrer">
          <div className='pdfIcon'></div>
          <p>CV.pdf</p>
        </a>
       </article>

       <article>
        <Link to='readme'>
          <div className='notepadIcon'></div>
          <p>Readme.txt</p>
        </Link>
       </article>

       <article>
        <a href="https://linkedin.com/in/jegallardo" target='_blank' rel="noopener noreferrer">
          <div className='linkedinIcon'></div>
          <p>Linkedin</p>
        </a>
       </article>

       <article>
        <a href="https://grand-pastelito-638c86.netlify.app/" target='_blank' rel="noopener noreferrer">
          <div className='notesIcon'></div>
          <p>Notas Web</p>
        </a>
       </article>

       <article>
        <a href="https://youthful-payne-a5cff6.netlify.app/" target='_blank' rel="noopener noreferrer">
          <div className='cardsIcon'></div>
          <p>Memory Cards!</p>
        </a>
       </article>

       <article>
        <Link to='/calc'>
          <div className='calculatorIcon'></div>
          <p>Calculator</p>
        </Link>
       </article>

       <article>
        <Link to='/netflix'>
          <div className='netflixIcon'></div>
          <p>Netflix</p>
        </Link>
       </article>
    </div>
  )
}
export default Desktop
