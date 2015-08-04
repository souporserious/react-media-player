import React, {Component, Proptypes, Children, cloneElement} from 'react';

class MediaContainer extends Component {

  state = {
    player: null,
    playing: false,
    muted: false,
    duration: 0,
    current: 0,
    progress: 0,
    isFullscreen: false
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

  _setPlayer(cb) {
    
    const component = React.findDOMNode(this);
    
    this.setState({
      player: component.querySelector(this.props.type)
    }, cb);
  }

  _bindEvents() {

    const { player } = this.state;

    player.addEventListener('loadedmetadata', ::this._handleLoadedMetaData);

    player.addEventListener('timeupdate', ::this._handleTimeUpdate);

    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange'].forEach(e =>
      player.addEventListener(e, ::this._handleFullscreenChange)
    );

    player.addEventListener('play', () =>
      this.setState({playing: true})
    );

    player.addEventListener('pause', () =>
      this.setState({playing: false})
    );

    player.addEventListener('volumechange', () =>
      this.setState({muted: player.muted})
    );
    
    player.addEventListener('ended', () =>
      this.setState({playing: false})
    );
  }

  _handleLoadedMetaData(e) {

    const player = e.target;
    const { duration, buffered } = player;

    this.setState({
      duration: duration,
      progress: buffered.end(0) / duration
    }, () => {
      // make sure video has loaded meta data before listening for progress
      player.addEventListener('progress', ::this._handleProgress);
    });
  }

  _handleProgress(e) {

    const { player } = this.state;
    const { buffered, currentTime, duration } = player;

    let progress = 0;

    // if we've reached full progress we don't need to update anymore
    // not sure if we'll need it if something happens to connection though
    if(this.state.progress >= 1) {
      // unbind event here
      return;
    }
    
    // getting an issue Failed to execute 'start' on 'TimeRanges'
    // not sure how to fix, need to look at later, try catch for now
    try {
      
      let range = 0;

      while(!(buffered.start(range) < currentTime &&
            currentTime < buffered.end(range))) {
        range += 1;
      }

      progress = (buffered.end(range) / duration) - (buffered.start(range) / duration)
    
    } catch(err){
      progress = this.state.progress;
    }

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
      isFullscreen: d.fullScreen || d.mozFullScreen || d.webkitIsFullScreen
    }, () => {
      console.log(this.state.isFullscreen);
    });
  }

  render() {
    
    const { children } = this.props;
    const childProps = this.state;
    
    if(typeof children !== 'function') {
      console.warn('MediaContainer: Please provide a function');
      return null;
    }

    return cloneElement(
      Children.only(children(childProps))
    );
  }
}

export default MediaContainer;