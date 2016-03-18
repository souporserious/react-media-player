import React, { Component } from 'react'
import loadAPI from '../utils/load-api'
import getYoutubeId from '../utils/get-youtube-id'
import vendorPropTypes from './vendor-prop-types'

let isAPILoaded = false

class Youtube extends Component {
  static propTypes = vendorPropTypes

  _isMounted = false
  _progressId = null
  _timeUpdateId = null

  componentDidMount() {
    this._isMounted = true

    if (!isAPILoaded) {
      loadAPI('//youtube.com/player_api')

      window.onYouTubeIframeAPIReady = () => {
        this._createPlayer()
        isAPILoaded = true
      }
    } else {
      this._createPlayer()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      const videoId = getYoutubeId(nextProps.src)
      this._player.cueVideoById(videoId)
    }
  }

  componentWillUnmount() {
    this._isMounted = false

    if (this._progressId) {
      cancelAnimationFrame(this._progressId)
    }

    if (this._timeUpdateId) {
      cancelAnimationFrame(this._timeUpdateId)
    }

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
        this.props.onReady()
      },
      onStateChange: ({ data }) => {
        const isPlaying = (data === 1)

        if (isPlaying) {
          this.props.onDuration(this._player.getDuration())
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

        // reset duration if a new video was loaded
        if (data === 5) {
          this.props.onDuration(0.1)
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

  stop() {
    this._player.stopVideo()
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
    if (!this._isMounted) return

    const progress = this._player.getVideoLoadedFraction() || 0

    this.props.onProgress(progress)

    if (this._progressId && progress < 1) {
      this._progressId = requestAnimationFrame(this._handleProgress)
    }
  }

  _handleTimeUpdate = () => {
    if (!this._isMounted) return

    this.props.onTimeUpdate(this._player.getCurrentTime() || 0)

    if (this._timeUpdateId) {
      this._timeUpdateId = requestAnimationFrame(this._handleTimeUpdate)
    }
  }

  render() {
    return <div ref={c => this._node = c}/>
  }
}

export default Youtube
