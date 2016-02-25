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
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onPlayPause: PropTypes.func,
    onStop: PropTypes.func,
    seekTo: PropTypes.func
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
      onPlay: this._handlePlay,
      onPause: this._handlePause,
      onPlayPause: this._handlePlayPause,
      onStop: this._handleStop,
      seekTo: this._handleSeekTo
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
      this._handlePlay()
    } else {
      this._handlePause()
    }
  }

  _handleStop = () => {
    this._player.stop()
  }

  _handleSeekTo = (currentTime) => {
    this._player.seekTo(currentTime)
  }

  render() {
    const { src, children } = this.props
    const Player = getVendor(src)

    return Player && children(
      createElement(Player, {
        ref: c => this._player = c,
        onPlaying: isPlaying => this.setState({isPlaying}),
        onDuration: duration => this.setState({duration}),
        onProgress: progress => this.setState({progress}),
        onTimeUpdate: currentTime => this.setState({currentTime}),
        src
      })
    )
  }
}

export default Media
