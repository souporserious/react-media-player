'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _contextTypes = require('./context-types');

var _contextTypes2 = _interopRequireDefault(_contextTypes);

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
  onDuration: 'duration',
  onProgress: 'progress',
  onTimeUpdate: 'currentTime',
  onMute: 'isMuted',
  onVolumeChange: 'volume',
  onError: null
};
var MEDIA_EVENTS_KEYS = Object.keys(MEDIA_EVENTS);

var Media = function (_Component) {
  _inherits(Media, _Component);

  function Media() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Media);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Media.__proto__ || Object.getPrototypeOf(Media)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentTime: 0,
      progress: 0,
      duration: 0.1,
      volume: 1,
      isLoading: true,
      isPlaying: false,
      isMuted: false,
      isFullscreen: false
    }, _this._isMounted = false, _this._playerProps = {}, _this._lastVolume = 0, _this._setPlayer = function (component) {
      _this._player = component;
    }, _this._setPlayerProps = function (props) {
      _this._playerProps = props;
    }, _this._setPlayerState = function (state) {
      _this.setState(state);
    }, _this.play = function () {
      return _this._player.play();
    }, _this.pause = function () {
      _this._player.pause();
    }, _this.playPause = function () {
      if (!_this.state.isPlaying) {
        return _this.play();
      } else {
        _this.pause();
      }
    }, _this.stop = function () {
      _this._player.stop();
    }, _this.seekTo = function (currentTime) {
      _this._player.seekTo(currentTime);
      _this.setState({ currentTime: currentTime });
    }, _this.skipTime = function (amount) {
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
    }, _this.mute = function (isMuted) {
      if (isMuted) {
        _this._lastVolume = _this.state.volume;
        _this._player.setVolume(0);
      } else {
        var volume = _this._lastVolume > 0 ? _this._lastVolume : 0.1;
        _this._player.setVolume(volume);
      }
      _this._player.mute(isMuted);
    }, _this.muteUnmute = function () {
      _this.mute(!_this.state.isMuted);
    }, _this.setVolume = function (volume) {
      var isMuted = volume <= 0;
      if (isMuted !== _this.state.isMuted) {
        _this.mute(isMuted);
      } else {
        _this._lastVolume = volume;
      }
      _this._player.setVolume(volume);
    }, _this.addVolume = function (amount) {
      var newVolume = _this.state.volume + amount * 0.01;
      if (newVolume < 0) {
        newVolume = 0;
      } else if (newVolume > 1) {
        newVolume = 1;
      }
      _this.setVolume(newVolume);
    }, _this.fullscreen = function () {
      if (!_this.state.isFullscreen) {
        _this._player.node[_requestFullscreen2.default]();
      } else {
        document[_exitFullscreen2.default]();
      }
    }, _this._handleFullscreenChange = function (_ref2) {
      var target = _ref2.target;

      if (target === _this._player.node) {
        _this.setState({ isFullscreen: !_this.state.isFullscreen });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Media, [{
    key: 'getChildContext',
    value: function getChildContext() {
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      (0, _fullscreenChange2.default)('add', this._handleFullscreenChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
      (0, _fullscreenChange2.default)('remove', this._handleFullscreenChange);
    }
  }, {
    key: '_getPublicMediaProps',
    value: function _getPublicMediaProps() {
      return _extends({}, this.state, {
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
    key: '_getPlayerEvents',
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
    key: 'render',
    value: function render() {
      var children = this.props.children;

      if (typeof children === 'function') {
        return children(this._getPublicMediaProps());
      }
      return _react.Children.only(children);
    }
  }]);

  return Media;
}(_react.Component);

Media.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]).isRequired
};
Media.childContextTypes = _contextTypes2.default;
exports.default = Media;
module.exports = exports['default'];