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
    const { volume } = this.context
    return (
      <input
        id={this.props.id}
        className={this.props.className}
        type="range"
        step="any"
        min={0}
        max={1}
        value={volume}
        onChange={this._handleChange}
        style={{
          backgroundSize: (volume * 100 / 1) + '% 100%'
        }}
      />
    )
  }
}

export default Volume
