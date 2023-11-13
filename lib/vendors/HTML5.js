"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = require("react-dom");
var _vendorPropTypes = _interopRequireDefault(require("./vendor-prop-types"));
var _excluded = ["connectSource", "useAudioObject"],
  _excluded2 = ["connectSource", "useAudioObject"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var AudioContext = typeof window === 'undefined' ? false : window.AudioContext || window.webkitAudioContext;
var audioContext;
if (AudioContext) {
  audioContext = new AudioContext();
}
var HTML5 = /*#__PURE__*/function (_Component) {
  _inherits(HTML5, _Component);
  var _super = _createSuper(HTML5);
  function HTML5() {
    var _this;
    _classCallCheck(this, HTML5);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_isLoading", function () {
      _this.props.isLoading(true);
    });
    _defineProperty(_assertThisInitialized(_this), "_isNotLoading", function () {
      _this.props.isLoading(false);
    });
    _defineProperty(_assertThisInitialized(_this), "_handleCanPlay", function () {
      _this.props.onReady();
      _this._isNotLoading();
    });
    _defineProperty(_assertThisInitialized(_this), "_handlePlay", function () {
      _this.props.onPlay(true);
      _this._isNotLoading();
    });
    _defineProperty(_assertThisInitialized(_this), "_handlePause", function () {
      _this.props.onPause(false);
    });
    _defineProperty(_assertThisInitialized(_this), "_handleEnded", function () {
      _this.props.onEnded(false);
    });
    _defineProperty(_assertThisInitialized(_this), "_handleError", function (e) {
      if (_this._playerStopped) {
        _this._playerStopped = false;
      } else {
        _this.props.onError(e);
        _this._isNotLoading();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_handleProgress", function (_ref) {
      var _ref$target = _ref.target,
        buffered = _ref$target.buffered,
        duration = _ref$target.duration;
      var progress = 0;
      if (duration > 0 && buffered.length) {
        progress = buffered.end(buffered.length - 1) / duration;
      }
      _this.props.onProgress(progress);
    });
    _defineProperty(_assertThisInitialized(_this), "_handleDuration", function (_ref2) {
      var duration = _ref2.target.duration;
      _this.props.onDuration(duration);
      _this._isNotLoading(); // Safari fix - canPlay is not fire unless in white list.
    });
    _defineProperty(_assertThisInitialized(_this), "_handleTimeUpdate", function (_ref3) {
      var currentTime = _ref3.target.currentTime;
      _this.props.onTimeUpdate(currentTime);
    });
    return _this;
  }
  _createClass(HTML5, [{
    key: "instance",
    get: function get() {
      return this._player;
    }
  }, {
    key: "node",
    get: function get() {
      return (0, _reactDom.findDOMNode)(this._player);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$extraProp = this.props.extraProps,
        connectSource = _this$props$extraProp.connectSource,
        useAudioObject = _this$props$extraProp.useAudioObject;
      if (this.props.vendor === 'audio') {
        if (useAudioObject) {
          this._createAudioObject();
          this._bindAudioObjectEvents();
        }
        if (audioContext && connectSource) {
          this._connectAudioContext();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(lastProps) {
      var _this$props$extraProp2 = this.props.extraProps,
        connectSource = _this$props$extraProp2.connectSource,
        useAudioObject = _this$props$extraProp2.useAudioObject;
      var vendorChanged = this.props.vendor !== lastProps.vendor;
      var sourceChanged = this.props.src !== lastProps.src;
      if (useAudioObject) {
        if (vendorChanged) {
          this._createAudioObject();
        } else if (sourceChanged) {
          this._destroyAudioObject();
          this._createAudioObject();
        }
        this._bindAudioObjectEvents();
      }
      if (this.props.vendor === 'audio' && audioContext && connectSource) {
        if (vendorChanged) {
          this._connectAudioContext();
        } else if (sourceChanged) {
          this._disconnectAudioContext();
          this._connectAudioContext();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props$extraProp3 = this.props.extraProps,
        connectSource = _this$props$extraProp3.connectSource,
        useAudioObject = _this$props$extraProp3.useAudioObject;
      if (audioContext && connectSource) {
        this._disconnectAudioContext();
      }
      if (useAudioObject) {
        this._destroyAudioObject();
      }
    }
  }, {
    key: "play",
    value: function play() {
      if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
      }
      return this._player.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this._player.pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      this._player.pause();
      this._player.currentTime = 0;
    }
  }, {
    key: "seekTo",
    value: function seekTo(currentTime) {
      if (this._player.readyState > 0) {
        this._player.currentTime = currentTime;
      }
    }
  }, {
    key: "mute",
    value: function mute(muted) {
      var nextVolume = muted ? 0 : 1;
      this._player.muted = muted;
      this.setVolume(nextVolume);
      this.props.onMute(muted);
      this.props.onVolumeChange(nextVolume);
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      if (this._gain) {
        this._gain.gain.value = volume;
      } else {
        this._player.volume = volume;
      }
      this.props.onVolumeChange(volume);
    }
  }, {
    key: "_playerEvents",
    get: function get() {
      return {
        onCanPlay: this._handleCanPlay,
        onCanPlayThrough: this._isNotLoading,
        onPlay: this._handlePlay,
        onPlaying: this._isNotLoading,
        onPause: this._handlePause,
        onEnded: this._handleEnded,
        onWaiting: this._isLoading,
        onError: this._handleError,
        onProgress: this._handleProgress,
        onLoadedMetadata: this._handleDuration,
        onTimeUpdate: this._handleTimeUpdate,
        onSeeking: this._isLoading,
        onSeeked: this._isNotLoading
      };
    }
  }, {
    key: "_createAudioObject",
    value: function _createAudioObject() {
      this._player = new Audio(this.props.src);
    }
  }, {
    key: "_destroyAudioObject",
    value: function _destroyAudioObject() {
      this.stop();
      this._player.src = 'about:blank';
      this._playerStopped = true;
    }
  }, {
    key: "_bindAudioObjectEvents",
    value: function _bindAudioObjectEvents() {
      var _this2 = this;
      var _this$props$extraProp4 = this.props.extraProps,
        connectSource = _this$props$extraProp4.connectSource,
        useAudioObject = _this$props$extraProp4.useAudioObject,
        playerProps = _objectWithoutProperties(_this$props$extraProp4, _excluded);
      var playerEvents = this._playerEvents;
      Object.keys(playerProps).forEach(function (key) {
        _this2._player[key] = playerProps[key];
      });
      Object.keys(playerEvents).forEach(function (key) {
        _this2._player[key.toLowerCase()] = playerEvents[key];
      });
    }
  }, {
    key: "_connectAudioContext",
    value: function _connectAudioContext() {
      var _this$props$extraProp5 = this.props.extraProps,
        connectSource = _this$props$extraProp5.connectSource,
        useAudioObject = _this$props$extraProp5.useAudioObject;
      if (useAudioObject || !this._source) {
        this._source = audioContext.createMediaElementSource(useAudioObject ? this.instance : this.node);
      }
      this._gain = audioContext.createGain();
      connectSource(this._source, audioContext).connect(this._gain);
      this._gain.connect(audioContext.destination);
    }
  }, {
    key: "_disconnectAudioContext",
    value: function _disconnectAudioContext() {
      this._source.disconnect(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        vendor = _this$props.vendor,
        src = _this$props.src,
        _this$props$extraProp6 = _this$props.extraProps,
        connectSource = _this$props$extraProp6.connectSource,
        useAudioObject = _this$props$extraProp6.useAudioObject,
        playerProps = _objectWithoutProperties(_this$props$extraProp6, _excluded2);
      return useAudioObject ? null : /*#__PURE__*/(0, _react.createElement)(vendor, _objectSpread(_objectSpread({
        ref: function ref(c) {
          return _this3._player = c;
        },
        src: src
      }, playerProps), this._playerEvents));
    }
  }]);
  return HTML5;
}(_react.Component);
_defineProperty(HTML5, "propTypes", _objectSpread(_objectSpread({}, _vendorPropTypes["default"]), {}, {
  useAudioObject: _propTypes["default"].bool
}));
var _default = exports["default"] = HTML5;
module.exports = exports.default;