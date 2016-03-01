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

var _HTML = require('../vendors/HTML5');

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VIDEO_EXTENSIONS = ['mp4', 'm4v', 'webm', 'ogv'];
var AUDIO_EXTENSIONS = ['mp3', 'm4a', 'wav', 'ogg'];

function getVendor(src, vendor) {
  var ext = (0, _getFileExtension2.default)(src);

  if (vendor === 'youtube' || src.indexOf('youtube.com') > -1 || src.indexOf('youtu.be') > -1) {
    return { vendor: 'youtube', component: _Youtube2.default };
  } else if (vendor === 'vimeo' || src.indexOf('vimeo.com') > -1) {
    return { vendor: 'vimeo', component: _Vimeo2.default };
  } else if (vendor === 'video' || VIDEO_EXTENSIONS.indexOf(ext) > -1) {
    return { vendor: 'video', component: _HTML2.default };
  } else if (vendor === 'audio' || AUDIO_EXTENSIONS.indexOf(ext) > -1) {
    return { vendor: 'audio', component: _HTML2.default };
  } else {
    console.warn('Warning: Player was not rendered. Source could not be determined.');
    return null;
  }
}