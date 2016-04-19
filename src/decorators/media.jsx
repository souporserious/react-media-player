import React, { Component, PropTypes } from 'react'
import Media from '../Media'

export default function media(MediaPlayer) {
  return class extends Component {
    static propTypes = {
      src: PropTypes.string
    }

    render() {
      const { src } = this.props
      return (
        <Media src={src}>
          { Player => <MediaPlayer Player={Player} src={src}/> }
        </Media>
      )
    }
  }
}
