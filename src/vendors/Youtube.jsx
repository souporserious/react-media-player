import React, { Component } from 'react'
import loadAPI from '../utils/load-api'
import getYoutubeId from '../utils/get-youtube-id'
import vendorPropTypes from './vendor-prop-types'

let isAPILoaded = false

class Youtube extends Component {
  static propTypes = vendorPropTypes

  _progressId = null
  _timeUpdateId = null

  componentDidMount() {
    if (!isAPILoaded) {
      loadAPI('http://www.youtube.com/player_api')

      window.onYouTubeIframeAPIReady = () => {
        this._createPlayer()
        isAPILoaded = true
      }
    } else {
      this._createPlayer()
    }
  }

  componentWillUnmount() {
    if (this._player) {
      this._player.destroy()
    }
  }

  _createPlayer() {
    const videoId = getYoutubeId(this.props.src)

    this._player = new YT.Player(this._node, {
      videoId,
      events: this._events(),
      playerVars: {
        controls: 0,
        showinfo: 0,
        modestbranding: 1
      }
    })
  }

  _events() {
    return {
      onReady: () => {
        this.props.onDuration(this._player.getDuration())
      },
      onStateChange: ({ data }) => {
        const isPlaying = (data === 1)

        if (isPlaying) {
          this._timeUpdateId = requestAnimationFrame(this._handleTimeUpdate)
        } else {
          cancelAnimationFrame(this._timeUpdateId)
          this._timeUpdateId = null

          cancelAnimationFrame(this._progressId)
          this._progressId = null
        }

        // start fetching progress when playing or buffering
        if (isPlaying || data === 3) {
          this._progressId = requestAnimationFrame(this._handleProgress)
        }

        this.props.onPlaying(isPlaying)
      }
    }
  }

  play() {
    this._player.playVideo()
  }

  pause() {
    this._player.pauseVideo()
  }

  seekTo(currentTime) {
    this._player.seekTo(currentTime)
  }

  mute(muted) {
    if (muted) {
      this._player.mute()
    } else {
      this._player.unMute()
    }
    this.props.onMute(muted)
  }

  setVolume(volume) {
    this._player.setVolume(+volume * 100)
    this.props.onVolumeChange(+volume)
  }

  _handleProgress = () => {
    const progress = this._player.getVideoLoadedFraction()

    this.props.onProgress(progress)

    if (this._progressId && progress < 1) {
      this._progressId = requestAnimationFrame(this._handleProgress)
    }
  }

  _handleTimeUpdate = () => {
    this.props.onTimeUpdate(this._player.getCurrentTime())

    if (this._timeUpdateId) {
      this._timeUpdateId = requestAnimationFrame(this._handleTimeUpdate)
    }
  }

  render() {
    return <div ref={c => this._node = c}/>
  }
}

export default Youtube
