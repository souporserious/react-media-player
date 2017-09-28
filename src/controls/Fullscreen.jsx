import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withMediaProps from '../decorators/with-media-props'

class Fullscreen extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isFullscreen !== media.isFullscreen
  }

  _handleFullscreen = () => {
    this.props.media.fullscreen()
  }

  render() {
    const { className, style, media } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleFullscreen}
      >
        {media.isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
    )
  }
}

export default withMediaProps(Fullscreen)
