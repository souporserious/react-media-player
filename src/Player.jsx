import React, { Component } from 'react'
import getMediaTag from './get-media-tag'

class Player extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.src !== nextProps.src ||
           this.props.children !== nextProps.children
  }

  render() {
    const { src, children } = this.props
    const tag = getMediaTag(src)

    return React.createElement(tag, {src}, children)
  }
}

export default Player