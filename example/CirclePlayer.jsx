import React, { Component, PropTypes } from 'react'
import CircleProgress from './CircleProgress'
import { Media, controls, utils } from '../src/react-media-player'

class CirclePlayerMedia extends Component {
  render() {
    return (
      <Media src={this.props.src}>
        {Player => <CirclePlayer Player={Player} />}
      </Media>
    )
  }
}

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

  render() {
    const { playPause, isPlaying } = this.context
    return (
      <div>
        {this.props.Player}
        <svg width="32px" height="32px" viewBox="0 0 32 32" className="circle-progress" onClick={() => playPause()}>
          <circle cx="16" cy="16" r="14.5" className="circle-progress__background" />
          <circle ref={c => this._svg = c} cx="16" cy="16" r="14.5" className="circle-progress__foreground" />
          {
            isPlaying ?
              <g>
                <rect fill="#231F20" strokeWidth="0" width="3" height="9" x="11.5" y="11.5" />
            	  <rect fill="#231F20" strokeWidth="0" width="3" height="9" x="17.5" y="11.5" />
              </g> :
              <polygon fill="#231F20" strokeWidth="0" points="13.083,11.5 20.583,16 13.083,20.5 "/>
          }
        </svg>
      </div>
    )
  }
}

export default CirclePlayerMedia
