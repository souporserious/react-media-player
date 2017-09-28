export default (() => {
  const names = [
    'exitFullscreen',
    'mozCancelFullScreen',
    'msExitFullscreen',
    'webkitExitFullscreen',
  ]
  return names.reduce((prev, curr) => (document[curr] ? curr : prev))
})()
