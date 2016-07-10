import React, { Component, createElement } from 'react'
import vendorPropTypes from './vendor-prop-types'

class HTML5 extends Component {
  static propTypes = vendorPropTypes

  componentWillMount() {
    if (this.props.vendor === 'audio') {
      const playerEvents = this._getPlayerEvents()
      this._player = new Audio(this.props.src)

      Object.keys(playerEvents).forEach(key => {
        this._player[key.toLowerCase()] = playerEvents[key]
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.vendor === 'audio' && nextProps.vendor === 'audio' &&
        this.props.src !== nextProps.src) {
      this._player.src = nextProps.src
    }
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

  _getPlayerEvents() {
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

  render() {
    const { vendor, src } = this.props

    if (vendor === 'video') {
      return createElement('video', {
        ref: c => this._player = c,
        src,
        ...this._getPlayerEvents()
      })
    } else {
      return null
    }
  }
}

export default HTML5
