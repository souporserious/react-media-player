import getVendor from './get-vendor'

// using youtube as a video type for now because it will load
// properly setting it to an iframe won't load right need to look
// into this so React stops complaining
const VIDEO_TYPES = ['mp4', 'webm', 'ogv', 'youtube']
const AUDIO_TYPES = ['mp3', 'wav', 'ogg']
const VENDOR_TYPES = ['vimeo']

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