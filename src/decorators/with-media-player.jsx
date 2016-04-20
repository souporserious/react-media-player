import React, { Component, PropTypes } from 'react'
import Media from '../Media'

export default function withMediaPlayer(MediaPlayer, vendor) {
  return class extends Component {
    static propTypes = {
      vendor: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
      src: PropTypes.string
    }

    static defaultProps = {
      vendor
    }

    render() {
      const { vendor, src } = this.props
      return (
        <Media vendor={vendor} src={src}>
          { Player =>
            <MediaPlayer {...this.props} Player={Player}/>
          }
        </Media>
      )
    }
  }
}
