import React, { Component } from 'react';

class MuteUnmute {

  shouldComponentUpdate(nextProps) {
    return this.props.muted !== nextProps.muted;
  }

  _handleMuteUnmute() {
    this.props.onMuteUnmute();
  }

  render() {
    return(
      <button onClick={::this._handleMuteUnmute}>
        {this.props.muted ? 'Unmute' : 'Mute'}
      </button>
    );
  }
}

export default MuteUnmute;