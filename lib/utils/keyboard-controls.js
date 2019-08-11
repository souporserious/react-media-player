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