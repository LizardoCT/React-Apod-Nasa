import { APOD_API_BASE } from '../constants/apod'
import { toApodSlug } from '../utils/date'
import { parseCopyright, stripHtml } from '../utils/html'
import { extractVideoFromHtml } from '../utils/apodMedia'

function mapApodResponse(raw) {
  const isVideo = raw.media_type === 'video'
  const video = isVideo ? extractVideoFromHtml(raw.basic_html) : null

  return {
    title: raw.title,
    date: raw.date,
    mediaType: isVideo ? 'video' : 'image',
    imageUrl: raw.hdurl,
    articleUrl: raw.url ?? raw.permalink,
    videoUrl: video?.src ?? null,
    videoKind: video?.kind ?? null,
    explanation: stripHtml(raw.explanation),
    copyright: parseCopyright(raw.copyright, raw.credit),
  }
}

/**
 * APOD vía science.nasa.gov (sin API key; la API legada de api.nasa.gov está rota).
 */
export async function fetchApod(isoDate, signal) {
  const response = await fetch(
    `${APOD_API_BASE}/${toApodSlug(isoDate)}`,
    { signal }
  )

  if (!response.ok) {
    throw new Error('No hay APOD para esa fecha')
  }

  const raw = await response.json()
  return mapApodResponse(raw)
}