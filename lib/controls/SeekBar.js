"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SeekBar = function (_Component) {
  _inherits(SeekBar, _Component);

  function SeekBar() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, SeekBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SeekBar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._isPlayingOnMouseDown = false, _this._onChangeUsed = false, _this._handleMouseDown = function () {
      _this._isPlayingOnMouseDown = _this.context.isPlaying;
      _this.context.pause();
    }, _this._handleMouseUp = function (_ref) {
      var value = _ref.target.value;

      // seek on mouseUp as well because of this bug in <= IE11
      // https://github.com/facebook/react/issues/554
      if (!_this._onChangeUsed) {
        _this.context.seekTo(+value);
      }

      // only play if media was playing prior to mouseDown
      if (_this._isPlayingOnMouseDown) {
        _this.context.play();
      }
    }, _this._handleChange = function (_ref2) {
      var value = _ref2.target.value;

      _this.context.seekTo(+value);
      _this._onChangeUsed = true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SeekBar, [{
    key: "render",
    value: function render() {
      var _context = this.context;
      var duration = _context.duration;
      var currentTime = _context.currentTime;

      return _react2.default.createElement("input", {
        id: this.props.id,
        className: this.props.className,
        type: "range",
        step: "any",
        max: duration.toFixed(4),
        value: currentTime,
        onMouseDown: this._handleMouseDown,
        onMouseUp: this._handleMouseUp,
        onChange: this._handleChange,
        style: { backgroundSize: currentTime * 100 / duration + '% 100%' }
      });
    }
  }]);

  return SeekBar;
}(_react.Component);

SeekBar.contextTypes = {
  currentTime: _react.PropTypes.number,
  duration: _react.PropTypes.number,
  play: _react.PropTypes.func,
  pause: _react.PropTypes.func,
  seekTo: _react.PropTypes.func,
  isPlaying: _react.PropTypes.bool
};
exports.default = SeekBar;