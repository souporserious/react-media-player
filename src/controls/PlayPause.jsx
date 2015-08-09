import React, { Component } from 'react';

class PlayPause extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.playing !== nextProps.playing;
  }

  _handlePlayPause() {
    this.props.onPlayPause();
  }

  render() {
    return(
      <button type="button" onClick={::this._handlePlayPause}>
        {this.props.playing ? 'Pause' : 'Play'}
      </button>
    );
  }
}

export default PlayPause;