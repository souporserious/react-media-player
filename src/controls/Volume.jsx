import React, { Component, PropTypes } from 'react'
import withMedia from '../decorators/with-media'

class Volume extends Component {
  _onChangeUsed = false

  shouldComponentUpdate({ volume }) {
    return this.props.volume !== volume
  }

  _handleMouseUp = ({ target: { value } }) => {
    // set volume on mouseUp as well because of this bug in <= IE11
    // https://github.com/facebook/react/issues/554
    if (!this._onChangeUsed) {
      this.props.setVolume((+value).toFixed(4))
    }
  }

  _handleChange = ({ target: { value } }) => {
    this.props.setVolume((+value).toFixed(4))
    this._onChangeUsed = true
  }

  render() {
    const { volume, className, style } = this.props
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
          backgroundSize: (volume * 100 / 1) + '% 100%',
          ...style
        }}
      />
    )
  }
}

export default withMedia(Volume)
