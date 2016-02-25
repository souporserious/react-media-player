// load api asynchronously
export default function loadAPI(url) {
  // create script to be injected
  const api = document.createElement('script')

  // load async
  api.async = true

  // set source to vendors api
  api.src = url

  // append script to document head
  document.head.appendChild(api)
}
