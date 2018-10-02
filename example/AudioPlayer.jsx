import React, { Component } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { Media, Player, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import detectChannels from './detectChannels'
import createAudioPlayer from './createAudioPlayer'

const {
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  Volume,
  Fullscreen,
} = controls
const { formatTime } = utils

const AudioContext = window.AudioContext || window.webkitAudioContext
let audioContext = new AudioContext()

function loadBuffer(path) {
  return fetch(path + '#t=1,2', {
    headers: {
      // Range: 'bytes=0-1',
    },
  })
    .then(response => {
      console.log({ response })
      return response.arrayBuffer()
    })
    .then(buffer => {
      console.log({ buffer })
      return new Promise((resolve, reject) =>
        audioContext.decodeAudioData(
          buffer,
          data => resolve(data),
          err => reject(err)
        )
      )
    })
}

class Panner {
  // storedChannelCounts = {}

  // getChannelCount = path => {
  //   const previousChannelCount = this.storedChannelCounts[path]
  //   if (previousChannelCount) {
  //     return new Promise(resolve => resolve(previousChannelCount))
  //   } else {
  //     return fetch(path)
  //       .then(response => response.arrayBuffer())
  //       .then(
  //         buffer =>
  //           new Promise((resolve, reject) => {
  //             const { numberOfChannels } = audioContext.decodeAudioData(
  //               buffer,
  //               data => resolve(data),
  //               err => reject(err)
  //             )
  //             this.storedChannelCounts[path] = numberOfChannels
  //             return numberOfChannels
  //           })
  //       )
  //   }
  // }

  constructor(element) {
    this._source = audioContext.createMediaElementSource(element)
  }

  connect() {
    this._splitter = audioContext.createChannelSplitter(2)
    this._merger = audioContext.createChannelMerger(2)
    this._gainLeft = audioContext.createGain()
    this._gainRight = audioContext.createGain()
    this._volume = audioContext.createGain()

    // connect the source to the splitter
    this._source.connect(
      this._splitter,
      0,
      0
    )

    // connect splitter outputs to respective gain nodes
    this._splitter.connect(
      this._gainLeft,
      0
    )
    this._splitter.connect(
      this._gainRight,
      1
    )

    // connect respective gain nodes to left and right channels of merger
    this._gainLeft.connect(
      this._merger,
      0,
      0
    )
    this._gainRight.connect(
      this._merger,
      0,
      1
    )

    // connect merger to volume
    this._merger.connect(
      this._volume,
      0
    )

    // connect volume with output
    this._volume.connect(
      audioContext.destination,
      0
    )
  }

  disconnect() {
    this._source.disconnect(0)
  }

  setPosition(amount) {
    this._gainLeft.gain.value = amount <= 0 ? 1 : 1 - amount
    this._gainRight.gain.value = amount >= 0 ? 1 : 1 + amount
  }

  setVolume(volume) {
    this._volume.gain.value = volume
  }
}

class AudioPlayer extends Component {
  componentDidMount() {
    this._connectPanner()
  }

  componentDidUpdate(lastProps) {
    if (lastProps.src !== this.props.src) {
      this._disconnectPanner()
      this._connectPanner()
    }
  }

  _connectPanner() {
    loadBuffer(this.props.src).then(buffer => {
      this.audioPlayer = createAudioPlayer(buffer, audioContext)
    })
    // this.panner = new Panner(this.audioPlayer.source)
    // this.panner.connect()
  }

  _disconnectPanner() {
    // this.panner.disconnect()
    // this.panner = null
  }

  _handlePannerChange = ({ target }) => {
    this.audioPlayer.setPosition(+target.value)
  }

  render() {
    return (
      <Media>
        <div>
          <Player
            ref={c => (this._player = c)}
            src={this.props.src}
            useAudioObject
            // defaultCurrentTime={20}
            // defaultVolume={0.1}
          />
          <button onClick={() => this.audioPlayer.play()}>Play</button>
          <button onClick={() => this.audioPlayer.pause()}>Pause</button>
          <button onClick={() => this.audioPlayer.stop()}>Stop</button>
          <div className="media-controls">
            <PlayPause className="media-control media-control--play-pause" />
            <CurrentTime className="media-control media-control--current-time" />
            <SeekBar className="media-control media-control--volume-range" />
            <Duration className="media-control media-control--duration" />
            <MuteUnmute className="media-control media-control--mute-unmute" />
            <Volume className="media-control media-control--volume" />
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
