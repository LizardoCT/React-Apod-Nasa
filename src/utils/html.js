export function stripHtml(html) {
  if (!html) return ''
  const el = document.createElement('div')
  el.innerHTML = html
  return (el.textContent || '').replace(/\s+/g, ' ').trim()
}

export function parseCopyright(copyright, credit) {
  const text = stripHtml(copyright || credit)
  if (!text) return undefined
  const idx = text.lastIndexOf(':')
  return idx !== -1 ? text.slice(idx + 1).trim() : text
}