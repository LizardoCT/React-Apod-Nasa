import React from 'react'
import gif from '../assets/images/nasagif.gif'

const Navbar = () => {
  return (
    <div className='nav-bg glass-nav d-flex align-items-center justify-content-center'>
      <img src={gif} className='nasa-logo nasa-gif' />
      <h1 className='text-media text-light fs-2 fw-bold'>
        Astronomy Picture of the Day - NASA
      </h1>
    </div>
  )
}

export default Navbar
