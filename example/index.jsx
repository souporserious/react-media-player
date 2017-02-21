import React, { Component, PropTypes, createElement } from 'react'
import ReactDOM from 'react-dom'
// import MediaPlayer from './MediaPlayer'
// import VideoPlayer from './VideoPlayer'
// import AudioPlayer from './AudioPlayer'
// import CirclePlayer from './CirclePlayer'
//
import { Media, Player, controls } from '../src/react-media-player'
// const { PlayPause } = controls
//
// import './main.scss'
//
// const mod = (num, max) => ((num % max) + max) % max
// const playlist = [
//   { src: 'http://www.youtube.com/embed/h3YVKTxTOgU', label: 'Brand New (Youtube)' },
//   { src: 'https://youtu.be/VOyYwzkQB98', label: 'Neck Deep (Youtube)' },
//   { src: 'https://player.vimeo.com/video/156147818', label: 'Pump (Vimeo)' },
//   { src: 'https://vimeo.com/channels/staffpicks/150734165', label: 'Lesley (Vimeo)' },
//   { src: 'http://a1083.phobos.apple.com/us/r1000/014/Music/v4/4e/44/b7/4e44b7dc-aaa2-c63b-fb38-88e1635b5b29/mzaf_1844128138535731917.plus.aac.p.m4a', label: 'iTunes Preview' },
//   { src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', label: 'Big Buck Bunny' },
//   { src: 'https://vid4u.org/ninja/5/dev/assets/madmax-intro.mp4', label: 'Mad Max Intro' },
//   { src: 'http://demosthenes.info/assets/videos/mountain.mp4', label: 'Mountain' },
//   { src: 'http://www.w3schools.com/html/movie.mp4', label: 'Bear' },
//   { src: 'http://jelmerdemaat.nl/online-demos/conexus/video/small.mp4', label: 'Lego Robot' },
//   { src: 'http://shapeshed.com/examples/HTML5-video-element/video/320x240.m4v', label: 'iPod Help' },
//   { src: 'http://html5demos.com/assets/dizzy.mp4', label: 'Dizzy Kitty' },
//   { src: 'http://www.noiseaddicts.com/samples_1w72b820/3890.mp3', label: 'Noise Addicts' }
// ]
//
// class Playlist extends Component {
//   _handleTrackClick(track) {
//     this.props.onTrackClick(track)
//   }
//
//   render() {
//     const { tracks, currentTrack } = this.props
//     return (
//       <aside className="media-playlist">
//         <header className="media-playlist-header">
//           <h3 className="media-playlist-title">Playlist</h3>
//         </header>
//         <ul className="media-playlist-tracks">
//           {tracks.map(track =>
//             <li
//               key={track.label}
//               className={`media-playlist-track ${track === currentTrack ? 'is-active' : ''}`}
//               onClick={this._handleTrackClick.bind(this, track)}
//             >
//               {track.label}
//             </li>
//           )}
//         </ul>
//       </aside>
//     )
//   }
// }
//
// class App extends Component {
//   state = {
//     currentTrack: { src: null, label: 'No media loaded' },
//     showMediaPlayer: true,
//     repeatTrack: false,
//     autoPlay: true
//   }
//
//   _handleTrackClick = (track) => {
//     this.setState({ currentTrack: track })
//   }
//
//   _navigatePlaylist = (direction) => {
//     const newIndex = mod(playlist.indexOf(this.state.currentTrack) + direction, playlist.length)
//     this.setState({ currentTrack: playlist[newIndex] })
//   }
//
//   render() {
//     const { showMediaPlayer, currentTrack, repeatTrack, autoPlay } = this.state
//     return (
//       <div>
//         <button
//           onClick={() => this.setState({ showMediaPlayer: !showMediaPlayer })}
//         >
//           Toggle Media Player
//         </button>
//         { showMediaPlayer &&
//           <div className="media-player-wrapper">
//             <MediaPlayer
//               ref={c => this._mediaPlayer = c}
//               src={currentTrack.src}
//               autoPlay={autoPlay}
//               loop={repeatTrack}
//               currentTrack={currentTrack.label}
//               repeatTrack={repeatTrack}
//               onPrevTrack={() => this._navigatePlaylist(-1)}
//               onNextTrack={() => this._navigatePlaylist(1)}
//               onRepeatTrack={() => { this.setState({ repeatTrack: !repeatTrack }) }}
//               onPlay={() => !autoPlay && this.setState({ autoPlay: true })}
//               onPause={() => this.setState({ autoPlay: false })}
//               onEnded={() => !repeatTrack && this._navigatePlaylist(1)}
//             />
//             <Playlist
//               tracks={playlist}
//               currentTrack={currentTrack}
//               onTrackClick={this._handleTrackClick}
//             />
//           </div>
//         }
//         {/* <VideoPlayer src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"/>
//         <AudioPlayer src="/audio/armstrong.mp3"/>
//         <CirclePlayer src="https://p.scdn.co/mp3-preview/f83458d6611ae9589420f71c447ac9d2e3047cb8"/> */}
//       </div>
//     )
//   }
// }

class MediaApp extends Component {
  state = {
    playing:        false,
    progress:       0,
    duration:       0,
    currentTime:    0,
    muted:          false,
    volume:         1,
    fullscreen:     false,
    loop:           false,
    playbackRate:   1,
    useAudioObject: false,
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  render() {
    const { playing, progress, currentTime, duration, muted, volume, fullscreen, loop, playbackRate, useAudioObject } = this.state
    return (
      <div>
        <Player
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          src="http://a1083.phobos.apple.com/us/r1000/014/Music/v4/4e/44/b7/4e44b7dc-aaa2-c63b-fb38-88e1635b5b29/mzaf_1844128138535731917.plus.aac.p.m4a"
          src="http://www.youtube.com/embed/h3YVKTxTOgU"
          // src="https://player.vimeo.com/video/156147818"
          currentTime={currentTime}
          playing={playing}
          muted={muted}
          volume={volume}
          fullscreen={fullscreen}
          loop={loop}
          playbackRate={playbackRate}
          // autoPlay

          onPlay={() => this.setState({ playing: true })}
          onPause={() => this.setState({ playing: false })}
          onProgress={progress => this.setState({ progress })}
          onDuration={duration => this.setState({ duration })}
          onTimeUpdate={currentTime => this.setState({ currentTime })}
          onVolumeChange={volume => this.setState({ volume })}
          onFullscreenChange={fullscreen => this.setState({ fullscreen })}

          onClick={this.playPause}
        />

        <div>
          <button onClick={this.playPause}>
            { playing ? 'Pause' : 'Play' }
          </button>
          <progress
            max={100}
            value={progress * 100}
          />
          <input
            type="range"
            step="any"
            min={0}
            max={duration}
            value={currentTime}
            onChange={e => this.setState({ currentTime: +e.target.value })}
          />
          <button onClick={() => this.setState({ muted: !muted })}>
            { muted ? 'Unmute' : 'Mute' }
          </button>
          <input
            type="range"
            step="any"
            min={0}
            max={1}
            value={volume}
            onChange={e => this.setState({ volume: +e.target.value })}
          />
          <button onClick={() => this.setState({ fullscreen: !fullscreen })}>
            { fullscreen ? 'Exit Fullscreen' : 'Fullscreen' }
          </button>
          <button onClick={() => this.setState({ loop: !loop })}>
            { loop ? 'Don\'t Loop' : 'Loop' }
          </button>
        </div>
      </div>
    )
  }
}

// <MediaPlayer> // your component
//   <Media>
//     <Player/>
//     <div>
//       <PlayPause/>
//     </div>
//   </Media>
// </MediaPlayer>
// need a way or methodology to add our own vendor
// maybe provide a HoC that calls certain methods that hook into Media component?
// something like
// this._player.play()
// <ComposedPlayer ref={c = this._player = c} {...this.props}/>

ReactDOM.render(<MediaApp/>, document.getElementById('app'))
