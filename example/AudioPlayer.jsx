import React, { Component, PropTypes } from 'react'
import { withMediaPlayer, withMediaProps, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'

const { CurrentTime, Progress, SeekBar, Duration, Volume, Fullscreen } = controls
const { formatTime } = utils

class AudioPlayer extends Component {
  render() {
    const { Player, media } = this.props
    const { isLoading, playPause, currentTime, duration } = media

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

export default withMediaPlayer(withMediaProps(AudioPlayer), 'audio')
