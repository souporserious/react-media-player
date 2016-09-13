import React, { Component, PropTypes, createElement } from 'react'
import contextTypes from './context-types'
import getVendor from './utils/get-vendor'

const MEDIA_EVENTS = {
  onPlay: 'isPlaying',
  onPause: 'isPlaying',
  onError: null,
  onDuration: 'duration',
  onProgress: 'progress',
  onTimeUpdate: 'currentTime',
  onMute: 'isMuted',
  onVolumeChange: 'volume'
}
const MEDIA_EVENTS_KEYS = Object.keys(MEDIA_EVENTS)

class Player extends Component {
  static contextTypes = contextTypes

  get instance() {
    return this._component && this._component.instance
  }

  get _mediaEvents() {
    const events = {}

    MEDIA_EVENTS_KEYS.forEach(key => {
      const stateKey = MEDIA_EVENTS[key]
      const propCallback = this.props[key]

      events[key] = (val) => {
        console.log(key, val)
        if (stateKey) {
          this.setState({ [stateKey]: val })
        }
        if (typeof propCallback === 'function') {
          propCallback(this.context.mediaPlayer.state)
        }
      }
    })
    return events
  }

  _handleRef = (component) => {
    this.context.mediaPlayer.private.setPlayer(component)
    this._component = component
  }

  _handleOnReady = (e) => {
    const { state, methods } = this.context.mediaPlayer
    const { autoPlay, onReady } = this.props

    methods.setVolume(state.volume)
    methods.mute(state.isMuted)

    if (autoPlay) {
      methods.play()
    }

    if (typeof onReady === 'function') {
      onReady(e)
    }

    // this.setState({ isLoading: false })
  }

  _handleOnEnded = (e) => {
    const { methods } = this.context.mediaPlayer
    const { loop, onEnded } = this.props

    if (loop) {
      methods.seekTo(0)
      methods.play()
    } else {
      // this.setState({ isPlaying: false })
    }

    if (typeof onEnded === 'function') {
      onEnded(e)
    }
  }

  render() {
    const { src, autoPlay } = this.props
    const { vendor, component } = getVendor(src, this.props.vendor)
console.log(this._mediaEvents)
    return (
      createElement(component, {
        ref: this._handleRef,
        src,
        vendor,
        autoPlay,
        onReady: this._handleOnReady,
        onEnded: this._handleOnEnded,
        ...this._mediaEvents,
        extraProps: this.props
      })
    )
  }
}

export default Player
