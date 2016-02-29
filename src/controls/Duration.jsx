import React, { Component, PropTypes } from 'react'
import formatTime from '../utils/format-time'

class Duration extends Component {
  static contextTypes = {
    duration: PropTypes.number
  }

  render() {
    return (
      <time
        id={this.props.id}
        className={this.props.className}
      >
        {formatTime(this.context.duration)}
      </time>
    )
  }
}

export default Duration
