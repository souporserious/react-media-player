import React, { Component, PropTypes } from 'react'
import Media from '../Media'

export default function withMediaPlayer(MediaPlayer, vendor) {
  return class extends Component {
    static displayName = 'withMediaPlayer'

    static propTypes = {
      vendor: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
      src: PropTypes.string.isRequired
    }

    static defaultProps = {
      vendor
    }

    render() {
      return (
        <Media {...this.props}>
          { (Player, vendor) =>
            <MediaPlayer {...this.props} Player={Player} vendor={vendor}/>
          }
        </Media>
      )
    }
  }
}
