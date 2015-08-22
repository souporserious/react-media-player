import React, { Component, findDOMNode } from 'react';

let youtubeAPILoaded = false;

// load youtube api asynchronously
function loadYoutubeAPI() {
    
  // create script to be injected
  let api = document.createElement('script');

  // load async
  api.async = true;

  // set source to youtube's api
  api.src = 'http://www.youtube.com/player_api';

  // append script to document head
  document.head.appendChild(api);

  // update flag
  youtubeAPILoaded = true;
}

function getYoutubeID(url) {
  
  let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  let match = url.match(regExp);
  
  if(match && match[1].length == 11) {
    return match[1];
  } else {
    throw 'Invalid Youtube ID provided';
  }
}

function getVendor(src) {
  if(src.indexOf('youtube') > -1) {
    return 'youtube';
  } else if(src.indexOf('vimeo') > -1) {
    return 'vimeo';
  } else {
    return 'html5';
  }
}

export const MediaContainer = (Player, type = 'video') =>
  
  class extends Component {

    static displayName = 'MediaContainer'

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
      this._setPlayer(this._setupApis);
    }

    componentWillUnmount() {
      // need to write this shiz
      //this._unbindEvents();
    }

    // Public Methods
    play() {

      const { player, vendor } = this.state;

      switch(vendor) {
        case 'youtube':
          player.playVideo();
          this._currentTimeID = requestAnimationFrame(
            this._getCurrentTime.bind(this)
          );
          break;
        default:
          player.play();
      }
    }

    pause() {

      const { player, vendor } = this.state;

      switch(vendor) {
        case 'youtube':
          player.pauseVideo();
          cancelAnimationFrame(this._currentTimeID);
          break;
        default:
          player.pause();
      }
    }

    playPause() {

      const { playing } = this.state;

      if(!playing) {
        this.play();
      } else {
        this.pause();
      }
    }

    stop() {

      const { player } = this.state;
      
      player.pause();
      player.currentTime = 0;
    }

    setCurrentTime(current) {
      
      const { player, vendor } = this.state;

      if(vendor === 'youtube') {
        player.seekTo(current);
      } else {
        player.currentTime = current;
      }

      this.setState({current});
    }

    muteUnmute() {

      const { player, vendor, muted, volume } = this.state;

      if(!muted) {
        
        switch(vendor) {
          case 'youtube':
            player.mute();
            break;
          default:
            player.muted = true;
        }

        // store volume for un-mute
        this._lastVolume = volume;

        // if muted the volume should be set to 0
        this.setVolume(0);

        this.setState({muted: true});

      } else {

        switch(vendor) {
          case 'youtube':
            player.unMute();
            break;
          default:
            player.muted = false;
        }

        // if unmuted set to last volume
        this.setVolume(this._lastVolume);

        this.setState({muted: false});
      }
    }

    setVolume(volume) {

      const { player, vendor } = this.state;
      let muted = false;

      if(volume <= 0) {
        muted = true;
      }

      if(vendor === 'youtube') {
        player.setVolume(volume * 100);
      } else {
        player.volume = volume;
      }

      this.setState({volume, muted}, () => {
        if(muted) {
          switch(vendor) {
            case 'youtube':
              player.mute();
              break;
            default:
              player.muted = true;
          }
        } else {

          switch(vendor) {
            case 'youtube':
              player.unMute();
              break;
            default:
              player.muted = false;
          }
        }
      });
    }

    toggleFullscreen() {

      if(!this.state.fullscreen) {

        const n = this.state.playerNode;

        if(n.requestFullscreen) {
          n.requestFullscreen();
        } else if(n.webkitRequestFullscreen) {
          n.webkitRequestFullscreen();
        } else if(n.mozRequestFullScreen) {
          n.mozRequestFullScreen();
        } else if(n.msRequestFullscreen) {
          n.msRequestFullscreen();
        }
      } else {

        const d = document;

        if(d.exitFullscreen) {
          d.exitFullscreen();
        } else if(d.webkitExitFullscreen) {
          d.webkitExitFullscreen();
        } else if(d.mozCancelFullScreen) {
          d.mozCancelFullScreen();
        } else if(d.msExitFullscreen) {
          d.msExitFullscreen();
        }
      }
    }

    load(src) {

      // function setupURL(id, ext) {
      //   return urlBase + id + "." + ext;
      // }

      const { player } = this.state;

      // pause player
      player.pause();

      // test support
      // !!!! need to check canPlayType on init
      if(player.canPlayType('video/mp4')) {
        player.setAttribute('src', src);
        //player.setAttribute('src', setupURL(src, 'mp4'));
      } else if(player.canPlayType('video/webm')) {
        player.setAttribute('src', setupURL(src, 'webm'));
      } else if(player.canPlayType('video/ogg')) {
        player.setAttribute('src', setupURL(src, 'ogv'));
      }

      // load new media
      player.load();

      // play new media
      player.play();
    }

    youtubeHandler() {
      // load the api if it hasn't been yet
      if(!youtubeAPILoaded)
        loadYoutubeAPI();

      // create player when API is ready
      window.onYouTubeIframeAPIReady = () =>
        this.createYoutubePlayer();
    }

    // use youtube api to create player
    createYoutubePlayer() {
      const videoId = getYoutubeID(this._src);
      const player = new YT.Player(this.state.player, {
        videoId,
        playerVars: {
          controls: 0,
          showinfo: 0,
          modestbranding: 1
        }
      });
      this.setState({player}, () => {
        this._init();
      });
    }

    // Private Methods
    _setPlayer(cb) {
      
      const component = findDOMNode(this);
      const player = component.querySelector(type);
      let vendor;

      this._src = player.getAttribute('src');

      vendor = getVendor(this._src);

      this.setState({
        player,
        vendor
      }, cb);
    }

    _setupApis() {

      const { vendor } = this.state;

      // determine how to handle video
      switch(vendor) {
        case 'youtube':
          this.youtubeHandler();
          break;
        default:
          this._init();
      }
    }

    _init() {

      const { player, vendor } = this.state;
      let playerNode;

      switch(vendor) {
        case 'youtube':
          playerNode = player.getIframe();
          break;
        default:
          playerNode = player;
      }

      this.setState({playerNode}, () => {
        this._bindEvents();
      });
    }

    // get the current progress of HTML5 videos
    _getCurrentProgress() {
      
      const { player } = this.state;
      let progress = 0;

      if(player.buffered.length > 0) {
        progress = player.buffered.end(0) / player.duration;
      }

      this.setState({progress});

      if(progress < 1) {
        this._currentProgressID = requestAnimationFrame(
          this._getCurrentProgress.bind(this)
        );
      }
    }

    // get the current progress of Youtube videos
    _getCurrentYTProgress() {
      
      const { player } = this.state;
      const progress = player.getVideoLoadedFraction();

      this.setState({progress});

      if(progress < 1) {
        this._currentYTProgressID = requestAnimationFrame(
          this._getCurrentYTProgress.bind(this)
        );
      }
    }

    // get the current time of Youtube videos
    _getCurrentTime() {

      const { player } = this.state;

      this.setState({
        current: player.getCurrentTime()
      });

      this._currentTimeID = requestAnimationFrame(
        this._getCurrentTime.bind(this)
      );
    }

    _bindEvents() {

      const { player, playerNode, vendor } = this.state;

      if(vendor === 'youtube') {

        player.addEventListener('onStateChange', (e) => {
          this.setState({
            loading: e.data === 3 ? true : false,
            playing: e.data === 1 ? true : false
          });
        });

        player.addEventListener('onReady', () => {
          this._currentYTProgressID = requestAnimationFrame(
            this._getCurrentYTProgress.bind(this)
          );
          this.setState({
            duration: player.getDuration()
          });
        });

      } else {

        player.addEventListener('loadedmetadata', ::this._handleLoadedMetaData);

        player.addEventListener('canplay', () => {
          // http://stackoverflow.com/questions/9313697/html5-video-using-the-progress-event-with-dynamically-loaded-videos
          this._currentProgressID = requestAnimationFrame(
            this._getCurrentProgress.bind(this)
          );
        });

        player.addEventListener('timeupdate', ::this._handleTimeUpdate);

        player.addEventListener('play', () =>
          this.setState({playing: true})
        );

        player.addEventListener('pause', () =>
          this.setState({playing: false})
        );
        
        player.addEventListener('ended', () =>
          this.setState({playing: false})
        );
      }

      ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(e =>
        playerNode.addEventListener(e, ::this._handleFullscreenChange)
      );
    }

    _handleLoadedMetaData(e) {

      const player = e.target;
      const { duration, buffered } = player;

      this.setState({
        duration: duration,
        //progress: buffered.end(0) / duration
      });
    }

    _handleTimeUpdate() {
      
      const { player } = this.state;

      this.setState({
        current: player.currentTime,
        muted: player.muted
      });
    }

    _handleFullscreenChange() {

      const d = document;
      const fullscreen = d.fullscreenElement ||
                         d.webkitFullscreenElement ||
                         d.mozFullScreenElement ||
                         d.msFullscreenElement;

      this.setState({fullscreen});
    }

    render() {
      return(
        <Player
          {...this.state}
          play={::this.play}
          pause={::this.pause}
          playPause={::this.playPause}
          stop={::this.stop}
          setCurrentTime={::this.setCurrentTime}
          muteUnmute={::this.muteUnmute}
          setVolume={::this.setVolume}
          toggleFullscreen={::this.toggleFullscreen}
          load={::this.load}
        />
      );
    }
  }