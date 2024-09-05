import React from 'react'

const Card = (props) => {
  const isImage = props.media === 'image'

  if (props.isLoading) {
    return (
      <div className='container mt-5 pb-3 mb-5 d-flex justify-content-center'>
        <div
          className='card glass-card'
          style={{ width: '40rem', height: '40rem' }}
        >
          <div className='card-body text-light d-flex align-items-center justify-content-center'>
            <p className='text-center m-auto font-monospace'>loading...</p>
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
          <h4 className='title mb-3 text-center font-monospace'>
            {props.date}
          </h4>

          {isImage ? (
            <div>
              <img
                className='img-fluid img-nasa rounded mx-auto d-block'
                src={props.url}
                alt={props.title}
                title={props.title}
                draggable='false'
              />
              <p className='text-center m-auto font-monospace copyright'>
                Image Credit & Copyright: {props.copyright}
              </p>
            </div>
          ) : (
            <div>
              <iframe
                className='img-fluid img-nasa rounded video'
                src={props.url}
                alt={props.title}
              ></iframe>
              <p className='text-center m-auto font-monospace copyright'>
                Video Credit: NASA, SVS, Apollo 8 Crew
              </p>
            </div>
          )}

          <p className='title mb-1 mt-4 text-center font-monospace'>
            {isImage ? 'Picture Full HD' : null}
          </p>

          <p className='title mb-4 text-center font-monospace'>
            <a
              className='api-url'
              target='_blank'
              href={props.hdurl || props.url}
            >
              {props.hdurl || props.url}
            </a>
          </p>

          <p className='fst-italic api-description'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
