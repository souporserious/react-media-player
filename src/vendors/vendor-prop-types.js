import { PropTypes } from 'react'

export default {
  src: PropTypes.string,
  onPlaying: PropTypes.func,
  onProgress: PropTypes.func,
  onDuration: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onVolumeChange: PropTypes.func
}
