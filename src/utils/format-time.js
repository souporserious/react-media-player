export default function formatTime(current) {
  let minutes = Math.floor(current / 60)
  let seconds = Math.floor(current % 60)

  seconds = (seconds >= 10) ? seconds : '0' + seconds
  minutes = (minutes >= 10) ? minutes : minutes

  return minutes + ':' + seconds
}
