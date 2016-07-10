import Youtube from '../vendors/Youtube'
import Vimeo from '../vendors/Vimeo'
import HTML5 from '../vendors/HTML5'

const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i
const AUDIO_EXTENSIONS = /\.(mp3|wav|m4a)($|\?)/i

export default function getVendor(src, vendor) {
  if (vendor === 'youtube' || src.indexOf('youtube.com') > -1 || src.indexOf('youtu.be') > -1) {
    return { vendor: 'youtube', component: Youtube }
  } else if (vendor === 'vimeo' || src.indexOf('vimeo.com') > -1) {
    return { vendor: 'vimeo', component: Vimeo }
  } else if (vendor === 'video' || VIDEO_EXTENSIONS.test(src)) {
    return { vendor: 'video', component: HTML5 }
  } else if (vendor === 'audio' || AUDIO_EXTENSIONS.test(src)) {
    return { vendor: 'audio', component: HTML5 }
  } else {
    console.warn('Warning: Player was not rendered. Source could not be determined.')
    return null
  }
}
