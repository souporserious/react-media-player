import React, { Component } from 'react';

class Progress extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.progress !== nextProps.progress;
  }

  render() {
    return(
      <progress
        max={100}
        value={this.props.progress * 100}
      />
    );
  }
}

export default Progress;