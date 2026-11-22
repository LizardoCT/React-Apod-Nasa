import React from 'react'
import { useApod } from '../hooks/useApod'
import Card from './Card'

const ApodSection = ({ date }) => {
  const { apod, isLoading, error } = useApod(date)

  return (
    <Card
      isLoading={isLoading}
      error={error}
      title={apod?.title}
      mediaType={apod?.mediaType}
      imageUrl={apod?.imageUrl}
      imageUrlFull={apod?.imageUrlFull}
      articleUrl={apod?.articleUrl}
      videoUrl={apod?.videoUrl}
      videoKind={apod?.videoKind}
      copyright={apod?.copyright}
      description={apod?.explanation}
    />
  )
}

export default ApodSection