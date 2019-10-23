import React, { Component } from 'react'
import YoutubeAPILoader from '../utils/youtube-api-loader'
import getYoutubeId from '../utils/get-youtube-id'
import vendorPropTypes from './vendor-prop-types'

class Youtube extends Component {
  static propTypes = vendorPropTypes

  _videoId = getYoutubeId(this.props.src)
  _lastVideoId = this._videoId
  _isReady = false
  _isMounted = false
  _progressId = null
  _timeUpdateId = null

  componentDidMount() {
    this._isMounted = true
    YoutubeAPILoader.load(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this._lastVideoId = this._videoId
      this._videoId = getYoutubeId(nextProps.src)

      if (this._isReady) {
        if (nextProps.autoPlay) {
          this._player.loadVideoById(this._videoId)
        } else {
          this._player.cueVideoById(this._videoId)
        }
        this.props.onReady()
      }
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

  get instance() {
    return this._player
  }

  get node() {
    return this._player.getIframe()
  }

  _createPlayer() {
    this._player = new YT.Player(this._node, {
      videoId: this._videoId,
      events: this._events(),
      host: `${window.location.protocol}//www.youtube.com`,
      playerVars: {
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        origin: window.location.origin,
        ...this.props.config.youtube,
      },
    })
  }

  _events() {
    return {
      onReady: () => {
        // if id changed before the player was ready we need to load the new one
        if (this._videoId !== this._lastVideoId) {
          this._player.loadVideoById(this._videoId)
        }
        this._isReady = true
        this.props.onDuration(this._player.getDuration())
        this.props.onReady()
      },
      onStateChange: ({ data }) => {
        const { start, end } = this.props.config.youtube
        const {
          PLAYING,
          PAUSED,
          ENDED,
          BUFFERING,
          CUED,
        } = window.YT.PlayerState
        const isPlaying = data === PLAYING

        if (isPlaying) {
          this.props.onPlay(true)
          this.props.isLoading(false)
          this.props.onDuration(this._player.getDuration())
          this._timeUpdateId = requestAnimationFrame(this._handleTimeUpdate)
          if (start || end) {
            const currentTime = this._player.getCurrentTime()
            if (currentTime < start || currentTime > end) {
              this._player.seekTo(start === undefined ? end : start)
            }
          }
        } else {
          cancelAnimationFrame(this._timeUpdateId)
          this._timeUpdateId = null

          cancelAnimationFrame(this._progressId)
          this._progressId = null
        }

        if (data === -1 || data === BUFFERING) {
          this.props.isLoading(true)
        }

        if (data === PAUSED) {
          this.props.onPause(false)
        }

        if (data === ENDED) {
          this.props.isLoading(false)
          this.props.onEnded(false)
        }

        // start fetching progress when playing or buffering
        if (isPlaying || data === BUFFERING) {
          this._progressId = requestAnimationFrame(this._handleProgress)
        }

        // reset duration if a new video was loaded
        if (data === CUED) {
          this.props.isLoading(false)
          this.props.onDuration(0.1)
        }
      },
      onError: e => {
        this.props.onError(e.data)
      },
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
    this.props.onVolumeChange(muted ? 0 : 1)
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
    return <div ref={c => (this._node = c)} {...this.props.extraProps} />
  }
}

export default Youtube
