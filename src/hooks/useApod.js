import { useEffect, useState } from 'react'
import { fetchApod } from '../api/fetchApod'

export function useApod(isoDate) {
  const [apod, setApod] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    let stale = false

    setIsLoading(true)
    setError(null)

    fetchApod(isoDate, controller.signal)
      .then((data) => {
        if (!stale) setApod(data)
      })
      .catch((err) => {
        if (stale || err.name === 'AbortError') return
        setApod(null)
        setError(err.message || 'Error al cargar el APOD')
      })
      .finally(() => {
        if (!stale) setIsLoading(false)
      })

    return () => {
      stale = true
      controller.abort()
    }
  }, [isoDate])

  return { apod, isLoading, error }
}