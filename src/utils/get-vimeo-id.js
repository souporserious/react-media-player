// Thanks to: http://stackoverflow.com/a/13286930/1461204
export default function getVimeoId(url) {
  const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
  const match = url.match(regExp);

  if (match) {
    return match[3];
  } else {
    throw "Invalid Vimeo ID provided";
  }
}
