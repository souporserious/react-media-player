'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadAPI;
// load api asynchronously
function loadAPI(url, cb) {
  // create script to be injected
  var api = document.createElement('script');

  // load async
  api.async = true;

  // set source to vendors api
  api.src = url;

  // append script to document head
  document.head.appendChild(api);

  // callback after loaded
  if (typeof cb === 'function') {
    cb();
  }
}