import React, { Component, PropTypes } from 'react'

class Volume extends Component {
  static contextTypes = {
    volume: PropTypes.number,
    setVolume: PropTypes.func
  }

  _onChangeUsed = false

  _handleMouseUp = ({ target: { value } }) => {
    // set volume on mouseUp as well because of this bug in <= IE11
    // https://github.com/facebook/react/issues/554
    if (!this._onChangeUsed) {
      this.context.setVolume((+value).toFixed(4))
    }
  }

  _handleChange = ({ target: { value } }) => {
    this.context.setVolume((+value).toFixed(4))
    this._onChangeUsed = true
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
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
        style={{backgroundSize: (volume * 100 / 1) + '% 100%'}}
      />
    )
  }
}

export default Volume
