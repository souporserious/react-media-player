## React Media Player

React media decorators to help build video & audio players.

## Install

`npm install react-media-player --save`

`bower install react-media-player --save`

## Example

```js

import React, { Component, PropTypes } from 'react'
import { withMediaPlayer, withMediaProps, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls

class MediaPlayer extends Component {
  render() {
    const { Player, media } = this.props
    const { playPause } = media

    return (
      <div className="media">
        <div className="media-player" onClick={() => playPause()}>
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
MediaPlayer = withMediaPlayer(withMediaProps(MediaPlayer))

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

## Live Codepen Demo

[Demo](http://codepen.io/souporserious/pen/bpGyoy/)

<br/>

## `withMediaPlayer` decorator props

#### `src`: PropTypes.string.isRequired

Pass the source into the decorated component. This is the source of the media you want to play. Currently supporting Youtube, Vimeo, and any HTML5 compatible video or audio.

#### `vendor`: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video'])

Pass the vendor into the decorated component. Explicitly choose which component to render for the player. If not set, the library does its best to determine what player to render based on the source.

<br/>

## `withMediaProps` decorator props exposed under `this.props.media`

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
