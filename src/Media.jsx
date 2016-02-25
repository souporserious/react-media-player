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

  _handlePlayPause = () => {
    if (this.state.isPlaying) {
      this._player.pause()
    } else {
      this._player.play()
    }
  }

  render() {
    const Player = getVendor(this.props.src)

    return this.props.children(
      createElement(Player, {
        ref: c => this._player = c,
        onPlaying: isPlaying => this.setState({isPlaying})
      })
    )
  }
}

export default Media
