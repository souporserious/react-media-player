export default function formatTime(current, pad = true) {
  let minutes = Math.floor(current / 60)
  let seconds = Math.floor(current % 60)

  if (pad || minutes >= 10) {
    minutes = '0' + minutes
  }

  if (pad || seconds >= 10) {
    seconds = '0' + seconds
  }

  return minutes + ':' + seconds
}
