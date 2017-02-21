import React, { Component, PropTypes } from 'react'
import withMediaProps from '../decorators/with-media-props'

class Played extends Component {
  shouldComponentUpdate({ media }) {
    return (
      this.props.media.duration !== media.duration ||
      this.props.media.currentTime !== media.currentTime
    )
  }

  render() {
    const { className, style, media } = this.props
    return (
      <progress
        role="presentation"
        min={0}
        max={media.duration}
        value={media.currentTime}
        className={className}
        style={style}
      />
    )
  }
}

export default withMediaProps(Played)
