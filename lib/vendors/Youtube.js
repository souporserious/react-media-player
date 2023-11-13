"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _youtubeApiLoader = _interopRequireDefault(require("../utils/youtube-api-loader"));
var _getYoutubeId = _interopRequireDefault(require("../utils/get-youtube-id"));
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
var Youtube = /*#__PURE__*/function (_Component) {
  _inherits(Youtube, _Component);
  var _super = _createSuper(Youtube);
  function Youtube() {
    var _this;
    _classCallCheck(this, Youtube);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_videoId", (0, _getYoutubeId["default"])(_this.props.src));
    _defineProperty(_assertThisInitialized(_this), "_lastVideoId", _this._videoId);
    _defineProperty(_assertThisInitialized(_this), "_isReady", false);
    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);
    _defineProperty(_assertThisInitialized(_this), "_progressId", null);
    _defineProperty(_assertThisInitialized(_this), "_timeUpdateId", null);
    _defineProperty(_assertThisInitialized(_this), "_handleProgress", function () {
      if (!_this._isMounted) return;
      var progress = _this._player.getVideoLoadedFraction() || 0;
      _this.props.onProgress(progress);
      if (_this._progressId && progress < 1) {
        _this._progressId = requestAnimationFrame(_this._handleProgress);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_handleTimeUpdate", function () {
      if (!_this._isMounted) return;
      _this.props.onTimeUpdate(_this._player.getCurrentTime() || 0);
      if (_this._timeUpdateId) {
        _this._timeUpdateId = requestAnimationFrame(_this._handleTimeUpdate);
      }
    });
    return _this;
  }
  _createClass(Youtube, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      _youtubeApiLoader["default"].load(this);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this._lastVideoId = this._videoId;
        this._videoId = (0, _getYoutubeId["default"])(nextProps.src);
        if (this._isReady) {
          if (nextProps.autoPlay) {
            this._player.loadVideoById(this._videoId);
          } else {
            this._player.cueVideoById(this._videoId);
          }
          this.props.onReady();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      if (this._progressId) {
        cancelAnimationFrame(this._progressId);
      }
      if (this._timeUpdateId) {
        cancelAnimationFrame(this._timeUpdateId);
      }
      if (this._player) {
        this._player.destroy();
      }
    }
  }, {
    key: "instance",
    get: function get() {
      return this._player;
    }
  }, {
    key: "node",
    get: function get() {
      return this._player.getIframe();
    }
  }, {
    key: "_createPlayer",
    value: function _createPlayer() {
      this._player = new YT.Player(this._node, {
        videoId: this._videoId,
        events: this._events(),
        playerVars: {
          controls: 0,
          showinfo: 0,
          modestbranding: 1
        }
      });
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this2 = this;
      return {
        onReady: function onReady() {
          // if id changed before the player was ready we need to load the new one
          if (_this2._videoId !== _this2._lastVideoId) {
            _this2._player.loadVideoById(_this2._videoId);
          }
          _this2._isReady = true;
          _this2.props.onDuration(_this2._player.getDuration());
          _this2.props.onReady();
        },
        onStateChange: function onStateChange(_ref) {
          var data = _ref.data;
          var _window$YT$PlayerStat = window.YT.PlayerState,
            PLAYING = _window$YT$PlayerStat.PLAYING,
            PAUSED = _window$YT$PlayerStat.PAUSED,
            ENDED = _window$YT$PlayerStat.ENDED,
            BUFFERING = _window$YT$PlayerStat.BUFFERING,
            CUED = _window$YT$PlayerStat.CUED;
          var isPlaying = data === PLAYING;
          if (isPlaying) {
            _this2.props.onPlay(true);
            _this2.props.isLoading(false);
            _this2.props.onDuration(_this2._player.getDuration());
            _this2._timeUpdateId = requestAnimationFrame(_this2._handleTimeUpdate);
          } else {
            cancelAnimationFrame(_this2._timeUpdateId);
            _this2._timeUpdateId = null;
            cancelAnimationFrame(_this2._progressId);
            _this2._progressId = null;
          }
          if (data === -1 || data === BUFFERING) {
            _this2.props.isLoading(true);
          }
          if (data === PAUSED) {
            _this2.props.onPause(false);
          }
          if (data === ENDED) {
            _this2.props.isLoading(false);
            _this2.props.onEnded(false);
          }

          // start fetching progress when playing or buffering
          if (isPlaying || data === BUFFERING) {
            _this2._progressId = requestAnimationFrame(_this2._handleProgress);
          }

          // reset duration if a new video was loaded
          if (data === CUED) {
            _this2.props.isLoading(false);
            _this2.props.onDuration(0.1);
          }
        },
        onError: function onError(e) {
          _this2.props.onError(e.data);
        }
      };
    }
  }, {
    key: "play",
    value: function play() {
      this._player.playVideo();
    }
  }, {
    key: "pause",
    value: function pause() {
      this._player.pauseVideo();
    }
  }, {
    key: "stop",
    value: function stop() {
      this._player.stopVideo();
    }
  }, {
    key: "seekTo",
    value: function seekTo(currentTime) {
      this._player.seekTo(currentTime);
    }
  }, {
    key: "mute",
    value: function mute(muted) {
      if (muted) {
        this._player.mute();
      } else {
        this._player.unMute();
      }
      this.props.onMute(muted);
      this.props.onVolumeChange(muted ? 0 : 1);
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      this._player.setVolume(+volume * 100);
      this.props.onVolumeChange(+volume);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: function ref(c) {
          return _this3._node = c;
        }
      }, this.props.extraProps));
    }
  }]);
  return Youtube;
}(_react.Component);
_defineProperty(Youtube, "propTypes", _vendorPropTypes["default"]);
var _default = exports["default"] = Youtube;
module.exports = exports.default;