import React from 'react'
import gif from '../assets/images/nasagif.gif'

const Navbar = () => {
  return (
    <div className='text-center nav-bg fw-bold fs-2 text-light glass-nav text-media'>
        <img src={gif} className='nasa-logo nasa-gif' />
      NASA Astronomy Picture of the Day
    </div>
  )
}

export default Navbar