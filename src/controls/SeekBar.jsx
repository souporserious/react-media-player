import React, { Component } from 'react';

class SeekBar extends Component {

  dragging = false

  _handleChange(e) {
    const { player } = this.props;
    player.currentTime = +e.target.value;
  }

  _handleDragging() {
    this.dragging = true;
  }

  _handleDrag(e) {

    const { player } = this.props;

    if(this.dragging) {

      player.currentTime = +e.target.value;

      if(e.type === 'mouseup') {
        this.dragging = false;
      }
    }
  }

  render() {
    return(
      <input
        type="range"
        step="any"
        max={(this.props.duration).toFixed(4)}
        value={this.props.current}
        onChange={::this._handleChange}
        onMouseDown={::this._handleDragging}
        onMouseMove={::this._handleDrag}
        onMouseUp={::this._handleDrag}
      />
    );
  }
}

export default SeekBar;