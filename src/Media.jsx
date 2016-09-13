import React, { Component, PropTypes, Children } from 'react'
import ReactDOM from 'react-dom'
import contextTypes from './context-types'
import requestFullscreen from './utils/request-fullscreen'
import exitFullscreen from './utils/exit-fullscreen'
import fullscreenChange from './utils/fullscreen-change'

class Media extends Component {
  // static propTypes = {
  //   vendor: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
  //   src: PropTypes.string.isRequired,
  //   children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  //   autoPlay: PropTypes.bool,
  //   loop: PropTypes.bool
  // }

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
      mediaPlayer: {
        state: {
          ...this.state
        },
        methods: {
          play: this.play,
          pause: this.pause,
          playPause: this.playPause,
          stop: this.stop,
          seekTo: this.seekTo,
          mute: this.mute,
          muteUnmute: this.muteUnmute,
          setVolume: this.setVolume,
          fullscreen: this.fullscreen
        },
        private: {
          setPlayer: this._setPlayer,
          setPlayerState: this._setPlayerState
        }
      }
    }
  }

  componentDidMount() {
    fullscreenChange('add', this._handleFullscreenChange)
  }

  componentWillUpdate(nextProps) {
    // clean state if the media has changed
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

  _setPlayer = (component) => {
    this._player = component
  }

  _setPlayerState = (state) => {
    this.setState(state)
  }

  play = () => {
    this._player.play()
  }

  pause = () => {
    this._player.pause()
  }

  playPause = () => {
    if (!this.state.isPlaying) {
      this._player.play()
    } else {
      this._player.pause()
    }
  }

  stop = () => {
    this._player.stop()
  }

  seekTo = (currentTime) => {
    this._player.seekTo(currentTime)
    this.setState({currentTime})
  }

  skipTime = (amount) => {
    const { currentTime, duration } = this.state
    let newTime = (currentTime + amount)

    if (newTime < 0) {
      newTime = 0
    } else if (newTime > duration) {
      newTime = duration
    }

    this.seekTo(newTime)
  }

  mute = (isMuted) => {
    if (isMuted) {
      this._lastVolume = this.state.volume
      this._player.setVolume(0)
    } else {
      const volume = (this._lastVolume > 0) ? this._lastVolume : 0.1
      this._player.setVolume(volume)
    }
    this._player.mute(isMuted)
  }

  muteUnmute = () => {
    this.mute(!this.state.isMuted)
  }

  setVolume = (volume) => {
    let isMuted = false

    if (volume <= 0) {
      isMuted = true
    }

    if (isMuted !== this.state.isMuted) {
      this.mute(isMuted)
    } else {
      this._lastVolume = volume
    }

    this._player.setVolume(volume)
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

  fullscreen = () => {
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
    const { children } = this.props

    if (typeof children === 'function') {
      return children({
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
        fullscreen: this.fullscreen
      })
    }

    return Children.only(children)
  }
}

export default Media
