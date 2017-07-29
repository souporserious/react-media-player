import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withMediaProps from '../decorators/with-media-props'

class Progress extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.progress !== media.progress
  }

  render() {
    const { className, style, media } = this.props
    return (
      <progress
        className={className}
        style={style}
        max={100}
        value={media.progress * 100}
      />
    )
  }
}

export default withMediaProps(Progress)
