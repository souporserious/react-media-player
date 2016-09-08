import React, { Component, PropTypes, createElement } from 'react'
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
      const { mediaRef, playerRef, vendor, src, autoPlay, loop } = this.props
      const PlayerComponent = (Player, vendor) => (
        createElement(MediaPlayer, { ...this.props, ref: playerRef, Player, vendor })
      )

      return createElement(
        Media,
        { ref: mediaRef, vendor, src, autoPlay, loop },
        PlayerComponent
      )
    }
  }
}
