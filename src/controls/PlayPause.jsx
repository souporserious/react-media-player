import React, { Component, PropTypes } from 'react'
import withMediaProps from '../decorators/with-media-props'

class PlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.playing !== media.playing
  }

  _handlePlayPause = () => {
    const { media } = this.props
    media.setPlaying(!media.playing)
  }

  render() {
    const { className, style, media, children } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        { typeof children === 'function'
            ? children(media)
            : media.playing ? 'Pause' : 'Play'
        }
      </button>
    )
  }
}

export default withMediaProps(PlayPause)
