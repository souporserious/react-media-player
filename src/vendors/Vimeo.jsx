import React, { Component } from 'react'
import loadAPI from '../utils/load-api'
import getVimeoId from '../utils/get-vimeo-id'
import vendorPropTypes from './vendor-prop-types'

let isAPILoaded = false

class Vimeo extends Component {
  static propTypes = vendorPropTypes

  _vimeoId = getVimeoId(this.props.src)
  _origin = '*'

  componentDidMount() {
    window.addEventListener('message', this._onMessage)
  }

  componentWillUnmount() {
    window.removeEventListener('message', this._onMessage)
  }

  _onMessage = (e) => {
    // allow messages from the Vimeo player only
    if (!(/^https?:\/\/player.vimeo.com/).test(e.origin)) {
      return false
    }

    if (this._origin === '*') {
      this._origin = e.origin
    }

    const data = JSON.parse(e.data)

    switch (data.event) {
      case 'ready':
        this._postMessages()
        break;
      case 'loadProgress':
        this.props.onProgress(data.data.percent)
        break;
      case 'playProgress':
        this.props.onTimeUpdate(data.data.seconds)
        break;
      case 'play':
        this.props.onPlaying(true)
        break;
      case 'pause':
      case 'finish':
        this.props.onPlaying(false)
        break;
    }

    if (data.method === 'getDuration') {
      this.props.onDuration(data.value)
    }

    if (data.method === 'getVolume') {
      this.setVolume(data.value)
    }
  }

  _postMessage(method, value) {
    const data = { method }

    if (value) {
      data.value = value
    }

    this._iframe.contentWindow.postMessage(JSON.stringify(data), this._origin)
  }

  _postMessages() {
    ['loadProgress', 'playProgress', 'play', 'pause', 'finish'].forEach(listener =>
      this._postMessage('addEventListener', listener)
    )

    this._postMessage('getDuration')
    this._postMessage('getVolume')
  }

  play() {
    this._postMessage('play')
  }

  pause() {
    this._postMessage('pause')
  }

  stop() {
    this._postMessage('unload')
  }

  seekTo(currentTime) {
    this._postMessage('seekTo', currentTime)
  }

  mute(muted) {
    this._postMessage('setVolume', muted ? '0' : '1')
    this.props.onMute(muted)
  }

  setVolume(volume) {
    this._postMessage('setVolume', volume)
    this.props.onVolumeChange(+volume)
  }

  render() {
    return (
      <iframe
        ref={c => this._iframe = c}
        src={`https://player.vimeo.com/video/${this._vimeoId}?api=1`}
      />
    )
  }
}

export default Vimeo
