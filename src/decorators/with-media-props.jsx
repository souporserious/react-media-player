import React, { Component } from 'react'
import contextTypes from '../context-types'

export default function withMediaProps(MediaComponent) {
  return class extends Component {
    static displayName = 'withMediaProps'

    static contextTypes = contextTypes

    render() {
      return <MediaComponent {...this.props} media={this.context.media} />
    }
  }
}
