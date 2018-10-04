export default function fullscreenChange(type, callback) {
  const vendors = [
    "fullscreenchange",
    "mozfullscreenchange",
    "MSFullscreenChange",
    "webkitfullscreenchange"
  ];
  vendors.forEach(vendor => document[`${type}EventListener`](vendor, callback));
}
