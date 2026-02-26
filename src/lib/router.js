/**
 * Simple hash-based router for Wilds.
 * Routes:
 *   #/           → browse
 *   #/watch/:id  → viewing a specific camera
 *   #/wander     → auto-cycling mode
 */

export function parseRoute() {
  const hash = window.location.hash || '#/';

  if (hash.startsWith('#/watch/')) {
    const cameraId = hash.slice('#/watch/'.length);
    return { view: 'watch', cameraId };
  }

  if (hash === '#/wander') {
    return { view: 'wander', cameraId: null };
  }

  return { view: 'browse', cameraId: null };
}

export function navigateTo(path) {
  window.location.hash = path;
}

export function watchCamera(cameraId) {
  navigateTo(`/watch/${cameraId}`);
}

export function goHome() {
  navigateTo('/');
}

export function startWander() {
  navigateTo('/wander');
}
