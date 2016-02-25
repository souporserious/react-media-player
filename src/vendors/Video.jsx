import React, { Component } from 'react'

class Video extends Component {
  play() {
    this._player.play()
  }

  pause() {
    this._player.pause()
  }

  render() {
    return (
      <video
        ref={c => this._player = c}
        src={this.props.src}
      />
    )
  }
}

export default Video
