import React, { Component } from 'react'
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

  _handlePlay = () => {
    this.props.onPlaying(true)
  }

  _handlePause = () => {
    this.props.onPlaying(false)
  }

  _handleProgress = ({ target: { buffered, duration } }) => {
    let progress = 0

    if (buffered.length > 0) {
      progress = buffered.end(0)/duration
    }

    this.props.onProgress(progress)
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
}

export default HTML5
