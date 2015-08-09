import React, { Component } from 'react';

class MuteUnmute extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.muted !== nextProps.muted;
  }

  _handleMuteUnmute() {
    this.props.onMuteUnmute();
  }

  render() {
    return(
      <button type="button" onClick={::this._handleMuteUnmute}>
        {this.props.muted ? 'Unmute' : 'Mute'}
      </button>
    );
  }
}

export default MuteUnmute;