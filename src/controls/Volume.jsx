import React, { Component, PropTypes } from 'react'

class Volume extends Component {
  static contextTypes = {
    volume: PropTypes.number,
    setVolume: PropTypes.func
  }

  _handleChange = ({ target: { value } }) => {
    this.context.setVolume((+value).toFixed(4))
  }

  render() {
    return (
      <input
        type="range"
        step="any"
        min={0}
        max={1}
        value={this.context.volume}
        onChange={this._handleChange}
      />
    )
  }
}

export default Volume
