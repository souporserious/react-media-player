import React, { Component, PropTypes } from 'react'

class Fullscreen extends Component {
  static contextTypes = {
    fullscreen: PropTypes.func,
    isFullscreen: PropTypes.bool
  }

  _handleFullscreen = () => {
    this.context.fullscreen()
  }

  render() {
    return (
      <button type="button" onClick={this._handleFullscreen}>
        {this.context.isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
    )
  }
}

export default Fullscreen
