import React, { Component } from 'react';
import { MediaContainer, PlayPause, Progress, MuteUnmute, Volume, Fullscreen } from '../src/index';

import './main.scss';

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