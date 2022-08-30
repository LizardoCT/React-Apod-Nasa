import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='d-flex justify-content-center mt-5 text-light text-center'>
        <p className='fw-bold font-monospace'>API:
        <a className='api-url font-monospace' href="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" target='blank'>
        https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
        </a>
        </p>
      </div>
        <span className='d-flex justify-content-center mt-4 text-light'>Choose a day:</span>
    </div>
  )
}

export default Header