import React, { Component } from 'react'
import withMediaProps from './with-media-props'

const MEDIA_KEYS = [0, 'f', 'j', 'k','l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown']

export default function withKeyboardControls(MediaPlayer) {
  return withMediaProps(class extends Component {
    static displayName = 'withKeyboardControls'

    _skipTime(amount) {
      const { currentTime, duration, seekTo } = this.props.media
      let newTime = (currentTime + amount)

      if (newTime < 0) {
        newTime = 0
      } else if (newTime > duration) {
        newTime = duration
      }

      seekTo(newTime)
    }

    _addVolume(amount) {
      const { setVolume, volume } = this.props.media
      let newVolume = (volume + (amount * 0.01))

      if (newVolume < 0) {
        newVolume = 0
      } else if (newVolume > 1) {
        newVolume = 1
      }

      setVolume(newVolume)
    }

    _handlekeyboardControls = (e) => {
      const { playPause, duration, seekTo, fullscreen } = this.props.media
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
      return (
        <MediaPlayer
          {...this.props}
          keyboardControls={this._handlekeyboardControls}
        />
      )
    }
  })
}
