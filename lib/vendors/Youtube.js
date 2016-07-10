'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Youtube);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Youtube)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._isMounted = false, _this._progressId = null, _this._timeUpdateId = null, _this._handleProgress = function () {
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
        var videoId = (0, _getYoutubeId2.default)(nextProps.src);
        if (nextProps.autoPlay) {
          this._player.loadVideoById(videoId);
        } else {
          this._player.cueVideoById(videoId);
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
      var videoId = (0, _getYoutubeId2.default)(this.props.src);

      this._player = new YT.Player(this._node, {
        videoId: videoId,
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
          _this2.props.onDuration(_this2._player.getDuration());
          _this2.props.onReady();
        },
        onStateChange: function onStateChange(_ref) {
          var data = _ref.data;
          var _window$YT$PlayerStat = window.YT.PlayerState;
          var PLAYING = _window$YT$PlayerStat.PLAYING;
          var PAUSED = _window$YT$PlayerStat.PAUSED;
          var ENDED = _window$YT$PlayerStat.ENDED;
          var BUFFERING = _window$YT$PlayerStat.BUFFERING;
          var CUED = _window$YT$PlayerStat.CUED;

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

      return _react2.default.createElement('div', { ref: function ref(c) {
          return _this3._node = c;
        } });
    }
  }]);

  return Youtube;
}(_react.Component);

Youtube.propTypes = _vendorPropTypes2.default;
exports.default = Youtube;