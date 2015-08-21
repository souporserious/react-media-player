import React, { Component, findDOMNode } from 'react';

// somehow load events in the exact same way from all apis
// HTML5, Youtube, Vimeo
//import HTML5_API from './apis/HTML5';
//loadEvents('HTML5');

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
  }
  else if(src.indexOf('vimeo') > -1) {
    return 'vimeo';
  }
  else {
    return 'html5';
  }
}

export const MediaContainer = (Player, type = 'video') =>
  
  class extends Component {

    static displayName = 'MediaContainer'

    state = {
      player: null,
      playing: false,
      duration: 0,
      current: 0,
      progress: 0,
      muted: false,
      volume: 1,
      fullscreen: false
    }

    src = null
    vendor = null
    vendorID = null

    componentDidMount() {
      this._setPlayer(this._bindEvents);
    }

    componentWillUnmount() {
      // need to write this shiz
      //this._unbindEvents();
    }

    // Public Methods
    playPause() {

      const { player, playing } = this.state;

      if(!playing) {
        switch(this.vendor) {
          case 'youtube':
            player.playVideo();
            break;
          default:
            player.play();
        }
      } else {
        switch(this.vendor) {
          case 'youtube':
            player.pauseVideo();
            break;
          default:
            player.pause();
        }
      }
    }

    stop() {

      const { player } = this.state;
      
      player.pause();
      player.currentTime = 0;
    }

    muteUnmute() {

      const { player, muted } = this.state;

      if(muted === false) {
        player.muted = true;
      } else {
        player.muted = false;
      }
    }

    toggleFullscreen() {

      const { player, fullscreen } = this.state;

      if(!fullscreen) {
        if(player.requestFullscreen) {
          player.requestFullscreen();
        } else if(player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen();
        } else if(player.mozRequestFullScreen) {
          player.mozRequestFullScreen();
        } else if(player.msRequestFullscreen) {
          player.msRequestFullscreen();
        }
      } else {

        const d = document;

        if(d.cancelFullScreen) {
          d.cancelFullScreen();
        } else if (d.webkitCancelFullScreen) {
          d.webkitCancelFullScreen();
        } else if (d.mozCancelFullScreen) {
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
      const videoId = getYoutubeID(this.src);
      const player = new YT.Player(this.state.player, {
        videoId,
        playerVars: {
          controls: 0,
          showinfo: 0,
          modestbranding: 1
        },
        events: {
          onStateChange: (e) => {
            this.setState({
              loading: e.data === 3 ? true : false,
              playing: e.data === 1 ? true : false
            });
          }
        }
      });
      this.setState({player});
    }

    // Private Methods
    _setPlayer(cb) {
      
      const component = findDOMNode(this);
      const player = component.querySelector(type);

      this.src = player.getAttribute('src');
      this.vendor = getVendor(this.src);

      this.setState({
        player: player
      }, cb);
    }

    _bindEvents() {

      const { player } = this.state;

      // determine how to handle video
      switch(this.vendor) {
        case 'youtube':
          this.youtubeHandler();
          break;
        default:
      }

      player.addEventListener('loadedmetadata', ::this._handleLoadedMetaData);

      // player.addEventListener('loadeddata', () =>
      //   // make sure video is ready before trying to check buffer progress
      //   player.addEventListener('progress', ::this._handleProgress)
      // );

      // player.addEventListener('onStateChange', (e) => {
      //   alert();
      // });

      player.addEventListener('timeupdate', ::this._handleTimeUpdate);

      ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'msfullscreenchange'].forEach(e =>
        player.addEventListener(e, ::this._handleFullscreenChange)
      );

      player.addEventListener('play', () =>
        this.setState({playing: true})
      );

      player.addEventListener('pause', () =>
        this.setState({playing: false})
      );

      player.addEventListener('volumechange', () => {

        const { muted } = player;
        let volume = 0;

        if(!muted) {
          volume = player.volume;
        }

        this.setState({
          muted: muted,
          volume: volume
        });
      });
      
      player.addEventListener('ended', () =>
        this.setState({playing: false})
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

    _handleProgress(e) {

      const { player } = this.state;
      const { buffered, currentTime, duration } = player;

      let progress = 0;

      // if we've reached full progress we don't need to update anymore
      if(this.state.progress >= 1) {
        // unbind event here ?
        return;
      }
        
      let range = 0;

      while(!(buffered.start(range) < currentTime &&
            currentTime < buffered.end(range))) {
        range += 1;
      }

      progress = (buffered.end(range) / duration) - (buffered.start(range) / duration)

      this.setState({
        progress: progress
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

      this.setState({
        fullscreen: d.fullScreen || d.webkitIsFullScreen || d.mozFullScreen || d.msFullscreenElement
      });
    }

    render() {
      return(
        <Player
          {...this.state}
          playPause={::this.playPause}
          stop={::this.stop}
          muteUnmute={::this.muteUnmute}
          toggleFullscreen={::this.toggleFullscreen}
          load={::this.load}
        />
      );
    }
  }