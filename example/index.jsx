import React, { Component } from 'react';
import { MediaContainer, PlayPause, Progress, SeekBar, MuteUnmute, Volume, Fullscreen } from '../src/index';

import './main.scss';

// Demo Video Links
// http://demosthenes.info/assets/videos/mountain.mp4
// http://www.w3schools.com/html/movie.mp4
// https://pdlvimeocdn-a.akamaihd.net/47099/675/231401431.mp4?token2=1439167198_ea59cfaccb25a955c76114630f028b2d&aksessionid=955e6d7a9e35065288e1fad71df1b989fdad13dc1439152798
// http://simplypx.com/images/Prometheus.mp4
// http://jelmerdemaat.nl/online-demos/conexus/video/small.mp4
// http://shapeshed.com/examples/HTML5-video-element/video/320x240.m4v
// http://html5demos.com/assets/dizzy.mp4
// http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4

class App extends Component {

  _handlePlayPause() {
    this.refs['media-player'].playPause();
  }

  _handleMuteUnmute() {
    this.refs['media-player'].muteUnmute();
  }

  _handleFullscreen() {
    this.refs['media-player'].toggleFullscreen();
  }

  render() {
    return(
      <MediaContainer ref="media-player" type="video">
        {props => {

          const { player, playing, duration, current, progress, muted, volume, fullscreen } = props;
          
          return(
            <div className="media__container">
              <div
                className="media__player"
                onClick={::this._handlePlayPause}
              >
                <video
                  src="http://media.w3.org/2010/05/sintel/trailer.mp4"
                  controls={false}
                  preload={true}
                />
              </div>
              <div className="media__controls">
                <PlayPause
                  playing={playing}
                  onPlayPause={::this._handlePlayPause}
                />
                {MediaContainer.formatTime(current)}
                <Progress
                  progress={progress}
                />
                <SeekBar
                  player={player}
                  duration={duration}
                  current={current}
                />
                {MediaContainer.formatTime(duration)}
                <MuteUnmute
                  muted={muted}
                  onMuteUnmute={::this._handleMuteUnmute}
                />
                <Volume
                  player={player}
                  volume={volume}
                />
                <Fullscreen
                  fullscreen={fullscreen}
                  onFullscreen={::this._handleFullscreen}
                />
              </div>
            </div>
          );
        }}
      </MediaContainer>
    );
  }
}

React.render(<App />, document.body);