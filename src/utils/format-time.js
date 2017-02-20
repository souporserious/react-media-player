export default function formatTime(current) {
  if (!current) return '0:00';

  let h = Math.floor(current / 3600)
  let m = Math.floor((current - (h * 3600)) / 60)
  let s = Math.floor(current % 60)

  if (s < 10) {
    s = '0' + s
  }

  if (h > 0) {
    return h + ':' + m + ':' + s
  } else {
    return m + ':' + s
  }
}
