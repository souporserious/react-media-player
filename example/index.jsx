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
    currSrc: playlist[3].src
  }

  render() {
    return (
      <div>
        <Media src={this.state.currSrc}>
          {Player =>
            <div>
              {Player}
              <nav className="media__controls">
                <PlayPause/>
                <Progress/>
                <SeekBar/>
                <MuteUnmute/>
                <Volume/>
              </nav>
            </div>
          }
        </Media>
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
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
