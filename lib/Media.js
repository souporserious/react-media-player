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

var _getVendor2 = require('./utils/get-vendor');

var _getVendor3 = _interopRequireDefault(_getVendor2);

var _requestFullscreen = require('./utils/request-fullscreen');

var _requestFullscreen2 = _interopRequireDefault(_requestFullscreen);

var _exitFullscreen = require('./utils/exit-fullscreen');

var _exitFullscreen2 = _interopRequireDefault(_exitFullscreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      duration: 0,
      volume: 1,
      isLoading: true,
      isPlaying: false,
      isMuted: false,
      isFullscreen: false
    }, _this._lastVolume = 0, _this._handlePlay = function () {
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
      var isFullscreen = _this.state.isFullscreen;


      if (!isFullscreen) {
        _reactDom2.default.findDOMNode(_this._player)[_requestFullscreen2.default]();
      } else {
        document[_exitFullscreen2.default]();
      }

      _this.setState({ isFullscreen: !isFullscreen });
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
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      // clean state if the video has changed
      if (this.props.src !== nextProps.src) {
        this.setState({
          currentTime: 0,
          progress: 0,
          duration: 0,
          isPlaying: false,

          // TODO: figure out how to keep these settings
          // getting error because element isn't available when trying to set them
          // this occurs on componentDidUpdate
          volume: 1,
          isMuted: false,
          isFullscreen: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var src = _props.src;
      var children = _props.children;

      var _getVendor = (0, _getVendor3.default)(src, this.props.vendor);

      var vendor = _getVendor.vendor;
      var component = _getVendor.component;


      return component && children((0, _react.createElement)(component, {
        ref: function ref(c) {
          return _this2._player = c;
        },
        vendor: vendor,
        src: src,
        onReady: function onReady() {
          return _this2.setState({ isLoading: false });
        },
        onPlaying: function onPlaying(isPlaying) {
          return _this2.setState({ isPlaying: isPlaying });
        },
        onDuration: function onDuration(duration) {
          return _this2.setState({ duration: duration });
        },
        onProgress: function onProgress(progress) {
          return _this2.setState({ progress: progress });
        },
        onTimeUpdate: function onTimeUpdate(currentTime) {
          return _this2.setState({ currentTime: currentTime });
        },
        onMute: function onMute(isMuted) {
          return _this2.setState({ isMuted: isMuted });
        },
        onVolumeChange: function onVolumeChange(volume) {
          return _this2.setState({ volume: volume });
        }
      }));
    }
  }]);

  return Media;
}(_react.Component);

Media.propTypes = {
  vendor: _react.PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
  src: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.func.isRequired
};
Media.childContextTypes = {
  // State
  currentTime: _react.PropTypes.number,
  progress: _react.PropTypes.number,
  duration: _react.PropTypes.number,
  volume: _react.PropTypes.number,
  isLoading: _react.PropTypes.bool,
  isPlaying: _react.PropTypes.bool,
  isMuted: _react.PropTypes.bool,
  isFullscreen: _react.PropTypes.bool,

  // Methods
  play: _react.PropTypes.func,
  pause: _react.PropTypes.func,
  playPause: _react.PropTypes.func,
  stop: _react.PropTypes.func,
  seekTo: _react.PropTypes.func,
  mute: _react.PropTypes.func,
  muteUnmute: _react.PropTypes.func,
  setVolume: _react.PropTypes.func,
  fullscreen: _react.PropTypes.func
};
exports.default = Media;