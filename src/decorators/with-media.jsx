import React, { Component, PropTypes } from 'react'
import contextTypes from '../context-types'

export default function withMedia(MediaComponent) {
  return class extends Component {
    static contextTypes = contextTypes

    render() {
      return (
        <MediaComponent {...this.context} {...this.props}/>
      )
    }
  }
}
