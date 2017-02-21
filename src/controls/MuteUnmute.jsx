import React, { Component, PropTypes } from 'react'
import withMediaProps from '../decorators/with-media-props'

class MuteUnmute extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.muted !== media.muted
  }

  _handleMuteUnmute = () => {
    const { media } = this.props
    media.setMuted(!media.muted)
  }

  render() {
    const { className, style, media, children } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleMuteUnmute}
      >
        { typeof children === 'function'
            ? children(media)
            : media.muted ? 'Unmute' : 'Mute'
        }
      </button>
    )
  }
}

export default withMediaProps(MuteUnmute)
