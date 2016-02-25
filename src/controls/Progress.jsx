import React, { Component, PropTypes } from 'react'

class Progress extends Component {
  static contextTypes = {
    progress: PropTypes.number
  }

  render() {
    return (
      <progress
        max={100}
        value={this.context.progress * 100}
      />
    )
  }
}

export default Progress
