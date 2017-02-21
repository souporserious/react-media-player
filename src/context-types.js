import { PropTypes } from 'react'

export default {
  state: {
    playing:     PropTypes.bool,
    progress:    PropTypes.number,
    duration:    PropTypes.number,
    currentTime: PropTypes.number,
    muted:       PropTypes.bool,
    volume:      PropTypes.number,
    fullscreen:  PropTypes.bool,
  },
  callbacks: {
    onPlay:             PropTypes.func,
    onPause:            PropTypes.func,
    onProgress:         PropTypes.func,
    onDuration:         PropTypes.func,
    onTimeUpdate:       PropTypes.func,
    onMute:             PropTypes.func,
    onVolumeChange:     PropTypes.func,
    onFullscreenChange: PropTypes.func,
  }
}
