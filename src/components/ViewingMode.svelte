<script>
  import { goHome, watchCamera } from '../lib/router.js';
  import { biomes } from '../lib/biomes.js';
  import { getLocalTime } from '../lib/time.js';
  import YouTubePlayer from './YouTubePlayer.svelte';
  import CameraInfo from './CameraInfo.svelte';
  import Footer from './Footer.svelte';

  let { camera, cameras, wanderMode = false } = $props();

  let showInfo = $state(false);
  let localTime = $state(null);
  let biome = $derived(biomes[camera.biome]);
  let wanderTimer = $state(null);

  // Update time immediately and every minute
  $effect(() => {
    const tz = camera.timezone;
    localTime = getLocalTime(tz);
    const interval = setInterval(() => {
      localTime = getLocalTime(tz);
    }, 60000);
    return () => clearInterval(interval);
  });

  // Wander mode: auto-cycle every 60 seconds
  $effect(() => {
    if (wanderMode) {
      wanderTimer = setInterval(() => {
        goToNextCamera();
      }, 60000);
      return () => {
        if (wanderTimer) clearInterval(wanderTimer);
      };
    }
  });

  // Get camera index in the filtered list
  let currentIndex = $derived(cameras.findIndex(c => c.id === camera.id));

  function goToPrevCamera() {
    const idx = currentIndex <= 0 ? cameras.length - 1 : currentIndex - 1;
    watchCamera(cameras[idx].id);
  }

  function goToNextCamera() {
    const idx = currentIndex >= cameras.length - 1 ? 0 : currentIndex + 1;
    watchCamera(cameras[idx].id);
  }

  function goToRandomCamera() {
    let idx;
    do {
      idx = Math.floor(Math.random() * cameras.length);
    } while (idx === currentIndex && cameras.length > 1);
    watchCamera(cameras[idx].id);
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      if (showInfo) {
        showInfo = false;
      } else {
        goHome();
      }
    } else if (e.key === 'ArrowLeft') {
      goToPrevCamera();
    } else if (e.key === 'ArrowRight') {
      goToNextCamera();
    } else if (e.key === 'i' || e.key === 'I') {
      showInfo = !showInfo;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="viewing-mode">
  <!-- Player -->
  <div class="player-area">
    {#key camera.id}
      <YouTubePlayer videoId={camera.resolvedVideoId || camera.youtubeVideoId} />
    {/key}
  </div>

  <!-- Top bar -->
  <div class="top-bar">
    <button class="icon-btn" onclick={goHome} aria-label="Back to browse">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </button>

    <div class="camera-label">
      <span class="label-dot" style="background: {biome?.color}"></span>
      <span class="label-name">{camera.name}</span>
      <span class="label-divider">·</span>
      <span class="label-location">{camera.location}</span>
      {#if localTime}
        <span class="label-divider">·</span>
        <span class="label-time" class:daytime={localTime.isDaytime}>{localTime.formatted}</span>
      {/if}
    </div>

    <button class="icon-btn" onclick={() => showInfo = !showInfo} aria-label="Toggle camera info">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    </button>
  </div>

  <!-- Navigation controls -->
  <div class="nav-controls">
    <button class="nav-btn prev" onclick={goToPrevCamera} aria-label="Previous camera">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <button class="nav-btn next" onclick={goToNextCamera} aria-label="Next camera">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </button>
  </div>

  <!-- Bottom bar -->
  <div class="bottom-bar">
    <button class="pill-btn" onclick={goToRandomCamera} aria-label="Random camera">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
      Shuffle
    </button>

    {#if wanderMode}
      <span class="wander-indicator">
        <span class="wander-dot"></span>
        Wandering
      </span>
    {/if}

    <div class="counter">
      {currentIndex + 1} / {cameras.length}
    </div>
  </div>

  <!-- Info panel -->
  <CameraInfo {camera} visible={showInfo} onClose={() => showInfo = false} />

  <!-- Footer overlay -->
  <div class="viewing-footer">
    <Footer />
  </div>
</div>

<style>
  .viewing-mode {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #000;
    overflow: hidden;
  }

  .player-area {
    position: absolute;
    inset: 0;
  }

  /* ── Top Bar ───────────────────────────────────────── */

  .top-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    z-index: 5;
  }

  .icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: var(--text);
    transition: all var(--transition);
    opacity: 0.8;
  }

  .icon-btn:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }

  .camera-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: var(--text);
    opacity: 0.9;
  }

  .label-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .label-name {
    font-family: var(--font-serif);
  }

  .label-divider {
    color: var(--text-muted);
    opacity: 0.5;
  }

  .label-location {
    color: var(--text-muted);
    font-size: 0.8rem;
  }

  .label-time {
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    font-size: 0.8rem;
  }

  .label-time.daytime {
    color: var(--accent);
  }

  /* ── Nav Controls ──────────────────────────────────── */

  .nav-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
    z-index: 5;
    pointer-events: none;
  }

  .nav-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(10, 11, 13, 0.5);
    backdrop-filter: blur(8px);
    color: var(--text);
    transition: all var(--transition);
    opacity: 0;
    pointer-events: auto;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .viewing-mode:hover .nav-btn {
    opacity: 0.7;
  }

  .nav-btn:hover {
    opacity: 1 !important;
    background: rgba(10, 11, 13, 0.8);
  }

  /* ── Bottom Bar ────────────────────────────────────── */

  .bottom-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    z-index: 5;
  }

  .pill-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    color: var(--text);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 999px;
    transition: all var(--transition);
    opacity: 0.7;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .pill-btn:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.15);
  }

  .wander-indicator {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.75rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .wander-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .counter {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
    opacity: 0.6;
  }

  /* ── Footer ────────────────────────────────────────── */

  .viewing-footer {
    position: absolute;
    bottom: 2.5rem;
    left: 0;
    right: 0;
    z-index: 4;
    opacity: 0;
    transition: opacity var(--transition);
    pointer-events: none;
  }

  .viewing-mode:hover .viewing-footer {
    opacity: 1;
    pointer-events: auto;
  }

  /* ── Responsive ────────────────────────────────────── */

  @media (max-width: 768px) {
    .camera-label {
      font-size: 0.75rem;
      gap: 0.3rem;
    }

    .label-location {
      display: none;
    }

    .nav-btn {
      width: 36px;
      height: 36px;
      opacity: 0.5;
    }

    .viewing-mode:hover .nav-btn {
      opacity: 0.5;
    }
  }
</style>
