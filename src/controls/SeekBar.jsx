import React, { Component, PropTypes } from 'react'

class SeekBar extends Component {
  static contextTypes = {
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    seekTo: PropTypes.func
  }

  _handleMouseDown = () => {
    this.context.onPause()
  }

  _handleMouseUp = () => {
    this.context.onPlay()
  }

  _handleChange = ({ target: { value } }) => {
    this.context.seekTo(+value)
  }

  render() {
    return (
      <input
        type="range"
        step="any"
        max={(this.context.duration).toFixed(4)}
        value={this.context.currentTime}
        onMouseDown={this._handleMouseDown}
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
      />
    )
  }
}

export default SeekBar
