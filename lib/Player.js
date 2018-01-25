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

var _contextTypes = require('./context-types');

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _getVendor2 = require('./utils/get-vendor');

var _getVendor3 = _interopRequireDefault(_getVendor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Component) {
  _inherits(Player, _Component);

  function Player() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args))), _this), _this._defaultsSet = false, _this._setPlayer = function (component) {
      _this.context._mediaSetters.setPlayer(component);
      _this._component = component;
    }, _this._setLoading = function (isLoading) {
      _this.context._mediaSetters.setPlayerState({ isLoading: isLoading });
    }, _this._handleOnReady = function () {
      var _this$context = _this.context,
          media = _this$context.media,
          _mediaSetters = _this$context._mediaSetters;
      var _this$props = _this.props,
          autoPlay = _this$props.autoPlay,
          onReady = _this$props.onReady;


      media.setVolume(media.volume);
      media.mute(media.isMuted);

      if (!_this._defaultsSet) {
        _this._setDefaults();
      }

      if (autoPlay) {
        media.play();
      }

      _this._setLoading(false);

      if (typeof onReady === 'function') {
        onReady(media);
      }
    }, _this._handleOnEnded = function () {
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
        _mediaSetters.setPlayerState({ isPlaying: false });
      }

      if (typeof onEnded === 'function') {
        onEnded(media);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Player, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._setPlayerProps(this.props);

      // we need to unset the loading state if no source was loaded
      if (!this.props.src) {
        this._setLoading(false);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      this._setPlayerProps(nextProps);

      // clean state if the media source has changed
      if (this.props.src !== nextProps.src) {
        this.context._mediaSetters.setPlayerState({
          currentTime: 0,
          progress: 0,
          duration: 0,
          isLoading: true,
          isPlaying: false
        });
      }
    }
  }, {
    key: '_setPlayerProps',
    value: function _setPlayerProps(props) {
      this.context._mediaSetters.setPlayerProps(props);
    }
  }, {
    key: '_setDefaults',
    value: function _setDefaults() {
      var media = this.context.media;
      var _props = this.props,
          defaultCurrentTime = _props.defaultCurrentTime,
          defaultVolume = _props.defaultVolume,
          defaultMuted = _props.defaultMuted;


      if (defaultCurrentTime > -1) {
        media.seekTo(defaultCurrentTime);
      }
      media.setVolume(defaultVolume);
      media.mute(defaultMuted);

      this._defaultsSet = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          src = _props2.src,
          _vendor = _props2.vendor,
          autoPlay = _props2.autoPlay,
          onReady = _props2.onReady,
          onEnded = _props2.onEnded,
          defaultCurrentTime = _props2.defaultCurrentTime,
          defaultVolume = _props2.defaultVolume,
          defaultMuted = _props2.defaultMuted,
          extraProps = _objectWithoutProperties(_props2, ['src', 'vendor', 'autoPlay', 'onReady', 'onEnded', 'defaultCurrentTime', 'defaultVolume', 'defaultMuted']);

      var _getVendor = (0, _getVendor3.default)(src, _vendor, !!extraProps.useAudioObject),
          vendor = _getVendor.vendor,
          component = _getVendor.component;

      return (0, _react.createElement)(component, _extends({
        ref: this._setPlayer,
        src: src,
        vendor: vendor,
        autoPlay: autoPlay,
        isLoading: this._setLoading,
        onReady: this._handleOnReady,
        onEnded: this._handleOnEnded,
        extraProps: extraProps
      }, this.context._mediaGetters.getPlayerEvents));
    }
  }, {
    key: 'instance',
    get: function get() {
      return this._component && this._component.instance;
    }
  }]);

  return Player;
}(_react.Component);

Player.propTypes = {
  vendor: _propTypes2.default.oneOf(['video', 'audio', 'youtube', 'vimeo']),
  defaultCurrentTime: _propTypes2.default.number,
  defaultVolume: _propTypes2.default.number,
  defaultMuted: _propTypes2.default.bool
};
Player.defaultProps = {
  defaultCurrentTime: -1,
  defaultVolume: 1,
  defaultMuted: false
};
Player.contextTypes = _contextTypes2.default;
exports.default = Player;
module.exports = exports['default'];