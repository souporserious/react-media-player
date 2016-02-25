import React, { Component } from 'react'

class Youtube extends Component {
  componentWillUnmount() {
    this.props.onPlaying(false)
  }

  play() {
    this.props.onPlaying(true)
  }

  pause() {
    this.props.onPlaying(false)
  }

  render() {
    return <div>This is a youtube video</div>
  }
}

export default Youtube
