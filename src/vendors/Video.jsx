import React from 'react'
import HTML5 from './HTML5'

class Video extends HTML5 {
  render() {
    return (
      <video
        ref={c => this._player = c}
        src={this.props.src}
        onCanPlay={this._handleCanPlay}
        onPlay={this._handlePlay}
        onPause={this._handlePause}
        onEnded={this._handleEnded}
        onProgress={this._handleProgress}
        onLoadedMetadata={this._handleDuration}
        onTimeUpdate={this._handleTimeUpdate}
        onVolumeChange={this._handleVolumeChange}
      />
    )
  }
}

export default Video
