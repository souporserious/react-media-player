import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withMediaProps from '../decorators/with-media-props'

class MuteUnmute extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isMuted !== media.isMuted
  }

  _handleMuteUnmute = () => {
    this.props.media.muteUnmute()
  }

  render() {
    const { className, style, media } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleMuteUnmute}
      >
        {media.isMuted ? 'Unmute' : 'Mute'}
      </button>
    )
  }
}

export default withMediaProps(MuteUnmute)
