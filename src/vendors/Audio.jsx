import React from 'react'
import HTML5 from './HTML5'

class Audio extends HTML5 {
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
