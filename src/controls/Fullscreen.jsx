import React, {Component} from 'react';

class Fullscreen extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.fullscreen !== nextProps.fullscreen;
  }

  _handleFullscreen() {
    this.props.onFullscreen();
  }

  render() {
    return(
      <button type="button" onClick={::this._handleFullscreen}>
        {this.props.fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
    );
  }
}

export default Fullscreen;