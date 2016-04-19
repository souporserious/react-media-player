import React, { Component, PropTypes } from 'react'
import withMedia from '../decorators/with-media'

class SeekBar extends Component {
  _isPlayingOnMouseDown = false
  _onChangeUsed = false

  shouldComponentUpdate({ currentTime, duration }) {
    return this.props.currentTime !== currentTime ||
           this.props.duration !== duration
  }

  _handleMouseDown = () => {
    this._isPlayingOnMouseDown = this.props.isPlaying
    this.props.pause()
  }

  _handleMouseUp = ({ target: { value } }) => {
    // seek on mouseUp as well because of this bug in <= IE11
    // https://github.com/facebook/react/issues/554
    if (!this._onChangeUsed) {
      this.props.seekTo(+value)
    }

    // only play if media was playing prior to mouseDown
    if (this._isPlayingOnMouseDown) {
      this.props.play()
    }
  }

  _handleChange = ({ target: { value } }) => {
    this.props.seekTo(+value)
    this._onChangeUsed = true
  }

  render() {
    const { duration, currentTime, className, style } = this.props
    return (
      <input
        type="range"
        step="any"
        max={(duration).toFixed(4)}
        value={currentTime}
        onMouseDown={this._handleMouseDown}
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
        className={className}
        style={{
          backgroundSize: (currentTime * 100 / duration) + '% 100%',
          ...style
        }}
      />
    )
  }
}

export default withMedia(SeekBar)
