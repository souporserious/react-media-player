import React, { Component, PropTypes } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import { Media, Player, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'

const { CurrentTime, Progress, SeekBar, Duration, Volume, Fullscreen } = controls
const { formatTime } = utils

// Audio Panner
const AudioContext = (window.AudioContext || window.webkitAudioContext)
let audioContext

if (typeof AudioContext !== 'undefined') {
  audioContext = new AudioContext()
}

class Panner {
  constructor(element) {
    this._source = audioContext.createMediaElementSource(element)
  }

  connect() {
    this._splitter = audioContext.createChannelSplitter(2)
    this._gainLeft = audioContext.createGain()
    this._gainRight = audioContext.createGain()

    // connect the source to the splitter
    this._source.connect(this._splitter, 0, 0)

    // connect splitter outputs to respective gain nodes
    this._splitter.connect(this._gainLeft, 0)
    this._splitter.connect(this._gainRight, 1)

    // connect left and right nodes to the output
    this._gainLeft.connect(audioContext.destination, 0)
    this._gainRight.connect(audioContext.destination, 0)
  }

  disconnect() {
    this._source.disconnect(0)
  }

  setPosition(amount) {
    this._gainLeft.gain.value = (amount <= 0) ? 1 : 1 - amount
    this._gainRight.gain.value = (amount >= 0) ? 1 : 1 + amount
  }
}

class AudioPlayer extends Component {
  componentDidMount() {
    if (audioContext) {
      this._panner = new Panner(this._player.instance)
      this._panner.connect()
    }
  }

  componentWillUpdate(nextProps) {
    if (audioContext && this.props.src !== nextProps.src) {
      this._panner.disconnect()
      this._panner.connect()
    }
  }

  _handlePannerChange = ({ target }) => {
    this._panner.setPosition(+target.value)
  }

  render() {
    return (
      <Media>
        <div>
          <Player
            ref={c => this._player = c}
            src={this.props.src}
            useAudioObject
          />
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
