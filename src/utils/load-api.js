// load api asynchronously
export default function loadAPI(url, cb) {
  // create script to be injected
  const script = document.createElement("script");

  // load async
  script.async = true;

  // set source to vendors api
  script.src = url;

  // callback after load
  script.onload = () => typeof cb === "function" && cb();

  // append script to document head
  document.head.appendChild(script);
}
