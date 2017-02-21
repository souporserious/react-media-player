import React, { Component, PropTypes, createElement } from 'react'
import specialAssign from './utils/special-assign'
import contextTypes from './context-types'

const checkedProps = {
  playing:     PropTypes.bool,
  progress:    PropTypes.number,
  duration:    PropTypes.number,
  currentTime: PropTypes.number,
  muted:       PropTypes.bool,
  volume:      PropTypes.number,
  fullscreen:  PropTypes.bool
}

class Media extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired
  }

  static childContextTypes = {
    media: PropTypes.object
  }

  static propTypes = checkedProps

  constructor(props) {
    super(props)
    this.state = {
      playing:     false,
      progress:    0,
      duration:    0,
      currentTime: 0,
      muted:       false,
      volume:      1,
      fullscreen:  false,
    }
    this._callbacks = {
      onPlay:             this._handlePlay,
      onPause:            this._handlePause,
      onProgress:         this._handleProgress,
      onDuration:         this._handleDuration,
      onTimeUpdate:       this._handleTimeUpdate,
      onMute:             this._handleMute,
      onVolumeChange:     this._handleVolumeChange,
      onFullscreenChange: this._handleFullscreenChange,
    }
  }

  getChildContext() {
    return {
      media: {
        state:     this.state,
        callbacks: this._callbacks,
        methods:   {
          setPlayer:      this.setPlayer,
          setPlaying:     this.setPlaying,
          setCurrentTime: this.setCurrentTime,
          setMuted:       this.setMuted,
          setVolume:      this.setVolume,
          setFullscreen:  this.setFullscreen,
          skipTime:       this.skipTime,
          addVolume:      this.addVolume,
        },
      }
    }
  }

  _handlePlay = () => {
    this.setState({ playing: true })
  }

  _handlePause = () => {
    this.setState({ playing: false })
  }

  _handleProgress = (progress) => {
    this.setState({ progress })
  }

  _handleDuration = (duration) => {
    this.setState({ duration })
  }

  _handleTimeUpdate = (currentTime) => {
    this.setState({ currentTime })
  }

  _handleMute = (muted) => {
    this.setState({ muted })
  }

  _handleVolumeChange = (volume) => {
    this.setState({ volume })
  }

  _handleFullscreenChange = (fullscreen) => {
    this.setState({ fullscreen })
  }

  setPlayer = (component) => {
    this._player = component
  }

  setPlaying = (playing) => {
    if (this._player)
      this._player.setPlaying(playing)
  }

  setCurrentTime = (currentTime) => {
    if (this._player)
      this._player.setCurrentTime(currentTime)
  }

  setMuted = (muted) => {
    if (this._player)
      this._player.setMuted(muted)
  }

  setVolume = (volume) => {
    if (this._player)
      this._player.setVolume(volume)
  }

  setFullscreen = (fullscreen) => {
    if (this._player)
      this._player.setFullscreen(fullscreen)
  }

  skipTime = (amount) => {
    const { currentTime, duration } = this.state
    let newTime = (currentTime + amount)

    if (newTime < 0) {
      newTime = 0
    } else if (newTime > duration) {
      newTime = duration
    }

    this.setCurrentTime(newTime)
  }

  addVolume = (amount) => {
    let newVolume = (this.state.volume + (amount * 0.01))

    if (newVolume < 0) {
      newVolume = 0
    } else if (newVolume > 1) {
      newVolume = 1
    }

    this.setVolume(newVolume)
  }

  render() {
    const { children } = this.props

    if (typeof children === 'function') {
      return children(this.state)
    }

    return createElement('div', specialAssign({}, this.props, checkedProps))
  }
}

export default Media
