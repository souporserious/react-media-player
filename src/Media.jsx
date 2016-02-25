import React, { Component, PropTypes, createElement } from 'react'
import ReactDOM from 'react-dom'
import getVendor from './utils/get-vendor'

class Media extends Component {
  static propTypes = {
    children: PropTypes.func
  }

  static childContextTypes = {
    isPlaying: PropTypes.bool,
    onPlayPause: PropTypes.func
  }

  state = {
    isPlaying: false
  }

  getChildContext() {
    return {
      isPlaying: this.state.isPlaying,
      onPlayPause: this._handlePlayPause
    }
  }

  _handlePlay() {
    this._player.play()
    this.setState({isPlaying: true})
  }

  _handlePause() {
    this._player.pause()
    this.setState({isPlaying: false})
  }

  _handlePlayPause = () => {
    if (this.state.isPlaying) {
      this._handlePause()
    } else {
      this._handlePlay()
    }
  }

  render() {
    const { src, children } = this.props
    const Player = getVendor(src)

    return Player && children(
      createElement(Player, {
        ref: c => this._player = c,
        src
      })
    )
  }
}

export default Media
