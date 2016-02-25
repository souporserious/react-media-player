import getVendor from './get-vendor'

const VIDEO_TYPES = ['mp4', 'webm', 'ogv']
const AUDIO_TYPES = ['mp3', 'wav', 'ogg']
const VENDOR_TYPES = ['youtube', 'vimeo']

// determine what type of HTML tag we need to use
export default function getMediaTag(src) {
  const vendor = getVendor(src)
  const type = (vendor === 'html5') ? src.split('.').pop() : vendor

  if (VIDEO_TYPES.indexOf(type) > -1) {
    return 'video'
  } else if (AUDIO_TYPES.indexOf(type) > -1) {
    return 'audio'
  } else if (VENDOR_TYPES.indexOf(type) > -1) {
    return 'iframe'
  } else {
    throw new Error('Source could not be determined.')
  }
}
