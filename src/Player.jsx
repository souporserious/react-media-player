import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import contextTypes from './context-types'
import getVendor from './utils/get-vendor'

const defaultConfig = {
  youtube: {},
  vimeo: {},
  html5: {},
}

class Player extends Component {
  static propTypes = {
    vendor: PropTypes.oneOf(['video', 'audio', 'youtube', 'vimeo']),
    defaultCurrentTime: PropTypes.number,
    defaultVolume: PropTypes.number,
    defaultMuted: PropTypes.bool,
  }

  static defaultProps = {
    defaultCurrentTime: 0,
    defaultVolume: 1,
    defaultMuted: false,
  }

  static contextTypes = contextTypes

  _defaultsSet = false

  componentWillMount() {
    const {
      defaultCurrentTime,
      defaultMuted,
      defaultVolume,
      ...restProps
    } = this.props

    this._setPlayerProps({ volume: defaultVolume, ...restProps })

    this._setPlayerState({
      currentTime: defaultCurrentTime,
      volume: defaultMuted ? 0 : defaultVolume,
    })

    // we need to unset the loading state if no source was loaded
    if (!this.props.src) {
      this._setLoading(false)
    }
  }

  componentWillUpdate(nextProps) {
    this._setPlayerProps(nextProps)

    // clean state if the media source has changed
    if (this.props.src !== nextProps.src) {
      this._setPlayerState({
        currentTime: 0,
        progress: 0,
        duration: 0,
        isLoading: true,
        isPlaying: false,
      })
    }
  }

  get instance() {
    return this._component && this._component.instance
  }

  _setPlayer = component => {
    this.context._mediaSetters.setPlayer(component)
    this._component = component
  }

  _setPlayerProps(props) {
    this.context._mediaSetters.setPlayerProps(props)
  }

  _setPlayerState(state) {
    this.context._mediaSetters.setPlayerState(state)
  }

  _setDefaults() {
    const { media } = this.context
    const { defaultCurrentTime, defaultVolume, defaultMuted } = this.props
    if (defaultCurrentTime > 0) {
      media.seekTo(defaultCurrentTime)
    }
    if (defaultMuted) {
      media.mute(defaultMuted)
    } else if (defaultVolume !== 1) {
      media.setVolume(defaultVolume)
    }
    this._defaultsSet = true
  }

  _setLoading = isLoading => {
    this.context._mediaSetters.setPlayerState({ isLoading })
  }

  _handleOnReady = () => {
    const { media, _mediaSetters } = this.context
    const { autoPlay, onReady } = this.props

    if (!this._defaultsSet) {
      this._setDefaults()
    } else {
      media.mute(media.isMuted)
      media.setVolume(media.volume)
    }

    if (autoPlay) {
      media.play()
    }

    this._setLoading(false)

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
    const {
      src,
      vendor: _vendor,
      config,
      autoPlay,
      onReady,
      onEnded,
      defaultCurrentTime,
      defaultVolume,
      defaultMuted,
      ...extraProps
    } = this.props
    const { vendor, component } = getVendor(src, _vendor)
    return createElement(component, {
      src,
      vendor,
      autoPlay,
      config: { ...defaultConfig, ...config },
      extraProps,
      ref: this._setPlayer,
      isLoading: this._setLoading,
      onReady: this._handleOnReady,
      onEnded: this._handleOnEnded,
      ...this.context._mediaGetters.getPlayerEvents,
    })
  }
}

export default Player
