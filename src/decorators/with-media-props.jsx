import React, { Component } from 'react'
import contextTypes from '../context-types'

export default function withMediaProps(MediaComponent) {
  return class extends Component {
    static contextTypes = contextTypes

    render() {
      return (
        <MediaComponent media={{...this.context}} {...this.props}/>
      )
    }
  }
}
