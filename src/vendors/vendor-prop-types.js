import PropTypes from "prop-types";

export default {
  src: PropTypes.string,
  onPlaying: PropTypes.func,
  onProgress: PropTypes.func,
  onDuration: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onVolumeChange: PropTypes.func
};
