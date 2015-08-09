import React, { Component } from 'react';

class Volume extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.volume !== nextProps.volume ||
           this.props.muted !== nextProps.muted;
  }

  _handleChange(e) {
    
    const { player } = this.props;

    if(player.muted) {
      player.muted = false;
    }

    player.volume = (+e.target.value).toFixed(4);
  }

  render() {
    return(
      <input
        type="range"
        step="any"
        min={0}
        max={1}
        value={this.props.volume}
        onChange={::this._handleChange}
      />
    );
  }
}

export default Volume;