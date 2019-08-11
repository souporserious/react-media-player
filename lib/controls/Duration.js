'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withMediaProps = require('../decorators/with-media-props');

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

var _formatTime = require('../utils/format-time');

var _formatTime2 = _interopRequireDefault(_formatTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Duration = function (_Component) {
  _inherits(Duration, _Component);

  function Duration() {
    _classCallCheck(this, Duration);

    return _possibleConstructorReturn(this, (Duration.__proto__ || Object.getPrototypeOf(Duration)).apply(this, arguments));
  }

  _createClass(Duration, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var media = _ref.media;

      return this.props.media.duration !== media.duration;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;

      return _react2.default.createElement(
        'time',
        { className: className, style: style },
        (0, _formatTime2.default)(media.duration)
      );
    }
  }]);

  return Duration;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(Duration);
module.exports = exports['default'];