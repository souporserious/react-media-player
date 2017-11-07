import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import vendorPropTypes from './vendor-prop-types'
import HTML5 from './HTML5'

class AudioObject extends HTML5 {
  static propTypes = {
    ...vendorPropTypes,
    useAudioObject: PropTypes.bool,
  }

  componentWillMount() {
    const { src } = this.props

    this._createAudioObject(src)
    this._bindAudioObjectEvents(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const { src } = nextProps

    // destroy and recreate audio object to clean up any browser state
    if (this.props.src !== src) {
      this._destroyAudioObject()
      this._createAudioObject(src)
    }
    // bind any new props to current audio object
    this._bindAudioObjectEvents(nextProps)
  }

  componentWillUnmount() {
    this._destroyAudioObject()
  }

  get node() { // TODO look
    console.warn('findDOMNode for AudioObject')
    return findDOMNode(this._player)
  }

  _createAudioObject(src) {
    this._player = new Audio(src)
  }

  _destroyAudioObject() {
    // even when stopped and set to null,
    // chrome will continue to buffer files
    // set the source to some benign value
    // (FF throws on an empty string)
    // and load it to truly stop buffering
    this.stop()
    this._player.src = 'about:blank'
    this._player.load()
    this._player = null
  }

  _bindAudioObjectEvents({ extraProps }) {
    const playerEvents = this._playerEvents

    Object.keys(extraProps).forEach(key => {
      this._player[key] = extraProps[key]
    })

    Object.keys(playerEvents).forEach(key => {
      this._player[key.toLowerCase()] = playerEvents[key]
    })
  }

  render() {
    return null
  }
}

export default AudioObject
