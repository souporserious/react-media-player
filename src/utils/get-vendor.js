import getFileExtension from './get-file-extension'
import Youtube from '../vendors/Youtube'
import Vimeo from '../vendors/Vimeo'
import Video from '../vendors/Video'
import Audio from '../vendors/Audio'

const VIDEO_EXTENSIONS = ['mp4', 'm4v', 'webm', 'ogv']
const AUDIO_EXTENSIONS = ['mp3', 'm4a', 'wav', 'ogg']

export default function getVendor(src) {
  const ext = getFileExtension(src)

  if (src.indexOf('youtube.com') > -1) {
    return Youtube
  } else if (src.indexOf('vimeo.com') > -1) {
    return Vimeo
  } else if (VIDEO_EXTENSIONS.indexOf(ext) > -1) {
    return Video
  } else if (AUDIO_EXTENSIONS.indexOf(ext) > -1) {
    return Audio
  } else {
    throw new Error('Source could not be determined.')
  }
}
