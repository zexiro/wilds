<script>
  import { biomes } from '../lib/biomes.js';
  import { getLocalTime } from '../lib/time.js';

  let { camera, visible = false, onClose } = $props();

  let biome = $derived(biomes[camera.biome]);
  let localTime = $state(null);

  $effect(() => {
    const tz = camera.timezone;
    localTime = getLocalTime(tz);
    const interval = setInterval(() => {
      localTime = getLocalTime(tz);
    }, 60000);
    return () => clearInterval(interval);
  });

  function handleKeydown(e) {
    if (e.key === 'Escape' && visible) {
      onClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<aside class="info-panel" class:visible aria-label="Camera information">
  <div class="info-header">
    <div>
      <h2 class="info-name">{camera.name}</h2>
      <p class="info-location">{camera.location}</p>
    </div>
    <button class="close-btn" onclick={onClose} aria-label="Close info panel">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>

  <div class="info-meta">
    <div class="meta-item">
      <span class="meta-label">Habitat</span>
      <span class="meta-value" style="color: {biome?.color}">{biome?.name}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Local Time</span>
      <span class="meta-value">
        {#if localTime}
          <span class="time-dot" class:daytime={localTime.isDaytime}></span>
          {localTime.formatted}
        {:else}
          --:--
        {/if}
      </span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Schedule</span>
      <span class="meta-value">{camera.schedule}</span>
    </div>
  </div>

  <div class="info-description">
    <p>{camera.description}</p>
  </div>

  <div class="info-animals">
    <span class="meta-label">Animals</span>
    <div class="animal-tags">
      {#each camera.animals as animal}
        <span class="animal-tag">{animal}</span>
      {/each}
    </div>
  </div>

  <div class="info-provider">
    <span class="meta-label">Provided by</span>
    <a href={camera.providerUrl} target="_blank" rel="noopener noreferrer" class="provider-link">
      {camera.provider}
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  </div>

  <a
    href="https://www.youtube.com/watch?v={camera.youtubeVideoId}"
    target="_blank"
    rel="noopener noreferrer"
    class="youtube-link"
  >
    Watch on YouTube
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  </a>
</aside>

<style>
  .info-panel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 340px;
    max-width: 90vw;
    background: rgba(10, 11, 13, 0.92);
    backdrop-filter: blur(20px);
    border-left: 1px solid var(--border);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    overflow-y: auto;
    z-index: 10;
    transform: translateX(100%);
    transition: transform var(--transition);
  }

  .info-panel.visible {
    transform: translateX(0);
  }

  .info-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .info-name {
    font-family: var(--font-serif);
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.3;
  }

  .info-location {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 0.2rem;
  }

  .close-btn {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: var(--text-muted);
    transition: all var(--transition);
  }

  .close-btn:hover {
    color: var(--text);
    background: var(--surface);
  }

  .info-meta {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .meta-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .meta-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-muted);
  }

  .meta-value {
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .time-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--text-muted);
  }

  .time-dot.daytime {
    background: var(--accent);
  }

  .info-description {
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-muted);
    padding-top: 0.5rem;
    border-top: 1px solid var(--border);
  }

  .info-animals {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .animal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .animal-tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 999px;
    color: var(--text-muted);
  }

  .info-provider {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .provider-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.85rem;
  }

  .youtube-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    color: var(--text-muted);
    padding: 0.5rem 0.8rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    margin-top: auto;
    width: fit-content;
    transition: all var(--transition);
  }

  .youtube-link:hover {
    border-color: var(--text-muted);
    color: var(--text);
  }

  @media (max-width: 768px) {
    .info-panel {
      top: auto;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      max-width: 100%;
      max-height: 60vh;
      border-left: none;
      border-top: 1px solid var(--border);
      border-radius: var(--radius-lg) var(--radius-lg) 0 0;
      transform: translateY(100%);
    }

    .info-panel.visible {
      transform: translateY(0);
    }
  }
</style>
