import React from 'react'
import gif from '../assets/images/nasagif.gif'

const Navbar = () => {
  return (
    <nav className='nav-bg glass-nav d-flex align-items-center justify-content-center w-full'>
      <img src={gif} className='nasa-gif' alt='nasa gif' draggable='false' />
      <h1 className='text-media text-light fs-2 fw-bold mb-0'>
        Astronomy Picture of the Day - NASA
      </h1>
    </nav>
  )
}

export default Navbar
