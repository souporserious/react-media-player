'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MEDIA_KEYS = [0, 'f', 'j', 'k', 'l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown'];

var KeyboardControls = function KeyboardControls(ComposedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._handlekeyboardControls = function (e) {
        var _this$context = _this.context;
        var playPause = _this$context.playPause;
        var duration = _this$context.duration;
        var seekTo = _this$context.seekTo;
        var fullscreen = _this$context.fullscreen;
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
        var _context = this.context;
        var currentTime = _context.currentTime;
        var duration = _context.duration;
        var seekTo = _context.seekTo;

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
        var _context2 = this.context;
        var setVolume = _context2.setVolume;
        var volume = _context2.volume;

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
        return (0, _react.createElement)(ComposedComponent, _extends({}, this.props, {
          keyboardControls: this._handlekeyboardControls
        }));
      }
    }]);

    return _class;
  }(_react.Component), _class.contextTypes = {
    currentTime: _react.PropTypes.number,
    duration: _react.PropTypes.number,
    volume: _react.PropTypes.number,
    playPause: _react.PropTypes.func,
    seekTo: _react.PropTypes.func,
    setVolume: _react.PropTypes.func,
    fullscreen: _react.PropTypes.func
  }, _temp2;
};

exports.default = KeyboardControls;