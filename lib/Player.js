"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _contextTypes = require("./context-types");
var _getVendor2 = _interopRequireDefault(require("./utils/get-vendor"));
var _excluded = ["defaultCurrentTime", "defaultMuted", "defaultVolume"],
  _excluded2 = ["src", "vendor", "autoPlay", "onReady", "onEnded", "defaultCurrentTime", "defaultVolume", "defaultMuted"];
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
var Player = /*#__PURE__*/function (_Component) {
  _inherits(Player, _Component);
  var _super = _createSuper(Player);
  function Player() {
    var _this;
    _classCallCheck(this, Player);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_defaultsSet", false);
    _defineProperty(_assertThisInitialized(_this), "_setPlayer", function (component) {
      _this.context._mediaSetters.setPlayer(component);
      _this._component = component;
    });
    _defineProperty(_assertThisInitialized(_this), "_setLoading", function (isLoading) {
      _this.context._mediaSetters.setPlayerState({
        isLoading: isLoading
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleOnReady", function () {
      var _this$context = _this.context,
        media = _this$context.media,
        _mediaSetters = _this$context._mediaSetters;
      var _this$props = _this.props,
        autoPlay = _this$props.autoPlay,
        onReady = _this$props.onReady;
      if (!_this._defaultsSet) {
        _this._setDefaults();
      } else {
        media.mute(media.isMuted);
        media.setVolume(media.volume);
      }
      if (autoPlay) {
        media.play();
      }
      _this._setLoading(false);
      if (typeof onReady === 'function') {
        onReady(media);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_handleOnEnded", function () {
      var _this$context2 = _this.context,
        media = _this$context2.media,
        _mediaSetters = _this$context2._mediaSetters;
      var _this$props2 = _this.props,
        loop = _this$props2.loop,
        onEnded = _this$props2.onEnded;
      if (loop) {
        media.seekTo(0);
        media.play();
      } else {
        _mediaSetters.setPlayerState({
          isPlaying: false
        });
      }
      if (typeof onEnded === 'function') {
        onEnded(media);
      }
    });
    return _this;
  }
  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
        defaultCurrentTime = _this$props3.defaultCurrentTime,
        defaultMuted = _this$props3.defaultMuted,
        defaultVolume = _this$props3.defaultVolume,
        restProps = _objectWithoutProperties(_this$props3, _excluded);
      this._setPlayerProps(_objectSpread({
        volume: defaultVolume
      }, restProps));
      this._setPlayerState({
        currentTime: defaultCurrentTime,
        volume: defaultMuted ? 0 : defaultVolume
      });

      // we need to unset the loading state if no source was loaded
      if (!this.props.src) {
        this._setLoading(false);
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      this._setPlayerProps(nextProps);

      // clean state if the media source has changed
      if (this.props.src !== nextProps.src) {
        this._setPlayerState({
          currentTime: 0,
          progress: 0,
          duration: 0,
          isLoading: true,
          isPlaying: false
        });
      }
    }
  }, {
    key: "instance",
    get: function get() {
      return this._component && this._component.instance;
    }
  }, {
    key: "_setPlayerProps",
    value: function _setPlayerProps(props) {
      this.context._mediaSetters.setPlayerProps(props);
    }
  }, {
    key: "_setPlayerState",
    value: function _setPlayerState(state) {
      this.context._mediaSetters.setPlayerState(state);
    }
  }, {
    key: "_setDefaults",
    value: function _setDefaults() {
      var media = this.context.media;
      var _this$props4 = this.props,
        defaultCurrentTime = _this$props4.defaultCurrentTime,
        defaultVolume = _this$props4.defaultVolume,
        defaultMuted = _this$props4.defaultMuted;
      if (defaultCurrentTime > 0) {
        media.seekTo(defaultCurrentTime);
      }
      if (defaultMuted) {
        media.mute(defaultMuted);
      } else if (defaultVolume !== 1) {
        media.setVolume(defaultVolume);
      }
      this._defaultsSet = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        src = _this$props5.src,
        _vendor = _this$props5.vendor,
        autoPlay = _this$props5.autoPlay,
        onReady = _this$props5.onReady,
        onEnded = _this$props5.onEnded,
        defaultCurrentTime = _this$props5.defaultCurrentTime,
        defaultVolume = _this$props5.defaultVolume,
        defaultMuted = _this$props5.defaultMuted,
        extraProps = _objectWithoutProperties(_this$props5, _excluded2);
      var _getVendor = (0, _getVendor2["default"])(src, _vendor),
        vendor = _getVendor.vendor,
        component = _getVendor.component;
      return /*#__PURE__*/(0, _react.createElement)(component, _objectSpread({
        src: src,
        vendor: vendor,
        autoPlay: autoPlay,
        extraProps: extraProps,
        ref: this._setPlayer,
        isLoading: this._setLoading,
        onReady: this._handleOnReady,
        onEnded: this._handleOnEnded
      }, this.context._mediaGetters.getPlayerEvents));
    }
  }]);
  return Player;
}(_react.Component);
_defineProperty(Player, "contextType", _contextTypes.MediaContext);
_defineProperty(Player, "propTypes", {
  vendor: _propTypes["default"].oneOf(['video', 'audio', 'youtube', 'vimeo']),
  defaultCurrentTime: _propTypes["default"].number,
  defaultVolume: _propTypes["default"].number,
  defaultMuted: _propTypes["default"].bool
});
_defineProperty(Player, "defaultProps", {
  defaultCurrentTime: 0,
  defaultVolume: 1,
  defaultMuted: false
});
var _default = exports["default"] = Player;
module.exports = exports.default;