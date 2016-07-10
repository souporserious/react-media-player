'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVendor;

var _Youtube = require('../vendors/Youtube');

var _Youtube2 = _interopRequireDefault(_Youtube);

var _Vimeo = require('../vendors/Vimeo');

var _Vimeo2 = _interopRequireDefault(_Vimeo);

var _HTML = require('../vendors/HTML5');

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
var AUDIO_EXTENSIONS = /\.(mp3|wav|m4a)($|\?)/i;

function getVendor(src, vendor) {
  if (vendor === 'youtube' || src.indexOf('youtube.com') > -1 || src.indexOf('youtu.be') > -1) {
    return { vendor: 'youtube', component: _Youtube2.default };
  } else if (vendor === 'vimeo' || src.indexOf('vimeo.com') > -1) {
    return { vendor: 'vimeo', component: _Vimeo2.default };
  } else if (vendor === 'video' || VIDEO_EXTENSIONS.test(src)) {
    return { vendor: 'video', component: _HTML2.default };
  } else if (vendor === 'audio' || AUDIO_EXTENSIONS.test(src)) {
    return { vendor: 'audio', component: _HTML2.default };
  } else {
    console.warn('Warning: Player was not rendered. Source could not be determined.');
    return null;
  }
}