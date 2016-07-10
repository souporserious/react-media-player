import React, { Component, PropTypes } from 'react'
import { withMediaPlayer, withMediaProps, withKeyboardControls, controls } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import Fullscreen from './Fullscreen'

const { CurrentTime, Progress, SeekBar, Duration, Volume } = controls

class VideoPlayer extends Component {
  render() {
    const { Player, keyboardControls, media } = this.props
    const { isFullscreen, playPause } = media
    let classes = 'media-player'

    if (isFullscreen) {
      classes += ' media-player--fullscreen'
    }

    return (
      <div className={classes} onKeyDown={keyboardControls} tabIndex="0">
        <div onClick={() => playPause()}>
          {Player}
        </div>
        <nav className="media-controls">
          <PlayPause className="media-control media-control--play-pause" />
          <CurrentTime className="media-control media-control--current-time" />
          <div className="media-control-group media-control-group--seek">
            <Progress className="media-control media-control--progress" />
            <SeekBar className="media-control media-control--seekbar" />
          </div>
          <Duration className="media-control media-control--duration" />
          <MuteUnmute className="media-control media-control--mute-unmute" />
          <Volume className="media-control media-control--volume" />
          <Fullscreen className="media-control media-control--fullscreen" />
        </nav>
      </div>
    )
  }
}

export default withMediaPlayer(withMediaProps(withKeyboardControls(VideoPlayer)))
