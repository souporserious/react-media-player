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
      <button
        id={this.props.id}
        className={this.props.className}
        type="button"
        onClick={this._handlePlayPause}
      >
        {this.context.isPlaying ? 'Pause' : 'Play'}
      </button>
    )
  }
}

export default PlayPause
