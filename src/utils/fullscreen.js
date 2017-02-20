function request(element) {
  const vendors = [
    'requestFullscreen',
    'mozRequestFullScreen',
    'msRequestFullscreen',
    'webkitRequestFullscreen'
  ]
  const requestFullscreen = vendors.reduce((prev, curr) =>
    document.documentElement[curr] ? curr : prev
  )
  element[requestFullscreen]()
}

function exit() {
  const vendors = [
    'exitFullscreen',
    'mozCancelFullScreen',
    'msExitFullscreen',
    'webkitExitFullscreen'
  ]
  const exitFullscreen = vendors.reduce((prev, curr) =>
    document[curr] ? curr : prev
  )
  document[exitFullscreen]()
}

function change(type, callback) {
  const vendors = [
    'fullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange',
    'webkitfullscreenchange'
  ]
  vendors.forEach(vendor =>
    document[`${type}EventListener`](vendor, callback)
  )
}

export default {
  request,
  exit,
  change
}
