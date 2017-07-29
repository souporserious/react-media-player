import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircleProgress from './CircleProgress'
import { Media, Player } from '../src/react-media-player'

class CircleMediaPlayer extends Component {
  componentDidMount() {
    this._circle = new CircleProgress(this._svg)
  }

  renderPlay() {
    return (
      <polygon
        points="13.083,11.5 20.583,16 13.083,20.5 "
        className="circle-media-player__play"
      />
    )
  }

  renderPause() {
    return (
      <g className="circle-media-player__pause">
        <rect width="3" height="9" x="11.5" y="11.5" />
        <rect width="3" height="9" x="17.5" y="11.5" />
      </g>
    )
  }

  _handleTimeUpdate = ({ currentTime, duration }) => {
    this._circle.setProgress(currentTime / duration * 100)
  }

  render() {
    return (
      <Media>
        {({ isPlaying, playPause }) =>
          <button className="circle-media-player" onClick={() => playPause()}>
            <Player
              src={this.props.src}
              vendor="audio"
              onTimeUpdate={this._handleTimeUpdate}
            />
            <svg width="32px" height="32px" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14.5" className="circle-media-player__background" />
              <circle ref={c => this._svg = c} cx="16" cy="16" r="14.5" className="circle-media-player__foreground" />
              { isPlaying
                  ? this.renderPause()
                  : this.renderPlay()
              }
            </svg>
          </button>
        }
      </Media>
    )
  }
}

export default CircleMediaPlayer
