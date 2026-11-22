import React from 'react'
import { apodImageDimensions } from '../utils/apodImage'

const CardShell = ({ children, fixedHeight = false }) => (
  <div className='container mt-5 pb-3 mb-5 d-flex justify-content-center'>
    <div
      className='card glass-card'
      style={{ width: '40rem', ...(fixedHeight ? { height: '40rem' } : {}) }}
    >
      <div className='card-body text-light'>{children}</div>
    </div>
  </div>
)

const Card = ({
  title,
  mediaType,
  imageUrl,
  imageUrlFull,
  articleUrl,
  videoUrl,
  videoKind,
  copyright,
  description,
  isLoading,
  error,
}) => {
  const isVideo = mediaType === 'video'
  const copyrightText = copyright || 'NASA'
  const displaySrc = imageUrl || articleUrl
  const fullImageUrl = imageUrlFull || displaySrc
  const imageDims = apodImageDimensions(imageUrl)

  if (isLoading) {
    return (
      <CardShell fixedHeight>
        <div className='d-flex align-items-center justify-content-center h-100'>
          <p className='text-center m-auto font-monospace text-purple'>
            loading...
          </p>
        </div>
      </CardShell>
    )
  }

  if (error) {
    return (
      <CardShell>
        <p className='text-center font-monospace text-purple'>{error}</p>
      </CardShell>
    )
  }

  const renderVideo = () => {
    if (videoUrl && videoKind === 'mp4') {
      return (
        <video
          className='img-fluid img-nasa rounded video w-100'
          controls
          poster={imageUrl}
          src={videoUrl}
          title={title}
        />
      )
    }

    if (videoUrl && videoKind === 'embed') {
      return (
        <iframe
          className='img-fluid img-nasa rounded video w-100'
          src={videoUrl}
          title={title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      )
    }

    return (
      <div>
        {imageUrl && (
          <img
            className='img-fluid img-nasa rounded mx-auto d-block mb-3'
            src={imageUrl}
            alt={title}
            decoding='async'
            {...(imageDims
              ? { width: imageDims.width, height: imageDims.height }
              : {})}
          />
        )}
        <p className='text-center'>
          <a href={articleUrl} target='_blank' rel='noopener noreferrer'>
            Ver video en NASA Science
          </a>
        </p>
      </div>
    )
  }

  return (
    <CardShell>
      <h2 className='text-center mb-4 mt-2 font-monospace fw-bold'>{title}</h2>

      {!isVideo ? (
        <div>
          <a
            href={fullImageUrl}
            target='_blank'
            rel='noopener noreferrer'
            style={{ cursor: 'zoom-in' }}
            aria-label={`Open full-size image: ${title}`}
          >
            <img
              className='img-fluid img-nasa rounded mx-auto d-block'
              src={displaySrc}
              alt={title}
              title={title}
              draggable='false'
              fetchPriority='high'
              decoding='async'
              {...(imageDims
                ? { width: imageDims.width, height: imageDims.height }
                : {})}
            />
          </a>
          <p className='text-center m-auto font-monospace text-purple'>
            Image Credit & Copyright: {copyrightText}
          </p>
        </div>
      ) : (
        <div>
          {renderVideo()}
          <p className='text-center m-auto font-monospace text-purple'>
            Video Credit: {copyrightText}
          </p>
        </div>
      )}

      <p className='mt-5 fst-italic api-description'>{description}</p>
    </CardShell>
  )
}

export default Card