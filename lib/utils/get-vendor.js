'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVendor;

var _getFileExtension = require('./get-file-extension');

var _getFileExtension2 = _interopRequireDefault(_getFileExtension);

var _Youtube = require('../vendors/Youtube');

var _Youtube2 = _interopRequireDefault(_Youtube);

var _Vimeo = require('../vendors/Vimeo');

var _Vimeo2 = _interopRequireDefault(_Vimeo);

var _Video = require('../vendors/Video');

var _Video2 = _interopRequireDefault(_Video);

var _Audio = require('../vendors/Audio');

var _Audio2 = _interopRequireDefault(_Audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VIDEO_EXTENSIONS = ['mp4', 'm4v', 'webm', 'ogv'];
var AUDIO_EXTENSIONS = ['mp3', 'm4a', 'wav', 'ogg'];

function getVendor(src) {
  var ext = (0, _getFileExtension2.default)(src);

  if (src.indexOf('youtube.com') > -1 || src.indexOf('youtu.be') > -1) {
    return _Youtube2.default;
  } else if (src.indexOf('vimeo.com') > -1) {
    return _Vimeo2.default;
  } else if (VIDEO_EXTENSIONS.indexOf(ext) > -1) {
    return _Video2.default;
  } else if (AUDIO_EXTENSIONS.indexOf(ext) > -1) {
    return _Audio2.default;
  } else {
    console.warn('Warning: Player was not rendered. Source could not be determined.');
    return null;
  }
}