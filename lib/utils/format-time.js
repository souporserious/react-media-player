"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatTime;
function formatTime(current) {
  var h = Math.floor(current / 3600);
  var m = Math.floor((current - h * 3600) / 60);
  var s = Math.floor(current % 60);

  if (s < 10) {
    s = "0" + s;
  }

  if (h > 0) {
    m = m < 10 ? "0" + m : m;
    return h + ":" + m + ":" + s;
  } else {
    return m + ":" + s;
  }
}
module.exports = exports["default"];