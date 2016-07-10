'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _contextTypes = require('./context-types');

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _getVendor2 = require('./utils/get-vendor');

var _getVendor3 = _interopRequireDefault(_getVendor2);

var _requestFullscreen = require('./utils/request-fullscreen');

var _requestFullscreen2 = _interopRequireDefault(_requestFullscreen);

var _exitFullscreen = require('./utils/exit-fullscreen');

var _exitFullscreen2 = _interopRequireDefault(_exitFullscreen);

var _fullscreenChange = require('./utils/fullscreen-change');

var _fullscreenChange2 = _interopRequireDefault(_fullscreenChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MEDIA_EVENTS = {
  onPlay: 'isPlaying',
  onPause: 'isPlaying',
  onError: null,
  onDuration: 'duration',
  onProgress: 'progress',
  onTimeUpdate: 'currentTime',
  onMute: 'isMuted',
  onVolumeChange: 'volume'
};
var MEDIA_EVENTS_KEYS = Object.keys(MEDIA_EVENTS);

var Media = function (_Component) {
  _inherits(Media, _Component);

  function Media() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Media);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Media)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      currentTime: 0,
      progress: 0,
      duration: 0.1,
      volume: 1,
      isLoading: true,
      isPlaying: false,
      isMuted: false,
      isFullscreen: false
    }, _this._lastVolume = 0, _this._handleOnReady = function () {
      var _this$state = _this.state;
      var volume = _this$state.volume;
      var isMuted = _this$state.isMuted;


      _this._handleSetVolume(volume);
      _this._handleMute(isMuted);

      if (_this.props.autoPlay) {
        _this._player.play();
      }

      _this.setState({ isLoading: false });
    }, _this._handleOnEnded = function () {
      var _this$props = _this.props;
      var loop = _this$props.loop;
      var onEnded = _this$props.onEnded;


      if (loop) {
        _this._handleSeekTo(0);
        _this._player.play();
      } else {
        _this.setState({ isPlaying: false });
      }

      if (typeof onEnded === 'function') {
        onEnded();
      }
    }, _this._handlePlay = function () {
      _this._player.play();
    }, _this._handlePause = function () {
      _this._player.pause();
    }, _this._handlePlayPause = function () {
      if (!_this.state.isPlaying) {
        _this._player.play();
      } else {
        _this._player.pause();
      }
    }, _this._handleStop = function () {
      _this._player.stop();
    }, _this._handleSeekTo = function (currentTime) {
      _this._player.seekTo(currentTime);
      _this.setState({ currentTime: currentTime });
    }, _this._handleMute = function (isMuted) {
      if (isMuted) {
        _this._lastVolume = _this.state.volume;
        _this._player.setVolume(0);
      } else {
        var volume = _this._lastVolume > 0 ? _this._lastVolume : 0.1;
        _this._player.setVolume(volume);
      }
      _this._player.mute(isMuted);
    }, _this._handleMuteUnmute = function () {
      _this._handleMute(!_this.state.isMuted);
    }, _this._handleSetVolume = function (volume) {
      var isMuted = false;

      if (volume <= 0) {
        isMuted = true;
      }

      if (isMuted !== _this.state.isMuted) {
        _this._handleMute(isMuted);
      } else {
        _this._lastVolume = volume;
      }

      _this._player.setVolume(volume);
    }, _this._handleFullscreen = function () {
      if (!_this.state.isFullscreen) {
        _reactDom2.default.findDOMNode(_this._player)[_requestFullscreen2.default]();
      } else {
        document[_exitFullscreen2.default]();
      }
    }, _this._handleFullscreenChange = function (_ref) {
      var target = _ref.target;

      if (target === _reactDom2.default.findDOMNode(_this._player)) {
        _this.setState({ isFullscreen: !_this.state.isFullscreen });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Media, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return _extends({}, this.state, {
        play: this._handlePlay,
        pause: this._handlePause,
        playPause: this._handlePlayPause,
        stop: this._handleStop,
        seekTo: this._handleSeekTo,
        mute: this._handleMute,
        muteUnmute: this._handleMuteUnmute,
        setVolume: this._handleSetVolume,
        fullscreen: this._handleFullscreen
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _fullscreenChange2.default)('add', this._handleFullscreenChange);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      // clean state if the video has changed
      if (this.props.src !== nextProps.src) {
        this.setState({
          currentTime: 0,
          progress: 0,
          duration: 0,
          isPlaying: false
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _fullscreenChange2.default)('remove', this._handleFullscreenChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var src = _props.src;
      var children = _props.children;
      var autoPlay = _props.autoPlay;

      var _getVendor = (0, _getVendor3.default)(src, this.props.vendor);

      var vendor = _getVendor.vendor;
      var component = _getVendor.component;


      return component && children((0, _react.createElement)(component, _extends({
        ref: function ref(c) {
          return _this2._player = c;
        },
        vendor: vendor,
        src: src,
        autoPlay: autoPlay,
        onReady: this._handleOnReady,
        onEnded: this._handleOnEnded
      }, this._mediaEvents)));
    }
  }, {
    key: '_mediaEvents',
    get: function get() {
      var _this3 = this;

      var events = {};

      MEDIA_EVENTS_KEYS.forEach(function (key) {
        var stateKey = MEDIA_EVENTS[key];
        var propCallback = _this3.props[key];

        events[key] = function (val) {
          if (stateKey) {
            _this3.setState(_defineProperty({}, stateKey, val));
          }
          if (typeof propCallback === 'function') {
            propCallback(val);
          }
        };
      });
      return events;
    }
  }]);

  return Media;
}(_react.Component);

Media.propTypes = {
  vendor: _react.PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
  src: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.func.isRequired,
  autoPlay: _react.PropTypes.bool,
  loop: _react.PropTypes.bool
};
Media.defaultProps = {
  autoPlay: false,
  loop: false
};
Media.childContextTypes = _contextTypes2.default;
exports.default = Media;