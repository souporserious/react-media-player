import React, { Component } from 'react'

class Vimeo extends Component {
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
    return <div>This is a vimeo video</div>
  }
}

export default Vimeo
