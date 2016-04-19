import React, { Component, PropTypes } from 'react'
import withMedia from '../decorators/with-media'

class MuteUnmute extends Component {
  shouldComponentUpdate({ isMuted }) {
    return this.props.isMuted !== isMuted
  }

  _handleMuteUnmute = () => {
    this.props.muteUnmute()
  }

  render() {
    const { className, style, isMuted } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleMuteUnmute}
      >
        { isMuted ? 'Unmute' : 'Mute' }
      </button>
    )
  }
}

export default withMedia(MuteUnmute)
