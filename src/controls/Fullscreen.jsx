import React, { Component, PropTypes } from 'react'
import withMedia from '../decorators/with-media'

class Fullscreen extends Component {
  shouldComponentUpdate({ isFullscreen }) {
    return this.props.isFullscreen !== isFullscreen
  }

  _handleFullscreen = () => {
    this.props.fullscreen()
  }

  render() {
    const { className, style, isFullscreen } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleFullscreen}
      >
        { isFullscreen ? 'Exit Fullscreen' : 'Fullscreen' }
      </button>
    )
  }
}

export default withMedia(Fullscreen)
