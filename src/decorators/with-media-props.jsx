import React, { Component } from 'react';
import {MediaContext} from "../context-types";

export default function withMediaProps(MediaComponent) {
  return class extends Component {
    static contextType = MediaContext;

    static displayName = 'withMediaProps';

    render() {
      return <MediaComponent {...this.props} media={this.context.media} />;
    }
  };
}
