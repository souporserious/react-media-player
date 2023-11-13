"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _getVimeoId = _interopRequireDefault(require("../utils/get-vimeo-id"));
var _vendorPropTypes = _interopRequireDefault(require("./vendor-prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Vimeo = /*#__PURE__*/function (_Component) {
  _inherits(Vimeo, _Component);
  var _super = _createSuper(Vimeo);
  function Vimeo() {
    var _this;
    _classCallCheck(this, Vimeo);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_vimeoId", (0, _getVimeoId["default"])(_this.props.src));
    _defineProperty(_assertThisInitialized(_this), "_origin", '*');
    _defineProperty(_assertThisInitialized(_this), "_onMessage", function (e) {
      var data;

      // allow messages from the Vimeo player only
      if (!/^https?:\/\/player.vimeo.com/.test(e.origin)) {
        return false;
      }
      if (_this._origin === '*') {
        _this._origin = e.origin;
      }
      try {
        data = JSON.parse(e.data);
      } catch (err) {
        _this.props.onError(err);
      }
      if (data) {
        switch (data.event) {
          case 'ready':
            _this._postOnReadyMessages();
            break;
          case 'loadProgress':
            _this.props.onProgress(data.data.percent);
            break;
          case 'playProgress':
            _this.props.onTimeUpdate(data.data.seconds);
            break;
          case 'play':
            _this.props.onPlay(true);
            break;
          case 'pause':
            _this.props.onPause(false);
            break;
          case 'finish':
            _this.props.onEnded(false);
            break;
        }
        if (data.method === 'getDuration') {
          _this.props.onDuration(data.value);
        }
      }
    });
    return _this;
  }
  _createClass(Vimeo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('message', this._onMessage);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this._vimeoId = (0, _getVimeoId["default"])(nextProps.src);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('message', this._onMessage);
    }
  }, {
    key: "instance",
    get: function get() {
      return this._iframe;
    }
  }, {
    key: "node",
    get: function get() {
      return (0, _reactDom.findDOMNode)(this._iframe);
    }
  }, {
    key: "_postMessage",
    value: function _postMessage(method, value) {
      var data = {
        method: method
      };
      if (value) {
        data.value = value;
      }
      this._iframe.contentWindow.postMessage(JSON.stringify(data), this._origin);
    }
  }, {
    key: "_postOnReadyMessages",
    value: function _postOnReadyMessages() {
      var _this2 = this;
      ;
      ['loadProgress', 'playProgress', 'play', 'pause', 'finish'].forEach(function (listener) {
        return _this2._postMessage('addEventListener', listener);
      });
      this._postMessage('getDuration');
      this.props.onReady();
    }
  }, {
    key: "play",
    value: function play() {
      this._postMessage('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this._postMessage('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this._postMessage('unload');
    }
  }, {
    key: "seekTo",
    value: function seekTo(currentTime) {
      this._postMessage('seekTo', currentTime);
    }
  }, {
    key: "mute",
    value: function mute(muted) {
      this._postMessage('setVolume', muted ? '0' : '1');
      this.props.onMute(muted);
      this.props.onVolumeChange(muted ? 0 : 1);
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      this._postMessage('setVolume', volume);
      this.props.onVolumeChange(+volume);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/_react["default"].createElement("iframe", _extends({
        ref: function ref(c) {
          return _this3._iframe = c;
        },
        src: "https://player.vimeo.com/video/".concat(this._vimeoId, "?api=1")
      }, this.props.extraProps));
    }
  }]);
  return Vimeo;
}(_react.Component);
_defineProperty(Vimeo, "propTypes", _vendorPropTypes["default"]);
var _default = exports["default"] = Vimeo;
module.exports = exports.default;