import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withMediaProps from '../decorators/with-media-props'

class Volume extends Component {
  _onChangeUsed = false

  shouldComponentUpdate({ media }) {
    return this.props.media.volume !== media.volume
  }

  _handleMouseUp = ({ target: { value } }) => {
    // set volume on mouseUp as well because of this bug in <= IE11
    // https://github.com/facebook/react/issues/554
    if (!this._onChangeUsed) {
      this.props.media.setVolume((+value).toFixed(4))
    }
  }

  _handleChange = ({ target: { value } }) => {
    this.props.media.setVolume((+value).toFixed(4))
    this._onChangeUsed = true
  }

  render() {
    const { className, style, media } = this.props
    const { volume } = media
    return (
      <input
        type="range"
        step="any"
        min={0}
        max={1}
        value={volume}
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
        className={className}
        style={{
          backgroundSize: volume * 100 / 1 + '% 100%',
          ...style,
        }}
      />
    )
  }
}

export default withMediaProps(Volume)
