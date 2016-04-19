import { PropTypes } from 'react'

export default {
  // State
  currentTime: PropTypes.number,
  progress: PropTypes.number,
  duration: PropTypes.number,
  volume: PropTypes.number,
  isLoading: PropTypes.bool,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
  isFullscreen: PropTypes.bool,

  // Methods
  play: PropTypes.func,
  pause: PropTypes.func,
  playPause: PropTypes.func,
  stop: PropTypes.func,
  seekTo: PropTypes.func,
  mute: PropTypes.func,
  muteUnmute: PropTypes.func,
  setVolume: PropTypes.func,
  fullscreen: PropTypes.func
}
