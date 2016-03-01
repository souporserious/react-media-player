import getFileExtension from './get-file-extension'
import Youtube from '../vendors/Youtube'
import Vimeo from '../vendors/Vimeo'
import HTML5 from '../vendors/HTML5'

const VIDEO_EXTENSIONS = ['mp4', 'm4v', 'webm', 'ogv']
const AUDIO_EXTENSIONS = ['mp3', 'm4a', 'wav', 'ogg']

export default function getVendor(src, vendor) {
  const ext = getFileExtension(src)

  if (vendor === 'youtube' || src.indexOf('youtube.com') > -1 || src.indexOf('youtu.be') > -1) {
    return { vendor: 'youtube', component: Youtube }
  } else if (vendor === 'vimeo' || src.indexOf('vimeo.com') > -1) {
    return { vendor: 'vimeo', component: Vimeo }
  } else if (vendor === 'video' || VIDEO_EXTENSIONS.indexOf(ext) > -1) {
    return { vendor: 'video', component: HTML5 }
  } else if (vendor === 'audio' || AUDIO_EXTENSIONS.indexOf(ext) > -1) {
    return { vendor: 'audio', component: HTML5 }
  } else {
    console.warn('Warning: Player was not rendered. Source could not be determined.')
    return null
  }
}
