import React, { Component, PropTypes } from 'react'

class SeekBar extends Component {
  static contextTypes = {
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    play: PropTypes.func,
    pause: PropTypes.func,
    seekTo: PropTypes.func,
    isPlaying: PropTypes.bool
  }

  _playingOnMouseDown = false

  _handleMouseDown = () => {
    this._playingOnMouseDown = this.context.isPlaying
    this.context.pause()
  }

  _handleMouseUp = () => {
    // only play if media was playing prior to mouseDown
    if (this._playingOnMouseDown) {
      this.context.play()
    }
  }

  _handleChange = ({ target: { value } }) => {
    this.context.seekTo(+value)
  }

  render() {
    const { duration, currentTime } = this.context
    return (
      <input
        id={this.props.id}
        className={this.props.className}
        type="range"
        step="any"
        max={(duration).toFixed(4)}
        value={currentTime}
        onMouseDown={this._handleMouseDown}
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
        style={{
          backgroundSize: (currentTime * 100 / duration) + '% 100%'
        }}
      />
    )
  }
}

export default SeekBar
