function createAudioPlayer(buffer, context) {
  var sourceNode = null,
    startedAt = 0,
    pausedAt = 0,
    playing = false

  let splitter, merger, gainLeft, gainRight, volume

  var play = function() {
    var offset = pausedAt

    sourceNode = context.createBufferSource()

    if (buffer.numberOfChannels > 1) {
      splitter = context.createChannelSplitter(2)
      merger = context.createChannelMerger(2)
      gainLeft = context.createGain()
      gainRight = context.createGain()
      volume = context.createGain()

      // connect the source to the splitter
      sourceNode.connect(
        splitter,
        0,
        0
      )

      // connect splitter outputs to respective gain nodes
      splitter.connect(
        gainLeft,
        0
      )
      splitter.connect(
        gainRight,
        1
      )

      // connect respective gain nodes to left and right channels of merger
      gainLeft.connect(
        merger,
        0,
        0
      )
      gainRight.connect(
        merger,
        0,
        1
      )

      // connect merger to volume
      merger.connect(
        volume,
        0
      )

      // connect volume with output
      volume.connect(
        context.destination,
        0
      )
    } else {
      sourceNode.connect(context.destination)
    }

    sourceNode.buffer = buffer
    sourceNode.start(0, offset)

    startedAt = context.currentTime - offset
    pausedAt = 0
    playing = true
  }

  var pause = function() {
    var elapsed = context.currentTime - startedAt
    stop()
    pausedAt = elapsed
  }

  var stop = function() {
    if (sourceNode) {
      sourceNode.disconnect()
      sourceNode.stop(0)
      sourceNode = null
    }
    pausedAt = 0
    startedAt = 0
    playing = false
  }

  var setPosition = amount => {
    if (buffer.numberOfChannels > 1) {
      gainLeft.gain.value = amount <= 0 ? 1 : 1 - amount
      gainRight.gain.value = amount >= 0 ? 1 : 1 + amount
    }
  }

  var setVolume = volume => {
    volume.gain.value = volume
  }

  var getPlaying = function() {
    return playing
  }

  var getCurrentTime = function() {
    if (pausedAt) {
      return pausedAt
    }
    if (startedAt) {
      return context.currentTime - startedAt
    }
    return 0
  }

  var getDuration = function() {
    return buffer.duration
  }

  return {
    getCurrentTime: getCurrentTime,
    getDuration: getDuration,
    getPlaying: getPlaying,
    play: play,
    pause: pause,
    stop: stop,
    setPosition,
    setVolume,
  }
}

export default createAudioPlayer
