import React, { Component, PropTypes } from 'react'
import Transition from 'react-motion-ui-pack'

class ScaleX extends Component {
  render() {
    return (
      <Transition
        component="g"
        enter={{ scaleX: 1 }}
        leave={{ scaleX: 0 }}
      >
        {this.props.children}
      </Transition>
    )
  }
}

class PlayPause extends Component {
  static contextTypes = {
    isPlaying: PropTypes.bool,
    playPause: PropTypes.func
  }

  _handlePlayPause = () => {
    this.context.playPause()
  }

  render() {
    return (
      <svg role="button" width="36px" height="36px" viewBox="0 0 36 36" className={this.props.className} onClick={this._handlePlayPause}>
      	<circle fill="#373D3F" cx="18" cy="18" r="18"/>
          <ScaleX>
            { this.context.isPlaying &&
              <g key="pause" style={{ transformOrigin: '0% 50%' }}>
        	      <rect x="12" y="11" fill="#CDD7DB" width="4" height="14"/>
        	      <rect x="20" y="11" fill="#CDD7DB" width="4" height="14"/>
              </g>
            }
          </ScaleX>
          <ScaleX>
            { !this.context.isPlaying &&
              <polygon key="play" fill="#CDD7DB" points="14,11 26,18 14,25" style={{ transformOrigin: '100% 50%' }}/>
            }
          </ScaleX>
      </svg>
    )
  }
}

export default PlayPause
