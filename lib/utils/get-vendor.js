"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVendor;

var _HTML = require("../vendors/HTML5");

var _HTML2 = _interopRequireDefault(_HTML);

var _Vimeo = require("../vendors/Vimeo");

var _Vimeo2 = _interopRequireDefault(_Vimeo);

var _Youtube = require("../vendors/Youtube");

var _Youtube2 = _interopRequireDefault(_Youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getVendor(src, vendor) {
  src = src || "";
  if (vendor === "youtube" || /youtube.com|youtu.be/.test(src)) {
    return { vendor: "youtube", component: _Youtube2.default };
  } else if (vendor === "vimeo" || /vimeo.com/.test(src)) {
    return { vendor: "vimeo", component: _Vimeo2.default };
  } else {
    var isAudio = vendor === "audio" || /\.(mp3|wav|m4a)($|\?)/i.test(src);
    return {
      vendor: isAudio ? "audio" : "video",
      component: _HTML2.default
    };
  }
}
module.exports = exports["default"];