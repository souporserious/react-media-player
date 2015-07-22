import React, {Component} from 'react';
import {MediaContainer, PlayPause} from '../src/index';

class App extends Component {

  render() {
    return(
      <MediaContainer type="video">
        {props =>
          <div>
            <video
              src="http://sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
              controls={true}
              ref="player"
            />
            <PlayPause {...props} />
            {props.current}/{props.duration}
          </div>
        }
      </MediaContainer>
    );
  }
}

React.render(<App />, document.body);