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

var _withMediaProps = require('../decorators/with-media-props');

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Volume = function (_Component) {
  _inherits(Volume, _Component);

  function Volume() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Volume);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Volume.__proto__ || Object.getPrototypeOf(Volume)).call.apply(_ref, [this].concat(args))), _this), _this._onChangeUsed = false, _this._handleMouseUp = function (_ref2) {
      var value = _ref2.target.value;

      // set volume on mouseUp as well because of this bug in <= IE11
      // https://github.com/facebook/react/issues/554
      if (!_this._onChangeUsed) {
        _this.props.media.setVolume((+value).toFixed(4));
      }
    }, _this._handleChange = function (_ref3) {
      var value = _ref3.target.value;

      _this.props.media.setVolume((+value).toFixed(4));
      _this._onChangeUsed = true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Volume, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref4) {
      var media = _ref4.media;

      return this.props.media.volume !== media.volume;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;
      var volume = media.volume;

      return _react2.default.createElement('input', {
        type: 'range',
        step: 'any',
        min: 0,
        max: 1,
        value: volume,
        onMouseUp: this._handleMouseUp,
        onChange: this._handleChange,
        className: className,
        style: _extends({
          backgroundSize: volume * 100 / 1 + '% 100%'
        }, style)
      });
    }
  }]);

  return Volume;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(Volume);
module.exports = exports['default'];