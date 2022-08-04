import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../img/net.png'
const Header = () => {
  const [searchMovie, setSearchMovie] = useState()
  const navigate = useNavigate()
  const handleForm = (e) => {
    e.preventDefault()
    navigate(`search/${searchMovie}`)
    setSearchMovie('')
  }
  return (
    <header>
      <Link to='/netflix'>
        <img src={logo} alt='logo' />
      </Link>
      <form onSubmit={handleForm}>
        <div className='searching'>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
          <input type='text' name='movie' value={searchMovie}
            onChange={e => setSearchMovie(e.target.value)} />
        </div>
      </form>
    </header>
  )
}

export default Header