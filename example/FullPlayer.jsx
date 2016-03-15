import React, { Component, PropTypes } from 'react'
import { Media, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'

const { CurrentTime, Progress, SeekBar, Duration, Volume, Fullscreen } = controls
const { formatTime } = utils

class FullMedia extends Component {
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

class FullPlayer extends Component {
  render() {
    return (
      <Media vendor="audio" src={this.props.src}>
        {Player => <FullMedia Player={Player} />}
      </Media>
    )
  }
}

export default FullPlayer
