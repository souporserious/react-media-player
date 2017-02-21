import React, { Component, createElement } from 'react'
import Player from 'yt-player'
import getYoutubeId from '../utils/get-youtube-id'
import specialAssign from '../utils/special-assign'
import vendorPropTypes from './vendor-prop-types'

class Youtube extends Component {
  static propTypes = vendorPropTypes

  componentDidMount() {
    this._player = new Player(this._node)
    this._player.load(getYoutubeId(this.props.src))
  }

  play() {
    this._player.play()
  }

  pause() {
    this._player.pause()
  }

  render() {
    const props = specialAssign({
      ref: c => this._node = c,
    }, this.props, vendorPropTypes)

    return createElement('div', props)
  }
}

export default Youtube
