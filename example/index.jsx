import React, { Component, PropTypes, createElement } from 'react'
import ReactDOM from 'react-dom'
import { media, withMedia, keyboardControls, controls } from '../src/react-media-player'
import CircleMediaPlayer from './CircleMediaPlayer'
import FullPlayer from './FullPlayer'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import Fullscreen from './Fullscreen'

import './main.scss'

const { CurrentTime, Progress, SeekBar, Duration, Volume } = controls

const playlist = [
  {src: 'http://www.youtube.com/embed/h3YVKTxTOgU', label: 'Brand New (Youtube)'},
  {src: 'https://youtu.be/VOyYwzkQB98', label: 'Neck Deep (Youtube)'},
  {src: 'https://player.vimeo.com/video/156147818', label: 'Pump (Vimeo)'},
  {src: 'https://vimeo.com/channels/staffpicks/150734165', label: 'Lesley (Vimeo)'},
  {src: 'http://a1083.phobos.apple.com/us/r1000/014/Music/v4/4e/44/b7/4e44b7dc-aaa2-c63b-fb38-88e1635b5b29/mzaf_1844128138535731917.plus.aac.p.m4a', label: 'iTunes Preview'},
  {src: 'http://media.w3.org/2010/05/sintel/trailer.mp4', label: 'Sintel Trailer'},
  {src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', label: 'Big Buck Bunny'},
  {src: 'https://vid4u.org/ninja/5/dev/assets/madmax-intro.mp4', label: 'Mad Max Intro'},
  {src: 'http://demosthenes.info/assets/videos/mountain.mp4', label: 'Mountain'},
  {src: 'http://www.w3schools.com/html/movie.mp4', label: 'Bear'},
  {src: 'http://jelmerdemaat.nl/online-demos/conexus/video/small.mp4', label: 'Lego Robot'},
  {src: 'http://shapeshed.com/examples/HTML5-video-element/video/320x240.m4v', label: 'iPod Help'},
  {src: 'http://html5demos.com/assets/dizzy.mp4', label: 'Dizzy Kitty'},
  {src: 'http://www.noiseaddicts.com/samples_1w72b820/3890.mp3', label: 'Noise Addicts'}
]

class MediaPlayer extends Component {
  render() {
    const { Player, keyboardControls, isFullscreen, playPause } = this.props
    let classes = 'media-player'

    if (isFullscreen) {
      classes += ' media-player--fullscreen'
    }

    return (
      <div className={classes} onKeyDown={keyboardControls} tabIndex="0">
        <div onClick={() => playPause()}>
          {Player}
        </div>
        <nav className="media-controls">
          <PlayPause className="media-control media-control--play-pause" />
          <CurrentTime className="media-control media-control--current-time" />
          <div className="media-control-group media-control-group--seek">
            <Progress className="media-control media-control--progress" />
            <SeekBar className="media-control media-control--seekbar" />
          </div>
          <Duration className="media-control media-control--duration" />
          <MuteUnmute className="media-control media-control--mute-unmute" />
          <Volume className="media-control media-control--volume" />
          <Fullscreen className="media-control media-control--fullscreen" />
        </nav>
      </div>
    )
  }
}
MediaPlayer = media(withMedia(keyboardControls(MediaPlayer)))

class App extends Component {
  state = {
    currSrc: playlist[0].src,
    showMediaPlayer: true
  }

  render() {
    const { showMediaPlayer } = this.state
    return (
      <div>
        <button
          onClick={() => this.setState({showMediaPlayer: !showMediaPlayer})}
        >
          Toggle Media Player
        </button>
        { showMediaPlayer &&
          <MediaPlayer src={this.state.currSrc}/>
        }
        <aside className="playlist">
          <h3 className="playlist__title">Playlist</h3>
          <ul className="playlist__links">
            {playlist.map(link =>
              <li
                key={link.label}
                className="playlist__link"
                onClick={() => this.setState({currSrc: link.src})}
              >
                {link.label}
              </li>
            )}
          </ul>
        </aside>
        <CircleMediaPlayer src="https://p.scdn.co/mp3-preview/f83458d6611ae9589420f71c447ac9d2e3047cb8" />
        <FullPlayer src={"https://p.scdn.co/mp3-preview/f83458d6611ae9589420f71c447ac9d2e3047cb8"} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
