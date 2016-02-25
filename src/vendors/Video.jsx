import React, { Component } from 'react'

class Video extends Component {
  play() {
    this._player.play()
  }

  pause() {
    this._player.pause()
  }

  seekTo(currentTime) {
    this._player.currentTime = currentTime
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
      />
    )
  }
}

export default Video
