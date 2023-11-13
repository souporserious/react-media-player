"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _contextTypes = require("./context-types");
var _requestFullscreen = _interopRequireDefault(require("./utils/request-fullscreen"));
var _exitFullscreen = _interopRequireDefault(require("./utils/exit-fullscreen"));
var _fullscreenChange = _interopRequireDefault(require("./utils/fullscreen-change"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var MEDIA_EVENTS = {
  onPlay: 'isPlaying',
  onPause: 'isPlaying',
  onDuration: 'duration',
  onProgress: 'progress',
  onTimeUpdate: 'currentTime',
  onMute: 'isMuted',
  onVolumeChange: 'volume',
  onError: null
};
var MEDIA_EVENTS_KEYS = Object.keys(MEDIA_EVENTS);
var Media = /*#__PURE__*/function (_Component) {
  _inherits(Media, _Component);
  var _super = _createSuper(Media);
  function Media() {
    var _this;
    _classCallCheck(this, Media);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      currentTime: 0,
      progress: 0,
      duration: 0.1,
      volume: 1,
      isLoading: true,
      isPlaying: false,
      isMuted: false,
      isFullscreen: false
    });
    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);
    _defineProperty(_assertThisInitialized(_this), "_playerProps", {});
    _defineProperty(_assertThisInitialized(_this), "_lastVolume", 0);
    _defineProperty(_assertThisInitialized(_this), "_setPlayer", function (component) {
      _this._player = component;
    });
    _defineProperty(_assertThisInitialized(_this), "_setPlayerProps", function (props) {
      _this._playerProps = props;
    });
    _defineProperty(_assertThisInitialized(_this), "_setPlayerState", function (state) {
      _this.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this), "play", function () {
      return _this._player.play();
    });
    _defineProperty(_assertThisInitialized(_this), "pause", function () {
      _this._player.pause();
    });
    _defineProperty(_assertThisInitialized(_this), "playPause", function () {
      if (!_this.state.isPlaying) {
        return _this.play();
      } else {
        _this.pause();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "stop", function () {
      _this._player.stop();
    });
    _defineProperty(_assertThisInitialized(_this), "seekTo", function (currentTime) {
      _this._player.seekTo(currentTime);
      _this.setState({
        currentTime: currentTime
      });
    });
    _defineProperty(_assertThisInitialized(_this), "skipTime", function (amount) {
      var _this$state = _this.state,
        currentTime = _this$state.currentTime,
        duration = _this$state.duration;
      var newTime = currentTime + amount;
      if (newTime < 0) {
        newTime = 0;
      } else if (newTime > duration) {
        newTime = duration;
      }
      _this.seekTo(newTime);
    });
    _defineProperty(_assertThisInitialized(_this), "mute", function (isMuted) {
      if (isMuted) {
        _this._lastVolume = _this.state.volume;
        _this._player.setVolume(0);
      } else {
        var volume = _this._lastVolume > 0 ? _this._lastVolume : 0.1;
        _this._player.setVolume(volume);
      }
      _this._player.mute(isMuted);
    });
    _defineProperty(_assertThisInitialized(_this), "muteUnmute", function () {
      _this.mute(!_this.state.isMuted);
    });
    _defineProperty(_assertThisInitialized(_this), "setVolume", function (volume) {
      volume = parseFloat(volume);
      if (isNaN(volume)) return;
      var isMuted = volume <= 0;
      if (isMuted !== _this.state.isMuted) {
        _this.mute(isMuted);
      } else {
        _this._lastVolume = volume;
      }
      _this._player.setVolume(volume);
    });
    _defineProperty(_assertThisInitialized(_this), "addVolume", function (amount) {
      var newVolume = _this.state.volume + amount * 0.01;
      if (newVolume < 0) {
        newVolume = 0;
      } else if (newVolume > 1) {
        newVolume = 1;
      }
      _this.setVolume(newVolume);
    });
    _defineProperty(_assertThisInitialized(_this), "fullscreen", function () {
      if (!_this.state.isFullscreen) {
        _this._player.node[_requestFullscreen["default"]]();
      } else {
        document[_exitFullscreen["default"]]();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_handleFullscreenChange", function (_ref) {
      var target = _ref.target;
      if (target === _this._player.node) {
        _this.setState({
          isFullscreen: !_this.state.isFullscreen
        });
      }
    });
    return _this;
  }
  _createClass(Media, [{
    key: "getContext",
    value: function getContext() {
      return {
        media: this._getPublicMediaProps(),
        _mediaSetters: {
          setPlayer: this._setPlayer,
          setPlayerProps: this._setPlayerProps,
          setPlayerState: this._setPlayerState
        },
        _mediaGetters: {
          getPlayerEvents: this._getPlayerEvents()
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      (0, _fullscreenChange["default"])('add', this._handleFullscreenChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      (0, _fullscreenChange["default"])('remove', this._handleFullscreenChange);
    }
  }, {
    key: "_getPublicMediaProps",
    value: function _getPublicMediaProps() {
      return _objectSpread(_objectSpread({}, this.state), {}, {
        play: this.play,
        pause: this.pause,
        playPause: this.playPause,
        stop: this.stop,
        seekTo: this.seekTo,
        skipTime: this.skipTime,
        mute: this.mute,
        muteUnmute: this.muteUnmute,
        setVolume: this.setVolume,
        addVolume: this.addVolume,
        fullscreen: this.fullscreen
      });
    }
  }, {
    key: "_getPlayerEvents",
    value: function _getPlayerEvents() {
      var _this2 = this;
      var events = {};
      MEDIA_EVENTS_KEYS.forEach(function (key) {
        var stateKey = MEDIA_EVENTS[key];
        var handlePropCallback = function handlePropCallback() {
          var propCallback = _this2._playerProps[key];
          if (typeof propCallback === 'function') {
            propCallback(_this2.state);
          }
        };
        events[key] = function (val) {
          if (stateKey) {
            if (_this2._isMounted) {
              _this2.setState(_defineProperty({}, stateKey, val), handlePropCallback);
            }
          } else {
            handlePropCallback();
          }
        };
      });
      return events;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var mediaContext = this.getContext();
      return /*#__PURE__*/_react["default"].createElement(_contextTypes.MediaContext.Provider, {
        value: mediaContext
      }, typeof children === 'function' ? children(this._getPublicMediaProps()) : _react.Children.only(children));
    }
  }]);
  return Media;
}(_react.Component);
_defineProperty(Media, "propTypes", {
  children: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]).isRequired
});
var _default = exports["default"] = Media;
module.exports = exports.default;