import React, { Component, createElement } from 'react'
import { findDOMNode } from 'react-dom'
import vendorPropTypes from './vendor-prop-types'
import specialAssign from '../utils/special-assign'

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
    this.props.onMute(muted)
  }

  setVolume(volume) {
    this._player.volume = volume
  }

  setPlaybackRate(rate) {
    this._player.playbackRate = rate
  }

  setLoop(loop) {
    this._player.loop = loop
  }

  getNode() {
    return findDOMNode(this._player)
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
    const props = specialAssign({
      ref:              c => this._player = c,
      src:              this.props.src,
      onCanPlay:        this._handleCanPlay,
      onPlay:           this._handlePlay,
      onPause:          this._handlePause,
      onEnded:          this._handleEnded,
      onError:          this._handleError,
      onProgress:       this._handleProgress,
      onLoadedMetadata: this._handleDuration,
      onTimeUpdate:     this._handleTimeUpdate,
      onVolumeChange:   this._handleVolumeChange
    }, this.props, vendorPropTypes)

    return createElement(this.props.vendor, props)
  }
}

export default HTML5
