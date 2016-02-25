import React, { Component } from 'react'
import vendorPropTypes from './vendor-prop-types'

class Video extends Component {
  static propTypes = vendorPropTypes

  play() {
    this._player.play()
  }

  pause() {
    this._player.pause()
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
    this.props.onVolumeChange(volume, muted)
  }

  render() {
    return (
      <video
        ref={c => this._player = c}
        src={this.props.src}
        onPlay={this._handlePlay}
        onPause={this._handlePause}
        onProgress={this._handleProgress}
        onLoadedMetadata={this._handleDuration}
        onTimeUpdate={this._handleTimeUpdate}
        onVolumeChange={this._handleVolumeChange}
      />
    )
  }
}

export default Video
