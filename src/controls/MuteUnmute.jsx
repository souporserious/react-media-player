import React, { Component, PropTypes } from 'react'

class MuteUnmute extends Component {
  static contextTypes = {
    muteUnmute: PropTypes.func,
    isMuted: PropTypes.bool
  }

  _handleMuteUnmute = () => {
    this.context.muteUnmute()
  }

  render() {
    return (
      <button type="button" onClick={this._handleMuteUnmute}>
        {this.context.isMuted ? 'Unmute' : 'Mute'}
      </button>
    )
  }
}

export default MuteUnmute
