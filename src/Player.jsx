import React, { Component, PropTypes, createElement } from 'react'
import contextTypes from './context-types'
import getVendor from './utils/get-vendor'

class Player extends Component {
  static propTypes = {
    vendor: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
    src: PropTypes.string.isRequired
  }

  static contextTypes = contextTypes

  componentWillMount() {
    this._setPlayerProps(this.props)
  }

  componentWillUpdate(nextProps) {
    this._setPlayerProps(nextProps)

    // clean state if the media has changed
    if (this.props.src !== nextProps.src) {
      this.context.mediaPlayer._setPlayerState({
        currentTime: 0,
        progress: 0,
        duration: 0,
        isPlaying: false
      })
    }
  }

  get instance() {
    return this._component && this._component.instance
  }

  _setPlayer = (component) => {
    this.context.mediaPlayer._setPlayer(component)
    this._component = component
  }

  _setPlayerProps(props) {
    this.context.mediaPlayer._setPlayerProps(props)
  }

  _handleOnReady = () => {
    const { mediaPlayer } = this.context
    const { autoPlay, onReady } = this.props
    const { state, methods } = mediaPlayer

    methods.setVolume(state.volume)
    methods.mute(state.isMuted)

    if (autoPlay) {
      methods.play()
    }

    mediaPlayer._setPlayerState({ isLoading: false })

    if (typeof onReady === 'function') {
      onReady(state)
    }
  }

  _handleOnEnded = () => {
    const { mediaPlayer } = this.context
    const { loop, onEnded } = this.props
    const { state, methods } = mediaPlayer

    if (loop) {
      methods.seekTo(0)
      methods.play()
    } else {
      mediaPlayer._setPlayerState({ isPlaying: false })
    }

    if (typeof onEnded === 'function') {
      onEnded(state)
    }
  }

  render() {
    const { src, vendor: _vendor, autoPlay, onReady, onEnded, ...extraProps } = this.props
    const { mediaEvents } = this.context.mediaPlayer
    const { vendor, component } = getVendor(src, _vendor)

    return (
      createElement(component, {
        ref: this._setPlayer,
        src,
        vendor,
        autoPlay,
        onReady: this._handleOnReady,
        onEnded: this._handleOnEnded,
        extraProps,
        ...mediaEvents,
      })
    )
  }
}

export default Player
