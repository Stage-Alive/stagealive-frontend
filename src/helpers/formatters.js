export const limitString = (string, limit) => {
  if (!limit || !string || string.length <= limit) {
    return string
  }

  return `${string.slice(0, limit).trim()}...`
}

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

export function zeroPadding(value, length) {
  if (Math.floor(Math.log10(value)) >= length) {
    return value.toString()
  }

  return (new Array(length).fill('0').join('') + value.toString()).slice(-length)
}

export function toMonthString(monthNumber) {
  return months[monthNumber - 1]
}

export function toDateTimeString(date) {
  const d = new Date(date)
  const day = d.getDate()
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const hours = d.getHours()
  const minutes = d.getMinutes()
  
  return `${zeroPadding(day, 2)} de ${toMonthString(month)} | ${zeroPadding(hours, 2)}:${zeroPadding(minutes, 2)}`
}
