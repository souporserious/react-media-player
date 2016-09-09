import React, { Component, PropTypes } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import { Media, Player, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'

const { CurrentTime, Progress, SeekBar, Duration, Volume, Fullscreen } = controls
const { formatTime } = utils

const audioContext = new (window.AudioContext || window.webkitAudioContext)()
const panner = audioContext.createPanner()

panner.setPosition(0, 0, 1)
panner.panningModel = 'equalpower'
panner.connect(audioContext.destination)

class AudioPlayer extends Component {
  componentDidMount() {
    const source = audioContext.createMediaElementSource(this._player.instance)
    source.connect(panner)
    panner.connect(audioContext.destination)
  }

  _handlePannerChange = ({ target }) => {
    const x = +target.value
    const y = 0
    const z = 1 - Math.abs(x)
    panner.setPosition(x, y, z)
  }

  render() {
    return (
      <Media src={this.props.src}>
        <div>
          <Player ref={c => this._player = c} useAudioObject/>
          <div className="media-controls">
            <PlayPause className="media-control media-control--play-pause"/>
            <CurrentTime className="media-control media-control--current-time"/>
            <SeekBar className="media-control media-control--volume-range"/>
            <Duration className="media-control media-control--duration"/>
            <MuteUnmute className="media-control media-control--mute-unmute"/>
            <Volume className="media-control media-control--volume"/>
          </div>
          <input
            type="range"
            defaultValue="0"
            min="-1"
            max="1"
            step="any"
            onChange={this._handlePannerChange}
          />
        </div>
      </Media>
    )
  }
}

export default AudioPlayer
