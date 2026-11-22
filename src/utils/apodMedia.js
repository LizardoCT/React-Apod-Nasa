/** En APOD nuevo, los vídeos viven en basic_html (MP4 o iframe de YouTube). */
export function extractVideoFromHtml(html) {
  if (!html) return null

  const iframeMatch = html.match(/<iframe[^>]+src=["']([^"']+)["']/i)
  if (iframeMatch) {
    let src = iframeMatch[1]
    if (src.startsWith('//')) src = `https:${src}`
    return { kind: 'embed', src }
  }

  const sourceMatch = html.match(/<source[^>]+src=["']([^"']+)["']/i)
  if (sourceMatch) {
    return { kind: 'mp4', src: sourceMatch[1] }
  }

  return null
}