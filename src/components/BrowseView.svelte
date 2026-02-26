<script>
  import { getCamerasByBiome, getRandomCamera } from '../lib/cameras.js';
  import { watchCamera, startWander } from '../lib/router.js';
  import BiomeTabs from './BiomeTabs.svelte';
  import CameraCard from './CameraCard.svelte';

  let { cameras, ytReady } = $props();

  let selectedBiome = $state('all');
  let filteredCameras = $derived(getCamerasByBiome(selectedBiome));

  let featuredCamera = $state(getRandomCamera());

  function handleBiomeSelect(biome) {
    selectedBiome = biome;
  }

  function handleFeaturedClick() {
    if (featuredCamera) {
      watchCamera(featuredCamera.id);
    }
  }
</script>

<div class="browse">
  <!-- Hero / Featured Camera -->
  <header class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Wilds</h1>
      <p class="hero-subtitle">Live wildlife cameras from across the globe</p>

      <div class="hero-actions">
        <button class="btn btn-primary" onclick={handleFeaturedClick}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <polygon points="5 3 19 12 5 21" />
          </svg>
          Watch Now
        </button>
        <button class="btn btn-secondary" onclick={startWander}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
            <path d="M12 6v6l4 2" />
          </svg>
          Wander
        </button>
      </div>

      {#if featuredCamera}
        <p class="hero-featured">
          <span class="featured-label">Featured:</span>
          {featuredCamera.name} — {featuredCamera.location}
        </p>
      {/if}
    </div>

    <div class="hero-bg" aria-hidden="true">
      <div class="hero-gradient"></div>
    </div>
  </header>

  <!-- Biome Filter -->
  <section class="filters" aria-label="Filter by habitat">
    <BiomeTabs {selectedBiome} onSelect={handleBiomeSelect} />
  </section>

  <!-- Camera Grid -->
  <section class="camera-grid-section" aria-label="Wildlife cameras">
    <div class="camera-grid">
      {#each filteredCameras as camera (camera.id)}
        <CameraCard {camera} />
      {/each}
    </div>

    {#if filteredCameras.length === 0}
      <div class="empty-state">
        <p>No cameras in this habitat yet.</p>
      </div>
    {/if}
  </section>
</div>

<style>
  .browse {
    flex: 1;
  }

  /* ── Hero ──────────────────────────────────────────── */

  .hero {
    position: relative;
    padding: 6rem 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-height: 40vh;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 600px;
  }

  .hero-title {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    color: var(--text);
    margin-bottom: 0.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
  }

  .hero-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.4rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all var(--transition);
  }

  .btn-primary {
    background: var(--accent);
    color: var(--bg);
  }

  .btn-primary:hover {
    background: #d9b85c;
    transform: translateY(-1px);
  }

  .btn-secondary {
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--border);
  }

  .btn-secondary:hover {
    border-color: var(--text-muted);
    transform: translateY(-1px);
  }

  .hero-featured {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .featured-label {
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 0.7rem;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .hero-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 30%, rgba(201, 168, 76, 0.06) 0%, transparent 60%);
  }

  /* ── Filters ───────────────────────────────────────── */

  .filters {
    padding: 1rem 0;
    border-bottom: 1px solid var(--border);
    margin-bottom: 2rem;
  }

  /* ── Camera Grid ───────────────────────────────────── */

  .camera-grid-section {
    padding: 0 2rem 3rem;
  }

  .camera-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--text-muted);
  }

  @media (max-width: 1024px) {
    .camera-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding: 4rem 1.5rem 3rem;
      min-height: 30vh;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .camera-grid-section {
      padding: 0 1rem 2rem;
    }

    .camera-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .hero-actions {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      max-width: 200px;
      justify-content: center;
    }
  }
</style>
