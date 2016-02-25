import React, { Component, PropTypes, createElement } from 'react'
import getVendor from './utils/get-vendor'

class Media extends Component {
  static propTypes = {
    children: PropTypes.func
  }

  static childContextTypes = {
    isPlaying: PropTypes.bool,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onPlayPause: PropTypes.func
  }

  state = {
    isPlaying: false
  }

  getChildContext() {
    return {
      // State
      isPlaying: this.state.isPlaying,

      // Methods
      onPlay: this._handlePlay,
      onPause: this._handlePause,
      onPlayPause: this._handlePlayPause
    }
  }

  _handlePlay() {
    this._player.play()
  }

  _handlePause() {
    this._player.pause()
  }

  _handlePlayPause = () => {
    if (!this.state.isPlaying) {
      this._handlePlay()
    } else {
      this._handlePause()
    }
  }

  render() {
    const { src, children } = this.props
    const Player = getVendor(src)

    return Player && children(
      createElement(Player, {
        ref: c => this._player = c,
        onPlaying: isPlaying => this.setState({isPlaying}),
        src
      })
    )
  }
}

export default Media
