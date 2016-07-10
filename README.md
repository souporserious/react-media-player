## React Media Player

Components and decorators to help build video & audio players in React. Supports HTML5, Youtube, and Vimeo media types.

## Install

`npm install react-media-player --save`

`bower install react-media-player --save`

<br/>

## `Media` component

#### `src`: PropTypes.string.isRequired

Pass the source into the decorated component. This is the source of the media you want to play. Currently supporting Youtube, Vimeo, and any HTML5 compatible video or audio.

#### `vendor`: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video'])

Pass the vendor into the decorated component. Explicitly choose which component to render for the player. If not set, the library does its best to determine what player to render based on the source.

#### `onPlay`: PropTypes.func

#### `onPause`: PropTypes.func

#### `onError`:PropTypes.func

#### `onDuration`: PropTypes.func

#### `onProgress`: PropTypes.func

#### `onTimeUpdate`: PropTypes.func

#### `onMute`: PropTypes.func

#### `onVolumeChange`: PropTypes.func

```js

import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
const { PlayPause, MuteUnmute, } = controls

class MediaPlayer extends Component {
  render() {
    return (
      <Media src="http://www.youtube.com/embed/h3YVKTxTOgU">
        {Player =>
          <div className="media">
            <div className="media-player">
              {Player}
            </div>
            <div className="media-controls">
              <PlayPause/>
              <MuteUnmute/>
            </div>
          </div>
        }
      </Media>
    )
  }
}
```

<br/>

## `withMediaPlayer` decorator

Convenience component that uses the `Media` component internally to pass down `Player` as a prop.

```js

import React, { Component } from 'react'
import { withMediaPlayer, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls

class MediaPlayer extends Component {
  render() {
    const { Player, media } = this.props

    return (
      <div className="media">
        <div className="media-player">
          { Player }
        </div>
        <nav className="media-controls">
          <PlayPause/>
          <CurrentTime/>
          <Progress/>
          <SeekBar/>
          <Duration/>
          <MuteUnmute/>
          <Volume/>
          <Fullscreen/>
        </nav>
      </div>
    )
  }
}
MediaPlayer = withMediaPlayer(MediaPlayer)

class App extends Component {
  state = {
    currentSource: 'http://www.youtube.com/embed/h3YVKTxTOgU'
  }

  render() {
    return (
      <MediaPlayer src={this.state.currentSource}/>
    )
  }
}
```

<br/>

## `withMediaProps` decorator props exposed under `this.props.media`

Passes down helpful state information and methods to build custom media player controls.

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
        { media.isPlaying ? 'Pause' : 'Play' }
      </button>
    )
  }
}

export default withMediaProps(CustomPlayPause)
```

<br/>

## `withKeyboardControls` decorator props exposed under `this.props.keyboardControls`

Provides a prop with keyboard functionality to control the `Media` component.

```js

import React, { Component } from 'react'
import { withMediaPlayer, withKeyboardControls, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls

class MediaPlayer extends Component {
  render() {
    const { Player, keyboardControls } = this.props
    return (
      <div className="media" onKeyDown={keyboardControls}>
        <div className="media-player">
          { Player }
        </div>
        <nav className="media-controls">
          <PlayPause/>
          <CurrentTime/>
          <Progress/>
          <SeekBar/>
          <Duration/>
          <MuteUnmute/>
          <Volume/>
          <Fullscreen/>
        </nav>
      </div>
    )
  }
}
MediaPlayer = withMediaPlayer(withKeyboardControls(MediaPlayer))
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
