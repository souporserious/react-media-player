import React, { Component, PropTypes, createElement } from 'react'
import ReactDOM from 'react-dom'
import getVendor from './utils/get-vendor'
import requestFullscreen from './utils/request-fullscreen'
import exitFullscreen from './utils/exit-fullscreen'

class Media extends Component {
  static propTypes = {
    vendor: PropTypes.string,
    src: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
  }

  static childContextTypes = {
    // State
    currentTime: PropTypes.number,
    progress: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
    isLoading: PropTypes.bool,
    isPlaying: PropTypes.bool,
    isMuted: PropTypes.bool,
    isFullscreen: PropTypes.bool,

    // Methods
    play: PropTypes.func,
    pause: PropTypes.func,
    playPause: PropTypes.func,
    stop: PropTypes.func,
    seekTo: PropTypes.func,
    mute: PropTypes.func,
    muteUnmute: PropTypes.func,
    setVolume: PropTypes.func,
    fullscreen: PropTypes.func
  }

  state = {
    currentTime: 0,
    progress: 0,
    duration: 0,
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

  componentWillUpdate(nextProps) {
    // clean state if the video has changed
    if (this.props.src !== nextProps.src) {
      this.setState({
        currentTime: 0,
        progress: 0,
        duration: 0,
        isPlaying: false,

        // TODO: figure out how to keep these settings
        // getting error because element isn't available when trying to set them
        // this occurs on componentDidUpdate
        volume: 1,
        isMuted: false,
        isFullscreen: false
      })
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
  }

  _handleMute = (isMuted) => {
    if (isMuted) {
      this._lastVolume = this.state.volume
      this._player.setVolume(0)
    } else {
      let volume = this._lastVolume > 0 ? this._lastVolume : 0.1
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
    const { isFullscreen } = this.state

    if (!isFullscreen) {
      ReactDOM.findDOMNode(this._player)[requestFullscreen]()
    } else {
      document[exitFullscreen]()
    }

    this.setState({ isFullscreen: !isFullscreen })
  }

  render() {
    const { src, children } = this.props
    const { vendor, component } = getVendor(src, this.props.vendor)

    return component && children(
      createElement(component, {
        ref: c => this._player = c,
        vendor,
        src,
        onReady: () => this.setState({isLoading: false}),
        onPlaying: isPlaying => this.setState({isPlaying}),
        onDuration: duration => this.setState({duration}),
        onProgress: progress => this.setState({progress}),
        onTimeUpdate: currentTime => this.setState({currentTime}),
        onMute: isMuted => this.setState({isMuted}),
        onVolumeChange: volume => this.setState({volume})
      })
    )
  }
}

export default Media
