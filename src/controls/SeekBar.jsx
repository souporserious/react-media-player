import React, { Component } from 'react';

class SeekBar extends Component {

  _handleChange(e) {
    this.props.onCurrentTimeChange(+e.target.value);
  }

  _handleMouseDown() {
    this.props.pause();
  }

  _handleMouseUp() {
    this.props.play();
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