export default function getVimeoID(url) {
  const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/
  const match = url.match(regExp)

  if (match) {
    return match[5]
  } else {
    throw 'Invalid Vimeo ID provided'
  }
}