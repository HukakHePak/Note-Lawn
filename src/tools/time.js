export function getCreatedDate() {
  const date = new Date()
  const formatTime = getTime(date.getHours(), date.getMinutes())
  const formatDate = getDate(date.getDate(), date.getMonth(), date.getFullYear())
  return `${formatDate} ${formatTime}`
}

function formatTimeNumber(number) {
  if (number < 10) number = '0' + String(number)
  return number
}

function getTime(hours, minutes) {
  return formatTimeNumber(hours) + ':' + formatTimeNumber(minutes)
}

function getDate(day, mounth, year) {
  return `${formatTimeNumber(day)}/${formatTimeNumber(mounth)}/${year}`
}
