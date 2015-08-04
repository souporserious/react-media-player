import React, {Component} from 'react';
import {MediaContainer, PlayPause, Progress, MuteUnmute, Fullscreen} from '../src/index';

class App extends Component {

  render() {
    return(
      <MediaContainer type="video">
        {props =>
          <div>
            <video
              src="http://media.w3.org/2010/05/sintel/trailer.mp4"
              controls={true}
              preload={true}
            />
            <div>
              <PlayPause {...props} />
              {MediaContainer.formatTime(props.current)}
              <Progress {...props} />
              {MediaContainer.formatTime(props.duration)}
              <MuteUnmute {...props} />
              <Fullscreen {...props} />
            </div>
          </div>
        }
      </MediaContainer>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  React.render(<App />, document.body);
});