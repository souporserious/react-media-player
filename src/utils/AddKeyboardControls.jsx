import React, { Component, PropTypes, createElement } from 'react'

const KEYS = {
  ZERO: 48,
  F: 70,
  J: 74,
  K: 75,
  L: 76,
  COMMA: 188,
  PERIOD: 190,
  SPACEBAR: 32,
  END: 35,
  HOME: 36,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40,
}

const AddKeyboardControls = ComposedComponent => class extends Component {
  static contextTypes = {
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
    playPause: PropTypes.func,
    seekTo: PropTypes.func,
    setVolume: PropTypes.func,
    fullscreen: PropTypes.func
  }

  _skipTime = (amount) => {
    const { currentTime, duration, seekTo } = this.context
    let newTime = (currentTime + amount)

    if (newTime < 0) {
      newTime = 0
    } else if (newTime > duration) {
      newTime = duration
    }

    seekTo(newTime)
  }

  _addVolume(amount) {
    const { setVolume, volume } = this.context
    let newVolume = (volume + (amount * 0.01))

    if (newVolume < 0) {
      newVolume = 0
    } else if (newVolume > 1) {
      newVolume = 1
    }

    setVolume(newVolume)
  }

  _handleKeyDown = (e) => {
    const { keyCode, ctrlKey, shiftKey } = e
    const { playPause, duration, seekTo, fullscreen } = this.context

    // prevent default on any media keys
    Object.keys(KEYS).forEach(key =>
      (KEYS[key] === keyCode) && e.preventDefault()
    )

    switch (keyCode) {
      // Play/Pause
      case KEYS.SPACEBAR:
      case KEYS.K:
        playPause()
        break;

      // Seeking
      case KEYS.LEFT_ARROW:
        this._skipTime(shiftKey ? -10 : -5)
        break;
      case KEYS.J:
        this._skipTime(shiftKey ? -10 : -5)
        break;
      case KEYS.COMMA:
        this._skipTime(-1)
        break;
      case KEYS.RIGHT_ARROW:
        this._skipTime(shiftKey ? 10 : 5)
        break;
      case KEYS.L:
        this._skipTime(shiftKey ? 10 : 5)
        break;
      case KEYS.PERIOD:
        this._skipTime(1)
        break;
      case KEYS.ZERO:
      case KEYS.HOME:
        seekTo(0)
        break;
      case KEYS.END:
        seekTo(duration)
        break;

      // Volume
      case KEYS.UP_ARROW:
        this._addVolume(shiftKey ? 10 : 5)
        break;
      case KEYS.DOWN_ARROW:
        this._addVolume(shiftKey ? -10 : -5)
        break;

      // Fullscreen
      case KEYS.F:
        fullscreen()
        break;
    }
  }

  render() {
    return createElement(ComposedComponent, {
      ...this.props,
      onKeyDown: this._handleKeyDown
    })
  }
}

export default AddKeyboardControls
