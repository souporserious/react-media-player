"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getVendor;
var _HTML = _interopRequireDefault(require("../vendors/HTML5"));
var _Vimeo = _interopRequireDefault(require("../vendors/Vimeo"));
var _Youtube = _interopRequireDefault(require("../vendors/Youtube"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function getVendor(src, vendor) {
  src = src || "";
  if (vendor === "youtube" || /youtube.com|youtu.be/.test(src)) {
    return {
      vendor: "youtube",
      component: _Youtube["default"]
    };
  } else if (vendor === "vimeo" || /vimeo.com/.test(src)) {
    return {
      vendor: "vimeo",
      component: _Vimeo["default"]
    };
  } else {
    var isAudio = vendor === "audio" || /\.(mp3|wav|m4a)($|\?)/i.test(src);
    return {
      vendor: isAudio ? "audio" : "video",
      component: _HTML["default"]
    };
  }
}
module.exports = exports.default;