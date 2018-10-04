import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import vendorPropTypes from './vendor-prop-types'

const audioContext = new (window.AudioContext || window.webkitAudioContext)()

class HTML5 extends Component {
  static propTypes = vendorPropTypes

  get instance() {
    return this._player
  }

  get node() {
    return findDOMNode(this._player)
  }

  componentDidMount() {
    if (this.props.vendor === 'audio' && this.props.extraProps.connectSource) {
      this.connectAudioContext()
    }
  }

  componentDidUpdate(lastProps) {
    if (this.props.vendor === 'audio' && this.props.extraProps.connectSource) {
      if (this.props.vendor !== lastProps.vendor) {
        this.connectAudioContext()
      } else if (this.props.src !== lastProps.src) {
        this.disconnectAudioContext()
        this.connectAudioContext()
      }
    }
  }

  componentWillUnmount() {
    if (this._source) {
      this.disconnectAudioContext()
    }
  }

  connectAudioContext() {
    if (this.props.extraProps.useAudioObject || !this._source) {
      this._source = audioContext.createMediaElementSource(this.node)
    }
    this._gain = audioContext.createGain()
    this.props.extraProps
      .connectSource(this._source, audioContext)
      .connect(this._gain)
    this._gain.connect(audioContext.destination)
  }

  disconnectAudioContext() {
    this._source.disconnect(0)
  }

  play() {
    if (audioContext.state === 'suspended') {
      audioContext.resume()
    }
    return this._player.play()
  }

  pause() {
    this._player.pause()
  }

  stop() {
    this._player.pause(0)
    this._player.currentTime = 0
  }

  seekTo(currentTime) {
    if (this._player.readyState > 0) {
      this._player.currentTime = currentTime
    }
  }

  mute(muted) {
    const nextVolume = muted ? 0 : 1
    this._player.muted = muted
    this.setVolume(nextVolume)
    this.props.onMute(muted)
    this.props.onVolumeChange(nextVolume)
  }

  setVolume(volume) {
    if (this._gain) {
      this._gain.gain.value = volume
    } else {
      this._player.volume = volume
    }
    this.props.onVolumeChange(volume)
  }

  get _playerEvents() {
    return {
      onCanPlay: this._handleCanPlay,
      onPlay: this._handlePlay,
      onPlaying: this._isNotLoading,
      onPause: this._handlePause,
      onEnded: this._handleEnded,
      onWaiting: this._isLoading,
      onError: this._handleError,
      onProgress: this._handleProgress,
      onLoadedMetadata: this._handleDuration,
      onTimeUpdate: this._handleTimeUpdate,
    }
  }

  _isLoading = () => {
    this.props.isLoading(true)
  }

  _isNotLoading = () => {
    this.props.isLoading(false)
  }

  _handleCanPlay = () => {
    this.props.onReady()
  }

  _handlePlay = () => {
    this.props.onPlay(true)
    this._isNotLoading()
  }

  _handlePause = () => {
    this.props.onPause(false)
  }

  _handleEnded = () => {
    this.props.onEnded(false)
  }

  _handleError = e => {
    this.props.onError(e)
    this._isNotLoading()
  }

  _handleProgress = ({ target: { buffered, duration } }) => {
    let progress = 0

    if (duration > 0 && buffered.length) {
      progress = buffered.end(buffered.length - 1) / duration
    }

    this.props.onProgress(progress)
  }

  _handleDuration = ({ target: { duration } }) => {
    this.props.onDuration(duration)
  }

  _handleTimeUpdate = ({ target: { currentTime } }) => {
    this.props.onTimeUpdate(currentTime)
  }

  render() {
    const {
      vendor,
      src,
      extraProps: { connectSource, useAudioObject, ...playerProps },
    } = this.props

    return createElement(vendor, {
      ref: c => (this._player = c),
      src,
      ...playerProps,
      ...this._playerEvents,
    })
  }
}

export default HTML5
