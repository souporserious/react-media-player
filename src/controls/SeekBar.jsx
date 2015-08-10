import React, { Component } from 'react';

class SeekBar extends Component {

  _handleChange(e) {
    const { player } = this.props;
    player.currentTime = +e.target.value;
  }

  _handleMouseDown() {
    this.props.player.pause();
  }

  _handleMouseUp() {
    this.props.player.play();
  }

  render() {
    return(
      <input
        type="range"
        step="any"
        max={(this.props.duration).toFixed(4)}
        value={this.props.current}
        onChange={::this._handleChange}
        onMouseDown={::this._handleMouseDown}
        onMouseUp={::this._handleMouseUp}
      />
    );
  }
}

export default SeekBar;