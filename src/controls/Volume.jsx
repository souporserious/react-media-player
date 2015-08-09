import React, { Component } from 'react';

class Volume {

  dragging = false

  _handleChange(e) {
    
    const { player } = this.props;

    if(player.muted) {
      player.muted = false;
    }

    player.volume = (+e.target.value).toFixed(4);
  }

  _handleDragging() {
    this.dragging = true;
  }

  _handleDrag(e) {

    const { player } = this.props;

    if(this.dragging) {

      if(player.muted) {
        player.muted = false;
      }

      player.volume = (+e.target.value).toFixed(4);

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
        min={0}
        max={1}
        value={this.props.volume}
        onChange={::this._handleChange}
        onMouseDown={::this._handleDragging}
        onMouseMove={::this._handleDrag}
        onMouseUp={::this._handleDrag}
      />
    );
  }
}

export default Volume;