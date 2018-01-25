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

var _reactDom = require('react-dom');

var _vendorPropTypes = require('./vendor-prop-types');

var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

var _HTML2 = require('./HTML5');

var _HTML3 = _interopRequireDefault(_HTML2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioObject = function (_HTML) {
  _inherits(AudioObject, _HTML);

  function AudioObject() {
    _classCallCheck(this, AudioObject);

    return _possibleConstructorReturn(this, (AudioObject.__proto__ || Object.getPrototypeOf(AudioObject)).apply(this, arguments));
  }

  _createClass(AudioObject, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var src = this.props.src;


      this._createAudioObject(src);
      this._bindAudioObjectEvents(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var src = nextProps.src;

      // destroy and recreate audio object to clean up any browser state

      if (this.props.src !== src) {
        this._destroyAudioObject();
        this._createAudioObject(src);
      }
      // bind any new props to current audio object
      this._bindAudioObjectEvents(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyAudioObject();
    }
  }, {
    key: '_createAudioObject',
    value: function _createAudioObject(src) {
      this._player = new Audio(src);
    }
  }, {
    key: '_destroyAudioObject',
    value: function _destroyAudioObject() {
      // even when stopped and set to null,
      // chrome will continue to buffer files
      // set the source to some benign value
      // (FF throws on an empty string)
      // and load it to truly stop buffering
      this.stop();
      this._player.src = 'about:blank';
      this._player.load();
      this._player = null;
    }
  }, {
    key: '_bindAudioObjectEvents',
    value: function _bindAudioObjectEvents(_ref) {
      var _this2 = this;

      var extraProps = _ref.extraProps;

      var playerEvents = this._playerEvents;

      Object.keys(extraProps).forEach(function (key) {
        _this2._player[key] = extraProps[key];
      });

      Object.keys(playerEvents).forEach(function (key) {
        _this2._player[key.toLowerCase()] = playerEvents[key];
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return AudioObject;
}(_HTML3.default);

AudioObject.propTypes = _extends({}, _vendorPropTypes2.default, {
  useAudioObject: _propTypes2.default.bool
});
exports.default = AudioObject;
module.exports = exports['default'];