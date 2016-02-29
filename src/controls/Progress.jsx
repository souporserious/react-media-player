import React, { Component, PropTypes } from 'react'

class Progress extends Component {
  static contextTypes = {
    progress: PropTypes.number
  }

  render() {
    return (
      <progress
        id={this.props.id}
        className={this.props.className}
        max={100}
        value={this.context.progress * 100}
      />
    )
  }
}

export default Progress
