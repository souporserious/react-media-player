// thanks to: http://stackoverflow.com/a/6997591/1461204
export default function getFileExtension(url) {
  const file = url.substr(url.lastIndexOf('/') + 1).split('?')[0]
  const extPos = file.lastIndexOf('.')
  return (extPos > -1) && file.substr(extPos + 1)
}
