import React, { Component, createElement } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MediaPlayer from './MediaPlayer'
import VideoPlayer from './VideoPlayer'
import AudioPlayer from './AudioPlayer'
import CirclePlayer from './CirclePlayer'

import { Media, Player, controls } from '../src/react-media-player'
import playlist from './playlist'

import './main.scss'

const { PlayPause } = controls
const mod = (num, max) => ((num % max) + max) % max

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
          {tracks.map(track => (
            <li
              key={track.label}
              className={`media-playlist-track ${
                track === currentTrack ? 'is-active' : ''
              }`}
              onClick={this._handleTrackClick.bind(this, track)}
            >
              {track.label}
            </li>
          ))}
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
    autoPlay: true,
  }

  _handleTrackClick = track => {
    this.setState({ currentTrack: track })
  }

  _navigatePlaylist = direction => {
    const newIndex = mod(
      playlist.indexOf(this.state.currentTrack) + direction,
      playlist.length
    )
    this.setState({ currentTrack: playlist[newIndex] })
  }

  render() {
    const { showMediaPlayer, currentTrack, repeatTrack, autoPlay } = this.state
    return (
      <div>
        <button
          onClick={() => this.setState({ showMediaPlayer: !showMediaPlayer })}
        >
          Toggle Media Player
        </button>
        {showMediaPlayer && (
          <div className="media-player-wrapper">
            <MediaPlayer
              ref={c => (this._mediaPlayer = c)}
              src={currentTrack.src}
              autoPlay={autoPlay}
              loop={repeatTrack}
              currentTrack={currentTrack.label}
              repeatTrack={repeatTrack}
              onPrevTrack={() => this._navigatePlaylist(-1)}
              onNextTrack={() => this._navigatePlaylist(1)}
              onRepeatTrack={() => {
                this.setState({ repeatTrack: !repeatTrack })
              }}
              onPlay={() => !autoPlay && this.setState({ autoPlay: true })}
              onPause={() => this.setState({ autoPlay: false })}
              onEnded={() => !repeatTrack && this._navigatePlaylist(1)}
            />
            <Playlist
              tracks={playlist}
              currentTrack={currentTrack}
              onTrackClick={this._handleTrackClick}
            />
          </div>
        )}
        <VideoPlayer src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
        <AudioPlayer src="/audio/armstrong.mp3" />
        <CirclePlayer src="https://p.scdn.co/mp3-preview/f83458d6611ae9589420f71c447ac9d2e3047cb8" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
