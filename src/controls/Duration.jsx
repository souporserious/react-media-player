import React, { Component, PropTypes } from 'react'
import withMedia from '../decorators/with-media'
import formatTime from '../utils/format-time'

class Duration extends Component {
  shouldComponentUpdate({ duration }) {
    return this.props.duration !== duration
  }

  render() {
    const { className, style, duration } = this.props
    return (
      <time className={className} style={style}>
        {formatTime(duration)}
      </time>
    )
  }
}

export default withMedia(Duration)
