import React from 'react'

const Header = () => {
  return (
    <div className='d-flex justify-content-center mt-5 text-light text-center'>
      <label
        htmlFor='apod-date'
        className='mt-4 text-purple font-monospace'
      >
        Choose a new date:
      </label>
    </div>
  )
}

export default Header
