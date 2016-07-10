import React, { Component, PropTypes, createElement } from 'react'
import ReactDOM from 'react-dom'
import contextTypes from './context-types'
import getVendor from './utils/get-vendor'
import requestFullscreen from './utils/request-fullscreen'
import exitFullscreen from './utils/exit-fullscreen'
import fullscreenChange from './utils/fullscreen-change'

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

class Media extends Component {
  static propTypes = {
    vendor: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
    src: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool
  }

  static defaultProps = {
    autoPlay: false,
    loop: false
  }

  static childContextTypes = contextTypes

  state = {
    currentTime: 0,
    progress: 0,
    duration: 0.1,
    volume: 1,
    isLoading: true,
    isPlaying: false,
    isMuted: false,
    isFullscreen: false
  }

  _lastVolume = 0

  getChildContext() {
    return {
      ...this.state,
      play: this._handlePlay,
      pause: this._handlePause,
      playPause: this._handlePlayPause,
      stop: this._handleStop,
      seekTo: this._handleSeekTo,
      mute: this._handleMute,
      muteUnmute: this._handleMuteUnmute,
      setVolume: this._handleSetVolume,
      fullscreen: this._handleFullscreen
    }
  }

  componentDidMount() {
    fullscreenChange('add', this._handleFullscreenChange)
  }

  componentWillUpdate(nextProps) {
    // clean state if the video has changed
    if (this.props.src !== nextProps.src) {
      this.setState({
        currentTime: 0,
        progress: 0,
        duration: 0,
        isPlaying: false
      })
    }
  }

  componentWillUnmount() {
    fullscreenChange('remove', this._handleFullscreenChange)
  }

  get _mediaEvents() {
    const events = {}

    MEDIA_EVENTS_KEYS.forEach(key => {
      const stateKey = MEDIA_EVENTS[key]
      const propCallback = this.props[key]

      events[key] = (val) => {
        if (stateKey) {
          this.setState({ [stateKey]: val })
        }
        if (typeof propCallback === 'function') {
          propCallback(val)
        }
      }
    })
    return events
  }

  _handleOnReady = () => {
    const { volume, isMuted } = this.state

    this._handleSetVolume(volume)
    this._handleMute(isMuted)

    if (this.props.autoPlay) {
      this._player.play()
    }

    this.setState({ isLoading: false })
  }

  _handleOnEnded = () => {
    const { loop, onEnded } = this.props

    if (loop) {
      this._handleSeekTo(0)
      this._player.play()
    } else {
      this.setState({ isPlaying: false })
    }

    if (typeof onEnded === 'function') {
      onEnded()
    }
  }

  _handlePlay = () => {
    this._player.play()
  }

  _handlePause = () => {
    this._player.pause()
  }

  _handlePlayPause = () => {
    if (!this.state.isPlaying) {
      this._player.play()
    } else {
      this._player.pause()
    }
  }

  _handleStop = () => {
    this._player.stop()
  }

  _handleSeekTo = (currentTime) => {
    this._player.seekTo(currentTime)
    this.setState({currentTime})
  }

  _handleMute = (isMuted) => {
    if (isMuted) {
      this._lastVolume = this.state.volume
      this._player.setVolume(0)
    } else {
      const volume = (this._lastVolume > 0) ? this._lastVolume : 0.1
      this._player.setVolume(volume)
    }
    this._player.mute(isMuted)
  }

  _handleMuteUnmute = () => {
    this._handleMute(!this.state.isMuted)
  }

  _handleSetVolume = (volume) => {
    let isMuted = false

    if (volume <= 0) {
      isMuted = true
    }

    if (isMuted !== this.state.isMuted) {
      this._handleMute(isMuted)
    } else {
      this._lastVolume = volume
    }

    this._player.setVolume(volume)
  }

  _handleFullscreen = () => {
    if (!this.state.isFullscreen) {
      ReactDOM.findDOMNode(this._player)[requestFullscreen]()
    } else {
      document[exitFullscreen]()
    }
  }

  _handleFullscreenChange = ({ target }) => {
    if (target === ReactDOM.findDOMNode(this._player)) {
      this.setState({ isFullscreen: !this.state.isFullscreen })
    }
  }

  render() {
    const { src, children, autoPlay } = this.props
    const { vendor, component } = getVendor(src, this.props.vendor)

    return component && children(
      createElement(component, {
        ref: c => this._player = c,
        vendor,
        src,
        autoPlay,
        onReady: this._handleOnReady,
        onEnded: this._handleOnEnded,
        ...this._mediaEvents
      })
    )
  }
}

export default Media
