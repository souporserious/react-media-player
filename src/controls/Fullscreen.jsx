import React, { Component, PropTypes } from 'react'
import withMediaProps from '../decorators/with-media-props'

class Fullscreen extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.fullscreen !== media.fullscreen
  }

  _handleFullscreen = () => {
    const { media } = this.props
    media.setFullscreen(!media.fullscreen)
  }

  render() {
    const { className, style, media, children } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleFullscreen}
      >
        { typeof children === 'function'
            ? children(media)
            : media.fullscreen ? 'Exit Fullscreen' : 'Fullscreen'
        }
      </button>
    )
  }
}

export default withMediaProps(Fullscreen)
