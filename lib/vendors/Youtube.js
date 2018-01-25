'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _youtubeApiLoader = require('../utils/youtube-api-loader');

var _youtubeApiLoader2 = _interopRequireDefault(_youtubeApiLoader);

var _getYoutubeId = require('../utils/get-youtube-id');

var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

var _vendorPropTypes = require('./vendor-prop-types');

var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Youtube = function (_Component) {
  _inherits(Youtube, _Component);

  function Youtube() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Youtube);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call.apply(_ref, [this].concat(args))), _this), _this._videoId = (0, _getYoutubeId2.default)(_this.props.src), _this._lastVideoId = _this._videoId, _this._isReady = false, _this._isMounted = false, _this._progressId = null, _this._timeUpdateId = null, _this._handleProgress = function () {
      if (!_this._isMounted) return;

      var progress = _this._player.getVideoLoadedFraction() || 0;

      _this.props.onProgress(progress);

      if (_this._progressId && progress < 1) {
        _this._progressId = requestAnimationFrame(_this._handleProgress);
      }
    }, _this._handleTimeUpdate = function () {
      if (!_this._isMounted) return;

      _this.props.onTimeUpdate(_this._player.getCurrentTime() || 0);

      if (_this._timeUpdateId) {
        _this._timeUpdateId = requestAnimationFrame(_this._handleTimeUpdate);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Youtube, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      _youtubeApiLoader2.default.load(this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this._lastVideoId = this._videoId;
        this._videoId = (0, _getYoutubeId2.default)(nextProps.src);

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
    key: 'componentWillUnmount',
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
    key: '_createPlayer',
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
    key: '_events',
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
        onStateChange: function onStateChange(_ref2) {
          var data = _ref2.data;
          var _window$YT$PlayerStat = window.YT.PlayerState,
              PLAYING = _window$YT$PlayerStat.PLAYING,
              PAUSED = _window$YT$PlayerStat.PAUSED,
              ENDED = _window$YT$PlayerStat.ENDED,
              BUFFERING = _window$YT$PlayerStat.BUFFERING,
              CUED = _window$YT$PlayerStat.CUED;

          var isPlaying = data === PLAYING;

          if (isPlaying) {
            _this2.props.onPlay(true);
            _this2.props.onDuration(_this2._player.getDuration());
            _this2._timeUpdateId = requestAnimationFrame(_this2._handleTimeUpdate);
          } else {
            cancelAnimationFrame(_this2._timeUpdateId);
            _this2._timeUpdateId = null;

            cancelAnimationFrame(_this2._progressId);
            _this2._progressId = null;
          }

          if (data === PAUSED) {
            _this2.props.onPause(false);
          }

          if (data === ENDED) {
            _this2.props.onEnded(false);
          }

          // start fetching progress when playing or buffering
          if (isPlaying || data === BUFFERING) {
            _this2._progressId = requestAnimationFrame(_this2._handleProgress);
          }

          // reset duration if a new video was loaded
          if (data === CUED) {
            _this2.props.onDuration(0.1);
          }
        },
        onError: function onError(e) {
          _this2.props.onError(e.data);
        }
      };
    }
  }, {
    key: 'play',
    value: function play() {
      this._player.playVideo();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._player.pauseVideo();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._player.stopVideo();
    }
  }, {
    key: 'seekTo',
    value: function seekTo(currentTime) {
      this._player.seekTo(currentTime);
    }
  }, {
    key: 'mute',
    value: function mute(muted) {
      if (muted) {
        this._player.mute();
      } else {
        this._player.unMute();
      }
      this.props.onMute(muted);
    }
  }, {
    key: 'setVolume',
    value: function setVolume(volume) {
      this._player.setVolume(+volume * 100);
      this.props.onVolumeChange(+volume);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', _extends({ ref: function ref(c) {
          return _this3._node = c;
        } }, this.props.extraProps));
    }
  }, {
    key: 'instance',
    get: function get() {
      return this._player;
    }
  }, {
    key: 'node',
    get: function get() {
      return this._player.getIframe();
    }
  }]);

  return Youtube;
}(_react.Component);

Youtube.propTypes = _vendorPropTypes2.default;
exports.default = Youtube;
module.exports = exports['default'];