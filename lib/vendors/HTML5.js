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

var _vendorPropTypes = require('./vendor-prop-types');

var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioContext = typeof window === 'undefined' ? false : window.AudioContext || window.webkitAudioContext;
var audioContext = void 0;

if (AudioContext) {
  audioContext = new AudioContext();
}

var HTML5 = function (_Component) {
  _inherits(HTML5, _Component);

  function HTML5() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HTML5);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTML5.__proto__ || Object.getPrototypeOf(HTML5)).call.apply(_ref, [this].concat(args))), _this), _this._isLoading = function () {
      _this.props.isLoading(true);
    }, _this._isNotLoading = function () {
      _this.props.isLoading(false);
    }, _this._handleCanPlay = function () {
      _this.props.onReady();
      _this._isNotLoading();
    }, _this._handlePlay = function () {
      _this.props.onPlay(true);
      _this._isNotLoading();
    }, _this._handlePause = function () {
      _this.props.onPause(false);
    }, _this._handleEnded = function () {
      _this.props.onEnded(false);
    }, _this._handleError = function (e) {
      if (_this._playerStopped) {
        _this._playerStopped = false;
      } else {
        _this.props.onError(e);
        _this._isNotLoading();
      }
    }, _this._handleProgress = function (_ref2) {
      var _ref2$target = _ref2.target,
          buffered = _ref2$target.buffered,
          duration = _ref2$target.duration;

      var progress = 0;

      if (duration > 0 && buffered.length) {
        progress = buffered.end(buffered.length - 1) / duration;
      }

      _this.props.onProgress(progress);
    }, _this._handleDuration = function (_ref3) {
      var duration = _ref3.target.duration;

      _this.props.onDuration(duration);
    }, _this._handleTimeUpdate = function (_ref4) {
      var currentTime = _ref4.target.currentTime;

      _this.props.onTimeUpdate(currentTime);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HTML5, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$extraProps = this.props.extraProps,
          connectSource = _props$extraProps.connectSource,
          useAudioObject = _props$extraProps.useAudioObject;

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
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      var _props$extraProps2 = this.props.extraProps,
          connectSource = _props$extraProps2.connectSource,
          useAudioObject = _props$extraProps2.useAudioObject;

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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props$extraProps3 = this.props.extraProps,
          connectSource = _props$extraProps3.connectSource,
          useAudioObject = _props$extraProps3.useAudioObject;

      if (audioContext && connectSource) {
        this._disconnectAudioContext();
      }
      if (useAudioObject) {
        this._destroyAudioObject();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
      }
      return this._player.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._player.pause();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._player.pause();
      this._player.currentTime = 0;
    }
  }, {
    key: 'seekTo',
    value: function seekTo(currentTime) {
      if (this._player.readyState > 0) {
        this._player.currentTime = currentTime;
      }
    }
  }, {
    key: 'mute',
    value: function mute(muted) {
      var nextVolume = muted ? 0 : 1;
      this._player.muted = muted;
      this.setVolume(nextVolume);
      this.props.onMute(muted);
      this.props.onVolumeChange(nextVolume);
    }
  }, {
    key: 'setVolume',
    value: function setVolume(volume) {
      if (this._gain) {
        this._gain.gain.value = volume;
      } else {
        this._player.volume = volume;
      }
      this.props.onVolumeChange(volume);
    }
  }, {
    key: '_createAudioObject',
    value: function _createAudioObject() {
      this._player = new Audio(this.props.src);
    }
  }, {
    key: '_destroyAudioObject',
    value: function _destroyAudioObject() {
      this.stop();
      this._player.src = 'about:blank';
      this._playerStopped = true;
    }
  }, {
    key: '_bindAudioObjectEvents',
    value: function _bindAudioObjectEvents() {
      var _this2 = this;

      var _props$extraProps4 = this.props.extraProps,
          connectSource = _props$extraProps4.connectSource,
          useAudioObject = _props$extraProps4.useAudioObject,
          playerProps = _objectWithoutProperties(_props$extraProps4, ['connectSource', 'useAudioObject']);

      var playerEvents = this._playerEvents;
      Object.keys(playerProps).forEach(function (key) {
        _this2._player[key] = playerProps[key];
      });
      Object.keys(playerEvents).forEach(function (key) {
        _this2._player[key.toLowerCase()] = playerEvents[key];
      });
    }
  }, {
    key: '_connectAudioContext',
    value: function _connectAudioContext() {
      var _props$extraProps5 = this.props.extraProps,
          connectSource = _props$extraProps5.connectSource,
          useAudioObject = _props$extraProps5.useAudioObject;

      if (useAudioObject || !this._source) {
        this._source = audioContext.createMediaElementSource(useAudioObject ? this.instance : this.node);
      }
      this._gain = audioContext.createGain();
      connectSource(this._source, audioContext).connect(this._gain);
      this._gain.connect(audioContext.destination);
    }
  }, {
    key: '_disconnectAudioContext',
    value: function _disconnectAudioContext() {
      this._source.disconnect(0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          vendor = _props.vendor,
          src = _props.src,
          _props$extraProps6 = _props.extraProps,
          connectSource = _props$extraProps6.connectSource,
          useAudioObject = _props$extraProps6.useAudioObject,
          playerProps = _objectWithoutProperties(_props$extraProps6, ['connectSource', 'useAudioObject']);

      return useAudioObject ? null : (0, _react.createElement)(vendor, _extends({
        ref: function ref(c) {
          return _this3._player = c;
        },
        src: src
      }, playerProps, this._playerEvents));
    }
  }, {
    key: 'instance',
    get: function get() {
      return this._player;
    }
  }, {
    key: 'node',
    get: function get() {
      return (0, _reactDom.findDOMNode)(this._player);
    }
  }, {
    key: '_playerEvents',
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
  }]);

  return HTML5;
}(_react.Component);

HTML5.propTypes = _extends({}, _vendorPropTypes2.default, {
  useAudioObject: _propTypes2.default.bool
});
exports.default = HTML5;
module.exports = exports['default'];