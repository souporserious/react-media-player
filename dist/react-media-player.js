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
	exports.utils = exports.controls = exports.withKeyboardControls = exports.withMediaProps = exports.withMediaPlayer = exports.Media = undefined;

	var _Media2 = __webpack_require__(1);

	var _Media3 = _interopRequireDefault(_Media2);

	var _withMediaPlayer2 = __webpack_require__(17);

	var _withMediaPlayer3 = _interopRequireDefault(_withMediaPlayer2);

	var _withMediaProps2 = __webpack_require__(18);

	var _withMediaProps3 = _interopRequireDefault(_withMediaProps2);

	var _withKeyboardControls2 = __webpack_require__(19);

	var _withKeyboardControls3 = _interopRequireDefault(_withKeyboardControls2);

	var _exports = __webpack_require__(20);

	var _controls = _interopRequireWildcard(_exports);

	var _exports2 = __webpack_require__(30);

	var _utils = _interopRequireWildcard(_exports2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Media = _Media3.default;
	exports.withMediaPlayer = _withMediaPlayer3.default;
	exports.withMediaProps = _withMediaProps3.default;
	exports.withKeyboardControls = _withKeyboardControls3.default;
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

	var _contextTypes = __webpack_require__(4);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	var _getVendor2 = __webpack_require__(5);

	var _getVendor3 = _interopRequireDefault(_getVendor2);

	var _requestFullscreen = __webpack_require__(14);

	var _requestFullscreen2 = _interopRequireDefault(_requestFullscreen);

	var _exitFullscreen = __webpack_require__(15);

	var _exitFullscreen2 = _interopRequireDefault(_exitFullscreen);

	var _fullscreenChange = __webpack_require__(16);

	var _fullscreenChange2 = _interopRequireDefault(_fullscreenChange);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MEDIA_EVENTS = {
	  onPlay: 'isPlaying',
	  onPause: 'isPlaying',
	  onError: null,
	  onDuration: 'duration',
	  onProgress: 'progress',
	  onTimeUpdate: 'currentTime',
	  onMute: 'isMuted',
	  onVolumeChange: 'volume'
	};
	var MEDIA_EVENTS_KEYS = Object.keys(MEDIA_EVENTS);

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
	    }, _this._lastVolume = 0, _this._handleOnReady = function () {
	      var _this$state = _this.state;
	      var volume = _this$state.volume;
	      var isMuted = _this$state.isMuted;


	      _this._handleSetVolume(volume);
	      _this._handleMute(isMuted);

	      if (_this.props.autoPlay) {
	        _this._player.play();
	      }

	      _this.setState({ isLoading: false });
	    }, _this._handleOnEnded = function () {
	      var _this$props = _this.props;
	      var loop = _this$props.loop;
	      var onEnded = _this$props.onEnded;


	      if (loop) {
	        _this._handleSeekTo(0);
	        _this._player.play();
	      } else {
	        _this.setState({ isPlaying: false });
	      }

	      if (typeof onEnded === 'function') {
	        onEnded();
	      }
	    }, _this._handlePlay = function () {
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
	      if (!_this.state.isFullscreen) {
	        _reactDom2.default.findDOMNode(_this._player)[_requestFullscreen2.default]();
	      } else {
	        document[_exitFullscreen2.default]();
	      }
	    }, _this._handleFullscreenChange = function (_ref) {
	      var target = _ref.target;

	      if (target === _reactDom2.default.findDOMNode(_this._player)) {
	        _this.setState({ isFullscreen: !_this.state.isFullscreen });
	      }
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
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (0, _fullscreenChange2.default)('add', this._handleFullscreenChange);
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
	          isPlaying: false
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _fullscreenChange2.default)('remove', this._handleFullscreenChange);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var src = _props.src;
	      var children = _props.children;
	      var autoPlay = _props.autoPlay;

	      var _getVendor = (0, _getVendor3.default)(src, this.props.vendor);

	      var vendor = _getVendor.vendor;
	      var component = _getVendor.component;


	      return component && children((0, _react.createElement)(component, _extends({
	        ref: function ref(c) {
	          return _this2._player = c;
	        },
	        vendor: vendor,
	        src: src,
	        autoPlay: autoPlay,
	        onReady: this._handleOnReady,
	        onEnded: this._handleOnEnded
	      }, this._mediaEvents)));
	    }
	  }, {
	    key: '_mediaEvents',
	    get: function get() {
	      var _this3 = this;

	      var events = {};

	      MEDIA_EVENTS_KEYS.forEach(function (key) {
	        var stateKey = MEDIA_EVENTS[key];
	        var propCallback = _this3.props[key];

	        events[key] = function (val) {
	          if (stateKey) {
	            _this3.setState(_defineProperty({}, stateKey, val));
	          }
	          if (typeof propCallback === 'function') {
	            propCallback(val);
	          }
	        };
	      });
	      return events;
	    }
	  }]);

	  return Media;
	}(_react.Component);

	Media.propTypes = {
	  vendor: _react.PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
	  src: _react.PropTypes.string.isRequired,
	  children: _react.PropTypes.func.isRequired,
	  autoPlay: _react.PropTypes.bool,
	  loop: _react.PropTypes.bool
	};
	Media.defaultProps = {
	  autoPlay: false,
	  loop: false
	};
	Media.childContextTypes = _contextTypes2.default;
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

	var _react = __webpack_require__(2);

	exports.default = {
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getVendor;

	var _Youtube = __webpack_require__(6);

	var _Youtube2 = _interopRequireDefault(_Youtube);

	var _Vimeo = __webpack_require__(11);

	var _Vimeo2 = _interopRequireDefault(_Vimeo);

	var _HTML = __webpack_require__(13);

	var _HTML2 = _interopRequireDefault(_HTML);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
	var AUDIO_EXTENSIONS = /\.(mp3|wav|m4a)($|\?)/i;

	function getVendor(src, vendor) {
	  if (vendor === 'youtube' || src.indexOf('youtube.com') > -1 || src.indexOf('youtu.be') > -1) {
	    return { vendor: 'youtube', component: _Youtube2.default };
	  } else if (vendor === 'vimeo' || src.indexOf('vimeo.com') > -1) {
	    return { vendor: 'vimeo', component: _Vimeo2.default };
	  } else if (vendor === 'video' || VIDEO_EXTENSIONS.test(src)) {
	    return { vendor: 'video', component: _HTML2.default };
	  } else if (vendor === 'audio' || AUDIO_EXTENSIONS.test(src)) {
	    return { vendor: 'audio', component: _HTML2.default };
	  } else {
	    console.warn('Warning: Player was not rendered. Source could not be determined.');
	    return null;
	  }
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

	var _youtubeApiLoader = __webpack_require__(7);

	var _youtubeApiLoader2 = _interopRequireDefault(_youtubeApiLoader);

	var _getYoutubeId = __webpack_require__(9);

	var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

	var _vendorPropTypes = __webpack_require__(10);

	var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Youtube = function (_Component) {
	  _inherits(Youtube, _Component);

	  function Youtube() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Youtube);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Youtube)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._isMounted = false, _this._progressId = null, _this._timeUpdateId = null, _this._handleProgress = function () {
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
	        var videoId = (0, _getYoutubeId2.default)(nextProps.src);
	        if (nextProps.autoPlay) {
	          this._player.loadVideoById(videoId);
	        } else {
	          this._player.cueVideoById(videoId);
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
	      var _this2 = this;

	      return {
	        onReady: function onReady() {
	          _this2.props.onDuration(_this2._player.getDuration());
	          _this2.props.onReady();
	        },
	        onStateChange: function onStateChange(_ref) {
	          var data = _ref.data;
	          var _window$YT$PlayerStat = window.YT.PlayerState;
	          var PLAYING = _window$YT$PlayerStat.PLAYING;
	          var PAUSED = _window$YT$PlayerStat.PAUSED;
	          var ENDED = _window$YT$PlayerStat.ENDED;
	          var BUFFERING = _window$YT$PlayerStat.BUFFERING;
	          var CUED = _window$YT$PlayerStat.CUED;

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

	      return _react2.default.createElement('div', { ref: function ref(c) {
	          return _this3._node = c;
	        } });
	    }
	  }]);

	  return Youtube;
	}(_react.Component);

	Youtube.propTypes = _vendorPropTypes2.default;
	exports.default = Youtube;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loadApi = __webpack_require__(8);

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

/***/ },
/* 8 */
/***/ function(module, exports) {

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

/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _getVimeoId = __webpack_require__(12);

	var _getVimeoId2 = _interopRequireDefault(_getVimeoId);

	var _vendorPropTypes = __webpack_require__(10);

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
	      var data = undefined;

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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _vendorPropTypes = __webpack_require__(10);

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
	      _this.props.onPlay(true);
	    }, _this._handlePause = function () {
	      _this.props.onPause(false);
	    }, _this._handleEnded = function () {
	      _this.props.onEnded(false);
	    }, _this._handleError = function (e) {
	      _this.props.onError(e);
	    }, _this._handleProgress = function (_ref) {
	      var _ref$target = _ref.target;
	      var buffered = _ref$target.buffered;
	      var duration = _ref$target.duration;

	      var progress = 0;

	      if (buffered.length > 0) {
	        progress = buffered.end(0) / duration;
	      }

	      _this.props.onProgress(isNaN(progress) ? 0 : progress);
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
	        onError: this._handleError,
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ function(module, exports) {

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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = withMediaPlayer;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Media = __webpack_require__(1);

	var _Media2 = _interopRequireDefault(_Media);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function withMediaPlayer(MediaPlayer, vendor) {
	  var _class, _temp;

	  return _temp = _class = function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	    }

	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        var _this2 = this;

	        return _react2.default.createElement(
	          _Media2.default,
	          this.props,
	          function (Player) {
	            return _react2.default.createElement(MediaPlayer, _extends({}, _this2.props, { Player: Player }));
	          }
	        );
	      }
	    }]);

	    return _class;
	  }(_react.Component), _class.displayName = 'withMediaPlayer', _class.propTypes = {
	    vendor: _react.PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video']),
	    src: _react.PropTypes.string.isRequired
	  }, _class.defaultProps = {
	    vendor: vendor
	  }, _temp;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = withMediaProps;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _contextTypes = __webpack_require__(4);

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

	      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	    }

	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(MediaComponent, _extends({}, this.props, { media: _extends({}, this.context) }));
	      }
	    }]);

	    return _class;
	  }(_react.Component), _class.displayName = 'withMediaProps', _class.contextTypes = _contextTypes2.default, _temp;
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = withKeyboardControls;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MEDIA_KEYS = [0, 'f', 'j', 'k', 'l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown'];

	function withKeyboardControls(MediaPlayer) {
	  var _class, _temp2;

	  return (0, _withMediaProps2.default)((_temp2 = _class = function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	      var _Object$getPrototypeO;

	      var _temp, _this, _ret;

	      _classCallCheck(this, _class);

	      for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._handlekeyboardControls = function (e) {
	        var _this$props$media = _this.props.media;
	        var playPause = _this$props$media.playPause;
	        var duration = _this$props$media.duration;
	        var seekTo = _this$props$media.seekTo;
	        var fullscreen = _this$props$media.fullscreen;
	        var key = e.key;
	        var shiftKey = e.shiftKey;

	        // prevent default on any media keys

	        MEDIA_KEYS.some(function (_key) {
	          return _key === key && e.preventDefault();
	        });

	        switch (key) {
	          // Play/Pause
	          case ' ':
	          case 'k':
	            playPause();
	            break;

	          // Seeking Backwards
	          case 'ArrowLeft':
	            _this._skipTime(shiftKey ? -10 : -5);
	            break;
	          case 'j':
	            _this._skipTime(shiftKey ? -10 : -5);
	            break;
	          case ',':
	            _this._skipTime(-1);
	            break;

	          // Seeking Forwards
	          case 'ArrowRight':
	            _this._skipTime(shiftKey ? 10 : 5);
	            break;
	          case 'l':
	            _this._skipTime(shiftKey ? 10 : 5);
	            break;
	          case '.':
	            _this._skipTime(1);
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
	            _this._addVolume(shiftKey ? 10 : 5);
	            break;
	          case 'ArrowDown':
	            _this._addVolume(shiftKey ? -10 : -5);
	            break;

	          // Fullscreen
	          case 'f':
	            fullscreen();
	            break;
	        }
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(_class, [{
	      key: '_skipTime',
	      value: function _skipTime(amount) {
	        var _props$media = this.props.media;
	        var currentTime = _props$media.currentTime;
	        var duration = _props$media.duration;
	        var seekTo = _props$media.seekTo;

	        var newTime = currentTime + amount;

	        if (newTime < 0) {
	          newTime = 0;
	        } else if (newTime > duration) {
	          newTime = duration;
	        }

	        seekTo(newTime);
	      }
	    }, {
	      key: '_addVolume',
	      value: function _addVolume(amount) {
	        var _props$media2 = this.props.media;
	        var setVolume = _props$media2.setVolume;
	        var volume = _props$media2.volume;

	        var newVolume = volume + amount * 0.01;

	        if (newVolume < 0) {
	          newVolume = 0;
	        } else if (newVolume > 1) {
	          newVolume = 1;
	        }

	        setVolume(newVolume);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(MediaPlayer, _extends({}, this.props, {
	          keyboardControls: this._handlekeyboardControls
	        }));
	      }
	    }]);

	    return _class;
	  }(_react.Component), _class.displayName = 'withKeyboardControls', _temp2));
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fullscreen = exports.Volume = exports.MuteUnmute = exports.Duration = exports.SeekBar = exports.Progress = exports.CurrentTime = exports.PlayPause = undefined;

	var _PlayPause2 = __webpack_require__(21);

	var _PlayPause3 = _interopRequireDefault(_PlayPause2);

	var _CurrentTime2 = __webpack_require__(22);

	var _CurrentTime3 = _interopRequireDefault(_CurrentTime2);

	var _Progress2 = __webpack_require__(24);

	var _Progress3 = _interopRequireDefault(_Progress2);

	var _SeekBar2 = __webpack_require__(25);

	var _SeekBar3 = _interopRequireDefault(_SeekBar2);

	var _Duration2 = __webpack_require__(26);

	var _Duration3 = _interopRequireDefault(_Duration2);

	var _MuteUnmute2 = __webpack_require__(27);

	var _MuteUnmute3 = _interopRequireDefault(_MuteUnmute2);

	var _Volume2 = __webpack_require__(28);

	var _Volume3 = _interopRequireDefault(_Volume2);

	var _Fullscreen2 = __webpack_require__(29);

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

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
	      _this.props.media.playPause();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PlayPause, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.isPlaying !== media.isPlaying;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var media = _props.media;

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

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	var _formatTime = __webpack_require__(23);

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
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.currentTime !== media.currentTime;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var media = _props.media;

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

/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

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
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.progress !== media.progress;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var media = _props.media;

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

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

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
	      _this._isPlayingOnMouseDown = _this.props.media.isPlaying;
	      _this.props.media.pause();
	    }, _this._handleMouseUp = function (_ref) {
	      var value = _ref.target.value;

	      // seek on mouseUp as well because of this bug in <= IE11
	      // https://github.com/facebook/react/issues/554
	      if (!_this._onChangeUsed) {
	        _this.props.media.seekTo(+value);
	      }

	      // only play if media was playing prior to mouseDown
	      if (_this._isPlayingOnMouseDown) {
	        _this.props.media.play();
	      }
	    }, _this._handleChange = function (_ref2) {
	      var value = _ref2.target.value;

	      _this.props.media.seekTo(+value);
	      _this._onChangeUsed = true;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SeekBar, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref3) {
	      var media = _ref3.media;

	      return this.props.media.currentTime !== media.currentTime || this.props.media.duration !== media.duration;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var media = _props.media;
	      var duration = media.duration;
	      var currentTime = media.currentTime;

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

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

	var _formatTime = __webpack_require__(23);

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
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.duration !== media.duration;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var media = _props.media;

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

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

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
	      _this.props.media.muteUnmute();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(MuteUnmute, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.isMuted !== media.isMuted;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var media = _props.media;

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

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

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
	        _this.props.media.setVolume((+value).toFixed(4));
	      }
	    }, _this._handleChange = function (_ref2) {
	      var value = _ref2.target.value;

	      _this.props.media.setVolume((+value).toFixed(4));
	      _this._onChangeUsed = true;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Volume, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref3) {
	      var media = _ref3.media;

	      return this.props.media.volume !== media.volume;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var media = _props.media;
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

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _withMediaProps = __webpack_require__(18);

	var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

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
	      _this.props.media.fullscreen();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Fullscreen, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref) {
	      var media = _ref.media;

	      return this.props.media.isFullscreen !== media.isFullscreen;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var media = _props.media;

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

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatTime = undefined;

	var _formatTime2 = __webpack_require__(23);

	var _formatTime3 = _interopRequireDefault(_formatTime2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.formatTime = _formatTime3.default;

/***/ }
/******/ ])
});
;