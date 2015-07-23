import React, {Component} from 'react';
import {MediaContainer, PlayPause, Progress, MuteUnmute, Fullscreen} from '../src/index';

class App extends Component {

  render() {
    return(
      <MediaContainer type="video">
        {props =>
          <div>
            <video
              src="http://sample-videos.com/video/mp4/720/big_buck_bunny_720p_20mb.mp4"
              controls={true}
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

React.render(<App />, document.body);