import React, { Component, PropTypes } from 'react'

class Repeat extends Component {
  render() {
    const { isActive, ...props } = this.props
    const fill = isActive ? '#8bb955' : '#CDD7DB'
    return (
      <svg width="36px" height="36px" viewBox="0 0 36 36" {...props}>
        <circle fill="#373D3F" cx="18" cy="18" r="18"/>
        <path fill={fill} d="M12.5,16.5c0-1.103,0.897-2,2-2H21v2l3-3l-3-3v2h-6.5c-2.206,0-4,1.794-4,4v4h0l2-2V16.5z"/>
        <path fill={fill} d="M25.5,15.5l-2,2v2c0,1.103-0.897,2-2,2H15v-2l-3,3l3,3v-2h6.5c2.206,0,4-1.794,4-4L25.5,15.5L25.5,15.5z"/>
      </svg>
    )
  }
}

export default Repeat
