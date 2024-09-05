import React from 'react'

const Card = (props) => {
  const isImage = props.media === 'image'
  const copyrightText = props.copyright || 'NASA'
  const imageUrl = props.hdurl || props.url

  if (props.isLoading) {
    return (
      <div className='container mt-5 pb-3 mb-5 d-flex justify-content-center'>
        <div
          className='card glass-card'
          style={{ width: '40rem', height: '40rem' }}
        >
          <div className='card-body text-light d-flex align-items-center justify-content-center'>
            <p className='text-center m-auto font-monospace text-purple'>
              loading...
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container mt-5 pb-3 mb-5 d-flex justify-content-center'>
      <div className='card glass-card' style={{ width: '40rem' }}>
        <div className='card-body text-light'>
          <h2 className='text-center mb-4 mt-2 font-monospace fw-bold'>
            {props.title}
          </h2>

          {isImage ? (
            <div>
              <a
                href={imageUrl}
                target='_blank'
                rel='noopener noreferrer'
                style={{ cursor: 'zoom-in' }}
              >
                <img
                  className='img-fluid img-nasa rounded mx-auto d-block'
                  src={props.url}
                  alt={props.title}
                  title={props.title}
                  draggable='false'
                />
              </a>
              <p className='text-center m-auto font-monospace text-purple'>
                Image Credit & Copyright: {copyrightText}
              </p>
            </div>
          ) : (
            <div>
              <iframe
                className='img-fluid img-nasa rounded video'
                src={props.url}
                alt={props.title}
              ></iframe>
              <p className='text-center m-auto font-monospace text-purple'>
                Video Credit: NASA, SVS, Apollo 8 Crew
              </p>
            </div>
          )}

          <p className='mt-5 fst-italic api-description'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
