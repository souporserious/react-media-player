import React, { Component, createElement } from 'react'
import Player from '@vimeo/player'
import getVimeoId from '../utils/get-vimeo-id'
import specialAssign from '../utils/special-assign'
import vendorPropTypes from './vendor-prop-types'

class Vimeo extends Component {
  static propTypes = vendorPropTypes

  componentDidMount() {
    this._player = new Player(this._node, {
      id: getVimeoId(this.props.src)
    })

    this._player.ready().then(() => {
      this.props.onReady()
    })

    this._player.getDuration().then(duration => {
      this.props.onDuration(duration)
    })

    this._player.getVolume().then(volume => {
      this.props.onVolumeChange(volume)
    })

    this._setPlayerEvents()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this._player.loadVideo(getVimeoId(nextProps.src))
    }
  }

  play() {
    this._player.play()
  }

  pause() {
    this._player.pause()
  }

  stop() {
    this._player.unload()
  }

  seekTo(currentTime) {
    this._player.setCurrentTime(currentTime)
  }

  mute(muted) {
    this.setVolume(muted ? 0 : 1)
  }

  setVolume(volume) {
    this._player.setVolume(volume)
  }

  getNode() {
    return this._player.element
  }

  _setPlayerEvents() {
    const playerEvents = this._getPlayerEvents()

    Object.keys(playerEvents).forEach(key => {
      this._player.on(key, playerEvents[key])
    })
  }

  _getPlayerEvents() {
    return {
      play:         this._handlePlay,
      pause:        this._handlePause,
      ended:        this._handleEnded,
      timeupdate:   this._handleTimeUpdate,
      progress:     this._handleProgress,
      volumechange: this._handleVolumeChange,
      error:        this._handleError,
    }
  }

  _handlePlay = (e) => {
    this.props.onPlay(e)
  }

  _handlePause = (e) => {
    this.props.onPause(e)
  }

  _handleEnded = (e) => {
    this.props.onEnded(e)
  }

  _handleTimeUpdate = ({ seconds }) => {
    this.props.onTimeUpdate(seconds)
  }

  _handleProgress = ({ percent }) => {
    this.props.onProgress(percent)
  }

  _handleVolumeChange = ({ volume }) => {
    this.props.onVolumeChange(volume)
  }

  _handleError = (data) => {
    this.props.onError(data)
  }

  render() {
    const props = specialAssign({
      ref: c => this._node = c,
    }, this.props, vendorPropTypes)

    return createElement('div', props)
  }
}

export default Vimeo
