"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadAPI;
// load api asynchronously
function loadAPI(url, cb) {
  // create script to be injected
  var script = document.createElement("script");

  // load async
  script.async = true;

  // set source to vendors api
  script.src = url;

  // callback after load
  script.onload = function () {
    return typeof cb === "function" && cb();
  };

  // append script to document head
  document.head.appendChild(script);
}
module.exports = exports["default"];