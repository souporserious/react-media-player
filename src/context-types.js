import { PropTypes } from 'react'

export default {
  mediaPlayer: PropTypes.object
}

// export default {
//   reactMediaPlayer: {
//     state: {
//       currentTime: PropTypes.number,
//       progress: PropTypes.number,
//       duration: PropTypes.number,
//       volume: PropTypes.number,
//       isLoading: PropTypes.bool,
//       isPlaying: PropTypes.bool,
//       isMuted: PropTypes.bool,
//       isFullscreen: PropTypes.bool
//     },
//     methods: {
//       play: PropTypes.func,
//       pause: PropTypes.func,
//       playPause: PropTypes.func,
//       stop: PropTypes.func,
//       seekTo: PropTypes.func,
//       mute: PropTypes.func,
//       muteUnmute: PropTypes.func,
//       setVolume: PropTypes.func,
//       fullscreen: PropTypes.func
//     },
//     __: {
//       setPlayer: PropTypes.func,
//       src: PropTypes.string,
//       vendor: PropTypes.string,
//       autoPlay: PropTypes.bool,
//       onReady: PropTypes.func,
//       onEnded: PropTypes.func,
//       mediaEvents: PropTypes.object
//     }
//   }
// }
