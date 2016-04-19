import React, { Component, PropTypes } from 'react'
import Media from '../Media'

export default function media(MediaPlayer, vendor) {
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
            <MediaPlayer Player={Player} vendor={vendor} src={src}/>
          }
        </Media>
      )
    }
  }
}
