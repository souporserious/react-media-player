import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import vendorPropTypes from './vendor-prop-types'

const AudioContext = typeof window === 'undefined' ? false : (window.AudioContext || window.webkitAudioContext)
let audioContext

if (AudioContext) {
  audioContext = new AudioContext()
}

class HTML5 extends Component {
  static propTypes = {
    ...vendorPropTypes,
    useAudioObject: PropTypes.bool,
  }

  get instance() {
    return this._player
  }

  get node() {
    return findDOMNode(this._player)
  }

  componentDidMount() {
    const { connectSource, useAudioObject } = this.props.extraProps
    if (this.props.vendor === 'audio') {
      if (useAudioObject) {
        this._createAudioObject()
        this._bindAudioObjectEvents()
      }
      if (audioContext && connectSource) {
        this._connectAudioContext()
      }
    }
  }

  componentDidUpdate(lastProps) {
    const { connectSource, useAudioObject } = this.props.extraProps
    const vendorChanged = this.props.vendor !== lastProps.vendor
    const sourceChanged = this.props.src !== lastProps.src
    if (useAudioObject) {
      if (vendorChanged) {
        this._createAudioObject()
      } else if (sourceChanged) {
        this._destroyAudioObject()
        this._createAudioObject()
      }
      this._bindAudioObjectEvents()
    }
    if (this.props.vendor === 'audio' && audioContext && connectSource) {
      if (vendorChanged) {
        this._connectAudioContext()
      } else if (sourceChanged) {
        this._disconnectAudioContext()
        this._connectAudioContext()
      }
    }
  }

  componentWillUnmount() {
    const { connectSource, useAudioObject } = this.props.extraProps
    if (audioContext && connectSource) {
      this._disconnectAudioContext()
    }
    if (useAudioObject) {
      this._destroyAudioObject()
    }
  }

  play() {
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume()
    }
    return this._player.play()
  }

  pause() {
    this._player.pause()
  }

  stop() {
    this._player.pause()
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

  _createAudioObject() {
    this._player = new Audio(this.props.src)
  }

  _destroyAudioObject() {
    this.stop()
    this._player.src = 'about:blank'
    this._playerStopped = true
  }

  _bindAudioObjectEvents() {
    const {
      connectSource,
      useAudioObject,
      ...playerProps
    } = this.props.extraProps
    const playerEvents = this._playerEvents
    Object.keys(playerProps).forEach(key => {
      this._player[key] = playerProps[key]
    })
    Object.keys(playerEvents).forEach(key => {
      this._player[key.toLowerCase()] = playerEvents[key]
    })
  }

  _connectAudioContext() {
    const { connectSource, useAudioObject } = this.props.extraProps
    if (useAudioObject || !this._source) {
      this._source = audioContext.createMediaElementSource(
        useAudioObject ? this.instance : this.node
      )
    }
    this._gain = audioContext.createGain()
    connectSource(this._source, audioContext).connect(this._gain)
    this._gain.connect(audioContext.destination)
  }

  _disconnectAudioContext() {
    this._source.disconnect(0)
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
    if (this._playerStopped) {
      this._playerStopped = false
    } else {
      this.props.onError(e)
      this._isNotLoading()
    }
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
    return useAudioObject
      ? null
      : createElement(vendor, {
          ref: c => (this._player = c),
          src,
          ...playerProps,
          ...this._playerEvents,
        })
  }
}

export default HTML5
