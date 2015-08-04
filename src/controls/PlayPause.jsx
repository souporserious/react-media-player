import React, { Component } from 'react';

class PlayPause {

  shouldComponentUpdate(nextProps) {
    return this.props.playing !== nextProps.playing;
  }

  _handlePlayPause() {
    this.props.onPlayPause();
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