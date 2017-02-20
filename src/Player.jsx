import React, { Component, PropTypes, createElement } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import getVendor from './utils/get-vendor'

const noop = () => null

class Player extends Component {
  static propTypes = {
    vendor: PropTypes.oneOf(['video', 'audio', 'youtube', 'vimeo'])
  }

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

    // onFrequencyData: noop,
    // requestAnimationFrame() => {
    //   this._player.getCurrentTime()
    //   this._player.getDuration()
    //   this._player.getProgress()
    // }
  }

  _lastVolumeBeforeMute = 0

  componentDidMount() {
    document.addEventListener(
      screenfull.raw.fullscreenchange,
      this._handleFullscreenChange
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTime !== nextProps.currentTime &&
        this._player.getCurrentTime() !== nextProps.currentTime
    ) {
      console.log(this.props.currentTime !== nextProps.currentTime)
      // this._player.seekTo(nextProps.currentTime)
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

    if (this.props.volume !== nextProps.volume) {
      this._player.setVolume(nextProps.volume)
    }

    if (this.props.fullscreen !== nextProps.fullscreen) {
      if (nextProps.fullscreen) {
        screenfull.request(findDOMNode(this._player))
      } else {
        screenfull.exit()
      }
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.currentTime !== prevProps.currentTime &&
  //       this._player.getCurrentTime() !== this.props.currentTime
  //   ) {
  //     this._player.seekTo(this.props.currentTime)
  //   }
  //
  //   if (this.props.playing !== prevProps.playing) {
  //     if (this.props.playing) {
  //       this._player.play()
  //     } else {
  //       this._player.pause()
  //     }
  //   }
  //
  //   if (this.props.muted !== prevProps.muted) {
  //     this._player.mute(this.props.muted)
  //   }
  //
  //   if (this.props.volume !== prevProps.volume) {
  //     this._player.setVolume(this.props.volume)
  //   }
  //
  //   if (this.props.fullscreen !== prevProps.fullscreen) {
  //     if (this.props.fullscreen) {
  //       screenfull.request(findDOMNode(this._player))
  //     } else {
  //       screenfull.exit()
  //     }
  //   }
  // }

  componentWillUnmount() {
    document.removeEventListener(
      screenfull.raw.fullscreenchange,
      this._handleFullscreenChange
    )
  }

  _handleFullscreenChange = (e) => {
    this.props.onFullscreenChange(screenfull.isFullscreen, e)
  }

  _handleOnReady = (e) => {
    if (this.props.autoPlay) {
      this._player.play()
    }

    this.props.onReady(e)
  }

  _handleEnded = (e) => {
    if (this.props.loop) {
      this._player.seekTo(0)
      this._player.play()
    }

    this.props.onEnded(e)
  }

  render() {
    const {
      src,
      vendor: _vendor,
      currentTime,
      playing,
      muted,
      volume,
      fullscreen,
      loop,
      speed,
      onReady,
      onEnded,
      onFullscreenChange,
      ...restProps
    } = this.props
    const { vendor, component } = getVendor(src, _vendor)

    return (
      createElement(component, {
        ref: c => this._player = c,
        src,
        vendor,
        onReady: this._handleOnReady,
        onEnded: this._handleEnded,
        ...restProps
      })
    )
  }
}

export default Player
