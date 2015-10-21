import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Media, controls, utils } from '../src/react-media-player'

import './main.scss'

const { PlayPause, Progress, SeekBar, MuteUnmute, Volume, Fullscreen } = controls
const { formatTime } = utils

const playlist = [
  {src: 'http://www.youtube.com/embed/h3YVKTxTOgU', label: 'Brand New (Youtube)'},
  {src: 'https://vimeo.com/76979871', label: 'Vimeo'},
  {src: 'http://a1083.phobos.apple.com/us/r1000/014/Music/v4/4e/44/b7/4e44b7dc-aaa2-c63b-fb38-88e1635b5b29/mzaf_1844128138535731917.plus.aac.p.m4a', label: 'iTunes Preview'},
  {src: 'http://media.w3.org/2010/05/sintel/trailer.mp4', label: 'Sintel Trailer'},
  {src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', label: 'Big Buck Bunny'},
  {src: 'https://vid4u.org/ninja/5/dev/assets/madmax-intro.mp4', label: 'Mad Max Intro'},
  {src: 'http://demosthenes.info/assets/videos/mountain.mp4', label: 'Mountain'},
  {src: 'http://www.w3schools.com/html/movie.mp4', label: 'Bear'},
  {src: 'http://simplypx.com/images/Prometheus.mp4', label: 'Prometheus'},
  {src: 'http://jelmerdemaat.nl/online-demos/conexus/video/small.mp4', label: 'Lego Robot'},
  {src: 'http://shapeshed.com/examples/HTML5-video-element/video/320x240.m4v', label: 'iPod Help'},
  {src: 'http://html5demos.com/assets/dizzy.mp4', label: 'Dizzy Kitty'},
  {src: 'http://www.noiseaddicts.com/samples_1w72b820/3890.mp3', label: 'Noise Addicts'}
]

class App extends Component {
  state = {
    playing: false,
    progress: 0,
    current: 0,
    duration: 0,
    muted: false,
    volume: 1,
    fullscreen: false
  }

  componentDidMount() {
    this._player = this.refs['player']
  }

  _handlePlay = () => {
    this._player.play()
  }

  _handlePause = () => {
    this._player.pause()
  }

  _handlePlayPause = () => {
    this._player.playPause()
  }

  _handleCurrentTimeChange = (time) => {
    this._player.setCurrentTime(time)
  }

  _handleMuteUnmute = () => {
    this._player.muteUnmute()
  }

  _handleVolumeChange = (volume) => {
    this._player.setVolume(volume)
  }

  _handleFullscreen = () => {
    this._player.toggleFullscreen()
  }

  _loadMedia = (src) => {
    this.refs['player'].load(src)
  }

  render() {
    const { playing, progress, current, duration, muted, volume, fullscreen } = this.state

    return(
      <div>
        <div
          onClick={this._handlePlayPause}
        >
          <Media
            ref="player"
            src={playlist[1].src}
            onPlaying={playing => this.setState({playing})}
            getProgress={progress => this.setState({progress})}
            getCurrentTime={current => this.setState({current})}
            getDuration={duration => this.setState({duration})}
            onMute={muted => this.setState({muted})}
            onVolumeChange={volume => this.setState({volume})}
            onFullscreen={fullscreen => this.setState({fullscreen})}
            onChange={src => {
              // should fire when new media loaded
            }}
          />
        </div>
        <div className="media__controls">
          <PlayPause
            playing={playing}
            onPlayPause={this._handlePlayPause}
          />
          {formatTime(current)}
          <Progress
            progress={progress}
          />
          <SeekBar
            duration={duration}
            current={current}
            play={this._handlePlay}
            pause={this._handlePause}
            onCurrentTimeChange={this._handleCurrentTimeChange}
          />
          {formatTime(duration)}
          <MuteUnmute
            muted={muted}
            onMuteUnmute={this._handleMuteUnmute}
          />
          <Volume
            volume={volume}
            onVolumeChange={this._handleVolumeChange}
          />
          <Fullscreen
            fullscreen={fullscreen}
            onFullscreen={this._handleFullscreen}
          />
        </div>
        <aside className="playlist">
          <h3 className="playlist__title">Playlist</h3>
          <ul className="playlist__links">
            {playlist.map(link =>
              <li
                key={link.label}
                className="playlist__link"
                onClick={this._loadMedia.bind(this, link.src)}
              >
                {link.label}
              </li>
            )}
          </ul>
        </aside>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))