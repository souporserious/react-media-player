"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getYoutubeId;
function getYoutubeId(url) {
  var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[1].length === 11) {
    return match[1];
  } else {
    throw "Invalid Youtube ID provided";
  }
}
module.exports = exports["default"];