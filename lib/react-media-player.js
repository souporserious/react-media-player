"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Media", {
  enumerable: true,
  get: function get() {
    return _Media["default"];
  }
});
Object.defineProperty(exports, "Player", {
  enumerable: true,
  get: function get() {
    return _Player["default"];
  }
});
exports.utils = exports.controls = void 0;
Object.defineProperty(exports, "withMediaProps", {
  enumerable: true,
  get: function get() {
    return _withMediaProps["default"];
  }
});
var _Media = _interopRequireDefault(require("./Media"));
var _Player = _interopRequireDefault(require("./Player"));
var _withMediaProps = _interopRequireDefault(require("./decorators/with-media-props"));
var _controls = _interopRequireWildcard(require("./controls"));
exports.controls = _controls;
var _utils = _interopRequireWildcard(require("./utils"));
exports.utils = _utils;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }