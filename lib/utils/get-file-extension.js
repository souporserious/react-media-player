'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFileExtension;
// thanks to: http://stackoverflow.com/a/6997591/1461204
function getFileExtension(url) {
  var file = url.substr(url.lastIndexOf('/') + 1).split('?')[0];
  var extPos = file.lastIndexOf('.');
  return extPos > -1 && file.substr(extPos + 1);
}