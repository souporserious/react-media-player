## CHANGELOG

### 0.7.9

Fix build

### 0.7.8

### Features

Add config prop [#75](https://github.com/souporserious/react-media-player/pull/75)

Export `getVendor` utility [da19f297](https://github.com/souporserious/react-media-player/commit/da19f297)

### 0.7.7

Add support for `isLoading` prop for Youtube vendor
[#59](https://github.com/souporserious/react-media-player/pull/59)

### 0.7.6

Create `AudioContext` in HTML5 vendor on `componentDidMount`
[#53](https://github.com/souporserious/react-media-player/pull/53)

### 0.7.5

Only use `AudioContext` in supported browsers

### 0.7.4

Remove `AudioObject` vendor
[#51](https://github.com/souporserious/react-media-player/pull/51)

Add `connectSource` prop to Player
[#50](https://github.com/souporserious/react-media-player/pull/50)

Fix `formateTime` missing a `0` before minutes if it contains an hour
[#49](https://github.com/souporserious/react-media-player/pull/49)

### 0.7.3

Fix stale `Media` prop callback state

### 0.7.2

Fix volume not being set correctly across vendors

### 0.7.1

Allow React 16 on peerDependencies
[#47](https://github.com/souporserious/react-media-player/pull/47)

### 0.7.0

Break AudioObject into its own vendor
[#44](https://github.com/souporserious/react-media-player/pull/44)

### 0.6.7

Do not set ref when using audio object
[#43](https://github.com/souporserious/react-media-player/pull/43)

Fix for Firefox throwing an out of bounds error
[#42](https://github.com/souporserious/react-media-player/pull/42)

Workaround to cancel outstanding buffering network requests
[#41](https://github.com/souporserious/react-media-player/pull/41)

### 0.6.6

Check if `document` is defined (SSR support)
[#40](https://github.com/souporserious/react-media-player/pull/40)

### 0.6.5

Make sure to return `play` from `HTML5` component
[#38](https://github.com/souporserious/react-media-player/pull/38)

### 0.6.4

Return `play` in `Media` method so we can react to any promises that may have
been returned

### 0.6.3

Update ALL imports of PropTypes
[#37](https://github.com/souporserious/react-media-player/pull/37)

### 0.6.2

Migrate from React.PropTypes to prop-types package
[#35](https://github.com/souporserious/react-media-player/pull/35)

### 0.6.1

Fix `fullscreen` for Youtube videos

Fix for durations over an hour
[#20](https://github.com/souporserious/react-media-player/pull/20)

### 0.6.0

`withMediaPlayer` has been removed in favor of a smart `Player` component that
can be passed as a child in the `Media` component

Each callback now gets the full state of the player passed into it as an object

play, pause, playPause, stop, seekTo, mute, muteUnmute, setVolume, and
fullscreen are all passed into a child function as well as available as public
methods on the `Media` component

Added ability to use an audio object to store audio in memory rather than a DOM
node

Moved keyboard controls into a function see example `MediaPlayer` component for
usage

Player will default to an empty video player instead of erroring when no `src`
is provided.

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

Context not meant to be used publicly now, everything should be ran through
decorator functions

### 0.3.3

Fixed seekbar not updating while scrubbing

Fixed range inputs showing full progress on initial load

Now checks if `onChange` is used in Seekbar and Volume components

Patched Youtube not getting proper duration when loading a new video

Reset duration when loading a new Youtube video

### 0.3.2

Allow better styling of `SeekBar` and `Volume` controls by passing
background-size. Specifically for styling back fill color in Chrome

Workaround for [know bug](https://github.com/facebook/react/issues/554) with
input ranges in <= IE11

### 0.3.1

Fixes bad reference to main file in package.json

### 0.3.0

Added `vendor` prop to allow explicitly choosing which component to render for
the player. Useful for cases where we can't determine what type of file is
trying to be played.

### 0.2.0

Complete rewrite, better API, use of context in place of spreading props.
