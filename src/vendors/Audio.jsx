import React, { Component } from 'react'
import Video from './Video'
import vendorPropTypes from './vendor-prop-types'

class Audio extends Video {
  render() {
    return (
      <audio
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

export default Audio
