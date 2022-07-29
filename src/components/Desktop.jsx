import React from 'react'
import cv from '../data/cv.pdf'
const Desktop = () => {
  return (
    <div className="desktop">
       <article>
        <a href="https:github.com/unodecopas" target='blank'>
        <div className='githubIcon'></div>
        <p>Github</p>
        </a>
       </article>
       <article>
        <a href={cv}>
        <div className='pdfIcon'></div>
        <p>CV.pdf</p>
        </a>
       </article>
       <article>
        <div className='notepadIcon'></div>
        <p>Readme.txt</p>
       </article>
       <article>
        <div className='linkedinIcon'></div>
        <p>Linkedin</p>
       </article>
    </div>
  )
}
export default Desktop
