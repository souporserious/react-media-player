import React, { Component, PropTypes, createElement } from 'react'
import ReactDOM from 'react-dom'
import MediaPlayer from './MediaPlayer'
import VideoPlayer from './VideoPlayer'
import AudioPlayer from './AudioPlayer'
import CirclePlayer from './CirclePlayer'

import { Media, Player, controls } from '../src/react-media-player'
const { PlayPause } = controls

import './main.scss'

const mod = (num, max) => ((num % max) + max) % max
const playlist = [
  { src: 'http://www.youtube.com/embed/h3YVKTxTOgU', label: 'Brand New (Youtube)' },
  { src: 'https://youtu.be/VOyYwzkQB98', label: 'Neck Deep (Youtube)' },
  { src: 'https://player.vimeo.com/video/156147818', label: 'Pump (Vimeo)' },
  { src: 'https://vimeo.com/channels/staffpicks/150734165', label: 'Lesley (Vimeo)' },
  { src: 'http://a1083.phobos.apple.com/us/r1000/014/Music/v4/4e/44/b7/4e44b7dc-aaa2-c63b-fb38-88e1635b5b29/mzaf_1844128138535731917.plus.aac.p.m4a', label: 'iTunes Preview' },
  { src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', label: 'Big Buck Bunny' },
  { src: 'https://vid4u.org/ninja/5/dev/assets/madmax-intro.mp4', label: 'Mad Max Intro' },
  { src: 'http://demosthenes.info/assets/videos/mountain.mp4', label: 'Mountain' },
  { src: 'http://www.w3schools.com/html/movie.mp4', label: 'Bear' },
  { src: 'http://jelmerdemaat.nl/online-demos/conexus/video/small.mp4', label: 'Lego Robot' },
  { src: 'http://shapeshed.com/examples/HTML5-video-element/video/320x240.m4v', label: 'iPod Help' },
  { src: 'http://html5demos.com/assets/dizzy.mp4', label: 'Dizzy Kitty' },
  { src: 'http://www.noiseaddicts.com/samples_1w72b820/3890.mp3', label: 'Noise Addicts' }
]

class Playlist extends Component {
  _handleTrackClick(track) {
    this.props.onTrackClick(track)
  }

  render() {
    const { tracks, currentTrack } = this.props
    return (
      <aside className="media-playlist">
        <header className="media-playlist-header">
          <h3 className="media-playlist-title">Playlist</h3>
        </header>
        <ul className="media-playlist-tracks">
          {tracks.map(track =>
            <li
              key={track.label}
              className={`media-playlist-track ${track === currentTrack ? 'is-active' : ''}`}
              onClick={this._handleTrackClick.bind(this, track)}
            >
              {track.label}
            </li>
          )}
        </ul>
      </aside>
    )
  }
}

class App extends Component {
  state = {
    currentTrack: { src: null, label: 'No media loaded' },
    showMediaPlayer: true,
    repeatTrack: false,
    autoPlay: false,
    src: 'audio/split-track.m4a'
  }

  _handleTrackClick = (track) => {
    this.setState({ currentTrack: track })
  }

  _navigatePlaylist = (direction) => {
    const newIndex = mod(playlist.indexOf(this.state.currentTrack) + direction, playlist.length)
    this.setState({ currentTrack: playlist[newIndex] })
  }

  render() {
    const { showMediaPlayer, currentTrack, repeatTrack, autoPlay, src } = this.state
    return (
      <div>
        <button onClick={() => this.setState({ src: 'audio/split-track.m4a' })}>audio/split-track.m4a</button>
        <button onClick={() => this.setState({ src: '/audio/armstrong.mp3' })}>audio/armstrong.mp3</button>
        <AudioPlayer src={src}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
