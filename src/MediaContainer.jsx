import React, { Component, Proptypes, Children, cloneElement } from 'react';

class MediaContainer extends Component {

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

  static formatTime(current) {

    let minutes = Math.floor(current / 60);
    let seconds = Math.floor(current % 60);

    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    minutes = (minutes >= 10) ? minutes : minutes;

    return minutes + ':' + seconds;
  }

  componentDidMount() {
    this._setPlayer(this._bindEvents);
  }

  componentWillUnmount() {
    // need to write this shiz
    //this._unbindEvents();
  }

  // Public Methods
  playPause() {

    const { player } = this.state;

    if(player.paused) {
      player.play();
    } else {
      player.pause();
    }
  }

  stop() {

    const { player } = this.state;
    
    player.pause();
    player.currentTime = 0;
  }

  muteUnmute() {

    const { player } = this.state;

    if(player.muted === false) {
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

  // Private Methods
  _setPlayer(cb) {
    
    const component = React.findDOMNode(this);
    
    this.setState({
      player: component.querySelector(this.props.type)
    }, cb);
  }

  _bindEvents() {

    const { player } = this.state;

    player.addEventListener('loadedmetadata', ::this._handleLoadedMetaData);

    // player.addEventListener('loadeddata', () =>
    //   // make sure video is ready before trying to check buffer progress
    //   player.addEventListener('progress', ::this._handleProgress)
    // );

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
    
    const { children } = this.props;
    const childProps = this.state;
    
    if(typeof children !== 'function') {
      console.warn('MediaContainer: Media Container expects a function');
      return null;
    }

    return cloneElement(
      Children.only(children(childProps))
    );
  }
}

export default MediaContainer;