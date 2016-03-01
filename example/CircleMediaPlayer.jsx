import React, { Component, PropTypes } from 'react'
import CircleProgress from './CircleProgress'
import { Media, controls, utils } from '../src/react-media-player'

class CirclePlayer extends Component {
  static contextTypes = {
    isPlaying: PropTypes.bool,
    playPause: PropTypes.func,
    currentTime: PropTypes.number,
    duration: PropTypes.number
  }

  componentDidMount() {
    this._circle = new CircleProgress(this._svg)
  }

  componentDidUpdate() {
    const { currentTime, duration } = this.context
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
    const { Player } = this.props
    const { playPause, isPlaying } = this.context

    return (
      <button className="circle-media-player">
        { Player }
        <svg width="32px" height="32px" viewBox="0 0 32 32" onClick={() => playPause()}>
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

class CircleMediaPlayer extends Component {
  render() {
    return (
      <Media vendor="audio" src={this.props.src}>
        {Player => <CirclePlayer Player={Player} />}
      </Media>
    )
  }
}

export default CircleMediaPlayer
