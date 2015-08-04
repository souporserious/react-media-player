import React, {Component} from 'react';

// we'll do this later
// http://www.sitepoint.com/use-html5-full-screen-api/

class Fullscreen {

  shouldComponentUpdate(nextProps) {
    return this.props.fullscreen !== nextProps.fullscreen;
  }

  _handleFullscreen() {
    this.props.onFullscreen();
  }

  render() {
    return(
      <button onClick={::this._handleFullscreen}>
        {this.props.fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
    );
  }
}

export default Fullscreen;