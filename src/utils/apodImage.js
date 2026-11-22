/** Ancho máx. para la imagen en tarjeta (~40rem + retina) */
export const APOD_DISPLAY_MAX_WIDTH = 960

/**
 * Reduce el peso del CDN de NASA manteniendo el aspect ratio.
 * Si ya es menor que maxWidth, devuelve la URL sin cambios.
 */
export function apodDisplayImageUrl(hdurl, maxWidth = APOD_DISPLAY_MAX_WIDTH) {
  if (!hdurl) return hdurl

  try {
    const url = new URL(hdurl)
    if (!url.hostname.includes('science.nasa.gov')) {
      return hdurl
    }

    const currentW = Number(url.searchParams.get('w'))
    const currentH = Number(url.searchParams.get('h'))

    if (!currentW || currentW <= maxWidth) {
      return hdurl
    }

    const scale = maxWidth / currentW
    const newH = currentH
      ? Math.max(1, Math.round(currentH * scale))
      : maxWidth

    url.searchParams.set('w', String(maxWidth))
    url.searchParams.set('h', String(newH))
    url.searchParams.set('fit', 'clip')

    return url.toString()
  } catch {
    return hdurl
  }
}

/** Dimensiones declaradas en la URL del CDN (evita CLS en Lighthouse). */
export function apodImageDimensions(imageUrl) {
  if (!imageUrl) return null

  try {
    const url = new URL(imageUrl)
    const width = Number(url.searchParams.get('w'))
    const height = Number(url.searchParams.get('h'))
    if (!width || !height) return null
    return { width, height }
  } catch {
    return null
  }
}