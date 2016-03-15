(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ReactMediaPlayer"] = factory(require("React"), require("ReactDOM"));
	else
		root["ReactMediaPlayer"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.controls = exports.Media = undefined;

	var _Media2 = __webpack_require__(1);

	var _Media3 = _interopRequireDefault(_Media2);

	var _exports = __webpack_require__(15);

	var _controls = _interopRequireWildcard(_exports);

	var _exports2 = __webpack_require__(25);

	var _utils = _interopRequireWildcard(_exports2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Media = _Media3.default;
	exports.controls = _controls;
	exports.utils = _utils;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _getVendor2 = __webpack_require__(4);

	var _getVendor3 = _interopRequireDefault(_getVendor2);

	var _requestFullscreen = __webpack_require__(13);

	var _requestFullscreen2 = _interopRequireDefault(_requestFullscreen);

	var _exitFullscreen = __webpack_require__(14);

	var _exitFullscreen2 = _interopRequireDefault(_exitFullscreen);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Media = function (_Component) {
	  _inherits(Media, _Component);

	  function Media() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Media);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Media)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      currentTime: 0,
	      progress: 0,
	      duration: 0.1,
	      volume: 1,
	      isLoading: true,
	      isPlaying: false,
	      isMuted: false,
	      isFullscreen: false
	    }, _this._lastVolume = 0, _this._handlePlay = function () {
	      _this._player.play();
	    }, _this._handlePause = function () {
	      _this._player.pause();
	    }, _this._handlePlayPause = function () {
	      if (!_this.state.isPlaying) {
	        _this._player.play();
	      } else {
	        _this._player.pause();
	      }
	    }, _this._handleStop = function () {
	      _this._player.stop();
	    }, _this._handleSeekTo = function (currentTime) {
	      _this._player.seekTo(currentTime);
	      _this.setState({ currentTime: currentTime });
	    }, _this._handleMute = function (isMuted) {
	      if (isMuted) {
	        _this._lastVolume = _this.state.volume;
	        _this._player.setVolume(0);
	      } else {
	        var volume = _this._lastVolume > 0 ? _this._lastVolume : 0.1;
	        _this._player.setVolume(volume);
	      }
	      _this._player.mute(isMuted);
	    }, _this._handleMuteUnmute = function () {
	      _this._handleMute(!_this.state.isMuted);
	    }, _this._handleSetVolume = function (volume) {
	      var isMuted = false;

	      if (volume <= 0) {
	        isMuted = true;
	      }

	      if (isMuted !== _this.state.isMuted) {
	        _this._handleMute(isMuted);
	      } else {
	        _this._lastVolume = volume;
	      }

	      _this._player.setVolume(volume);
	    }, _this._handleFullscreen = function () {
	      var isFullscreen = _this.state.isFullscreen;


	      if (!isFullscreen) {
	        _reactDom2.default.findDOMNode(_this._player)[_requestFullscreen2.default]();
	      } else {
	        document[_exitFullscreen2.default]();
	      }

	      _this.setState({ isFullscreen: !isFullscreen });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Media, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return _extends({}, this.state, {
	        play: this._handlePlay,
	        pause: this._handlePause,
	        playPause: this._handlePlayPause,
	        stop: this._handleStop,
	        seekTo: this._handleSeekTo,
	        mute: this._handleMute,
	        muteUnmute: this._handleMuteUnmute,
	        setVolume: this._handleSetVolume,
	        fullscreen: this._handleFullscreen
	      });
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      // clean state if the video has changed
	      if (this.props.src !== nextProps.src) {
	        this.setState({
	          currentTime: 0,
	          progress: 0,
	          duration: 0,
	          isPlaying: false,

	          // TODO: figure out how to keep these settings when changing vendors
	          // getting error because element isn't available when trying to set them
	          // this occurs on componentDidUpdate
	          volume: 1,
	          isMuted: false,
	          isFullscreen: false
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var src = _props.src;
	      var children = _props.children;

	      var _getVendor = (0, _getVendor3.default)(src, this.props.vendor);

	      var vendor = _getVendor.vendor;
	      var component = _getVendor.component;


	      return component && children((0, _react.createElement)(component, {
	        ref: function ref(c) {
	          return _this2._player = c;
	        },
	        vendor: vendor,
	        src: src,
	        onReady: function onReady() {
	          return _this2.setState({ isLoading: false });
	        },
	        onPlaying: function onPlaying(isPlaying) {
	          return _this2.setState({ isPlaying: isPlaying });
	        },
	        onDuration: function onDuration(duration) {
	          return _this2.setState({ duration: duration });
	        },
	        onProgress: function onProgress(progress) {
	          return _this2.setState({ progress: progress });
	        },
	        onTimeUpdate: function onTimeUpdate(currentTime) {
	          return _this2.setState({ currentTime: currentTime });
	        },
	        onMute: function onMute(isMuted) {
	          return _this2.setState({ isMuted: isMuted });
	        },
	        onVolumeChange: function onVolumeChange(volume) {
	          return _this2.setState({ volume: volume });
	        }
	      }));
	    }
	  }]);

	  return Media;
	}(_react.Component);

	Media.propTypes = {
	  vendor: _react.PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
	  src: _react.PropTypes.string.isRequired,
	  children: _react.PropTypes.func.isRequired
	};
	Media.childContextTypes = {
	  // State
	  currentTime: _react.PropTypes.number,
	  progress: _react.PropTypes.number,
	  duration: _react.PropTypes.number,
	  volume: _react.PropTypes.number,
	  isLoading: _react.PropTypes.bool,
	  isPlaying: _react.PropTypes.bool,
	  isMuted: _react.PropTypes.bool,
	  isFullscreen: _react.PropTypes.bool,

	  // Methods
	  play: _react.PropTypes.func,
	  pause: _react.PropTypes.func,
	  playPause: _react.PropTypes.func,
	  stop: _react.PropTypes.func,
	  seekTo: _react.PropTypes.func,
	  mute: _react.PropTypes.func,
	  muteUnmute: _react.PropTypes.func,
	  setVolume: _react.PropTypes.func,
	  fullscreen: _react.PropTypes.func
	};
	exports.default = Media;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getVendor;

	var _getFileExtension = __webpack_require__(5);

	var _getFileExtension2 = _interopRequireDefault(_getFileExtension);

	var _Youtube = __webpack_require__(6);

	var _Youtube2 = _interopRequireDefault(_Youtube);

	var _Vimeo = __webpack_require__(10);

	var _Vimeo2 = _interopRequireDefault(_Vimeo);

	var _HTML = __webpack_require__(12);

	var _HTML2 = _interopRequireDefault(_HTML);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VIDEO_EXTENSIONS = ['mp4', 'm4v', 'webm', 'ogv'];
	var AUDIO_EXTENSIONS = ['mp3', 'm4a', 'wav', 'ogg'];

	function getVendor(src, vendor) {
	  var ext = (0, _getFileExtension2.default)(src);

	  if (vendor === 'youtube' || src.indexOf('youtube.com') > -1 || src.indexOf('youtu.be') > -1) {
	    return { vendor: 'youtube', component: _Youtube2.default };
	  } else if (vendor === 'vimeo' || src.indexOf('vimeo.com') > -1) {
	    return { vendor: 'vimeo', component: _Vimeo2.default };
	  } else if (vendor === 'video' || VIDEO_EXTENSIONS.indexOf(ext) > -1) {
	    return { vendor: 'video', component: _HTML2.default };
	  } else if (vendor === 'audio' || AUDIO_EXTENSIONS.indexOf(ext) > -1) {
	    return { vendor: 'audio', component: _HTML2.default };
	  } else {
	    console.warn('Warning: Player was not rendered. Source could not be determined.');
	    return null;
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getFileExtension;
	// thanks to: http://stackoverflow.com/a/6997591/1461204
	function getFileExtension(url) {
	  var file = url.substr(url.lastIndexOf('/') + 1).split('?')[0];
	  var extPos = file.lastIndexOf('.');
	  return extPos > -1 && file.substr(extPos + 1);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _loadApi = __webpack_require__(7);

	var _loadApi2 = _interopRequireDefault(_loadApi);

	var _getYoutubeId = __webpack_require__(8);

	var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

	var _vendorPropTypes = __webpack_require__(9);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isAPILoaded = false;

	var Youtube = function (_Component) {
	  _inherits(Youtube, _Component);

	  function Youtube() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Youtube);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Youtube)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._progressId = null, _this._timeUpdateId = null, _this._handleProgress = function () {
	      var progress = _this._player.getVideoLoadedFraction() || 0;

	      _this.props.onProgress(progress);

	      if (_this._progressId && progress < 1) {
	        _this._progressId = requestAnimationFrame(_this._handleProgress);
	      }
	    }, _this._handleTimeUpdate = function () {
	      _this.props.onTimeUpdate(_this._player.getCurrentTime() || 0);

	      if (_this._timeUpdateId) {
	        _this._timeUpdateId = requestAnimationFrame(_this._handleTimeUpdate);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Youtube, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (!isAPILoaded) {
	        (0, _loadApi2.default)('http://www.youtube.com/player_api');

	        window.onYouTubeIframeAPIReady = function () {
	          _this2._createPlayer();
	          isAPILoaded = true;
	        };
	      } else {
	        this._createPlayer();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.src !== this.props.src) {
	        var videoId = (0, _getYoutubeId2.default)(nextProps.src);
	        this._player.cueVideoById(videoId);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
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
	      var videoId = (0, _getYoutubeId2.default)(this.props.src);

	      this._player = new YT.Player(this._node, {
	        videoId: videoId,
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
	      var _this3 = this;

	      return {
	        onReady: function onReady() {
	          _this3.props.onDuration(_this3._player.getDuration());
	          _this3.props.onReady();
	        },
	        onStateChange: function onStateChange(_ref) {
	          var data = _ref.data;

	          var isPlaying = data === 1;

	          if (isPlaying) {
	            _this3.props.onDuration(_this3._player.getDuration());
	            _this3._timeUpdateId = requestAnimationFrame(_this3._handleTimeUpdate);
	          } else {
	            cancelAnimationFrame(_this3._timeUpdateId);
	            _this3._timeUpdateId = null;

	            cancelAnimationFrame(_this3._progressId);
	            _this3._progressId = null;
	          }

	          // start fetching progress when playing or buffering
	          if (isPlaying || data === 3) {
	            _this3._progressId = requestAnimationFrame(_this3._handleProgress);
	          }

	          // reset duration if a new video was loaded
	          if (data === 5) {
	            _this3.props.onDuration(0.1);
	          }

	          _this3.props.onPlaying(isPlaying);
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
	      var _this4 = this;

	      return _react2.default.createElement('div', { ref: function ref(c) {
	          return _this4._node = c;
	        } });
	    }
	  }]);

	  return Youtube;
	}(_react.Component);

	Youtube.propTypes = _vendorPropTypes2.default;
	exports.default = Youtube;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadAPI;
	// load api asynchronously
	function loadAPI(url, cb) {
	  // create script to be injected
	  var api = document.createElement('script');

	  // load async
	  api.async = true;

	  // set source to vendors api
	  api.src = url;

	  // append script to document head
	  document.head.appendChild(api);

	  // callback after loaded
	  if (typeof cb === 'function') {
	    cb();
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	exports.default = {
	  src: _react.PropTypes.string,
	  onPlaying: _react.PropTypes.func,
	  onProgress: _react.PropTypes.func,
	  onDuration: _react.PropTypes.func,
	  onTimeUpdate: _react.PropTypes.func,
	  onVolumeChange: _react.PropTypes.func
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _loadApi = __webpack_require__(7);

	var _loadApi2 = _interopRequireDefault(_loadApi);

	var _getVimeoId = __webpack_require__(11);

	var _getVimeoId2 = _interopRequireDefault(_getVimeoId);

	var _vendorPropTypes = __webpack_require__(9);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Vimeo = function (_Component) {
	  _inherits(Vimeo, _Component);

	  function Vimeo() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Vimeo);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Vimeo)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._vimeoId = (0, _getVimeoId2.default)(_this.props.src), _this._origin = '*', _this._onMessage = function (e) {
	      // allow messages from the Vimeo player only
	      if (!/^https?:\/\/player.vimeo.com/.test(e.origin)) {
	        return false;
	      }

	      if (_this._origin === '*') {
	        _this._origin = e.origin;
	      }

	      var data = JSON.parse(e.data);

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
	          _this.props.onPlaying(true);
	          break;
	        case 'pause':
	        case 'finish':
	          _this.props.onPlaying(false);
	          break;
	      }

	      if (data.method === 'getDuration') {
	        _this.props.onDuration(data.value);
	      }

	      if (data.method === 'getVolume') {
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
	        this.stop();
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

	      ['loadProgress', 'playProgress', 'play', 'pause', 'finish'].forEach(function (listener) {
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

	      return _react2.default.createElement('iframe', {
	        ref: function ref(c) {
	          return _this3._iframe = c;
	        },
	        src: 'https://player.vimeo.com/video/' + this._vimeoId + '?api=1'
	      });
	    }
	  }]);

	  return Vimeo;
	}(_react.Component);

	Vimeo.propTypes = _vendorPropTypes2.default;
	exports.default = Vimeo;

/***/ },
/* 11 */
/***/ function(module, exports) {

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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _vendorPropTypes = __webpack_require__(9);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTML5 = function (_Component) {
	  _inherits(HTML5, _Component);

	  function HTML5() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, HTML5);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HTML5)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._handleCanPlay = function () {
	      _this.props.onReady();
	    }, _this._handlePlay = function () {
	      _this.props.onPlaying(true);
	    }, _this._handlePause = function () {
	      _this.props.onPlaying(false);
	    }, _this._handleEnded = function () {
	      _this.props.onPlaying(false);
	    }, _this._handleProgress = function (_ref) {
	      var _ref$target = _ref.target;
	      var buffered = _ref$target.buffered;
	      var duration = _ref$target.duration;

	      var progress = 0;

	      if (buffered.length > 0) {
	        progress = buffered.end(0) / duration;
	      }

	      _this.props.onProgress(progress);
	    }, _this._handleDuration = function (_ref2) {
	      var duration = _ref2.target.duration;

	      _this.props.onDuration(duration);
	    }, _this._handleTimeUpdate = function (_ref3) {
	      var currentTime = _ref3.target.currentTime;

	      _this.props.onTimeUpdate(currentTime);
	    }, _this._handleVolumeChange = function (_ref4) {
	      var _ref4$target = _ref4.target;
	      var volume = _ref4$target.volume;
	      var muted = _ref4$target.muted;

	      _this.props.onMute(muted);
	      _this.props.onVolumeChange(volume);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(HTML5, [{
	    key: 'play',
	    value: function play() {
	      this._player.play();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this._player.pause();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._player.pause();
	      this._player.currentTime = 0;
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(currentTime) {
	      this._player.currentTime = currentTime;
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

	      return _react2.default.createElement(this.props.vendor, {
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

	  return HTML5;
	}(_react.Component);

	HTML5.propTypes = _vendorPropTypes2.default;
	exports.default = HTML5;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var names = ['requestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen', 'webkitRequestFullscreen'];
	  return names.reduce(function (prev, curr) {
	    return document.documentElement[curr] ? curr : prev;
	  });
	}();

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var names = ['exitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen', 'webkitExitFullscreen'];
	  return names.reduce(function (prev, curr) {
	    return document[curr] ? curr : prev;
	  });
	}();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fullscreen = exports.Volume = exports.MuteUnmute = exports.Duration = exports.SeekBar = exports.Progress = exports.CurrentTime = exports.PlayPause = undefined;

	var _PlayPause2 = __webpack_require__(16);

	var _PlayPause3 = _interopRequireDefault(_PlayPause2);

	var _CurrentTime2 = __webpack_require__(17);

	var _CurrentTime3 = _interopRequireDefault(_CurrentTime2);

	var _Progress2 = __webpack_require__(19);

	var _Progress3 = _interopRequireDefault(_Progress2);

	var _SeekBar2 = __webpack_require__(20);

	var _SeekBar3 = _interopRequireDefault(_SeekBar2);

	var _Duration2 = __webpack_require__(21);

	var _Duration3 = _interopRequireDefault(_Duration2);

	var _MuteUnmute2 = __webpack_require__(22);

	var _MuteUnmute3 = _interopRequireDefault(_MuteUnmute2);

	var _Volume2 = __webpack_require__(23);

	var _Volume3 = _interopRequireDefault(_Volume2);

	var _Fullscreen2 = __webpack_require__(24);

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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PlayPause = function (_Component) {
	  _inherits(PlayPause, _Component);

	  function PlayPause() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, PlayPause);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PlayPause)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._handlePlayPause = function () {
	      _this.context.playPause();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PlayPause, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'button',
	        {
	          id: this.props.id,
	          className: this.props.className,
	          type: 'button',
	          onClick: this._handlePlayPause
	        },
	        this.context.isPlaying ? 'Pause' : 'Play'
	      );
	    }
	  }]);

	  return PlayPause;
	}(_react.Component);

	PlayPause.contextTypes = {
	  isPlaying: _react.PropTypes.bool,
	  playPause: _react.PropTypes.func
	};
	exports.default = PlayPause;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formatTime = __webpack_require__(18);

	var _formatTime2 = _interopRequireDefault(_formatTime);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CurrentTime = function (_Component) {
	  _inherits(CurrentTime, _Component);

	  function CurrentTime() {
	    _classCallCheck(this, CurrentTime);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentTime).apply(this, arguments));
	  }

	  _createClass(CurrentTime, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'time',
	        {
	          id: this.props.id,
	          className: this.props.className
	        },
	        (0, _formatTime2.default)(this.context.currentTime)
	      );
	    }
	  }]);

	  return CurrentTime;
	}(_react.Component);

	CurrentTime.contextTypes = {
	  currentTime: _react.PropTypes.number
	};
	exports.default = CurrentTime;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = formatTime;
	function formatTime(current) {
	  var h = Math.floor(current / 3600);
	  var m = Math.floor(current / 60);
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

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Progress = function (_Component) {
	  _inherits(Progress, _Component);

	  function Progress() {
	    _classCallCheck(this, Progress);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Progress).apply(this, arguments));
	  }

	  _createClass(Progress, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('progress', {
	        id: this.props.id,
	        className: this.props.className,
	        max: 100,
	        value: this.context.progress * 100
	      });
	    }
	  }]);

	  return Progress;
	}(_react.Component);

	Progress.contextTypes = {
	  progress: _react.PropTypes.number
	};
	exports.default = Progress;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

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

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formatTime = __webpack_require__(18);

	var _formatTime2 = _interopRequireDefault(_formatTime);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Duration = function (_Component) {
	  _inherits(Duration, _Component);

	  function Duration() {
	    _classCallCheck(this, Duration);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Duration).apply(this, arguments));
	  }

	  _createClass(Duration, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'time',
	        {
	          id: this.props.id,
	          className: this.props.className
	        },
	        (0, _formatTime2.default)(this.context.duration)
	      );
	    }
	  }]);

	  return Duration;
	}(_react.Component);

	Duration.contextTypes = {
	  duration: _react.PropTypes.number
	};
	exports.default = Duration;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MuteUnmute = function (_Component) {
	  _inherits(MuteUnmute, _Component);

	  function MuteUnmute() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, MuteUnmute);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(MuteUnmute)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._handleMuteUnmute = function () {
	      _this.context.muteUnmute();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(MuteUnmute, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'button',
	        {
	          id: this.props.id,
	          className: this.props.className,
	          type: 'button',
	          onClick: this._handleMuteUnmute
	        },
	        this.context.isMuted ? 'Unmute' : 'Mute'
	      );
	    }
	  }]);

	  return MuteUnmute;
	}(_react.Component);

	MuteUnmute.contextTypes = {
	  muteUnmute: _react.PropTypes.func,
	  isMuted: _react.PropTypes.bool
	};
	exports.default = MuteUnmute;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

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

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Volume)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._onChangeUsed = false, _this._handleMouseUp = function (_ref) {
	      var value = _ref.target.value;

	      // set volume on mouseUp as well because of this bug in <= IE11
	      // https://github.com/facebook/react/issues/554
	      if (!_this._onChangeUsed) {
	        _this.context.setVolume((+value).toFixed(4));
	      }
	    }, _this._handleChange = function (_ref2) {
	      var value = _ref2.target.value;

	      _this.context.setVolume((+value).toFixed(4));
	      _this._onChangeUsed = true;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Volume, [{
	    key: "render",
	    value: function render() {
	      var volume = this.context.volume;

	      return _react2.default.createElement("input", {
	        id: this.props.id,
	        className: this.props.className,
	        type: "range",
	        step: "any",
	        min: 0,
	        max: 1,
	        value: volume,
	        onMouseUp: this._handleMouseUp,
	        onChange: this._handleChange,
	        style: { backgroundSize: volume * 100 / 1 + '% 100%' }
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

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Fullscreen = function (_Component) {
	  _inherits(Fullscreen, _Component);

	  function Fullscreen() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Fullscreen);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Fullscreen)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._handleFullscreen = function () {
	      _this.context.fullscreen();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Fullscreen, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'button',
	        {
	          id: this.props.id,
	          className: this.props.className,
	          type: 'button',
	          onClick: this._handleFullscreen
	        },
	        this.context.isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'
	      );
	    }
	  }]);

	  return Fullscreen;
	}(_react.Component);

	Fullscreen.contextTypes = {
	  fullscreen: _react.PropTypes.func,
	  isFullscreen: _react.PropTypes.bool
	};
	exports.default = Fullscreen;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatTime = undefined;

	var _formatTime2 = __webpack_require__(18);

	var _formatTime3 = _interopRequireDefault(_formatTime2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.formatTime = _formatTime3.default;

/***/ }
/******/ ])
});
;