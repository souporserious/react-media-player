"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (typeof document === "undefined") {
    return function () {};
  }

  var names = ["requestFullscreen", "mozRequestFullScreen", "msRequestFullscreen", "webkitRequestFullscreen"];
  return names.reduce(function (prev, curr) {
    return document.documentElement[curr] ? curr : prev;
  });
}();

module.exports = exports["default"];