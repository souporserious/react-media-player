import React, { Component, Children, createElement } from 'react'
import ReactDOM from 'react-dom'
import getVendor from './utils/get-vendor'

class Media extends Component {
  render() {
    return createElement(getVendor(this.props.src))
  }
}

export default Media
