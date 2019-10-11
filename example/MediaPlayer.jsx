import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Media, Player, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import Repeat from './Repeat'

const {
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  Volume,
  Fullscreen,
} = controls
const { keyboardControls } = utils

const PrevTrack = props => (
  <svg width="10px" height="12px" viewBox="0 0 10 12" {...props}>
    <polygon fill="#FAFBFB" points="10,0 2,4.8 2,0 0,0 0,12 2,12 2,7.2 10,12" />
  </svg>
)

const NextTrack = props => (
  <svg width="10px" height="12px" viewBox="0 0 10 12" {...props}>
    <polygon fill="#FAFBFB" points="8,0 8,4.8 0,0 0,12 8,7.2 8,12 10,12 10,0" />
  </svg>
)

class MediaPlayer extends Component {
  _handlePrevTrack = () => {
    this.props.onPrevTrack()
  }

  _handleNextTrack = () => {
    this.props.onNextTrack()
  }

  _handleRepeatTrack = () => {
    this.props.onRepeatTrack()
  }

  _handleEnded = () => {
    this.props.onNextTrack()
  }

  render() {
    const { src, currentTrack, repeatTrack, autoPlay } = this.props
    return (
      <Media>
        {mediaProps => (
          <div
            className={
              'media-player' +
              (mediaProps.isFullscreen ? ' media-player--fullscreen' : '')
            }
            onKeyDown={keyboardControls.bind(null, mediaProps)}
            tabIndex="0"
          >
            <div
              className="media-player-element"
              onClick={() => mediaProps.playPause()}
            >
              <Player
                src={src}
                loop={repeatTrack}
                autoPlay={autoPlay}
                onEnded={this._handleEnded}
                config={{
                  youtube: { modestBranding: 1, controls: 1, start: 30 },
                }}
              />
            </div>
            <div className="media-controls media-controls--full">
              <div className="media-row">
                <CurrentTime className="media-control media-control--current-time" />
                {currentTrack}
                <Duration className="media-control media-control--duration" />
              </div>
              <div className="media-control-group media-control-group--seek">
                <Progress className="media-control media-control--progress" />
                <SeekBar className="media-control media-control--seekbar" />
              </div>
              <div className="media-row">
                <div className="media-control-group">
                  <MuteUnmute className="media-control media-control--mute-unmute" />
                </div>
                <div className="media-control-group">
                  <PrevTrack
                    className="media-control media-control--prev-track"
                    onClick={this._handlePrevTrack}
                  />
                  <PlayPause className="media-control media-control--play-pause" />
                  <NextTrack
                    className="media-control media-control--next-track"
                    onClick={this._handleNextTrack}
                  />
                </div>
                <div className="media-control-group">
                  <Repeat
                    className="media-control media-control--repeat"
                    isActive={repeatTrack}
                    onClick={this._handleRepeatTrack}
                  />
                  <Fullscreen />
                </div>
              </div>
            </div>
          </div>
        )}
      </Media>
    )
  }
}

export default MediaPlayer
