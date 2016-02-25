import React, { Component } from 'react'

class Video extends Component {
  play() {
    this._player.play()
  }

  pause() {
    this._player.pause()
  }

  _handlePlay = () => {
    this.props.onPlaying(true)
  }

  _handlePause = () => {
    this.props.onPlaying(false)
  }

  render() {
    return (
      <video
        ref={c => this._player = c}
        src={this.props.src}
        onPlay={this._handlePlay}
        onPause={this._handlePause}
      />
    )
  }
}

export default Video
