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

var Volume = function (_Component) {
  _inherits(Volume, _Component);

  function Volume() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Volume);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Volume)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._handleChange = function (_ref) {
      var value = _ref.target.value;

      _this.context.setVolume((+value).toFixed(4));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Volume, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("input", {
        id: this.props.id,
        className: this.props.className,
        type: "range",
        step: "any",
        min: 0,
        max: 1,
        value: this.context.volume,
        onChange: this._handleChange
      });
    }
  }]);

  return Volume;
}(_react.Component);

Volume.contextTypes = {
  volume: _react.PropTypes.number,
  setVolume: _react.PropTypes.func
};
exports.default = Volume;