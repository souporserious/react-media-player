import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withMediaProps } from '../src/react-media-player'
import Transition from 'react-motion-ui-pack'

class Scale extends Component {
  render() {
    return (
      <Transition
        component="g"
        enter={{ scale: 1 }}
        leave={{ scale: 0 }}
      >
        {this.props.children}
      </Transition>
    )
  }
}

class MuteUnmute extends Component {
  _handleMuteUnmute = () => {
    this.props.media.muteUnmute()
  }

  render() {
    const { media: { isMuted, volume }, className } = this.props
    return (
      <svg width="36px" height="36px" viewBox="0 0 36 36" className={className} onClick={this._handleMuteUnmute}>
        <circle fill="#373D3F" cx="18" cy="18" r="18"/>
        <polygon fill="#CDD7DB" points="11,14.844 11,21.442 14.202,21.442 17.656,25 17.656,11 14.074,14.844"/>
        <Scale>
          { volume >= 0.5 &&
            <path key="first-bar" fill="#CDD7DB" d="M24.024,14.443c-0.607-1.028-1.441-1.807-2.236-2.326c-0.405-0.252-0.796-0.448-1.153-0.597c-0.362-0.139-0.682-0.245-0.954-0.305c-0.058-0.018-0.104-0.023-0.158-0.035v1.202c0.2,0.052,0.421,0.124,0.672,0.22c0.298,0.125,0.622,0.289,0.961,0.497c0.662,0.434,1.359,1.084,1.864,1.94c0.26,0.424,0.448,0.904,0.599,1.401c0.139,0.538,0.193,0.903,0.216,1.616c-0.017,0.421-0.075,1.029-0.216,1.506c-0.151,0.497-0.339,0.977-0.599,1.401c-0.505,0.856-1.202,1.507-1.864,1.94c-0.339,0.209-0.663,0.373-0.961,0.497c-0.268,0.102-0.489,0.174-0.672,0.221v1.201c0.054-0.012,0.1-0.018,0.158-0.035c0.272-0.06,0.592-0.166,0.954-0.305c0.358-0.149,0.748-0.346,1.153-0.597c0.795-0.519,1.629-1.298,2.236-2.326C24.639,20.534,24.994,19.273,25,18C24.994,16.727,24.639,15.466,24.024,14.443z"/>
          }
        </Scale>
        <Scale>
          { volume > 0 &&
      	    <path key="second-bar" fill="#CDD7DB" d="M21.733,18c0-1.518-0.91-2.819-2.211-3.402v6.804C20.824,20.818,21.733,19.518,21.733,18z"/>
          }
        </Scale>
        <Scale>
          { volume === 0 &&
            <polygon key="mute" fill="#CDD7DB" points="24.839,15.955 23.778,14.895 21.733,16.94 19.688,14.895 18.628,15.955 20.673,18 18.628,20.045 19.688,21.106 21.733,19.061 23.778,21.106 24.839,20.045 22.794,18 "/>
          }
        </Scale>
      </svg>
    )
  }
}

export default withMediaProps(MuteUnmute)
