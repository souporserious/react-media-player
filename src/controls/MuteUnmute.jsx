import React, {Component} from 'react';

class MuteUnmute {

  shouldComponentUpdate(nextProps) {
    return this.props.muted !== nextProps.muted;
  }

  _handleMuteUnmute() {

    const { player } = this.props;

    if(player.muted === false) {
      player.muted = true;
    } else {
      player.muted = false;
    }
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