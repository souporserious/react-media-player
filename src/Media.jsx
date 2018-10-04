import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import ReactDOM, { findDOMNode } from 'react-dom'
import contextTypes from './context-types'
import requestFullscreen from './utils/request-fullscreen'
import exitFullscreen from './utils/exit-fullscreen'
import fullscreenChange from './utils/fullscreen-change'

const MEDIA_EVENTS = {
  onPlay: 'isPlaying',
  onPause: 'isPlaying',
  onDuration: 'duration',
  onProgress: 'progress',
  onTimeUpdate: 'currentTime',
  onMute: 'isMuted',
  onVolumeChange: 'volume',
  onError: null,
}
const MEDIA_EVENTS_KEYS = Object.keys(MEDIA_EVENTS)

class Media extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
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
    isFullscreen: false,
  }

  _isMounted = false
  _playerProps = {}
  _lastVolume = 0

  getChildContext() {
    return {
      media: this._getPublicMediaProps(),
      _mediaSetters: {
        setPlayer: this._setPlayer,
        setPlayerProps: this._setPlayerProps,
        setPlayerState: this._setPlayerState,
      },
      _mediaGetters: {
        getPlayerEvents: this._getPlayerEvents(),
      },
    }
  }

  componentDidMount() {
    this._isMounted = true
    fullscreenChange('add', this._handleFullscreenChange)
  }

  componentWillUnmount() {
    this._isMounted = false
    fullscreenChange('remove', this._handleFullscreenChange)
  }

  _getPublicMediaProps() {
    return {
      ...this.state,
      play: this.play,
      pause: this.pause,
      playPause: this.playPause,
      stop: this.stop,
      seekTo: this.seekTo,
      skipTime: this.skipTime,
      mute: this.mute,
      muteUnmute: this.muteUnmute,
      setVolume: this.setVolume,
      addVolume: this.addVolume,
      fullscreen: this.fullscreen,
    }
  }

  _getPlayerEvents() {
    const events = {}
    MEDIA_EVENTS_KEYS.forEach(key => {
      const stateKey = MEDIA_EVENTS[key]
      const handlePropCallback = () => {
        const propCallback = this._playerProps[key]
        if (typeof propCallback === 'function') {
          propCallback(this.state)
        }
      }
      events[key] = val => {
        if (stateKey) {
          if (this._isMounted) {
            this.setState({ [stateKey]: val }, handlePropCallback)
          }
        } else {
          handlePropCallback()
        }
      }
    })
    return events
  }

  _setPlayer = component => {
    this._player = component
  }

  _setPlayerProps = props => {
    this._playerProps = props
  }

  _setPlayerState = state => {
    this.setState(state)
  }

  play = () => {
    return this._player.play()
  }

  pause = () => {
    this._player.pause()
  }

  playPause = () => {
    if (!this.state.isPlaying) {
      return this.play()
    } else {
      this.pause()
    }
  }

  stop = () => {
    this._player.stop()
  }

  seekTo = currentTime => {
    this._player.seekTo(currentTime)
    this.setState({ currentTime })
  }

  skipTime = amount => {
    const { currentTime, duration } = this.state
    let newTime = currentTime + amount
    if (newTime < 0) {
      newTime = 0
    } else if (newTime > duration) {
      newTime = duration
    }
    this.seekTo(newTime)
  }

  mute = isMuted => {
    if (isMuted) {
      this._lastVolume = this.state.volume
      this._player.setVolume(0)
    } else {
      const volume = this._lastVolume > 0 ? this._lastVolume : 0.1
      this._player.setVolume(volume)
    }
    this._player.mute(isMuted)
  }

  muteUnmute = () => {
    this.mute(!this.state.isMuted)
  }

  setVolume = volume => {
    const isMuted = volume <= 0
    if (isMuted !== this.state.isMuted) {
      this.mute(isMuted)
    } else {
      this._lastVolume = volume
    }
    this._player.setVolume(volume)
  }

  addVolume = amount => {
    let newVolume = this.state.volume + amount * 0.01
    if (newVolume < 0) {
      newVolume = 0
    } else if (newVolume > 1) {
      newVolume = 1
    }
    this.setVolume(newVolume)
  }

  fullscreen = () => {
    if (!this.state.isFullscreen) {
      this._player.node[requestFullscreen]()
    } else {
      document[exitFullscreen]()
    }
  }

  _handleFullscreenChange = ({ target }) => {
    if (target === this._player.node) {
      this.setState({ isFullscreen: !this.state.isFullscreen })
    }
  }

  render() {
    const { children } = this.props
    if (typeof children === 'function') {
      return children(this._getPublicMediaProps())
    }
    return Children.only(children)
  }
}

export default Media
