import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Media, Player, withMediaProps, withKeyboardControls, controls } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import Fullscreen from './Fullscreen'

const { CurrentTime, Progress, SeekBar, Duration, Volume } = controls

export default function VideoPlayer({ src }) {
  return (
    <Media>
      {({ isFullscreen, playPause }) =>
        <div
          className={'media-player' + (isFullscreen ? ' media-player--fullscreen' : '')}
          tabIndex="0"
        >
          <Player
            src={src}
            onClick={() => playPause()}
          />
          <div className="media-controls">
            <PlayPause className="media-control media-control--play-pause" />
            <CurrentTime className="media-control media-control--current-time" />
            <div className="media-control-group media-control-group--seek">
              <Progress className="media-control media-control--progress" />
              <SeekBar className="media-control media-control--seekbar" />
            </div>
            <Duration className="media-control media-control--duration" />
            <MuteUnmute className="media-control media-control--mute-unmute" />
            <Volume className="media-control media-control--volume" />
            <Fullscreen className="media-control media-control--fullscreen" />
          </div>
        </div>
      }
    </Media>
  )
}
