"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  src: _propTypes["default"].string,
  onPlaying: _propTypes["default"].func,
  onProgress: _propTypes["default"].func,
  onDuration: _propTypes["default"].func,
  onTimeUpdate: _propTypes["default"].func,
  onVolumeChange: _propTypes["default"].func
};
module.exports = exports.default;