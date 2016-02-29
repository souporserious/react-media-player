'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HTML2 = require('./HTML5');

var _HTML3 = _interopRequireDefault(_HTML2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_HTML) {
  _inherits(Video, _HTML);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Video).apply(this, arguments));
  }

  _createClass(Video, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('video', {
        ref: function ref(c) {
          return _this2._player = c;
        },
        src: this.props.src,
        onCanPlay: this._handleCanPlay,
        onPlay: this._handlePlay,
        onPause: this._handlePause,
        onEnded: this._handleEnded,
        onProgress: this._handleProgress,
        onLoadedMetadata: this._handleDuration,
        onTimeUpdate: this._handleTimeUpdate,
        onVolumeChange: this._handleVolumeChange
      });
    }
  }]);

  return Video;
}(_HTML3.default);

exports.default = Video;