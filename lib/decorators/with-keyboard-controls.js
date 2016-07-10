'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withKeyboardControls;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withMediaProps = require('./with-media-props');

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MEDIA_KEYS = [0, 'f', 'j', 'k', 'l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown'];

function withKeyboardControls(MediaPlayer) {
  var _class, _temp2;

  return (0, _withMediaProps2.default)((_temp2 = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._handlekeyboardControls = function (e) {
        var _this$props$media = _this.props.media;
        var playPause = _this$props$media.playPause;
        var duration = _this$props$media.duration;
        var seekTo = _this$props$media.seekTo;
        var fullscreen = _this$props$media.fullscreen;
        var key = e.key;
        var shiftKey = e.shiftKey;

        // prevent default on any media keys

        MEDIA_KEYS.some(function (_key) {
          return _key === key && e.preventDefault();
        });

        switch (key) {
          // Play/Pause
          case ' ':
          case 'k':
            playPause();
            break;

          // Seeking Backwards
          case 'ArrowLeft':
            _this._skipTime(shiftKey ? -10 : -5);
            break;
          case 'j':
            _this._skipTime(shiftKey ? -10 : -5);
            break;
          case ',':
            _this._skipTime(-1);
            break;

          // Seeking Forwards
          case 'ArrowRight':
            _this._skipTime(shiftKey ? 10 : 5);
            break;
          case 'l':
            _this._skipTime(shiftKey ? 10 : 5);
            break;
          case '.':
            _this._skipTime(1);
            break;
          case 0:
          case 'Home':
            seekTo(0);
            break;
          case 'End':
            seekTo(duration);
            break;

          // Volume
          case 'ArrowUp':
            _this._addVolume(shiftKey ? 10 : 5);
            break;
          case 'ArrowDown':
            _this._addVolume(shiftKey ? -10 : -5);
            break;

          // Fullscreen
          case 'f':
            fullscreen();
            break;
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
      key: '_skipTime',
      value: function _skipTime(amount) {
        var _props$media = this.props.media;
        var currentTime = _props$media.currentTime;
        var duration = _props$media.duration;
        var seekTo = _props$media.seekTo;

        var newTime = currentTime + amount;

        if (newTime < 0) {
          newTime = 0;
        } else if (newTime > duration) {
          newTime = duration;
        }

        seekTo(newTime);
      }
    }, {
      key: '_addVolume',
      value: function _addVolume(amount) {
        var _props$media2 = this.props.media;
        var setVolume = _props$media2.setVolume;
        var volume = _props$media2.volume;

        var newVolume = volume + amount * 0.01;

        if (newVolume < 0) {
          newVolume = 0;
        } else if (newVolume > 1) {
          newVolume = 1;
        }

        setVolume(newVolume);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(MediaPlayer, _extends({}, this.props, {
          keyboardControls: this._handlekeyboardControls
        }));
      }
    }]);

    return _class;
  }(_react.Component), _class.displayName = 'withKeyboardControls', _temp2));
}