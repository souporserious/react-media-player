import React, { Component } from 'react'

class Audio extends Component {
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
    return <div>This is a native audio file</div>
  }
}

export default Audio
