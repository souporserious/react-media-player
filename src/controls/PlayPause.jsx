import React, {Component} from 'react';

class PlayPause {

  shouldComponentUpdate(nextProps) {
    return this.props.playing !== nextProps.playing;
  }

  _handlePlayPause() {

    const { player } = this.props;

    if(player.paused) {
      player.play();
    } else {
      player.pause();
    }
  }

  render() {
    return(
      <button onClick={::this._handlePlayPause}>
        {this.props.playing ? 'Pause' : 'Play'}
      </button>
    );
  }
}

export default PlayPause;