import React, { Component, Children } from 'react'
import ReactDOM from 'react-dom'
import shallowCompare from 'react/lib/shallowCompare'
import loadAPI from './load-api'
import getVendor from './get-vendor'
import getYoutubeID from './get-youtube-id'
import getVimeoID from './get-vimeo-id'
import Player from './Player'

const apiFlags = {
  youtube: false,
  vimeo: false
}

class Media extends Component {
  static displayName = 'Media'

  state = {
    player: null,
    vendor: null,
    playing: false,
    duration: 0,
    current: 0,
    progress: 0,
    muted: false,
    volume: 1,
    fullscreen: false
  }

  _src = null
  _currentProgressID = null
  _currentYTProgressID = null
  _currentTimeID = null
  _lastVolume = 0

  componentDidMount() {
    this._setPlayer(this._setupAPI)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  componentWillUnmount() {
    // need to write this shiz
    //this._unbindEvents();
  }

  // Public API
  play = () => {
    const { player, vendor } = this.state

    switch (vendor) {
      case 'youtube':
        player.playVideo()
        this._currentTimeID = requestAnimationFrame(
          this._getCurrentTime
        )
        break
      case 'vimeo':
        player.api('play')
        break
      default:
        player.play()
    }
  }

  pause = () => {
    const { player, vendor } = this.state

    switch (vendor) {
      case 'youtube':
        player.pauseVideo()
        cancelAnimationFrame(this._currentTimeID)
        break
      case 'vimeo':
        player.api('pause')
        break
      default:
        player.pause()
    }
  }

  playPause = () => {
    const { playing } = this.state

    if (!playing) {
      this.play()
    } else {
      this.pause()
    }
  }

  stop = () => {
    const { player } = this.state
    
    player.pause()
    player.currentTime = 0
  }

  setCurrentTime = (current) => {
    const { player, vendor } = this.state

    if (vendor === 'youtube') {
      player.seekTo(current)
    } else if (vendor === 'vimeo') {
      player.api('seekTo', current)
    } else {
      player.currentTime = current
    }

    this._setCurrentTime(current)
  }

  muteUnmute = () => {
    const { player, vendor, muted, volume } = this.state

    if (!muted) {
      switch (vendor) {
        case 'youtube':
          player.mute()
          break
        default:
          player.muted = true
      }

      // store volume for un-mute
      this._lastVolume = volume

      // if muted the volume should be set to 0
      this.setVolume(0)

      this._setMute(true)
    } else {

      switch (vendor) {
        case 'youtube':
          player.unMute()
          break
        default:
          player.muted = false
      }

      // if unmuted set to last volume
      this.setVolume(this._lastVolume)

      this._setMute(false)
    }
  }

  setVolume = (volume) => {
    const { player, vendor } = this.state
    let muted = false

    if (volume <= 0) {
      muted = true
    }

    if (vendor === 'youtube') {
      player.setVolume(volume * 100);
    } else if (vendor === 'vimeo') {
      player.api('setVolume', volume);
    } else {
      player.volume = volume
    }

    this._setVolume(volume)
    this._setMute(muted)

    if (muted) {
      switch (vendor) {
        case 'youtube':
          player.mute()
          break
        default:
          player.muted = true
      }
    } else {
      switch (vendor) {
        case 'youtube':
          player.unMute()
          break
        default:
          player.muted = false
      }
    }
  }

  toggleFullscreen = () => {
    if (!this.state.fullscreen) {
      const n = this.state.playerNode

      if (n.requestFullscreen) {
        n.requestFullscreen()
      } else if (n.webkitRequestFullscreen) {
        n.webkitRequestFullscreen()
      } else if (n.mozRequestFullScreen) {
        n.mozRequestFullScreen()
      } else if (n.msRequestFullscreen) {
        n.msRequestFullscreen()
      }
    } else {
      const d = document

      if (d.exitFullscreen) {
        d.exitFullscreen()
      } else if (d.webkitExitFullscreen) {
        d.webkitExitFullscreen()
      } else if (d.mozCancelFullScreen) {
        d.mozCancelFullScreen()
      } else if (d.msExitFullscreen) {
        d.msExitFullscreen()
      }
    }
  }

  load = (src) => {
    // function setupURL(id, ext) {
    //   return urlBase + id + "." + ext;
    // }

    const { player } = this.state;

    // pause player
    player.pause();

    // test support
    // !!!! need to check canPlayType on init
    if (player.canPlayType('video/mp4')) {
      player.setAttribute('src', src)
      //player.setAttribute('src', setupURL(src, 'mp4'))
    } else if (player.canPlayType('video/webm')) {
      player.setAttribute('src', setupURL(src, 'webm'))
    } else if (player.canPlayType('video/ogg')) {
      player.setAttribute('src', setupURL(src, 'ogv'))
    }

    // load new media
    player.load()

    // play new media
    player.play()
  }

  // Props API
  _setPlaying(playing) {
    if(playing === this.state.playing) return
    this.setState({playing}, () => {
      this.props.onPlaying(playing)
    })
  }

  _setProgress(progress) {
    if(progress === this.state.progress) return
    this.setState({progress}, () => {
      this.props.getProgress(progress)
    })
  }

  _setCurrentTime(current) {
    if(current === this.state.current) return
    this.setState({current}, () => {
      this.props.getCurrentTime(current)
    })
  }

  _setDuration(duration) {
    if(duration === this.state.duration) return
    this.setState({duration}, () => {
      this.props.getDuration(duration)
    }) 
  }

  _setMute(muted) {
    if(muted === this.state.muted) return
    this.setState({muted}, () => {
      this.props.onMute(muted)
    })
  }

  _setVolume(volume) {
    if(volume === this.state.volume) return
    this.setState({volume}, () => {
      this.props.onVolumeChange(volume)
    })
  }

  _setFullscreen(fullscreen) {
    if(fullscreen === this.state.fullscreen) return
    this.setState({fullscreen}, () => {
      this.props.onFullscreen(fullscreen)
    })
  }
  
  // need todo
  _handleLoad(src) {
    this.setState({src}, () => {
      this.props.onChange(src)
    })
  }

  // Private Methods
  _setupYoutubeAPI() {
    const vendor = 'youtube'
    const api = 'http://www.youtube.com/player_api'

    // load the api if it hasn't been yet
    if (!apiFlags[vendor]) {
      loadAPI(api)
      
      // update flag
      apiFlags[vendor] = true
    }

    // create player when API is ready
    window.onYouTubeIframeAPIReady = () =>
      this._createYoutubePlayer()
  }

  // use youtube api to create player
  _createYoutubePlayer() {
    const videoId = getYoutubeID(this._src)
    const player = new YT.Player(this.state.player, {
      videoId,
      playerVars: {
        controls: 0,
        showinfo: 0,
        modestbranding: 1
      }
    })
    
    this.setState({player}, () => {
      this._init()
    })
  }

  _setupVimeoAPI() {
    const vendor = 'vimeo'
    const api = 'https://f.vimeocdn.com/js/froogaloop2.min.js'

    // load the api if it hasn't been yet
    if (!apiFlags[vendor]) {
      loadAPI(api, vendor)

      // update flag
      apiFlags[vendor] = true
    }

    // create player when API is ready
    this._createVimeoPlayer()
  }

  _getVimeoPlayer(id, cb) {
    const request = new XMLHttpRequest()
    
    request.open('GET', `https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/${id}`, true)

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        cb(JSON.parse(request.responseText))
      }
    }

    request.send()
  }

  _createVimeoPlayer() {
    const { player } = this.state
    const videoId = getVimeoID(this._src)

    this._getVimeoPlayer(videoId, (data) => {
      const parentNode = player.parentNode

      // enable javascirpt API on the data html
      data.html = data.html.replace(/(<iframe *src=")(?!http:\/\/)(.*?)"/, `$1$2?api=1"`)
      
      // replace video player with our Vimeo iframe
      player.outerHTML = unescape(data.html)

      this._setDuration(data.duration)

      this.setState({
        player: $f(parentNode.querySelector('iframe')),
        playerNode: parentNode.querySelector('iframe'),
      }, () => {
        this._init()
      })
    })
  }

  _setPlayer(cb) {
    const component = ReactDOM.findDOMNode(this)
    let playerTags = ['iframe', 'audio', 'video']
    let player, vendor

    // loop through and find the correct tag to query for
    for (let i = playerTags.length; i--;) {
      // try to query for a tag
      player = document.querySelector(playerTags[i])

      // if we've found a player break from the loop
      if (player) break
    }

    // get the src passed in
    this._src = player.getAttribute('src')

    // determine if what type of vendor we are working with
    vendor = getVendor(this._src)

    this.setState({
      player,
      vendor
    }, cb)
  }

  _setupAPI() {
    const { vendor } = this.state

    // determine how to handle video
    switch (vendor) {
      case 'youtube':
        this._setupYoutubeAPI()
        break
      case 'vimeo':
        this._setupVimeoAPI()
        break
      default:
        this._init()
    }
  }

  _init() {
    const { player, vendor } = this.state
    let playerNode

    switch (vendor) {
      case 'youtube':
        playerNode = player.getIframe()
        break
      case 'vimeo':
        playerNode = this.state.playerNode
        break
      default:
        playerNode = player
    }

    this.setState({playerNode}, () =>
      this._bindEvents()
    )
  }

  // get the current progress of HTML5 videos
  _getCurrentProgress = () => {
    const { player } = this.state
    let progress = 0

    if (player.buffered.length > 0) {
      progress = player.buffered.end(0) / player.duration
    }

    this._setProgress(progress)

    if (progress < 1) {
      this._currentProgressID = requestAnimationFrame(
        this._getCurrentProgress
      )
    }
  }

  // get the current progress of Youtube videos
  _getCurrentYTProgress = () => {
    const { player } = this.state
    const progress = player.getVideoLoadedFraction()

    this._setProgress(progress)

    if (progress < 1) {
      this._currentYTProgressID = requestAnimationFrame(
        this._getCurrentYTProgress
      )
    }
  }

  // get the current progress of Vimeo videos
  _getCurrentVimeoProgress(data) {
    this._setProgress(data.percent)
  }

  // get the current time of Youtube videos
  _getCurrentTime = () => {
    const { player } = this.state

    this._setCurrentTime(player.getCurrentTime())

    this._currentTimeID = requestAnimationFrame(
      this._getCurrentTime
    )
  }

  _bindEvents() {
    const { player, playerNode, vendor } = this.state

    if (vendor === 'youtube') {
      player.addEventListener('onStateChange', (e) => {
        this.setState({
          loading: e.data === 3 ? true : false
        })
        this._setPlaying(e.data === 1 ? true : false)
      })

      player.addEventListener('onReady', () => {
        this._currentYTProgressID = requestAnimationFrame(
          this._getCurrentYTProgress
        )
        this._setDuration(player.getDuration())
      })

    } else if (vendor === 'vimeo') {
      player.addEvent('ready', () => {
        player.addEvent('play', () =>
          this._setPlaying(true)
        )

        player.addEvent('pause', () =>
          this._setPlaying(false)
        )

        player.addEvent('finish', () =>
          this._setPlaying(false)
        )

        player.addEvent('loadProgress', ::this._getCurrentVimeoProgress)

        player.addEvent('playProgress', ::this._handleVimeoTimeUpdate)
      })
    } else {
      player.addEventListener('loadedmetadata', ::this._handleLoadedMetaData)

      player.addEventListener('canplay', () => {
        // http://stackoverflow.com/questions/9313697/html5-video-using-the-progress-event-with-dynamically-loaded-videos
        this._currentProgressID = requestAnimationFrame(
          this._getCurrentProgress
        )
      })

      player.addEventListener('timeupdate', ::this._handleTimeUpdate)

      player.addEventListener('play', () =>
        this._setPlaying(true)
      )

      player.addEventListener('pause', () =>
        this._setPlaying(false)
      )
      
      player.addEventListener('ended', () =>
        this._setPlaying(false)
      )
    }

    // check this http://codepen.io/ludviglindblom/pen/medXwN
    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(e =>
      playerNode.addEventListener(e, ::this._handleFullscreenChange)
    )
  }

  // Events
  _handleLoadedMetaData(e) {
    const { duration } = e.target
    this._setDuration(duration)
  }

  _handleVimeoTimeUpdate(data) {
    this._setCurrentTime(data.seconds)
  }

  _handleTimeUpdate() {
    const { player } = this.state
    this._setCurrentTime(player.currentTime)
    this._setMute(player.muted)
  }

  _handleFullscreenChange() {
    const d = document
    const f = d.fullscreenElement ||
              d.webkitFullscreenElement ||
              d.mozFullScreenElement ||
              d.msFullscreenElement
    this._setFullscreen(!!f)
  }

  render() {
    return <Player src={this.props.src} />
  }
}

export default Media