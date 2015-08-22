import React, { Component } from 'react';
import { MediaContainer, PlayPause, Progress, SeekBar, MuteUnmute, Volume, Fullscreen, utils } from '../src/index';

import './main.scss';

const { formatTime } = utils;

const mediaLinks = [
  {src: 'http://media.w3.org/2010/05/sintel/trailer.mp4', label: 'Sintel Trailer'},
  {src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', label: 'Big Buck Bunny'},
  {src: 'https://vid4u.org/ninja/5/dev/assets/madmax-intro.mp4', label: 'Mad Max Intro'},
  {src: 'http://demosthenes.info/assets/videos/mountain.mp4', label: 'Mountain'},
  {src: 'http://www.w3schools.com/html/movie.mp4', label: 'Bear'},
  {src: 'http://simplypx.com/images/Prometheus.mp4', label: 'Prometheus'},
  {src: 'http://jelmerdemaat.nl/online-demos/conexus/video/small.mp4', label: 'Lego Robot'},
  {src: 'http://shapeshed.com/examples/HTML5-video-element/video/320x240.m4v', label: 'iPod Help'},
  {src: 'http://html5demos.com/assets/dizzy.mp4', label: 'Dizzy Kitty'},
];

class App extends Component {

  _handlePlayPause() {
    this.props.playPause();
  }

  _handleMuteUnmute() {
    this.props.muteUnmute();
  }

  _handleVolumeChange(volume) {
    this.props.setVolume(volume);
  }

  _handleFullscreen() {
    this.props.toggleFullscreen();
  }

  _loadMedia(src) {
    this.props.load(src);
  }

  render() {

    const { player, vendor, playing, duration, current, progress, muted, volume, fullscreen } = this.props;

    return(
      <div className="media__container">
        <div
          className="media__player"
          onClick={::this._handlePlayPause}
        >
          <video
            src="http://www.youtube.com/embed/h3YVKTxTOgU"
            controls={false}
            preload={true}
          />
        </div>
        <div className="media__controls">
          <PlayPause
            playing={playing}
            onPlayPause={::this._handlePlayPause}
          />
          {formatTime(current)}
          <Progress
            progress={progress}
          />
          <SeekBar
            player={player}
            duration={duration}
            current={current}
          />
          {formatTime(duration)}
          <MuteUnmute
            muted={muted}
            onMuteUnmute={::this._handleMuteUnmute}
          />
          <Volume
            volume={volume}
            onVolumeChange={::this._handleVolumeChange}
          />
          <Fullscreen
            fullscreen={fullscreen}
            onFullscreen={::this._handleFullscreen}
          />
        </div>

        <aside className="playlist">
          <h3 className="playlist__title">Playlist</h3>
          <ul className="playlist__links">
            {mediaLinks.map(link =>
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
    );
  }
}

App = MediaContainer(App);

React.render(<App />, document.body);