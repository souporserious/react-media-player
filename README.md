## React Media Player

Components and decorators to help build video & audio players in React. Supports
HTML5, Youtube, and Vimeo media types.

## Install

`npm install react-media-player --save`

```html
<script src="https://unpkg.com/react-media-player/dist/react-media-player.js"></script>
(UMD library exposed as `ReactMediaPlayer`)
```

<br/>

## `Media` component

A special wrapper component that collects information from the `Player`
component and passes down the proper props to `withMediaProps` decorator.

## `Player` component

This is another special component that renders your player and communicates with
the `Media` wrapper.

#### `src`: PropTypes.string.isRequired

This is the source of the media you want to play. Currently supporting Youtube,
Vimeo, and any HTML5 compatible video or audio.

#### `vendor`: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video'])

Explicitly choose which internal component to render for the player. If nothing
is set, the library does its best to determine what player to render based on
the source passed in.

#### `autoPlay`: PropTypes.bool

Autoplay media when the component is mounted or `src` changes.

#### `loop`: PropTypes.bool

Loop the current `src` indefinitely.

#### `useAudioObject`: PropTypes.bool

When playing HTML5 `audio`, it will construct audio using the
[`Audio`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement#Constructor)
class instead of rendering an element to the page.

#### `connectSource`: PropTypes.func(source, audioContext)

A chance to connect a series of
[`AudioNode`[s]](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode)
when using the `audio` vendor. Must return a new audio node that will be
connected to `audioContext.destination` internally.

#### `onPlay`: PropTypes.func

Callback when media starts playing.

#### `onPause`: PropTypes.func

Callback when media has been paused.

#### `onError`:PropTypes.func

Callback when an error occurs.

#### `onDuration`: PropTypes.func

Callback when the duration of the media has been calculated.

#### `onProgress`: PropTypes.func

Callback when media starts downloading.

#### `onTimeUpdate`: PropTypes.func

Callback when media time has changed.

#### `onMute`: PropTypes.func

Callback when the player has been muted.

#### `onVolumeChange`: PropTypes.func

Callback when the player volume has changed.

```js
import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute } = controls

class MediaPlayer extends Component {
  render() {
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src="http://www.youtube.com/embed/h3YVKTxTOgU" />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
          </div>
        </div>
      </Media>
    )
  }
}
```

<br/>

## `withMediaProps` decorator props exposed under `this.props.media`

Passes down helpful state information and methods to build custom media player
controls. Please note that children must be wrapped in the `Media` component.

#### `currentTime`: PropTypes.number

#### `progress`: PropTypes.number

#### `duration`: PropTypes.number

#### `volume`: PropTypes.number

#### `isLoading`: PropTypes.bool

#### `isPlaying`: PropTypes.bool

#### `isMuted`: PropTypes.bool

#### `isFullscreen`: PropTypes.bool

#### `play`: PropTypes.func

#### `pause`: PropTypes.func

#### `playPause`: PropTypes.func

#### `stop`: PropTypes.func

#### `seekTo`: PropTypes.func

#### `mute`: PropTypes.func

#### `muteUnmute`: PropTypes.func

#### `setVolume`: PropTypes.func

#### `fullscreen`: PropTypes.func

```js
import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  _handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const { className, style, media } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        {media.isPlaying ? 'Pause' : 'Play'}
      </button>
    )
  }
}

export default withMediaProps(CustomPlayPause)
```

```js
import React from 'react'
import CustomPlayPause from './CustomPlayPause'

function App() {
  return (
    <Media>
      <CustomPlayPause />
      <Player src="https://youtu.be/VOyYwzkQB98" />
    </Media>
  )
}

export default App
```

<br/>

## `utils.keyboardControls`

A special function that will provide keyboard support to the media player.

```js
import React, { Component } from 'react'
import { Media, Player, controls, utils } from 'react-media-player'
const {
  PlayPause,
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  MuteUnmute,
  Volume,
  Fullscreen,
} = controls
const { keyboardControls } = utils

class MediaPlayer extends Component {
  render() {
    const { Player, keyboardControls } = this.props
    return (
      <Media>
        {mediaProps => (
          <div
            className="media"
            onKeyDown={keyboardControls.bind(null, mediaProps)}
          >
            <Player src="against-them-all.mp3" className="media-player" />
            <div className="media-controls">
              <PlayPause />
              <CurrentTime />
              <Progress />
              <SeekBar />
              <Duration />
              <MuteUnmute />
              <Volume />
              <Fullscreen />
            </div>
          </div>
        )}
      </Media>
    )
  }
}
```

<br/>

## `utils.formatTime`

A helper function to format time.

```js
import React, { Component } from 'react'
import { withMediaProps, utils } from 'react-media-player'
const { formatTime } = utils

class CurrentTime extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.currentTime !== media.currentTime
  }

  render() {
    const { className, style, media } = this.props
    return (
      <time className={className} style={style}>
        {formatTime(media.currentTime)}
      </time>
    )
  }
}

export default withMediaProps(CurrentTime)
```

<br/>

## Running Locally

clone repo

`git clone git@github.com:souporserious/react-media-player.git`

move into folder

`cd ~/react-media-player`

install dependencies

`npm install`

run dev mode

`npm run dev`

open your browser and visit: `http://localhost:8080/`
