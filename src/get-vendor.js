export default function getVendor(src) {
  if (src.indexOf('youtube') > -1) {
    return 'youtube'
  } else if (src.indexOf('vimeo') > -1) {
    return 'vimeo'
  } else {
    return 'html5'
  }
}