import React, {Component, Proptypes, Children, cloneElement} from 'react';

class MediaContainer extends Component {

  state = {
    player: null,
    playing: false,
    duration: '0:00',
    current: '0:00'
  }

  static formatTime(current) {

    let minutes = Math.floor(current / 60);
    let seconds = Math.floor(current % 60);

    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    minutes = (minutes >= 10) ? minutes : minutes;

    return minutes + ':' + seconds;
  }

  _setPlayer(cb) {
    
    const component = React.findDOMNode(this);
    
    this.setState({
      player: component.querySelector(this.props.type)
    }, cb);
  }

  _handleLoadedMetaData(e) {
    this.setState({
      duration: MediaContainer.formatTime(e.target.duration)
    });
  }

  _handleCurrentTime() {
    
    const { player } = this.state;

    this.setState({
      current: MediaContainer.formatTime(player.currentTime)
    });
  }

  _bindEvents() {

    const { player } = this.state;

    player.addEventListener('loadedmetadata', ::this._handleLoadedMetaData);
    player.addEventListener('timeupdate', ::this._handleCurrentTime);

    player.addEventListener('play', () => {
      this.setState({playing: true});
    });

    player.addEventListener('pause', () => {
      this.setState({playing: false});
    });
  }

  componentDidMount() {
    this._setPlayer(this._bindEvents);
  }

  componentWillUnmount() {
    // need to write this shiz
    //this._unbindEvents();
  }

  render() {
    
    const {children} = this.props;
    const childProps = this.state;
    
    if(!children) {
      console.warn('MediaContainer: Please provide at least one component');
      return null;
    }

    return cloneElement(
      Children.only(children(childProps))
    );
  }
}

export default MediaContainer;