"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVimeoId;
// Thanks to: http://stackoverflow.com/a/13286930/1461204
function getVimeoId(url) {
  var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
  var match = url.match(regExp);

  if (match) {
    return match[3];
  } else {
    throw "Invalid Vimeo ID provided";
  }
}
module.exports = exports["default"];