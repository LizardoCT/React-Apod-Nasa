export function getTodayIso() {
  return new Date().toISOString().split('T')[0]
}

export function getCurrentYear() {
  return new Date().getFullYear()
}

/** Convierte YYYY-MM-DD al slug YYMMDD que usa la API de NASA */
export function toApodSlug(isoDate) {
  const [year, month, day] = isoDate.split('-')
  return `${year.slice(2)}${month}${day}`
}

export function formatDisplayDate(isoDate) {
  if (!isoDate) return ''
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}