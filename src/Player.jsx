import React, { Component, PropTypes, createElement } from 'react'
import contextTypes from './context-types'
import getVendor from './utils/get-vendor'

class Player extends Component {
  static contextTypes = contextTypes

  get instance() {
    return this._component && this._component.instance
  }

  _handleRef = (component) => {
    this.context.setPlayer(component)
    this._component = component
  }

  render() {
    const { src, autoPlay, onReady, onEnded, mediaEvents } = this.context
    const { vendor, component } = getVendor(src, this.context.vendor)

    return (
      createElement(component, {
        ref: this._handleRef,
        src,
        vendor,
        autoPlay,
        onReady,
        onEnded,
        ...mediaEvents,
        extraProps: this.props
      })
    )
  }
}

export default Player
