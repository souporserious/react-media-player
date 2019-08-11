"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadApi = require("./load-api");

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

    (0, _loadApi2.default)("//youtube.com/player_api");

    window.onYouTubeIframeAPIReady = function () {
      _this._isLoaded = true;
      for (var i = _this._queue.length; i--;) {
        _this._queue[i]._createPlayer();
      }
      _this._queue = [];
    };
  }
};
module.exports = exports["default"];