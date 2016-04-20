import React, { Component, PropTypes } from 'react'
import CircleProgress from './CircleProgress'
import { withMediaPlayer, withMediaProps, controls } from '../src/react-media-player'

class CircleMediaPlayer extends Component {
  componentDidMount() {
    this._circle = new CircleProgress(this._svg)
  }

  componentDidUpdate() {
    const { currentTime, duration } = this.props.media
    this._circle.setProgress(currentTime / duration * 100)
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

  render() {
    const { Player, media } = this.props
    const { playPause, isPlaying } = media

    return (
      <button className="circle-media-player" onClick={() => playPause()}>
        { Player }
        <svg width="32px" height="32px" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14.5" className="circle-media-player__background" />
          <circle ref={c => this._svg = c} cx="16" cy="16" r="14.5" className="circle-media-player__foreground" />
          {
            isPlaying
              ? this.renderPause()
              : this.renderPlay()
          }
        </svg>
      </button>
    )
  }
}

export default withMediaPlayer(withMediaProps(CircleMediaPlayer), 'audio')
