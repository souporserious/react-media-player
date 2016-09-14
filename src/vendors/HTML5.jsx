import React, { Component, PropTypes, createElement } from 'react'
import vendorPropTypes from './vendor-prop-types'

class HTML5 extends Component {
  static propTypes = {
    ...vendorPropTypes,
    useAudioObject: PropTypes.bool
  }

  componentWillMount() {
    const { src, extraProps: { useAudioObject } } = this.props

    if (useAudioObject) {
      this._createAudioObject(src)
      this._bindAudioObjectEvents(this.props)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { src, extraProps: { useAudioObject } } = nextProps

    if (useAudioObject) {
      // create a new audio object if the source has changed
      if (this.props.src !== src) {
        this._createAudioObject(src)
      }
      // bind any new props to current audio object
      this._bindAudioObjectEvents(nextProps)
    }
  }

  componentWillUnmount() {
    if (this.props.extraProps.useAudioObject) {
      this._destroyAudioObject()
    }
  }

  get instance() {
    return this._player
  }

  play() {
    this._player.play()
  }

  pause() {
    this._player.pause()
  }

  stop() {
    this._player.pause()
    this._player.currentTime = 0
  }

  seekTo(currentTime) {
    this._player.currentTime = currentTime
  }

  mute(muted) {
    this._player.muted = muted
  }

  setVolume(volume) {
    this._player.volume = volume
  }

  get _playerEvents() {
    return {
      onCanPlay: this._handleCanPlay,
      onPlay: this._handlePlay,
      onPause: this._handlePause,
      onEnded: this._handleEnded,
      onError: this._handleError,
      onProgress: this._handleProgress,
      onLoadedMetadata: this._handleDuration,
      onTimeUpdate: this._handleTimeUpdate,
      onVolumeChange: this._handleVolumeChange
    }
  }

  _handleCanPlay = () => {
    this.props.onReady()
  }

  _handlePlay = () => {
    this.props.onPlay(true)
  }

  _handlePause = () => {
    this.props.onPause(false)
  }

  _handleEnded = () => {
    this.props.onEnded(false)
  }

  _handleError = (e) => {
    this.props.onError(e)
  }

  _handleProgress = ({ target: { buffered, duration } }) => {
    let progress = 0

    if (buffered.length > 0) {
      progress = (buffered.end(0) / duration)
    }

    this.props.onProgress(isNaN(progress) ? 0 : progress)
  }

  _handleDuration = ({ target: { duration }}) => {
    this.props.onDuration(duration)
  }

  _handleTimeUpdate = ({ target: { currentTime } }) => {
    this.props.onTimeUpdate(currentTime)
  }

  _handleVolumeChange = ({ target: { volume, muted } }) => {
    this.props.onMute(muted)
    this.props.onVolumeChange(volume)
  }

  // Handle Audio Object
  _createAudioObject(src) {
    // destroy any previous instances created
    if (this._player) {
      this._destroyAudioObject()
    }
    this._player = new Audio(src)
  }

  _destroyAudioObject() {
    this.stop()
    delete this._player
  }

  _bindAudioObjectEvents({ extraProps }) {
    const playerEvents = this._playerEvents

    Object.keys(extraProps).forEach(key => {
      this._player[key] = extraProps[key]
    })

    Object.keys(playerEvents).forEach(key => {
      this._player[key.toLowerCase()] = playerEvents[key]
    })
  }

  render() {
    const { vendor, src } = this.props
    const { useAudioObject, ...extraProps } = this.props.extraProps

    if (!useAudioObject) {
      return createElement(vendor, {
        ref: c => this._player = c,
        src,
        ...extraProps,
        ...this._playerEvents
      })
    } else {
      return null
    }
  }
}

export default HTML5
