import React, { Component, PropTypes } from 'react'
import withMedia from '../decorators/with-media'

class PlayPause extends Component {
  shouldComponentUpdate({ isPlaying }) {
    return this.props.isPlaying !== isPlaying
  }

  _handlePlayPause = () => {
    this.props.playPause()
  }

  render() {
    const { className, style, isPlaying } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        { isPlaying ? 'Pause' : 'Play' }
      </button>
    )
  }
}

export default withMedia(PlayPause)
