import React, { Component, PropTypes } from 'react'

class PlayPause extends Component {
  static contextTypes = {
    isPlaying: PropTypes.bool,
    playPause: PropTypes.func
  }

  _handlePlayPause = () => {
    this.context.playPause()
  }

  render() {
    return (
      <button type="button" onClick={this._handlePlayPause}>
        {this.context.isPlaying ? 'Pause' : 'Play'}
      </button>
    )
  }
}

export default PlayPause
