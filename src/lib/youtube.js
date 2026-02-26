/**
 * YouTube IFrame Player API integration.
 * Loads the API once and provides a clean interface for creating players.
 */

let apiReady = false;
let apiPromise = null;

/**
 * Load the YouTube IFrame Player API. Returns a promise that resolves when ready.
 */
export function loadYouTubeAPI() {
  if (apiReady) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      apiReady = true;
      resolve();
      return;
    }

    window.onYouTubeIframeAPIReady = () => {
      apiReady = true;
      resolve();
    };

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    document.head.appendChild(tag);
  });

  return apiPromise;
}

/**
 * Create a YouTube player instance.
 * @param {string|HTMLElement} element - DOM element or ID
 * @param {object} options
 * @param {string} options.videoId - YouTube video ID
 * @param {boolean} options.autoplay - Auto-play on load (muted)
 * @param {function} options.onReady - Called when player is ready
 * @param {function} options.onError - Called on error (stream offline, etc.)
 * @param {function} options.onStateChange - Called on state changes
 * @returns {YT.Player}
 */
export function createPlayer(element, options = {}) {
  if (!window.YT || !window.YT.Player) {
    throw new Error('YouTube API not loaded');
  }

  return new window.YT.Player(element, {
    videoId: options.videoId,
    playerVars: {
      autoplay: options.autoplay ? 1 : 0,
      mute: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      fs: 1,
      playsinline: 1,
      origin: window.location.origin
    },
    events: {
      onReady: options.onReady || null,
      onError: options.onError || null,
      onStateChange: options.onStateChange || null
    }
  });
}

/**
 * YouTube player state codes
 */
export const PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};

/**
 * YouTube error codes
 */
export const PlayerError = {
  INVALID_PARAM: 2,
  HTML5_ERROR: 5,
  NOT_FOUND: 100,
  NOT_EMBEDDABLE: 101,
  NOT_EMBEDDABLE_2: 150
};
