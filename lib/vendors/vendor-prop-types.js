"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  src: _propTypes2.default.string,
  onPlaying: _propTypes2.default.func,
  onProgress: _propTypes2.default.func,
  onDuration: _propTypes2.default.func,
  onTimeUpdate: _propTypes2.default.func,
  onVolumeChange: _propTypes2.default.func
};
module.exports = exports["default"];