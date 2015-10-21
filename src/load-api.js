// load api asynchronously
export default function loadAPI(src) {
  // create script to be injected
  const api = document.createElement('script')

  // load async
  api.async = true

  // set source to youtube's api
  api.src = src

  // append script to document head
  document.head.appendChild(api)
}