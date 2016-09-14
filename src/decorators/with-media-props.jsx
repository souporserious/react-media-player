import React, { Component } from 'react'
import contextTypes from '../context-types'

export default function withMediaProps(MediaComponent) {
  return class extends Component {
    static displayName = 'withMediaProps'

    static contextTypes = contextTypes

    render() {
      const { mediaPlayer } = this.context
      return (
        <MediaComponent
          {...this.props}
          media={{
            ...mediaPlayer.state,
            ...mediaPlayer.methods
          }}
        />
      )
    }
  }
}
