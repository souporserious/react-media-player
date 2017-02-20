import { PropTypes } from 'react'

export default {
  src:                PropTypes.string,
  onPlay:             PropTypes.func,
  onPause:            PropTypes.func,
  onProgress:         PropTypes.func,
  onDuration:         PropTypes.func,
  onTimeUpdate:       PropTypes.func,
  onVolumeChange:     PropTypes.func,
  onFullscreenChange: PropTypes.func
}
