"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fullscreenChange;
function fullscreenChange(type, callback) {
  var vendors = ["fullscreenchange", "mozfullscreenchange", "MSFullscreenChange", "webkitfullscreenchange"];
  vendors.forEach(function (vendor) {
    return document[type + "EventListener"](vendor, callback);
  });
}
module.exports = exports["default"];