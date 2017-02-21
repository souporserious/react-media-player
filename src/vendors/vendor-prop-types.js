import { PropTypes } from 'react'

export default {
  vendor:             PropTypes.string,
  src:                PropTypes.string,
  loop:               PropTypes.bool,
  onReady:            PropTypes.func,
  onPlay:             PropTypes.func,
  onPause:            PropTypes.func,
  onProgress:         PropTypes.func,
  onDuration:         PropTypes.func,
  onTimeUpdate:       PropTypes.func,
  onVolumeChange:     PropTypes.func,
  onFullscreenChange: PropTypes.func
}
