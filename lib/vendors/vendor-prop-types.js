'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

exports.default = {
  src: _react.PropTypes.string,
  onPlaying: _react.PropTypes.func,
  onProgress: _react.PropTypes.func,
  onDuration: _react.PropTypes.func,
  onTimeUpdate: _react.PropTypes.func,
  onVolumeChange: _react.PropTypes.func
};