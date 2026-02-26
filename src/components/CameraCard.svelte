<script>
  import { biomes } from '../lib/biomes.js';
  import { getLocalTime } from '../lib/time.js';
  import { watchCamera } from '../lib/router.js';

  let { camera } = $props();

  let biome = $derived(biomes[camera.biome]);
  let localTime = $state(null);

  // Update time immediately and every minute
  $effect(() => {
    const tz = camera.timezone;
    localTime = getLocalTime(tz);
    const interval = setInterval(() => {
      localTime = getLocalTime(tz);
    }, 60000);
    return () => clearInterval(interval);
  });

  function handleClick() {
    watchCamera(camera.id);
  }

  function handleKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }
</script>

<button
  class="card"
  onclick={handleClick}
  onkeydown={handleKeydown}
  aria-label="Watch {camera.name} — {camera.location}. {camera.animals.join(', ')}"
  style="--biome-color: {biome?.color || 'var(--accent)'}"
>
  <div class="card-thumbnail">
    <div class="thumbnail-placeholder">
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5">
        <polygon points="5 3 19 12 5 21" />
      </svg>
    </div>
    {#if localTime}
      <div class="card-badge" class:daytime={localTime.isDaytime}>
        <span class="time-dot"></span>
        {localTime.formatted}
      </div>
    {/if}
  </div>

  <div class="card-body">
    <div class="card-header">
      <h3 class="card-name">{camera.name}</h3>
      <span class="biome-tag" style="--tag-color: {biome?.color}">{biome?.name || camera.biome}</span>
    </div>
    <p class="card-location">{camera.location}</p>
    <p class="card-animals">{camera.animals.join(' · ')}</p>
  </div>
</button>

<style>
  .card {
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition);
    text-align: left;
    width: 100%;
  }

  .card:hover {
    border-color: var(--biome-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  .card-thumbnail {
    position: relative;
    aspect-ratio: 16 / 9;
    background: var(--bg);
    overflow: hidden;
  }

  .thumbnail-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    opacity: 0.3;
  }

  .card-badge {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.25rem 0.5rem;
    background: rgba(10, 11, 13, 0.85);
    backdrop-filter: blur(8px);
    border-radius: 999px;
    font-size: 0.7rem;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
  }

  .time-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--text-muted);
    opacity: 0.5;
  }

  .card-badge.daytime .time-dot {
    background: var(--accent);
    opacity: 1;
  }

  .card-body {
    padding: 0.85rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .card-name {
    font-family: var(--font-serif);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: var(--text);
  }

  .biome-tag {
    flex-shrink: 0;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--tag-color);
    padding: 0.15rem 0.45rem;
    border: 1px solid var(--tag-color);
    border-radius: 999px;
    opacity: 0.7;
    margin-top: 0.15rem;
  }

  .card-location {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .card-animals {
    font-size: 0.75rem;
    color: var(--text-muted);
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    .card-body {
      padding: 0.75rem;
    }

    .card-name {
      font-size: 0.95rem;
    }
  }
</style>
