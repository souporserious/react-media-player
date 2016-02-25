import React, { Component, PropTypes, createElement } from 'react'
import getVendor from './utils/get-vendor'

class Media extends Component {
  static propTypes = {
    children: PropTypes.func
  }

  static childContextTypes = {
    // State
    currentTime: PropTypes.number,
    progress: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
    isPlaying: PropTypes.bool,
    isMuted: PropTypes.bool,
    isFullscreen: PropTypes.bool,

    // Methods
    play: PropTypes.func,
    pause: PropTypes.func,
    playPause: PropTypes.func,
    stop: PropTypes.func,
    seekTo: PropTypes.func,
    mute: PropTypes.func,
    muteUnmute: PropTypes.func,
    setVolume: PropTypes.func,
    setFullscreen: PropTypes.func
  }

  state = {
    currentTime: 0,
    progress: 0,
    duration: 0,
    volume: 1,
    isPlaying: false,
    isMuted: false,
    isFullscreen: false
  }

  _lastVolume = 0

  getChildContext() {
    const { currentTime, progress, duration, volume, isPlaying, isMuted, isFullscreen } = this.state

    return {
      // State
      currentTime,
      progress,
      duration,
      volume,
      isPlaying,
      isMuted,
      isFullscreen,

      // Methods
      play: this._handlePlay,
      pause: this._handlePause,
      playPause: this._handlePlayPause,
      stop: this._handleStop,
      seekTo: this._handleSeekTo,
      mute: this._handleMute,
      muteUnmute: this._handleMuteUnmute,
      setVolume: this._handleSetVolume,
      setFullscreen: () => null
    }
  }

  _handlePlay = () => {
    this._player.play()
  }

  _handlePause = () => {
    this._player.pause()
  }

  _handlePlayPause = () => {
    if (!this.state.isPlaying) {
      this._player.play()
    } else {
      this._player.pause()
    }
  }

  _handleStop = () => {
    this._player.stop()
  }

  _handleSeekTo = (currentTime) => {
    this._player.seekTo(currentTime)
  }

  _handleMute = (isMuted) => {
    if (isMuted) {
      this._lastVolume = this.state.volume
      this._player.setVolume(0)
    } else {
      let volume = this._lastVolume > 0 ? this._lastVolume : 0.1
      this._player.setVolume(volume)
    }
    this._player.mute(isMuted)
  }

  _handleMuteUnmute = () => {
    this._handleMute(!this.state.isMuted)
  }

  _handleSetVolume = (volume) => {
    let isMuted = false

    if (volume <= 0) {
      isMuted = true
    }

    if (isMuted !== this.state.isMuted) {
      this._handleMute(isMuted)
    } else {
      this._lastVolume = volume
    }

    this._player.setVolume(volume)
  }

  render() {
    const { src, children } = this.props
    const Player = getVendor(src)

    return Player && children(
      createElement(Player, {
        ref: c => this._player = c,
        src,
        onPlaying: isPlaying => this.setState({isPlaying}),
        onDuration: duration => this.setState({duration}),
        onProgress: progress => this.setState({progress}),
        onTimeUpdate: currentTime => this.setState({currentTime}),
        onVolumeChange: (volume, isMuted) => this.setState({volume, isMuted})
      })
    )
  }
}

export default Media
