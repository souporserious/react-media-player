import React, { Component, PropTypes } from 'react'
import formatTime from '../utils/format-time'

class CurrentTime extends Component {
  static contextTypes = {
    currentTime: PropTypes.number
  }

  render() {
    return (
      <time
        id={this.props.id}
        className={this.props.className}
      >
        {formatTime(this.context.currentTime)}
      </time>
    )
  }
}

export default CurrentTime
