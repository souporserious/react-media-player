/*!
 * React Media Player 0.7.0
 * https://github.com/souporserious/react-media-player
 * Copyright (c) 2018 React Media Player Authors
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactMediaPlayer"] = factory(require("react"), require("react-dom"));
	else
		root["ReactMediaPlayer"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.controls = exports.withMediaProps = exports.Player = exports.Media = undefined;

	var _Media2 = __webpack_require__(1);

	var _Media3 = _interopRequireDefault(_Media2);

	var _Player2 = __webpack_require__(18);

	var _Player3 = _interopRequireDefault(_Player2);

	var _withMediaProps2 = __webpack_require__(29);

	var _withMediaProps3 = _interopRequireDefault(_withMediaProps2);

	var _controls2 = __webpack_require__(30);

	var _controls = _interopRequireWildcard(_controls2);

	var _utils2 = __webpack_require__(40);

	var _utils = _interopRequireWildcard(_utils2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Media = _Media3.default;
	exports.Player = _Player3.default;
	exports.withMediaProps = _withMediaProps3.default;
	exports.controls = _controls;
	exports.utils = _utils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _contextTypes = __webpack_require__(14);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	var _requestFullscreen = __webpack_require__(15);

	var _requestFullscreen2 = _interopRequireDefault(_requestFullscreen);

	var _exitFullscreen = __webpack_require__(16);

	var _exitFullscreen2 = _interopRequireDefault(_exitFullscreen);

	var _fullscreenChange = __webpack_require__(17);

	var _fullscreenChange2 = _interopRequireDefault(_fullscreenChange);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MEDIA_EVENTS = {
	  onPlay: 'isPlaying',
	  onPause: 'isPlaying',
	  onDuration: 'duration',
	  onProgress: 'progress',
	  onTimeUpdate: 'currentTime',
	  onMute: 'isMuted',
	  onVolumeChange: 'volume',
	  onError: null
	};
	var MEDIA_EVENTS_KEYS = Object.keys(MEDIA_EVENTS);

	var Media = function (_Component) {
	  _inherits(Media, _Component);

	  function Media() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Media);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Media.__proto__ || Object.getPrototypeOf(Media)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      currentTime: 0,
	      progress: 0,
	      duration: 0.1,
	      volume: 1,
	      isLoading: true,
	      isPlaying: false,
	      isMuted: false,
	      isFullscreen: false
	    }, _this._playerProps = {}, _this._lastVolume = 0, _this._setPlayer = function (component) {
	      _this._player = component;
	    }, _this._setPlayerProps = function (props) {
	      _this._playerProps = props;
	    }, _this._setPlayerState = function (state) {
	      _this.setState(state);
	    }, _this.play = function () {
	      return _this._player.play();
	    }, _this.pause = function () {
	      _this._player.pause();
	    }, _this.playPause = function () {
	      if (!_this.state.isPlaying) {
	        _this._player.play();
	      } else {
	        _this._player.pause();
	      }
	    }, _this.stop = function () {
	      _this._player.stop();
	    }, _this.seekTo = function (currentTime) {
	      _this._player.seekTo(currentTime);
	      _this.setState({ currentTime: currentTime });
	    }, _this.skipTime = function (amount) {
	      var _this$state = _this.state,
	          currentTime = _this$state.currentTime,
	          duration = _this$state.duration;

	      var newTime = currentTime + amount;

	      if (newTime < 0) {
	        newTime = 0;
	      } else if (newTime > duration) {
	        newTime = duration;
	      }

	      _this.seekTo(newTime);
	    }, _this.mute = function (isMuted) {
	      if (isMuted) {
	        _this._lastVolume = _this.state.volume;
	        _this._player.setVolume(0);
	      } else {
	        var volume = _this._lastVolume > 0 ? _this._lastVolume : 0.1;
	        _this._player.setVolume(volume);
	      }
	      _this._player.mute(isMuted);
	    }, _this.muteUnmute = function () {
	      _this.mute(!_this.state.isMuted);
	    }, _this.setVolume = function (volume) {
	      var isMuted = volume <= 0;

	      if (isMuted !== _this.state.isMuted) {
	        _this.mute(isMuted);
	      } else {
	        _this._lastVolume = volume;
	      }

	      _this._player.setVolume(volume);
	    }, _this.addVolume = function (amount) {
	      var newVolume = _this.state.volume + amount * 0.01;

	      if (newVolume < 0) {
	        newVolume = 0;
	      } else if (newVolume > 1) {
	        newVolume = 1;
	      }

	      _this.setVolume(newVolume);
	    }, _this.fullscreen = function () {
	      if (!_this.state.isFullscreen) {
	        _this._player.node[_requestFullscreen2.default]();
	      } else {
	        document[_exitFullscreen2.default]();
	      }
	    }, _this._handleFullscreenChange = function (_ref2) {
	      var target = _ref2.target;

	      if (target === _this._player.node) {
	        _this.setState({ isFullscreen: !_this.state.isFullscreen });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Media, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        media: this._getPublicMediaProps(),
	        _mediaSetters: {
	          setPlayer: this._setPlayer,
	          setPlayerProps: this._setPlayerProps,
	          setPlayerState: this._setPlayerState
	        },
	        _mediaGetters: {
	          getPlayerEvents: this._getPlayerEvents()
	        }
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (0, _fullscreenChange2.default)('add', this._handleFullscreenChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _fullscreenChange2.default)('remove', this._handleFullscreenChange);
	    }
	  }, {
	    key: '_getPublicMediaProps',
	    value: function _getPublicMediaProps() {
	      return _extends({}, this.state, {
	        play: this.play,
	        pause: this.pause,
	        playPause: this.playPause,
	        stop: this.stop,
	        seekTo: this.seekTo,
	        skipTime: this.skipTime,
	        mute: this.mute,
	        muteUnmute: this.muteUnmute,
	        setVolume: this.setVolume,
	        addVolume: this.addVolume,
	        fullscreen: this.fullscreen
	      });
	    }
	  }, {
	    key: '_getPlayerEvents',
	    value: function _getPlayerEvents() {
	      var _this2 = this;

	      var events = {};

	      MEDIA_EVENTS_KEYS.forEach(function (key) {
	        var stateKey = MEDIA_EVENTS[key];
	        var propCallback = _this2._playerProps[key];

	        events[key] = function (val) {
	          if (stateKey) {
	            _this2.setState(_defineProperty({}, stateKey, val));
	          }
	          if (typeof propCallback === 'function') {
	            propCallback(_this2.state);
	          }
	        };
	      });
	      return events;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;


	      if (typeof children === 'function') {
	        return children(this._getPublicMediaProps());
	      }

	      return _react.Children.only(children);
	    }
	  }]);

	  return Media;
	}(_react.Component);

	Media.propTypes = {
	  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]).isRequired
	};
	Media.childContextTypes = _contextTypes2.default;
	exports.default = Media;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

	  var isValidElement = function isValidElement(object) {
	    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(12)();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(8);
	var assign = __webpack_require__(9);

	var ReactPropTypesSecret = __webpack_require__(10);
	var checkPropTypes = __webpack_require__(11);

	module.exports = function (isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (!manualPropTypeCallCache[cacheKey] &&
	          // Avoid spamming the console because they are often not actionable except for lib authors
	          manualPropTypeWarningCount < 3) {
	            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(7);
	  var warning = __webpack_require__(8);
	  var ReactPropTypesSecret = __webpack_require__(10);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var ReactPropTypesSecret = __webpack_require__(10);

	module.exports = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  media: _propTypes2.default.object,
	  _mediaSetters: _propTypes2.default.object,
	  _mediaGetters: _propTypes2.default.object
	};
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (typeof document === 'undefined') {
	    return function () {};
	  }

	  var names = ['requestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen', 'webkitRequestFullscreen'];
	  return names.reduce(function (prev, curr) {
	    return document.documentElement[curr] ? curr : prev;
	  });
	}();

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (typeof document === 'undefined') {
	    return function () {};
	  }

	  var names = ['exitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen', 'webkitExitFullscreen'];
	  return names.reduce(function (prev, curr) {
	    return document[curr] ? curr : prev;
	  });
	}();

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fullscreenChange;
	function fullscreenChange(type, callback) {
	  var vendors = ['fullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange', 'webkitfullscreenchange'];
	  vendors.forEach(function (vendor) {
	    return document[type + 'EventListener'](vendor, callback);
	  });
	}
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _contextTypes = __webpack_require__(14);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	var _getVendor2 = __webpack_require__(19);

	var _getVendor3 = _interopRequireDefault(_getVendor2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Player = function (_Component) {
	  _inherits(Player, _Component);

	  function Player() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Player);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args))), _this), _this._defaultsSet = false, _this._setPlayer = function (component) {
	      _this.context._mediaSetters.setPlayer(component);
	      _this._component = component;
	    }, _this._setLoading = function (isLoading) {
	      _this.context._mediaSetters.setPlayerState({ isLoading: isLoading });
	    }, _this._handleOnReady = function () {
	      var _this$context = _this.context,
	          media = _this$context.media,
	          _mediaSetters = _this$context._mediaSetters;
	      var _this$props = _this.props,
	          autoPlay = _this$props.autoPlay,
	          onReady = _this$props.onReady;


	      media.setVolume(media.volume);
	      media.mute(media.isMuted);

	      if (!_this._defaultsSet) {
	        _this._setDefaults();
	      }

	      if (autoPlay) {
	        media.play();
	      }

	      _this._setLoading(false);

	      if (typeof onReady === 'function') {
	        onReady(media);
	      }
	    }, _this._handleOnEnded = function () {
	      var _this$context2 = _this.context,
	          media = _this$context2.media,
	          _mediaSetters = _this$context2._mediaSetters;
	      var _this$props2 = _this.props,
	          loop = _this$props2.loop,
	          onEnded = _this$props2.onEnded;


	      if (loop) {
	        media.seekTo(0);
	        media.play();
	      } else {
	        _mediaSetters.setPlayerState({ isPlaying: false });
	      }

	      if (typeof onEnded === 'function') {
	        onEnded(media);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Player, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._setPlayerProps(this.props);

	      // we need to unset the loading state if no source was loaded
	      if (!this.props.src) {
	        this._setLoading(false);
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      this._setPlayerProps(nextProps);

	      // clean state if the media source has changed
	      if (this.props.src !== nextProps.src) {
	        this.context._mediaSetters.setPlayerState({
	          currentTime: 0,
	          progress: 0,
	          duration: 0,
	          isLoading: true,
	          isPlaying: false
	        });
	      }
	    }
	  }, {
	    key: '_setPlayerProps',
	    value: function _setPlayerProps(props) {
	      this.context._mediaSetters.setPlayerProps(props);
	    }
	  }, {
	    key: '_setDefaults',
	    value: function _setDefaults() {
	      var media = this.context.media;
	      var _props = this.props,
	          defaultCurrentTime = _props.defaultCurrentTime,
	          defaultVolume = _props.defaultVolume,
	          defaultMuted = _props.defaultMuted;


	      if (defaultCurrentTime > -1) {
	        media.seekTo(defaultCurrentTime);
	      }
	      media.setVolume(defaultVolume);
	      media.mute(defaultMuted);

	      this._defaultsSet = true;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          src = _props2.src,
	          _vendor = _props2.vendor,
	          autoPlay = _props2.autoPlay,
	          onReady = _props2.onReady,
	          onEnded = _props2.onEnded,
	          defaultCurrentTime = _props2.defaultCurrentTime,
	          defaultVolume = _props2.defaultVolume,
	          defaultMuted = _props2.defaultMuted,
	          extraProps = _objectWithoutProperties(_props2, ['src', 'vendor', 'autoPlay', 'onReady', 'onEnded', 'defaultCurrentTime', 'defaultVolume', 'defaultMuted']);

	      var _getVendor = (0, _getVendor3.default)(src, _vendor, !!extraProps.useAudioObject),
	          vendor = _getVendor.vendor,
	          component = _getVendor.component;

	      return (0, _react.createElement)(component, _extends({
	        ref: this._setPlayer,
	        src: src,
	        vendor: vendor,
	        autoPlay: autoPlay,
	        isLoading: this._setLoading,
	        onReady: this._handleOnReady,
	        onEnded: this._handleOnEnded,
	        extraProps: extraProps
	      }, this.context._mediaGetters.getPlayerEvents));
	    }
	  }, {
	    key: 'instance',
	    get: function get() {
	      return this._component && this._component.instance;
	    }
	  }]);

	  return Player;
	}(_react.Component);

	Player.propTypes = {
	  vendor: _propTypes2.default.oneOf(['video', 'audio', 'youtube', 'vimeo']),
	  defaultCurrentTime: _propTypes2.default.number,
	  defaultVolume: _propTypes2.default.number,
	  defaultMuted: _propTypes2.default.bool
	};
	Player.defaultProps = {
	  defaultCurrentTime: -1,
	  defaultVolume: 1,
	  defaultMuted: false
	};
	Player.contextTypes = _contextTypes2.default;
	exports.default = Player;
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getVendor;

	var _HTML = __webpack_require__(20);

	var _HTML2 = _interopRequireDefault(_HTML);

	var _AudioObject = __webpack_require__(22);

	var _AudioObject2 = _interopRequireDefault(_AudioObject);

	var _Vimeo = __webpack_require__(23);

	var _Vimeo2 = _interopRequireDefault(_Vimeo);

	var _Youtube = __webpack_require__(25);

	var _Youtube2 = _interopRequireDefault(_Youtube);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getVendor(src, vendor, useAudioObject) {
	  src = src || '';

	  if (vendor === 'youtube' || /youtube.com|youtu.be/.test(src)) {
	    return { vendor: 'youtube', component: _Youtube2.default };
	  } else if (vendor === 'vimeo' || /vimeo.com/.test(src)) {
	    return { vendor: 'vimeo', component: _Vimeo2.default };
	  } else {
	    var isAudio = vendor === 'audio' || /\.(mp3|wav|m4a)($|\?)/i.test(src);
	    return {
	      vendor: isAudio ? 'audio' : 'video',
	      component: isAudio && useAudioObject ? _AudioObject2.default : _HTML2.default
	    };
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(13);

	var _vendorPropTypes = __webpack_require__(21);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTML5 = function (_Component) {
	  _inherits(HTML5, _Component);

	  function HTML5() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, HTML5);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTML5.__proto__ || Object.getPrototypeOf(HTML5)).call.apply(_ref, [this].concat(args))), _this), _this._isLoading = function () {
	      _this.props.isLoading(true);
	    }, _this._isNotLoading = function () {
	      _this.props.isLoading(false);
	    }, _this._handleCanPlay = function () {
	      _this.props.onReady();
	      _this._isNotLoading();
	    }, _this._handlePlay = function () {
	      _this.props.onPlay(true);
	      _this._isNotLoading();
	    }, _this._handlePause = function () {
	      _this.props.onPause(false);
	    }, _this._handleEnded = function () {
	      _this.props.onEnded(false);
	    }, _this._handleError = function (e) {
	      _this.props.onError(e);
	      _this._isNotLoading();
	    }, _this._handleProgress = function (_ref2) {
	      var _ref2$target = _ref2.target,
	          buffered = _ref2$target.buffered,
	          duration = _ref2$target.duration;

	      var progress = 0;

	      if (duration > 0 && buffered.length) {
	        progress = buffered.end(buffered.length - 1) / duration;
	      }

	      _this.props.onProgress(progress);
	    }, _this._handleDuration = function (_ref3) {
	      var duration = _ref3.target.duration;

	      _this.props.onDuration(duration);
	    }, _this._handleTimeUpdate = function (_ref4) {
	      var currentTime = _ref4.target.currentTime;

	      _this.props.onTimeUpdate(currentTime);
	    }, _this._handleVolumeChange = function (_ref5) {
	      var _ref5$target = _ref5.target,
	          volume = _ref5$target.volume,
	          muted = _ref5$target.muted;

	      _this.props.onMute(muted);
	      _this.props.onVolumeChange(volume);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(HTML5, [{
	    key: 'play',
	    value: function play() {
	      return this._player.play();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this._player.pause();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._player.pause(0);
	      this._player.currentTime = 0;
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(currentTime) {
	      if (this._player.readyState > 0) {
	        this._player.currentTime = currentTime;
	      }
	    }
	  }, {
	    key: 'mute',
	    value: function mute(muted) {
	      this._player.muted = muted;
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(volume) {
	      this._player.volume = volume;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          vendor = _props.vendor,
	          src = _props.src,
	          extraProps = _props.extraProps;


	      return (0, _react.createElement)(vendor, _extends({
	        ref: function ref(c) {
	          return _this2._player = c;
	        },
	        src: src
	      }, extraProps, this._playerEvents));
	    }
	  }, {
	    key: 'instance',
	    get: function get() {
	      return this._player;
	    }
	  }, {
	    key: 'node',
	    get: function get() {
	      return (0, _reactDom.findDOMNode)(this._player);
	    }
	  }, {
	    key: '_playerEvents',
	    get: function get() {
	      return {
	        onCanPlay: this._handleCanPlay,
	        onCanPlayThrough: this._isNotLoading,
	        onPlay: this._handlePlay,
	        onPlaying: this._isNotLoading,
	        onPause: this._handlePause,
	        onEnded: this._handleEnded,
	        onWaiting: this._isLoading,
	        onError: this._handleError,
	        onProgress: this._handleProgress,
	        onLoadedMetadata: this._handleDuration,
	        onTimeUpdate: this._handleTimeUpdate,
	        onVolumeChange: this._handleVolumeChange,
	        onSeeking: this._isLoading,
	        onSeeked: this._isNotLoading
	      };
	    }
	  }]);

	  return HTML5;
	}(_react.Component);

	HTML5.propTypes = _vendorPropTypes2.default;
	exports.default = HTML5;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  src: _propTypes2.default.string,
	  onPlaying: _propTypes2.default.func,
	  onProgress: _propTypes2.default.func,
	  onDuration: _propTypes2.default.func,
	  onTimeUpdate: _propTypes2.default.func,
	  onVolumeChange: _propTypes2.default.func
	};
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(13);

	var _vendorPropTypes = __webpack_require__(21);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	var _HTML2 = __webpack_require__(20);

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

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(13);

	var _getVimeoId = __webpack_require__(24);

	var _getVimeoId2 = _interopRequireDefault(_getVimeoId);

	var _vendorPropTypes = __webpack_require__(21);

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

	      switch (data.event) {
	        case 'ready':
	          _this.props.onReady();
	          _this._postMessages();
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
	      } else if (data.method === 'getVolume') {
	        _this.setVolume(data.value);
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
	    key: '_postMessages',
	    value: function _postMessages() {
	      var _this2 = this;

	      ;['loadProgress', 'playProgress', 'play', 'pause', 'finish'].forEach(function (listener) {
	        return _this2._postMessage('addEventListener', listener);
	      });

	      this._postMessage('getDuration');
	      this._postMessage('getVolume');
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

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getVimeoId;
	// Thanks to: http://stackoverflow.com/a/13286930/1461204
	function getVimeoId(url) {
	  var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
	  var match = url.match(regExp);

	  if (match) {
	    return match[3];
	  } else {
	    throw 'Invalid Vimeo ID provided';
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _youtubeApiLoader = __webpack_require__(26);

	var _youtubeApiLoader2 = _interopRequireDefault(_youtubeApiLoader);

	var _getYoutubeId = __webpack_require__(28);

	var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

	var _vendorPropTypes = __webpack_require__(21);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Youtube = function (_Component) {
	  _inherits(Youtube, _Component);

	  function Youtube() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Youtube);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call.apply(_ref, [this].concat(args))), _this), _this._videoId = (0, _getYoutubeId2.default)(_this.props.src), _this._lastVideoId = _this._videoId, _this._isReady = false, _this._isMounted = false, _this._progressId = null, _this._timeUpdateId = null, _this._handleProgress = function () {
	      if (!_this._isMounted) return;

	      var progress = _this._player.getVideoLoadedFraction() || 0;

	      _this.props.onProgress(progress);

	      if (_this._progressId && progress < 1) {
	        _this._progressId = requestAnimationFrame(_this._handleProgress);
	      }
	    }, _this._handleTimeUpdate = function () {
	      if (!_this._isMounted) return;

	      _this.props.onTimeUpdate(_this._player.getCurrentTime() || 0);

	      if (_this._timeUpdateId) {
	        _this._timeUpdateId = requestAnimationFrame(_this._handleTimeUpdate);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Youtube, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._isMounted = true;
	      _youtubeApiLoader2.default.load(this);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.src !== this.props.src) {
	        this._lastVideoId = this._videoId;
	        this._videoId = (0, _getYoutubeId2.default)(nextProps.src);

	        if (this._isReady) {
	          if (nextProps.autoPlay) {
	            this._player.loadVideoById(this._videoId);
	          } else {
	            this._player.cueVideoById(this._videoId);
	          }
	          this.props.onReady();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._isMounted = false;

	      if (this._progressId) {
	        cancelAnimationFrame(this._progressId);
	      }

	      if (this._timeUpdateId) {
	        cancelAnimationFrame(this._timeUpdateId);
	      }

	      if (this._player) {
	        this._player.destroy();
	      }
	    }
	  }, {
	    key: '_createPlayer',
	    value: function _createPlayer() {
	      this._player = new YT.Player(this._node, {
	        videoId: this._videoId,
	        events: this._events(),
	        playerVars: {
	          controls: 0,
	          showinfo: 0,
	          modestbranding: 1
	        }
	      });
	    }
	  }, {
	    key: '_events',
	    value: function _events() {
	      var _this2 = this;

	      return {
	        onReady: function onReady() {
	          // if id changed before the player was ready we need to load the new one
	          if (_this2._videoId !== _this2._lastVideoId) {
	            _this2._player.loadVideoById(_this2._videoId);
	          }
	          _this2._isReady = true;
	          _this2.props.onDuration(_this2._player.getDuration());
	          _this2.props.onReady();
	        },
	        onStateChange: function onStateChange(_ref2) {
	          var data = _ref2.data;
	          var _window$YT$PlayerStat = window.YT.PlayerState,
	              PLAYING = _window$YT$PlayerStat.PLAYING,
	              PAUSED = _window$YT$PlayerStat.PAUSED,
	              ENDED = _window$YT$PlayerStat.ENDED,
	              BUFFERING = _window$YT$PlayerStat.BUFFERING,
	              CUED = _window$YT$PlayerStat.CUED;

	          var isPlaying = data === PLAYING;

	          if (isPlaying) {
	            _this2.props.onPlay(true);
	            _this2.props.onDuration(_this2._player.getDuration());
	            _this2._timeUpdateId = requestAnimationFrame(_this2._handleTimeUpdate);
	          } else {
	            cancelAnimationFrame(_this2._timeUpdateId);
	            _this2._timeUpdateId = null;

	            cancelAnimationFrame(_this2._progressId);
	            _this2._progressId = null;
	          }

	          if (data === PAUSED) {
	            _this2.props.onPause(false);
	          }

	          if (data === ENDED) {
	            _this2.props.onEnded(false);
	          }

	          // start fetching progress when playing or buffering
	          if (isPlaying || data === BUFFERING) {
	            _this2._progressId = requestAnimationFrame(_this2._handleProgress);
	          }

	          // reset duration if a new video was loaded
	          if (data === CUED) {
	            _this2.props.onDuration(0.1);
	          }
	        },
	        onError: function onError(e) {
	          _this2.props.onError(e.data);
	        }
	      };
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this._player.playVideo();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this._player.pauseVideo();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._player.stopVideo();
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(currentTime) {
	      this._player.seekTo(currentTime);
	    }
	  }, {
	    key: 'mute',
	    value: function mute(muted) {
	      if (muted) {
	        this._player.mute();
	      } else {
	        this._player.unMute();
	      }
	      this.props.onMute(muted);
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(volume) {
	      this._player.setVolume(+volume * 100);
	      this.props.onVolumeChange(+volume);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement('div', _extends({ ref: function ref(c) {
	          return _this3._node = c;
	        } }, this.props.extraProps));
	    }
	  }, {
	    key: 'instance',
	    get: function get() {
	      return this._player;
	    }
	  }, {
	    key: 'node',
	    get: function get() {
	      return this._player.getIframe();
	    }
	  }]);

	  return Youtube;
	}(_react.Component);

	Youtube.propTypes = _vendorPropTypes2.default;
	exports.default = Youtube;
	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loadApi = __webpack_require__(27);

	var _loadApi2 = _interopRequireDefault(_loadApi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  _queue: [],
	  _isLoaded: false,

	  load: function load(component) {
	    // if the API is loaded just create the player
	    if (this._isLoaded) {
	      component._createPlayer();
	    } else {
	      this._queue.push(component);

	      // load the Youtube API if this was the first component added
	      if (this._queue.length === 1) {
	        this._loadAPI();
	      }
	    }
	  },

	  _loadAPI: function _loadAPI() {
	    var _this = this;

	    (0, _loadApi2.default)('//youtube.com/player_api');

	    window.onYouTubeIframeAPIReady = function () {
	      _this._isLoaded = true;
	      for (var i = _this._queue.length; i--;) {
	        _this._queue[i]._createPlayer();
	      }
	      _this._queue = [];
	    };
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadAPI;
	// load api asynchronously
	function loadAPI(url, cb) {
	  // create script to be injected
	  var script = document.createElement('script');

	  // load async
	  script.async = true;

	  // set source to vendors api
	  script.src = url;

	  // callback after load
	  script.onload = function () {
	    return typeof cb === 'function' && cb();
	  };

	  // append script to document head
	  document.head.appendChild(script);
	}
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getYoutubeId;
	function getYoutubeId(url) {
	  var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
	  var match = url.match(regExp);

	  if (match && match[1].length === 11) {
	    return match[1];
	  } else {
	    throw 'Invalid Youtube ID provided';
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = withMediaProps;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _contextTypes = __webpack_require__(14);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function withMediaProps(MediaComponent) {
	  var _class, _temp;

	  return _temp = _class = function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(MediaComponent, _extends({}, this.props, { media: this.context.media }));
	      }
	    }]);

	    return _class;
	  }(_react.Component), _class.displayName = 'withMediaProps', _class.contextTypes = _contextTypes2.default, _temp;
	}
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fullscreen = exports.Volume = exports.MuteUnmute = exports.Duration = exports.SeekBar = exports.Progress = exports.CurrentTime = exports.PlayPause = undefined;

	var _PlayPause2 = __webpack_require__(31);

	var _PlayPause3 = _interopRequireDefault(_PlayPause2);

	var _CurrentTime2 = __webpack_require__(32);

	var _CurrentTime3 = _interopRequireDefault(_CurrentTime2);

	var _Progress2 = __webpack_require__(34);

	var _Progress3 = _interopRequireDefault(_Progress2);

	var _SeekBar2 = __webpack_require__(35);

	var _SeekBar3 = _interopRequireDefault(_SeekBar2);

	var _Duration2 = __webpack_require__(36);

	var _Duration3 = _interopRequireDefault(_Duration2);

	var _MuteUnmute2 = __webpack_require__(37);

	var _MuteUnmute3 = _interopRequireDefault(_MuteUnmute2);

	var _Volume2 = __webpack_require__(38);

	var _Volume3 = _interopRequireDefault(_Volume2);

	var _Fullscreen2 = __webpack_require__(39);

	var _Fullscreen3 = _interopRequireDefault(_Fullscreen2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.PlayPause = _PlayPause3.default;
	exports.CurrentTime = _CurrentTime3.default;
	exports.Progress = _Progress3.default;
	exports.SeekBar = _SeekBar3.default;
	exports.Duration = _Duration3.default;
	exports.MuteUnmute = _MuteUnmute3.default;
	exports.Volume = _Volume3.default;
	exports.Fullscreen = _Fullscreen3.default;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _withMediaProps = __webpack_require__(29);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PlayPause = function (_Component) {
	  _inherits(PlayPause, _Component);

	  function PlayPause() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, PlayPause);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlayPause.__proto__ || Object.getPrototypeOf(PlayPause)).call.apply(_ref, [this].concat(args))), _this), _this._handlePlayPause = function () {
	      _this.props.media.playPause();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PlayPause, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref2) {
	      var media = _ref2.media;

	      return this.props.media.isPlaying !== media.isPlaying;
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
	          onClick: this._handlePlayPause
	        },
	        media.isPlaying ? 'Pause' : 'Play'
	      );
	    }
	  }]);

	  return PlayPause;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(PlayPause);
	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _withMediaProps = __webpack_require__(29);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	var _formatTime = __webpack_require__(33);

	var _formatTime2 = _interopRequireDefault(_formatTime);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CurrentTime = function (_Component) {
	  _inherits(CurrentTime, _Component);

	  function CurrentTime() {
	    _classCallCheck(this, CurrentTime);

	    return _possibleConstructorReturn(this, (CurrentTime.__proto__ || Object.getPrototypeOf(CurrentTime)).apply(this, arguments));
	  }

	  _createClass(CurrentTime, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.currentTime !== media.currentTime;
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
	        (0, _formatTime2.default)(media.currentTime)
	      );
	    }
	  }]);

	  return CurrentTime;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(CurrentTime);
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = formatTime;
	function formatTime(current) {
	  var h = Math.floor(current / 3600);
	  var m = Math.floor((current - h * 3600) / 60);
	  var s = Math.floor(current % 60);

	  if (s < 10) {
	    s = '0' + s;
	  }

	  if (h > 0) {
	    return h + ':' + m + ':' + s;
	  } else {
	    return m + ':' + s;
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _withMediaProps = __webpack_require__(29);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Progress = function (_Component) {
	  _inherits(Progress, _Component);

	  function Progress() {
	    _classCallCheck(this, Progress);

	    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
	  }

	  _createClass(Progress, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.progress !== media.progress;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;

	      return _react2.default.createElement('progress', {
	        className: className,
	        style: style,
	        max: 100,
	        value: media.progress * 100
	      });
	    }
	  }]);

	  return Progress;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(Progress);
	module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _withMediaProps = __webpack_require__(29);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SeekBar = function (_Component) {
	  _inherits(SeekBar, _Component);

	  function SeekBar() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SeekBar);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call.apply(_ref, [this].concat(args))), _this), _this._isPlayingOnMouseDown = false, _this._onChangeUsed = false, _this._handleMouseDown = function () {
	      _this._isPlayingOnMouseDown = _this.props.media.isPlaying;
	      _this.props.media.pause();
	    }, _this._handleMouseUp = function (_ref2) {
	      var value = _ref2.target.value;

	      // seek on mouseUp as well because of this bug in <= IE11
	      // https://github.com/facebook/react/issues/554
	      if (!_this._onChangeUsed) {
	        _this.props.media.seekTo(+value);
	      }

	      // only play if media was playing prior to mouseDown
	      if (_this._isPlayingOnMouseDown) {
	        _this.props.media.play();
	      }
	    }, _this._handleChange = function (_ref3) {
	      var value = _ref3.target.value;

	      _this.props.media.seekTo(+value);
	      _this._onChangeUsed = true;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SeekBar, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref4) {
	      var media = _ref4.media;

	      return this.props.media.currentTime !== media.currentTime || this.props.media.duration !== media.duration;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          media = _props.media;
	      var duration = media.duration,
	          currentTime = media.currentTime;

	      return _react2.default.createElement('input', {
	        type: 'range',
	        step: 'any',
	        max: duration.toFixed(4),
	        value: currentTime,
	        onMouseDown: this._handleMouseDown,
	        onMouseUp: this._handleMouseUp,
	        onChange: this._handleChange,
	        className: className,
	        style: _extends({
	          backgroundSize: currentTime * 100 / duration + '% 100%'
	        }, style)
	      });
	    }
	  }]);

	  return SeekBar;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(SeekBar);
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _withMediaProps = __webpack_require__(29);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	var _formatTime = __webpack_require__(33);

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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _withMediaProps = __webpack_require__(29);

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

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _withMediaProps = __webpack_require__(29);

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

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _withMediaProps = __webpack_require__(29);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Fullscreen = function (_Component) {
	  _inherits(Fullscreen, _Component);

	  function Fullscreen() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Fullscreen);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fullscreen.__proto__ || Object.getPrototypeOf(Fullscreen)).call.apply(_ref, [this].concat(args))), _this), _this._handleFullscreen = function () {
	      _this.props.media.fullscreen();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Fullscreen, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref2) {
	      var media = _ref2.media;

	      return this.props.media.isFullscreen !== media.isFullscreen;
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
	          onClick: this._handleFullscreen
	        },
	        media.isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'
	      );
	    }
	  }]);

	  return Fullscreen;
	}(_react.Component);

	exports.default = (0, _withMediaProps2.default)(Fullscreen);
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatTime = exports.keyboardControls = undefined;

	var _keyboardControls2 = __webpack_require__(41);

	var _keyboardControls3 = _interopRequireDefault(_keyboardControls2);

	var _formatTime2 = __webpack_require__(33);

	var _formatTime3 = _interopRequireDefault(_formatTime2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.keyboardControls = _keyboardControls3.default;
	exports.formatTime = _formatTime3.default;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyboardControls;
	var MEDIA_KEYS = [0, 'f', 'j', 'k', 'l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown'];

	function keyboardControls(mediaProps, e) {
	  var duration = mediaProps.duration,
	      playPause = mediaProps.playPause,
	      seekTo = mediaProps.seekTo,
	      skipTime = mediaProps.skipTime,
	      addVolume = mediaProps.addVolume,
	      fullscreen = mediaProps.fullscreen;
	  var key = e.key,
	      shiftKey = e.shiftKey;

	  // prevent default on any media keys

	  MEDIA_KEYS.some(function (_key) {
	    return _key === key && e.preventDefault();
	  });

	  // handle respective key controls
	  switch (key) {
	    // Play/Pause
	    case ' ':
	    case 'k':
	      playPause();
	      break;

	    // Seeking Backwards
	    case 'ArrowLeft':
	      skipTime(shiftKey ? -10 : -5);
	      break;
	    case 'j':
	      skipTime(shiftKey ? -10 : -5);
	      break;
	    case ',':
	      skipTime(-1);
	      break;

	    // Seeking Forwards
	    case 'ArrowRight':
	      skipTime(shiftKey ? 10 : 5);
	      break;
	    case 'l':
	      skipTime(shiftKey ? 10 : 5);
	      break;
	    case '.':
	      skipTime(1);
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
	      addVolume(shiftKey ? 10 : 5);
	      break;
	    case 'ArrowDown':
	      addVolume(shiftKey ? -10 : -5);
	      break;

	    // Fullscreen
	    case 'f':
	      fullscreen();
	      break;
	  }
	}
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;