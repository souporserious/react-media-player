import React, { Component, PropTypes, createElement } from 'react'
const MEDIA_KEYS = [0, 'f', 'j', 'k','l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown']

const KeyboardControls = ComposedComponent => class extends Component {
  static contextTypes = {
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
    playPause: PropTypes.func,
    seekTo: PropTypes.func,
    setVolume: PropTypes.func,
    fullscreen: PropTypes.func
  }

  _skipTime(amount) {
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

  _handlekeyboardControls = (e) => {
    const { playPause, duration, seekTo, fullscreen } = this.context
    const { key, shiftKey } = e

    // prevent default on any media keys
    MEDIA_KEYS.some(_key => (_key === key) && e.preventDefault())

    switch (key) {
      // Play/Pause
      case ' ':
      case 'k':
        playPause()
        break;

      // Seeking Backwards
      case 'ArrowLeft':
        this._skipTime(shiftKey ? -10 : -5)
        break;
      case 'j':
        this._skipTime(shiftKey ? -10 : -5)
        break;
      case ',':
        this._skipTime(-1)
        break;

      // Seeking Forwards
      case 'ArrowRight':
        this._skipTime(shiftKey ? 10 : 5)
        break;
      case 'l':
        this._skipTime(shiftKey ? 10 : 5)
        break;
      case '.':
        this._skipTime(1)
        break;
      case 0:
      case 'Home':
        seekTo(0)
        break;
      case 'End':
        seekTo(duration)
        break;

      // Volume
      case 'ArrowUp':
        this._addVolume(shiftKey ? 10 : 5)
        break;
      case 'ArrowDown':
        this._addVolume(shiftKey ? -10 : -5)
        break;

      // Fullscreen
      case 'f':
        fullscreen()
        break;
    }
  }

  render() {
    return createElement(ComposedComponent, {
      ...this.props,
      keyboardControls: this._handlekeyboardControls
    })
  }
}

export default KeyboardControls
