import React, { Component, PropTypes, createElement } from 'react'
import screenfull from 'screenfull'
import throttle from 'lodash.throttle'
import getVendor from './utils/get-vendor'
import specialAssign from './utils/special-assign'
import contextTypes from './context-types'

const noop = () => null

const checkedProps = {
  vendor:       PropTypes.oneOf(['video', 'audio', 'youtube', 'vimeo']),
  playing:      PropTypes.bool,
  currentTime:  PropTypes.number,
  duration:     PropTypes.number,
  muted:        PropTypes.bool,
  volume:       PropTypes.number,
  playbackRate: PropTypes.number,
  autoPlay:     PropTypes.bool,
  loop:         PropTypes.bool,
  fullscreen:   PropTypes.bool,
}

class Player extends Component {
  static contextTypes = {
    media: PropTypes.object
  }

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
    onMute:             noop,
    onVolumeChange:     noop,
    onFullscreenChange: noop,
    onError:            noop,
  }

  constructor(props) {
    super(props)
    this._currentTime   = -1
    this._volume        = -1
    this.setCurrentTime = throttle(this.setCurrentTime.bind(this), 60)
    this.setVolume      = throttle(this.setVolume.bind(this), 60)
  }

  componentDidMount() {
    document.addEventListener(
      screenfull.raw.fullscreenchange,
      this._handleFullscreenChange
    )

    if (this.context.media) {
      this.context.media.methods.setPlayer(this)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTime !== nextProps.currentTime &&
        this._currentTime !== nextProps.currentTime
    ) {
      this.setCurrentTime(nextProps.currentTime)
    }

    if (this.props.playing !== nextProps.playing) {
      this.setPlaying(nextProps.playing)
    }

    if (this.props.muted !== nextProps.muted) {
      this.setMuted(nextProps.muted)
    }

    if (this.props.volume !== nextProps.volume &&
        this._volume !== nextProps.volume
    ) {
      this.setVolume(nextProps.volume)
    }

    if (this.props.playbackRate !== nextProps.playbackRate) {
      this.setPlaybackRate(nextProps.playbackRate)
    }

    if (this.props.loop !== nextProps.loop) {
      this.setLoop(nextProps.loop)
    }

    if (this.props.fullscreen !== nextProps.fullscreen) {
      this.setFullscreen(nextProps.fullscreen)
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

  setPlaying = (playing) => {
    if (playing) {
      this._player.play()
    } else {
      this._player.pause()
    }
  }

  setCurrentTime(currentTime) {
    this._player.seekTo(currentTime)
  }

  setMuted = (muted) => {
    this._player.mute(muted)
  }

  setVolume(volume) {
    this._player.setVolume(volume)
  }

  setPlaybackRate = (playbackRate) => {
    this._player.setPlaybackRate(playbackRate)
  }

  setLoop = (loop) => {
    this._player.setLoop(loop)
  }

  setFullscreen = (fullscreen) => {
    if (fullscreen) {
      screenfull.request(this._player.getNode())
    } else {
      screenfull.exit()
    }
  }

  _handleReady = (e) => {
    if (this.props.autoPlay) {
      this._player.play()
    }

    if (this.props.currentTime !== 0) {
      this.setCurrentTime(this.props.currentTime)
    }

    if (this._player.setPlaybackRate) {
      this._player.setPlaybackRate(this.props.playbackRate)
    }

    this.props.onReady(e)
  }

  _handlePlay = () => {
    this.props.onPlay()

    if (this.context.media) {
      this.context.media.callbacks.onPlay()
    }
  }

  _handlePause = () => {
    this.props.onPause()

    if (this.context.media) {
      this.context.media.callbacks.onPause()
    }
  }

  _handleProgress = (progress) => {
    this.props.onProgress(progress)

    if (this.context.media) {
      this.context.media.callbacks.onProgress(progress)
    }
  }

  _handleDuration = (duration) => {
    this.props.onDuration(duration)

    if (this.context.media) {
      this.context.media.callbacks.onDuration(duration)
    }
  }

  _handleTimeUpdate = (currentTime) => {
    this._currentTime = currentTime

    this.props.onTimeUpdate(currentTime)

    if (this.context.media) {
      this.context.media.callbacks.onTimeUpdate(currentTime)
    }
  }

  _handleMute = (muted) => {
    this.props.onMute(muted)

    if (this.context.media) {
      this.context.media.callbacks.onMute(muted)
    }
  }

  _handleVolumeChange = (volume) => {
    this._volume = volume

    this.props.onVolumeChange(volume)

    if (this.context.media) {
      this.context.media.callbacks.onVolumeChange(volume)
    }
  }

  _handleFullscreenChange = () => {
    this.props.onFullscreenChange(screenfull.isFullscreen)

    if (this.context.media) {
      this.context.media.callbacks.onFullscreenChange(screenfull.isFullscreen)
    }
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
      onReady:            this._handleReady,
      onPlay:             this._handlePlay,
      onPause:            this._handlePause,
      onProgress:         this._handleProgress,
      onDuration:         this._handleDuration,
      onTimeUpdate:       this._handleTimeUpdate,
      onMute:             this._handleMute,
      onVolumeChange:     this._handleVolumeChange,
      onFullscreenChange: this._handleFullscreenChange,
    })
  }
}

export default Player
