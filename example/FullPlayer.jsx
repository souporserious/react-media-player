import React, { Component, PropTypes } from 'react'
import { media, withMedia, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'

const { CurrentTime, Progress, SeekBar, Duration, Volume, Fullscreen } = controls
const { formatTime } = utils

class FullPlayer extends Component {
  static contextTypes = {
    isLoading: PropTypes.bool,
    playPause: PropTypes.func
  }

  render() {
    const { Player } = this.props
    const { isLoading, playPause, currentTime, duration } = this.context

    return (
      <div>
        {isLoading && <span>Loading...</span>}
        <div onClick={() => playPause()}>
          {Player}
        </div>
        <nav className="media-controls">
          <PlayPause className="media-control media-control--play-pause"/>
          <CurrentTime className="media-control media-control--current-time"/>
          <SeekBar className="media-control media-control--volume-range"/>
          <Duration className="media-control media-control--duration"/>
          <MuteUnmute className="media-control media-control--mute-unmute"/>
          <Volume className="media-control media-control--volume"/>
        </nav>
      </div>
    )
  }
}

export default media(withMedia(FullPlayer), 'audio')
