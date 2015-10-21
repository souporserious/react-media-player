(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ReactMediaPlayer"] = factory(require("React"), require("ReactDOM"));
	else
		root["ReactMediaPlayer"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formatTime = __webpack_require__(1);

	var _formatTime2 = _interopRequireDefault(_formatTime);

	var _Media2 = __webpack_require__(2);

	var _Media3 = _interopRequireDefault(_Media2);

	exports.Media = _Media3['default'];

	var _controlsControlsJs = __webpack_require__(13);

	var _controls = _interopRequireWildcard(_controlsControlsJs);

	exports.controls = _controls;
	var utils = {
	  formatTime: _formatTime2['default']
	};
	exports.utils = utils;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = formatTime;

	function formatTime(current) {
	  var minutes = Math.floor(current / 60);
	  var seconds = Math.floor(current % 60);

	  seconds = seconds >= 10 ? seconds : '0' + seconds;
	  minutes = minutes >= 10 ? minutes : minutes;

	  return minutes + ':' + seconds;
	}

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactLibShallowCompare = __webpack_require__(6);

	var _reactLibShallowCompare2 = _interopRequireDefault(_reactLibShallowCompare);

	var _loadApi = __webpack_require__(8);

	var _loadApi2 = _interopRequireDefault(_loadApi);

	var _getVendor = __webpack_require__(3);

	var _getVendor2 = _interopRequireDefault(_getVendor);

	var _getYoutubeId = __webpack_require__(9);

	var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

	var _getVimeoId = __webpack_require__(10);

	var _getVimeoId2 = _interopRequireDefault(_getVimeoId);

	var _Player = __webpack_require__(11);

	var _Player2 = _interopRequireDefault(_Player);

	var apiFlags = {
	  youtube: false,
	  vimeo: false
	};

	var Media = (function (_Component) {
	  _inherits(Media, _Component);

	  function Media() {
	    var _this = this;

	    _classCallCheck(this, Media);

	    _get(Object.getPrototypeOf(Media.prototype), 'constructor', this).apply(this, arguments);

	    this.state = {
	      player: null,
	      vendor: null,
	      playing: false,
	      duration: 0,
	      current: 0,
	      progress: 0,
	      muted: false,
	      volume: 1,
	      fullscreen: false
	    };
	    this._src = null;
	    this._currentProgressID = null;
	    this._currentYTProgressID = null;
	    this._currentTimeID = null;
	    this._lastVolume = 0;

	    this.play = function () {
	      var _state = _this.state;
	      var player = _state.player;
	      var vendor = _state.vendor;

	      switch (vendor) {
	        case 'youtube':
	          player.playVideo();
	          _this._currentTimeID = requestAnimationFrame(_this._getCurrentTime);
	          break;
	        case 'vimeo':
	          player.api('play');
	          break;
	        default:
	          player.play();
	      }
	    };

	    this.pause = function () {
	      var _state2 = _this.state;
	      var player = _state2.player;
	      var vendor = _state2.vendor;

	      switch (vendor) {
	        case 'youtube':
	          player.pauseVideo();
	          cancelAnimationFrame(_this._currentTimeID);
	          break;
	        case 'vimeo':
	          player.api('pause');
	          break;
	        default:
	          player.pause();
	      }
	    };

	    this.playPause = function () {
	      var playing = _this.state.playing;

	      if (!playing) {
	        _this.play();
	      } else {
	        _this.pause();
	      }
	    };

	    this.stop = function () {
	      var player = _this.state.player;

	      player.pause();
	      player.currentTime = 0;
	    };

	    this.setCurrentTime = function (current) {
	      var _state3 = _this.state;
	      var player = _state3.player;
	      var vendor = _state3.vendor;

	      if (vendor === 'youtube') {
	        player.seekTo(current);
	      } else if (vendor === 'vimeo') {
	        player.api('seekTo', current);
	      } else {
	        player.currentTime = current;
	      }

	      _this._setCurrentTime(current);
	    };

	    this.muteUnmute = function () {
	      var _state4 = _this.state;
	      var player = _state4.player;
	      var vendor = _state4.vendor;
	      var muted = _state4.muted;
	      var volume = _state4.volume;

	      if (!muted) {
	        switch (vendor) {
	          case 'youtube':
	            player.mute();
	            break;
	          default:
	            player.muted = true;
	        }

	        // store volume for un-mute
	        _this._lastVolume = volume;

	        // if muted the volume should be set to 0
	        _this.setVolume(0);

	        _this._setMute(true);
	      } else {

	        switch (vendor) {
	          case 'youtube':
	            player.unMute();
	            break;
	          default:
	            player.muted = false;
	        }

	        // if unmuted set to last volume
	        _this.setVolume(_this._lastVolume);

	        _this._setMute(false);
	      }
	    };

	    this.setVolume = function (volume) {
	      var _state5 = _this.state;
	      var player = _state5.player;
	      var vendor = _state5.vendor;

	      var muted = false;

	      if (volume <= 0) {
	        muted = true;
	      }

	      if (vendor === 'youtube') {
	        player.setVolume(volume * 100);
	      } else if (vendor === 'vimeo') {
	        player.api('setVolume', volume);
	      } else {
	        player.volume = volume;
	      }

	      _this._setVolume(volume);
	      _this._setMute(muted);

	      if (muted) {
	        switch (vendor) {
	          case 'youtube':
	            player.mute();
	            break;
	          default:
	            player.muted = true;
	        }
	      } else {
	        switch (vendor) {
	          case 'youtube':
	            player.unMute();
	            break;
	          default:
	            player.muted = false;
	        }
	      }
	    };

	    this.toggleFullscreen = function () {
	      if (!_this.state.fullscreen) {
	        var n = _this.state.playerNode;

	        if (n.requestFullscreen) {
	          n.requestFullscreen();
	        } else if (n.webkitRequestFullscreen) {
	          n.webkitRequestFullscreen();
	        } else if (n.mozRequestFullScreen) {
	          n.mozRequestFullScreen();
	        } else if (n.msRequestFullscreen) {
	          n.msRequestFullscreen();
	        }
	      } else {
	        var d = document;

	        if (d.exitFullscreen) {
	          d.exitFullscreen();
	        } else if (d.webkitExitFullscreen) {
	          d.webkitExitFullscreen();
	        } else if (d.mozCancelFullScreen) {
	          d.mozCancelFullScreen();
	        } else if (d.msExitFullscreen) {
	          d.msExitFullscreen();
	        }
	      }
	    };

	    this.load = function (src) {
	      var player = _this.state.player;

	      var vendor = (0, _getVendor2['default'])(src);

	      if (['youtube', 'vimeo'].indexOf(vendor)) {
	        console.log('fug');
	      }

	      // pause player
	      player.pause();

	      // test support
	      // !!!! need to check canPlayType on init
	      if (player.canPlayType('video/mp4')) {
	        player.setAttribute('src', src);
	      } else if (player.canPlayType('video/webm')) {
	        player.setAttribute('src', setupURL(src, 'webm'));
	      } else if (player.canPlayType('video/ogg')) {
	        player.setAttribute('src', setupURL(src, 'ogv'));
	      }

	      // load new media
	      player.load();

	      // play new media
	      player.play();
	    };

	    this._getCurrentProgress = function () {
	      var player = _this.state.player;

	      var progress = 0;

	      if (player.buffered.length > 0) {
	        progress = player.buffered.end(0) / player.duration;
	      }

	      _this._setProgress(progress);

	      if (progress < 1) {
	        _this._currentProgressID = requestAnimationFrame(_this._getCurrentProgress);
	      }
	    };

	    this._getCurrentYTProgress = function () {
	      var player = _this.state.player;

	      var progress = player.getVideoLoadedFraction();

	      _this._setProgress(progress);

	      if (progress < 1) {
	        _this._currentYTProgressID = requestAnimationFrame(_this._getCurrentYTProgress);
	      }
	    };

	    this._getCurrentTime = function () {
	      var player = _this.state.player;

	      _this._setCurrentTime(player.getCurrentTime());

	      _this._currentTimeID = requestAnimationFrame(_this._getCurrentTime);
	    };
	  }

	  _createClass(Media, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setPlayer(this._setupAPI);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactLibShallowCompare2['default'])(this, nextProps, nextState);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: '_setPlaying',

	    // Props API
	    value: function _setPlaying(playing) {
	      var _this2 = this;

	      if (playing === this.state.playing) return;
	      this.setState({ playing: playing }, function () {
	        _this2.props.onPlaying(playing);
	      });
	    }
	  }, {
	    key: '_setProgress',
	    value: function _setProgress(progress) {
	      var _this3 = this;

	      if (progress === this.state.progress) return;
	      this.setState({ progress: progress }, function () {
	        _this3.props.getProgress(progress);
	      });
	    }
	  }, {
	    key: '_setCurrentTime',
	    value: function _setCurrentTime(current) {
	      var _this4 = this;

	      if (current === this.state.current) return;
	      this.setState({ current: current }, function () {
	        _this4.props.getCurrentTime(current);
	      });
	    }
	  }, {
	    key: '_setDuration',
	    value: function _setDuration(duration) {
	      var _this5 = this;

	      if (duration === this.state.duration) return;
	      this.setState({ duration: duration }, function () {
	        _this5.props.getDuration(duration);
	      });
	    }
	  }, {
	    key: '_setMute',
	    value: function _setMute(muted) {
	      var _this6 = this;

	      if (muted === this.state.muted) return;
	      this.setState({ muted: muted }, function () {
	        _this6.props.onMute(muted);
	      });
	    }
	  }, {
	    key: '_setVolume',
	    value: function _setVolume(volume) {
	      var _this7 = this;

	      if (volume === this.state.volume) return;
	      this.setState({ volume: volume }, function () {
	        _this7.props.onVolumeChange(volume);
	      });
	    }
	  }, {
	    key: '_setFullscreen',
	    value: function _setFullscreen(fullscreen) {
	      var _this8 = this;

	      if (fullscreen === this.state.fullscreen) return;
	      this.setState({ fullscreen: fullscreen }, function () {
	        _this8.props.onFullscreen(fullscreen);
	      });
	    }
	  }, {
	    key: '_handleLoad',

	    // need todo
	    value: function _handleLoad(src) {
	      var _this9 = this;

	      this.setState({ src: src }, function () {
	        _this9.props.onChange(src);
	      });
	    }
	  }, {
	    key: '_setupYoutubeAPI',

	    // Private Methods
	    value: function _setupYoutubeAPI() {
	      var _this10 = this;

	      var vendor = 'youtube';
	      var api = 'http://www.youtube.com/player_api';

	      // load the api if it hasn't been yet
	      if (!apiFlags[vendor]) {
	        (0, _loadApi2['default'])(api);

	        // update flag
	        apiFlags[vendor] = true;
	      }

	      // create player when API is ready
	      window.onYouTubeIframeAPIReady = function () {
	        return _this10._createYoutubePlayer();
	      };
	    }
	  }, {
	    key: '_createYoutubePlayer',

	    // use youtube api to create player
	    value: function _createYoutubePlayer() {
	      var _this11 = this;

	      var videoId = (0, _getYoutubeId2['default'])(this._src);
	      var player = new YT.Player(this.state.player, {
	        videoId: videoId,
	        playerVars: {
	          controls: 0,
	          showinfo: 0,
	          modestbranding: 1
	        }
	      });

	      this.setState({ player: player }, function () {
	        _this11._init();
	      });
	    }
	  }, {
	    key: '_setupVimeoAPI',
	    value: function _setupVimeoAPI() {
	      var vendor = 'vimeo';
	      var api = 'https://f.vimeocdn.com/js/froogaloop2.min.js';

	      // load the api if it hasn't been yet
	      if (!apiFlags[vendor]) {
	        (0, _loadApi2['default'])(api, vendor);

	        // update flag
	        apiFlags[vendor] = true;
	      }

	      // create player when API is ready
	      this._createVimeoPlayer();
	    }
	  }, {
	    key: '_getVimeoPlayer',
	    value: function _getVimeoPlayer(id, cb) {
	      var request = new XMLHttpRequest();

	      request.open('GET', 'https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + id, true);

	      request.onload = function () {
	        if (request.status >= 200 && request.status < 400) {
	          cb(JSON.parse(request.responseText));
	        }
	      };

	      request.send();
	    }
	  }, {
	    key: '_createVimeoPlayer',
	    value: function _createVimeoPlayer() {
	      var _this12 = this;

	      var player = this.state.player;

	      var videoId = (0, _getVimeoId2['default'])(this._src);

	      this._getVimeoPlayer(videoId, function (data) {
	        var parentNode = player.parentNode;

	        // enable javascirpt API on the data html
	        data.html = data.html.replace(/(<iframe *src=")(?!http:\/\/)(.*?)"/, '$1$2?api=1"');

	        // replace video player with our Vimeo iframe
	        player.outerHTML = unescape(data.html);

	        _this12._setDuration(data.duration);

	        _this12.setState({
	          player: $f(parentNode.querySelector('iframe')),
	          playerNode: parentNode.querySelector('iframe')
	        }, function () {
	          _this12._init();
	        });
	      });
	    }
	  }, {
	    key: '_setPlayer',
	    value: function _setPlayer(cb) {
	      var component = _reactDom2['default'].findDOMNode(this);
	      var playerTags = ['iframe', 'audio', 'video'];
	      var player = undefined,
	          vendor = undefined;

	      // loop through and find the correct tag to query for
	      for (var i = playerTags.length; i--;) {
	        // try to query for a tag
	        player = document.querySelector(playerTags[i]);

	        // if we've found a player break from the loop
	        if (player) break;
	      }

	      // get the src passed in
	      this._src = player.getAttribute('src');

	      // determine if what type of vendor we are working with
	      vendor = (0, _getVendor2['default'])(this._src);

	      this.setState({
	        player: player,
	        vendor: vendor
	      }, cb);
	    }
	  }, {
	    key: '_setupAPI',
	    value: function _setupAPI() {
	      var vendor = this.state.vendor;

	      // determine how to handle video
	      switch (vendor) {
	        case 'youtube':
	          this._setupYoutubeAPI();
	          break;
	        case 'vimeo':
	          this._setupVimeoAPI();
	          break;
	        default:
	          this._init();
	      }
	    }
	  }, {
	    key: '_init',
	    value: function _init() {
	      var _this13 = this;

	      var _state6 = this.state;
	      var player = _state6.player;
	      var vendor = _state6.vendor;

	      var playerNode = undefined;

	      switch (vendor) {
	        case 'youtube':
	          playerNode = player.getIframe();
	          break;
	        case 'vimeo':
	          playerNode = this.state.playerNode;
	          break;
	        default:
	          playerNode = player;
	      }

	      this.setState({ playerNode: playerNode }, function () {
	        return _this13._bindEvents();
	      });
	    }
	  }, {
	    key: '_getCurrentVimeoProgress',

	    // get the current progress of Vimeo videos
	    value: function _getCurrentVimeoProgress(data) {
	      this._setProgress(data.percent);
	    }
	  }, {
	    key: '_bindEvents',
	    value: function _bindEvents() {
	      var _this14 = this;

	      var _state7 = this.state;
	      var player = _state7.player;
	      var playerNode = _state7.playerNode;
	      var vendor = _state7.vendor;

	      if (vendor === 'youtube') {
	        player.addEventListener('onStateChange', function (e) {
	          _this14.setState({
	            loading: e.data === 3 ? true : false
	          });
	          _this14._setPlaying(e.data === 1 ? true : false);
	        });

	        player.addEventListener('onReady', function () {
	          _this14._currentYTProgressID = requestAnimationFrame(_this14._getCurrentYTProgress);
	          _this14._setDuration(player.getDuration());
	        });
	      } else if (vendor === 'vimeo') {
	        player.addEvent('ready', function () {
	          player.addEvent('play', function () {
	            return _this14._setPlaying(true);
	          });

	          player.addEvent('pause', function () {
	            return _this14._setPlaying(false);
	          });

	          player.addEvent('finish', function () {
	            return _this14._setPlaying(false);
	          });

	          player.addEvent('loadProgress', _this14._getCurrentVimeoProgress.bind(_this14));

	          player.addEvent('playProgress', _this14._handleVimeoTimeUpdate.bind(_this14));
	        });
	      } else {
	        player.addEventListener('loadedmetadata', this._handleLoadedMetaData.bind(this));

	        player.addEventListener('canplay', function () {
	          // http://stackoverflow.com/questions/9313697/html5-video-using-the-progress-event-with-dynamically-loaded-videos
	          _this14._currentProgressID = requestAnimationFrame(_this14._getCurrentProgress);
	        });

	        player.addEventListener('timeupdate', this._handleTimeUpdate.bind(this));

	        player.addEventListener('play', function () {
	          return _this14._setPlaying(true);
	        });

	        player.addEventListener('pause', function () {
	          return _this14._setPlaying(false);
	        });

	        player.addEventListener('ended', function () {
	          return _this14._setPlaying(false);
	        });
	      }

	      // check this http://codepen.io/ludviglindblom/pen/medXwN
	      ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(function (e) {
	        return playerNode.addEventListener(e, _this14._handleFullscreenChange.bind(_this14));
	      });
	    }
	  }, {
	    key: '_handleLoadedMetaData',

	    // Events
	    value: function _handleLoadedMetaData(e) {
	      var duration = e.target.duration;

	      this._setDuration(duration);
	    }
	  }, {
	    key: '_handleVimeoTimeUpdate',
	    value: function _handleVimeoTimeUpdate(data) {
	      this._setCurrentTime(data.seconds);
	    }
	  }, {
	    key: '_handleTimeUpdate',
	    value: function _handleTimeUpdate() {
	      var player = this.state.player;

	      this._setCurrentTime(player.currentTime);
	      this._setMute(player.muted);
	    }
	  }, {
	    key: '_handleFullscreenChange',
	    value: function _handleFullscreenChange() {
	      var d = document;
	      var f = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
	      this._setFullscreen(!!f);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_Player2['default'], { src: this.props.src });
	    }
	  }], [{
	    key: 'displayName',
	    value: 'Media',
	    enumerable: true
	  }]);

	  return Media;
	})(_react.Component);

	exports['default'] = Media;
	module.exports = exports['default'];

	// need to write this shiz
	//this._unbindEvents();

	// Public API

	// TODO:
	// check if a vendor file passed in, if so send to load properly
	// if API's are loaded already need to switch the player for the proper iframe
	// handle loading
	//player.setAttribute('src', setupURL(src, 'mp4'))

	// get the current progress of HTML5 videos

	// get the current progress of Youtube videos

	// get the current time of Youtube videos

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getVendor;

	function getVendor(src) {
	  if (src.indexOf('youtube') > -1) {
	    return 'youtube';
	  } else if (src.indexOf('vimeo') > -1) {
	    return 'vimeo';
	  } else {
	    return 'html5';
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(7);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// load api asynchronously
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = loadAPI;

	function loadAPI(src) {
	  // create script to be injected
	  var api = document.createElement('script');

	  // load async
	  api.async = true;

	  // set source to youtube's api
	  api.src = src;

	  // append script to document head
	  document.head.appendChild(api);
	}

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getYoutubeID;

	function getYoutubeID(url) {
	  var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
	  var match = url.match(regExp);

	  if (match && match[1].length === 11) {
	    return match[1];
	  } else {
	    throw 'Invalid Youtube ID provided';
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getVimeoID;

	function getVimeoID(url) {
	  var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
	  var match = url.match(regExp);

	  if (match) {
	    return match[5];
	  } else {
	    throw 'Invalid Vimeo ID provided';
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _getMediaTag = __webpack_require__(12);

	var _getMediaTag2 = _interopRequireDefault(_getMediaTag);

	var Player = (function (_Component) {
	  _inherits(Player, _Component);

	  function Player() {
	    _classCallCheck(this, Player);

	    _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Player, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.src !== nextProps.src || this.props.children !== nextProps.children;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var src = _props.src;
	      var children = _props.children;

	      var tag = (0, _getMediaTag2['default'])(src);

	      return _react2['default'].createElement(tag, { src: src }, children);
	    }
	  }]);

	  return Player;
	})(_react.Component);

	exports['default'] = Player;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getMediaTag;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getVendor = __webpack_require__(3);

	var _getVendor2 = _interopRequireDefault(_getVendor);

	// using youtube as a video type for now because it will load
	// properly setting it to an iframe won't load right need to look
	// into this so React stops complaining
	var VIDEO_TYPES = ['mp4', 'webm', 'ogv', 'youtube'];
	var AUDIO_TYPES = ['mp3', 'wav', 'ogg'];
	var VENDOR_TYPES = ['vimeo'];

	// determine what type of HTML tag we need to use

	function getMediaTag(src) {
	  var vendor = (0, _getVendor2['default'])(src);
	  var type = vendor === 'html5' ? src.split('.').pop() : vendor;

	  if (VIDEO_TYPES.indexOf(type) > -1) {
	    return 'video';
	  } else if (AUDIO_TYPES.indexOf(type) > -1) {
	    return 'audio';
	  } else if (VENDOR_TYPES.indexOf(type) > -1) {
	    return 'iframe';
	  } else {
	    throw new Error('Source could not be determined.');
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _PlayPause2 = __webpack_require__(15);

	var _PlayPause3 = _interopRequireDefault(_PlayPause2);

	exports.PlayPause = _PlayPause3['default'];

	var _Progress2 = __webpack_require__(16);

	var _Progress3 = _interopRequireDefault(_Progress2);

	exports.Progress = _Progress3['default'];

	var _SeekBar2 = __webpack_require__(17);

	var _SeekBar3 = _interopRequireDefault(_SeekBar2);

	exports.SeekBar = _SeekBar3['default'];

	var _MuteUnmute2 = __webpack_require__(14);

	var _MuteUnmute3 = _interopRequireDefault(_MuteUnmute2);

	exports.MuteUnmute = _MuteUnmute3['default'];

	var _Volume2 = __webpack_require__(18);

	var _Volume3 = _interopRequireDefault(_Volume2);

	exports.Volume = _Volume3['default'];

	var _Fullscreen2 = __webpack_require__(19);

	var _Fullscreen3 = _interopRequireDefault(_Fullscreen2);

	exports.Fullscreen = _Fullscreen3['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var MuteUnmute = (function (_Component) {
	  _inherits(MuteUnmute, _Component);

	  function MuteUnmute() {
	    _classCallCheck(this, MuteUnmute);

	    _get(Object.getPrototypeOf(MuteUnmute.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(MuteUnmute, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.muted !== nextProps.muted;
	    }
	  }, {
	    key: '_handleMuteUnmute',
	    value: function _handleMuteUnmute() {
	      this.props.onMuteUnmute();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'button',
	        { type: 'button', onClick: this._handleMuteUnmute.bind(this) },
	        this.props.muted ? 'Unmute' : 'Mute'
	      );
	    }
	  }]);

	  return MuteUnmute;
	})(_react.Component);

	exports['default'] = MuteUnmute;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var PlayPause = (function (_Component) {
	  _inherits(PlayPause, _Component);

	  function PlayPause() {
	    _classCallCheck(this, PlayPause);

	    _get(Object.getPrototypeOf(PlayPause.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PlayPause, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.playing !== nextProps.playing;
	    }
	  }, {
	    key: '_handlePlayPause',
	    value: function _handlePlayPause() {
	      this.props.onPlayPause();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'button',
	        { type: 'button', onClick: this._handlePlayPause.bind(this) },
	        this.props.playing ? 'Pause' : 'Play'
	      );
	    }
	  }]);

	  return PlayPause;
	})(_react.Component);

	exports['default'] = PlayPause;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var Progress = (function (_Component) {
	  _inherits(Progress, _Component);

	  function Progress() {
	    _classCallCheck(this, Progress);

	    _get(Object.getPrototypeOf(Progress.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Progress, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.progress !== nextProps.progress;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('progress', {
	        max: 100,
	        value: this.props.progress * 100
	      });
	    }
	  }]);

	  return Progress;
	})(_react.Component);

	exports['default'] = Progress;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var SeekBar = (function (_Component) {
	  _inherits(SeekBar, _Component);

	  function SeekBar() {
	    _classCallCheck(this, SeekBar);

	    _get(Object.getPrototypeOf(SeekBar.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(SeekBar, [{
	    key: "_handleChange",
	    value: function _handleChange(e) {
	      this.props.onCurrentTimeChange(+e.target.value);
	    }
	  }, {
	    key: "_handleMouseDown",
	    value: function _handleMouseDown() {
	      this.props.pause();
	    }
	  }, {
	    key: "_handleMouseUp",
	    value: function _handleMouseUp() {
	      this.props.play();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement("input", {
	        type: "range",
	        step: "any",
	        max: this.props.duration.toFixed(4),
	        value: this.props.current,
	        onChange: this._handleChange.bind(this),
	        onMouseDown: this._handleMouseDown.bind(this),
	        onMouseUp: this._handleMouseUp.bind(this)
	      });
	    }
	  }]);

	  return SeekBar;
	})(_react.Component);

	exports["default"] = SeekBar;
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var Volume = (function (_Component) {
	  _inherits(Volume, _Component);

	  function Volume() {
	    _classCallCheck(this, Volume);

	    _get(Object.getPrototypeOf(Volume.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Volume, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.volume !== nextProps.volume || this.props.muted !== nextProps.muted;
	    }
	  }, {
	    key: "_handleChange",
	    value: function _handleChange(e) {
	      this.props.onVolumeChange((+e.target.value).toFixed(4));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement("input", {
	        type: "range",
	        step: "any",
	        min: 0,
	        max: 1,
	        value: this.props.volume,
	        onChange: this._handleChange.bind(this)
	      });
	    }
	  }]);

	  return Volume;
	})(_react.Component);

	exports["default"] = Volume;
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var Fullscreen = (function (_Component) {
	  _inherits(Fullscreen, _Component);

	  function Fullscreen() {
	    _classCallCheck(this, Fullscreen);

	    _get(Object.getPrototypeOf(Fullscreen.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Fullscreen, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.fullscreen !== nextProps.fullscreen;
	    }
	  }, {
	    key: '_handleFullscreen',
	    value: function _handleFullscreen() {
	      this.props.onFullscreen();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'button',
	        { type: 'button', onClick: this._handleFullscreen.bind(this) },
	        this.props.fullscreen ? 'Exit Fullscreen' : 'Fullscreen'
	      );
	    }
	  }]);

	  return Fullscreen;
	})(_react.Component);

	exports['default'] = Fullscreen;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;