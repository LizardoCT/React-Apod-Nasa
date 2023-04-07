import React from 'react'

const Card = (props) => {

  if (props.media === "image"){
    return(

      <div className="container mt-5 pb-3 mb-5 d-flex justify-content-center">
      <div className="card glass-card" style={{width: "40rem"}}>
        <div className='card-body text-light'>

            <h3 className='text-center mb-4 mt-2 font-monospace fw-bold'>{props.title}</h3>
            <h5 className='title mb-3 text-center font-monospace'>{props.date}</h5>
            <img className='img-fluid img-nasa rounded mx-auto d-block' src={props.url} alt={props.title} title={props.title}/>
            <h5 className='title mb-1 mt-4 text-center font-monospace'>Picture Full HD</h5>
            <p className='title mb-4 text-center font-monospace'>
              <a className='api-url ' target='blank' href={props.hdurl}>{props.hdurl}</a>
            </p>
            <p className='fst-italic api-description'>{props.description}</p>

        </div>
      </div>
    </div>

    )
  } else {

    return(

      <div className="container mt-5 pb-3 mb-5 d-flex justify-content-center">
      <div className="card glass-card" style={{width: "40rem"}}>
        <div className='card-body text-light'>

            <h3 className='text-center mb-4 mt-2 font-monospace fw-bold'>{props.title}</h3>
            <h5 className='title mb-3 text-center font-monospace'>{props.date}</h5>
            <iframe className='img-fluid img-nasa rounded video' src={props.url} alt={props.title}></iframe>
            <p className='title mb-3 text-center font-monospace'>
              <a className='api-url ' target='blank' href={props.url}>{props.url}</a>
            </p>
            <p className='fst-italic api-description'>{props.description}</p>

        </div>
      </div>
    </div>

    )
  }
}

export default Card
// , backgroundColor: 'rgba(245, 245, 245, 0.301)'