'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

exports.default = {
  // State
  currentTime: _react.PropTypes.number,
  progress: _react.PropTypes.number,
  duration: _react.PropTypes.number,
  volume: _react.PropTypes.number,
  isLoading: _react.PropTypes.bool,
  isPlaying: _react.PropTypes.bool,
  isMuted: _react.PropTypes.bool,
  isFullscreen: _react.PropTypes.bool,

  // Methods
  play: _react.PropTypes.func,
  pause: _react.PropTypes.func,
  playPause: _react.PropTypes.func,
  stop: _react.PropTypes.func,
  seekTo: _react.PropTypes.func,
  mute: _react.PropTypes.func,
  muteUnmute: _react.PropTypes.func,
  setVolume: _react.PropTypes.func,
  fullscreen: _react.PropTypes.func
};