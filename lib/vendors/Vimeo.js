'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _getVimeoId = require('../utils/get-vimeo-id');

var _getVimeoId2 = _interopRequireDefault(_getVimeoId);

var _vendorPropTypes = require('./vendor-prop-types');

var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vimeo = function (_Component) {
  _inherits(Vimeo, _Component);

  function Vimeo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Vimeo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Vimeo.__proto__ || Object.getPrototypeOf(Vimeo)).call.apply(_ref, [this].concat(args))), _this), _this._vimeoId = (0, _getVimeoId2.default)(_this.props.src), _this._origin = '*', _this._onMessage = function (e) {
      var data = void 0;

      // allow messages from the Vimeo player only
      if (!/^https?:\/\/player.vimeo.com/.test(e.origin)) {
        return false;
      }

      if (_this._origin === '*') {
        _this._origin = e.origin;
      }

      try {
        data = JSON.parse(e.data);
      } catch (err) {
        _this.props.onError(err);
      }

      if (data) {
        switch (data.event) {
          case 'ready':
            _this._postOnReadyMessages();
            break;
          case 'loadProgress':
            _this.props.onProgress(data.data.percent);
            break;
          case 'playProgress':
            _this.props.onTimeUpdate(data.data.seconds);
            break;
          case 'play':
            _this.props.onPlay(true);
            break;
          case 'pause':
            _this.props.onPause(false);
            break;
          case 'finish':
            _this.props.onEnded(false);
            break;
        }
        if (data.method === 'getDuration') {
          _this.props.onDuration(data.value);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Vimeo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('message', this._onMessage);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this._vimeoId = (0, _getVimeoId2.default)(nextProps.src);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('message', this._onMessage);
    }
  }, {
    key: '_postMessage',
    value: function _postMessage(method, value) {
      var data = { method: method };

      if (value) {
        data.value = value;
      }

      this._iframe.contentWindow.postMessage(JSON.stringify(data), this._origin);
    }
  }, {
    key: '_postOnReadyMessages',
    value: function _postOnReadyMessages() {
      var _this2 = this;

      ;['loadProgress', 'playProgress', 'play', 'pause', 'finish'].forEach(function (listener) {
        return _this2._postMessage('addEventListener', listener);
      });
      this._postMessage('getDuration');
      this.props.onReady();
    }
  }, {
    key: 'play',
    value: function play() {
      this._postMessage('play');
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._postMessage('pause');
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._postMessage('unload');
    }
  }, {
    key: 'seekTo',
    value: function seekTo(currentTime) {
      this._postMessage('seekTo', currentTime);
    }
  }, {
    key: 'mute',
    value: function mute(muted) {
      this._postMessage('setVolume', muted ? '0' : '1');
      this.props.onMute(muted);
      this.props.onVolumeChange(muted ? 0 : 1);
    }
  }, {
    key: 'setVolume',
    value: function setVolume(volume) {
      this._postMessage('setVolume', volume);
      this.props.onVolumeChange(+volume);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('iframe', _extends({
        ref: function ref(c) {
          return _this3._iframe = c;
        },
        src: 'https://player.vimeo.com/video/' + this._vimeoId + '?api=1'
      }, this.props.extraProps));
    }
  }, {
    key: 'instance',
    get: function get() {
      return this._iframe;
    }
  }, {
    key: 'node',
    get: function get() {
      return (0, _reactDom.findDOMNode)(this._iframe);
    }
  }]);

  return Vimeo;
}(_react.Component);

Vimeo.propTypes = _vendorPropTypes2.default;
exports.default = Vimeo;
module.exports = exports['default'];