import React, { Component, PropTypes } from 'react'

class SeekBar extends Component {
  static contextTypes = {
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    play: PropTypes.func,
    pause: PropTypes.func,
    seekTo: PropTypes.func
  }

  _handleMouseDown = () => {
    this.context.pause()
  }

  _handleMouseUp = () => {
    this.context.play()
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
