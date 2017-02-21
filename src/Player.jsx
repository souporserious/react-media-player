import React, { Component, PropTypes, createElement } from 'react'
import screenfull from 'screenfull'
import throttle from 'lodash.throttle'
import getVendor from './utils/get-vendor'
import specialAssign from './utils/special-assign'

const noop = () => null

const checkedProps = {
  vendor:             PropTypes.oneOf(['video', 'audio', 'youtube', 'vimeo']),
  playing:            PropTypes.bool,
  currentTime:        PropTypes.number,
  duration:           PropTypes.number,
  muted:              PropTypes.bool,
  volume:             PropTypes.number,
  playbackRate:       PropTypes.number,
  autoPlay:           PropTypes.bool,
  loop:               PropTypes.bool,
  fullscreen:         PropTypes.bool,
}

class Player extends Component {
  static propTypes = checkedProps

  static defaultProps = {
    playing:            false,
    currentTime:        0,
    duration:           0,
    muted:              false,
    volume:             1,
    playbackRate:       1,
    autoPlay:           false,
    loop:               false,
    fullscreen:         false,
    onReady:            noop,
    onProgress:         noop,
    onDuration:         noop,
    onTimeUpdate:       noop,
    onEnded:            noop,
    onPlay:             noop,
    onPause:            noop,
    onVolumeChange:     noop,
    onFullscreenChange: noop,
    onError:            noop,
  }

  constructor() {
    super()
    this._currentTime = -1
    this._volume      = -1
    this.seekTo       = throttle(this.seekTo.bind(this), 60)
    this.setVolume    = throttle(this.setVolume.bind(this), 60)
  }

  componentDidMount() {
    document.addEventListener(
      screenfull.raw.fullscreenchange,
      this._handleFullscreenChange
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTime !== nextProps.currentTime &&
        this._currentTime !== nextProps.currentTime
    ) {
      this.seekTo(nextProps.currentTime)
    }

    if (this.props.playing !== nextProps.playing) {
      if (nextProps.playing) {
        this._player.play()
      } else {
        this._player.pause()
      }
    }

    if (this.props.muted !== nextProps.muted) {
      this._player.mute(nextProps.muted)
    }

    if (this.props.volume !== nextProps.volume &&
        this._volume !== nextProps.volume
    ) {
      this.setVolume(nextProps.volume)
    }

    if (this.props.fullscreen !== nextProps.fullscreen) {
      if (nextProps.fullscreen) {
        screenfull.request(this._player.getNode())
      } else {
        screenfull.exit()
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.src !== nextProps.src
  }

  componentWillUnmount() {
    document.removeEventListener(
      screenfull.raw.fullscreenchange,
      this._handleFullscreenChange
    )
  }

  seekTo(currentTime) {
    this._player.seekTo(currentTime)
  }

  setVolume(volume) {
    this._player.setVolume(volume)
  }

  _handleFullscreenChange = (e) => {
    this.props.onFullscreenChange(screenfull.isFullscreen, e)
  }

  _handleReady = (e) => {
    if (this.props.autoPlay) {
      this._player.play()
    }
    this.props.onReady(e)
  }

  _handleTimeUpdate = (currentTime) => {
    this._currentTime = currentTime
    this.props.onTimeUpdate(currentTime)
  }

  _handleVolumeChange = (volume) => {
    this._volume = volume
    this.props.onVolumeChange(volume)
  }

  _handleEnded = (e) => {
    if (this.props.loop) {
      this._player.seekTo(0)
      this._player.play()
    }
    this.props.onEnded(e)
  }

  render() {
    const { src } = this.props
    const { vendor, component } = getVendor(src, this.props.vendor)
    const props = specialAssign({
      ref: c => this._player = c,
      src,
      vendor,
    }, this.props, checkedProps)

    return createElement(component, {
      ...props,
      onReady:        this._handleReady,
      onTimeUpdate:   this._handleTimeUpdate,
      onVolumeChange: this._handleVolumeChange,
      onEnded:        this._handleEnded,
    })
  }
}

export default Player
