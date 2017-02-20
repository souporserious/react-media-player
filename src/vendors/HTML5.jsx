import React, { Component, PropTypes, createElement } from 'react'
import { findDOMNode } from 'react-dom'
import vendorPropTypes from './vendor-prop-types'

class HTML5 extends Component {
  static propTypes = vendorPropTypes

  play() {
    this._player.play()
  }

  pause() {
    this._player.pause()
  }

  stop() {
    this.pause()
    this.seekTo(0)
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

  getCurrentTime() {
    return this._player.currentTime
  }

  _handleCanPlay = (e) => {
    this.props.onReady(e)
  }

  _handlePlay = (e) => {
    this.props.onPlay(e)
  }

  _handlePause = (e) => {
    this.props.onPause(e)
  }

  _handleEnded = (e) => {
    this.props.onEnded(e)
  }

  _handleError = (e) => {
    this.props.onError(e)
  }

  _handleProgress = ({ target: { buffered, duration } }) => {
    let progress = 0

    if (duration > 0) {
      progress = (buffered.end(buffered.length - 1) / duration)
    }

    this.props.onProgress(progress)
  }

  _handleDuration = (e) => {
    this.props.onDuration(+e.target.duration)
  }

  _handleTimeUpdate = (e) => {
    this.props.onTimeUpdate(+e.target.currentTime)
  }

  _handleVolumeChange = (e) => {
    this.props.onVolumeChange(+e.target.volume)
  }

  render() {
    const {
      vendor,
      currentTime,
      duration,
      playbackRate,
      onMute,
      onDuration,
      onReady,
      ...restProps
    } = this.props

    return createElement(vendor, {
      ref: c => this._player = c,
      ...restProps,
      onCanPlay:        this._handleCanPlay,
      onPlay:           this._handlePlay,
      onPlaying:        this._isNotLoading,
      onPause:          this._handlePause,
      onEnded:          this._handleEnded,
      onWaiting:        this._isLoading,
      onError:          this._handleError,
      onProgress:       this._handleProgress,
      onLoadedMetadata: this._handleDuration,
      onTimeUpdate:     this._handleTimeUpdate,
      onVolumeChange:   this._handleVolumeChange
    })
  }
}

export default HTML5
