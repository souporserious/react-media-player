import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import vendorPropTypes from './vendor-prop-types'

class HTML5 extends Component {
  static propTypes = vendorPropTypes

  get instance() {
    return this._player
  }

  get node() {
    return findDOMNode(this._player)
  }

  play() {
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
    this._player.muted = muted
  }

  setVolume(volume) {
    this._player.volume = volume
  }

  get _playerEvents() {
    return {
      onCanPlay: this._handleCanPlay,
      onCanPlayThrough: this._isNotLoading,
      onPlay: this._handlePlay,
      onPlaying: this._isNotLoading,
      onPause: this._handlePause,
      onEnded: this._handleEnded,
      onWaiting: this._isLoading,
      onError: this._handleError,
      onProgress: this._handleProgress,
      onLoadedMetadata: this._handleDuration,
      onTimeUpdate: this._handleTimeUpdate,
      onVolumeChange: this._handleVolumeChange,
      onSeeking: this._isLoading,
      onSeeked: this._isNotLoading,
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
    this._isNotLoading()
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

  _handleVolumeChange = ({ target: { volume, muted } }) => {
    this.props.onMute(muted)
    this.props.onVolumeChange(volume)
  }

  render() {
    const { vendor, src, extraProps } = this.props

    return createElement(vendor, {
      ref: c => (this._player = c),
      src,
      ...extraProps,
      ...this._playerEvents,
    })
  }
}

export default HTML5
