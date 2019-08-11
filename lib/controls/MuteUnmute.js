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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MuteUnmute = function (_Component) {
  _inherits(MuteUnmute, _Component);

  function MuteUnmute() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MuteUnmute);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MuteUnmute.__proto__ || Object.getPrototypeOf(MuteUnmute)).call.apply(_ref, [this].concat(args))), _this), _this._handleMuteUnmute = function () {
      _this.props.media.muteUnmute();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MuteUnmute, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref2) {
      var media = _ref2.media;

      return this.props.media.isMuted !== media.isMuted;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: className,
          style: style,
          onClick: this._handleMuteUnmute
        },
        media.isMuted ? 'Unmute' : 'Mute'
      );
    }
  }]);

  return MuteUnmute;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(MuteUnmute);
module.exports = exports['default'];