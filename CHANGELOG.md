## CHANGELOG
### 0.6.3
Update ALL imports of PropTypes [#37](https://github.com/souporserious/react-media-player/pull/37)

### 0.6.2
Migrate from React.PropTypes to prop-types package [#35](https://github.com/souporserious/react-media-player/pull/35)

### 0.6.1
Fix `fullscreen` for Youtube videos

Fix for durations over an hour [#20](https://github.com/souporserious/react-media-player/pull/20)

### 0.6.0
`withMediaPlayer` has been removed in favor of a smart `Player` component that can be passed as a child in the `Media` component

Each callback now gets the full state of the player passed into it as an object

play, pause, playPause, stop, seekTo, mute, muteUnmute, setVolume, and fullscreen are all passed into a child function as well as available as public methods on the `Media` component

Added ability to use an audio object to store audio in memory rather than a DOM node

Moved keyboard controls into a function see example `MediaPlayer` component for usage

Player will default to an empty video player instead of erroring when no `src` is provided.

Made `isLoading` state better

Fix Safari crashing when using Audio Object

### 0.5.1
Pass `vendor` to `Media` child function

Makes sure Youtube player is loaded before switching sources

### 0.5.0
Media component now accepts `autoPlay`, `loop`, and event callback props

Removed `get-file-extension` in favor of using a regex and test

Fixed API loader to not call callback until script is loaded

### 0.4.0
Renamed `KeyboardControls` -> `withKeyboardControls`

`withKeyboardControls` exposed on `ReactMediaPlayer` rather than utils

Context not meant to be used publicly now, everything should be ran through decorator functions

### 0.3.3
Fixed seekbar not updating while scrubbing

Fixed range inputs showing full progress on initial load

Now checks if `onChange` is used in Seekbar and Volume components

Patched Youtube not getting proper duration when loading a new video

Reset duration when loading a new Youtube video

### 0.3.2
Allow better styling of `SeekBar` and `Volume` controls by passing background-size. Specifically for styling back fill color in Chrome

Workaround for [know bug](https://github.com/facebook/react/issues/554) with input ranges in <= IE11

### 0.3.1
Fixes bad reference to main file in package.json

### 0.3.0
Added `vendor` prop to allow explicitly choosing which component to render for the player. Useful for cases where we can't determine what type of file is trying to be played.

### 0.2.0
Complete rewrite, better API, use of context in place of spreading props.
