## React Media Player 0.3.1

React media container component to help build video & audio players.

## Install

`npm install react-media-player --save`

`bower install react-media-player --save`

## Example Usage

```js

import { Media, controls, utils } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls

class MediaPlayer extends React.Component {
  static contextTypes = {
    playPause: PropTypes.func
  }

  render() {
    const { Player } = this.props
    const { isLoading, playPause, currentTime, duration } = this.context

    return (
      <div>
        <div onClick={() => playPause()}>
          {Player}
        </div>
        <nav className="media__controls">
          <PlayPause />
          <CurrentTime />
          <Progress />
          <SeekBar />
          <Duration />
          <MuteUnmute />
          <Volume />
          <Fullscreen />
        </nav>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    currSrc: 'http://www.youtube.com/embed/h3YVKTxTOgU'
  }

  render() {
    return (
      <Media src={this.state.currSrc}>
        {Player => <MediaPlayer Player={Player} />}
      </Media>
    )
  }
}
```

## Live Codepen Demo

[Demo](http://codepen.io/souporserious/pen/bpGyoy/)

## Props

#### `src`: PropTypes.string.isRequired

The source of the media you want to play. Currently supporting Youtube, Vimeo, and any HTML5 compatible video or audio.

#### `vendor`: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video'])

Explicitly choose which component to render for the player. If not set, the library does its best to determine what player to render based on the source.

#### `children`: PropTypes.func.isRequired

Passes in the `Player` to be rendered.

## Contexts

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

## Warning

This library makes heavy use of [context](https://facebook.github.io/react/docs/context.html), please be advised that with new releases of React the way context is handled in this library is subject to change.

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
