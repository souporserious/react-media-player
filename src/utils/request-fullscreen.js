export default (() => {
  if (typeof document === "undefined") {
    return () => {};
  }

  const names = [
    "requestFullscreen",
    "mozRequestFullScreen",
    "msRequestFullscreen",
    "webkitRequestFullscreen"
  ];
  return names.reduce(
    (prev, curr) => (document.documentElement[curr] ? curr : prev)
  );
})();
