import React, { Component } from 'react';
import { MediaContainer, PlayPause, Progress, MuteUnmute, Volume, Fullscreen } from '../src/index';

class App extends Component {

  _handlePlayPause() {
    this.refs['media-player'].playPause();
  }

  _handleMuteUnmute() {
    this.refs['media-player'].muteUnmute();
  }

  render() {
    return(
      <MediaContainer ref="media-player" type="video">
        {props => {

          const { player, playing, duration, current, progress, muted, volume, isFullscreen } = props;
          
          return(
            <div className="media__container">
              <div
                className="media__player"
                onClick={::this._handlePlayPause}
              >
                <video
                  src="http://media.w3.org/2010/05/sintel/trailer.mp4"
                  controls={true}
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
                  player={player}
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