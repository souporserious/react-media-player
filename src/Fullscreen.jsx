import React, {Component} from 'react';

// we'll do this later
// http://www.sitepoint.com/use-html5-full-screen-api/

class Fullscreen {

  // need to handle if in fullscreen or not in mediacontainer
  // shouldComponentUpdate(nextProps) {
  //   return this.props.fullscreen !== nextProps.fullscreen;
  // }

  _handleFullscreen() {

    const {player} = this.props;

    // need to get correct fullscreen on componentDidMount
    // instead of checking here every time
    if(player.requestFullscreen) {
      player.requestFullscreen();
    } else if(player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    } else if(player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    }
  }

  render() {
    return(
      <button onClick={::this._handleFullscreen}>
        Fullscreen
      </button>
    );
  }
}

export default Fullscreen;