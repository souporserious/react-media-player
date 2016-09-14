import React, { Component, PropTypes, createElement } from 'react'
import contextTypes from './context-types'
import getVendor from './utils/get-vendor'

class Player extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    vendor: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video'])
  }

  static contextTypes = contextTypes

  componentWillMount() {
    this._setPlayerProps(this.props)
  }

  componentWillUpdate(nextProps) {
    this._setPlayerProps(nextProps)

    // clean state if the media source has changed
    if (this.props.src !== nextProps.src) {
      this.context._mediaSetters.setPlayerState({
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
    this.context._mediaSetters.setPlayer(component)
    this._component = component
  }

  _setPlayerProps(props) {
    this.context._mediaSetters.setPlayerProps(props)
  }

  _handleOnReady = () => {
    const { media, _mediaSetters } = this.context
    const { autoPlay, onReady } = this.props

    media.setVolume(media.volume)
    media.mute(media.isMuted)

    if (autoPlay) {
      media.play()
    }

    _mediaSetters.setPlayerState({ isLoading: false })

    if (typeof onReady === 'function') {
      onReady(media)
    }
  }

  _handleOnEnded = () => {
    const { media, _mediaSetters } = this.context
    const { loop, onEnded } = this.props

    if (loop) {
      media.seekTo(0)
      media.play()
    } else {
      _mediaSetters.setPlayerState({ isPlaying: false })
    }

    if (typeof onEnded === 'function') {
      onEnded(media)
    }
  }

  render() {
    const { src, vendor: _vendor, autoPlay, onReady, onEnded, ...extraProps } = this.props
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
        ...this.context._mediaGetters.getPlayerEvents,
      })
    )
  }
}

export default Player
