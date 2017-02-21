import React, { Component, PropTypes } from 'react'
import contextTypes from '../context-types'

export default function withMediaProps(MediaComponent) {
  return class extends Component {
    static displayName = 'withMediaProps'

    static contextTypes = {
      media: PropTypes.object
    }

    render() {
      const { media } = this.context
      return (
        <MediaComponent
          {...this.props}
          media={{
            ...media.state,
            ...media.methods
          }}
        />
      )
    }
  }
}
