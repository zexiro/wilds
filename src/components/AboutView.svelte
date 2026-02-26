<script>
  import { biomes, biomeOrder } from '../lib/biomes.js';
  import { goHome } from '../lib/router.js';
</script>

<div class="about">
  <header class="about-header">
    <button class="back-link" onclick={goHome}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back to cameras
    </button>
    <h1 class="about-title">About Wilds</h1>
    <p class="about-lede">A curated window into the world's wild places.</p>
  </header>

  <section class="about-section">
    <h2>What is Wilds?</h2>
    <p>
      Wilds brings together live wildlife cameras from across the globe into a single,
      calm viewing experience. From African watering holes at dawn to underwater coral
      reefs at dusk, each stream offers an unfiltered look at nature as it happens.
    </p>
    <p>
      Every camera is hand-picked for stream quality, reliability, and the richness of
      wildlife activity it captures. No algorithms, no ads — just the wild world, live.
    </p>
  </section>

  <section class="about-section">
    <h2>Habitats</h2>
    <p>Cameras are organized across six distinct habitats:</p>
    <div class="habitats-grid">
      {#each biomeOrder as id}
        {@const biome = biomes[id]}
        <div class="habitat-card" style="--biome-color: {biome.color}">
          <span class="habitat-icon">{biome.icon}</span>
          <h3>{biome.name}</h3>
          <p>{biome.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="about-section">
    <h2>How it works</h2>
    <p>
      Wilds streams live YouTube broadcasts from trusted wildlife camera operators
      around the world. Pick a camera to watch, or use <strong>Wander mode</strong> to
      let Wilds cycle through streams automatically — like channel surfing through nature.
    </p>
  </section>

  <section class="about-section">
    <h2>Built at Claude's Corner</h2>
    <p>
      Wilds is part of <a href="https://www.codehawks.co.uk" target="_blank" rel="noopener noreferrer">Claude's Corner</a>,
      a collection of small web projects. It was designed and built with the help of
      <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a>,
      Anthropic's AI assistant.
    </p>
    <p>
      The source code is open — contributions and camera suggestions are welcome.
    </p>
  </section>

  <div class="about-cta">
    <button class="btn btn-primary" onclick={goHome}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <polygon points="5 3 19 12 5 21" />
      </svg>
      Start watching
    </button>
  </div>
</div>

<style>
  .about {
    max-width: 720px;
    margin: 0 auto;
    padding: 3rem 2rem 4rem;
  }

  /* ── Header ──────────────────────────────────────────── */

  .about-header {
    margin-bottom: 3rem;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
    transition: color var(--transition);
  }

  .back-link:hover {
    color: var(--text);
  }

  .about-title {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    color: var(--text);
    margin-bottom: 0.75rem;
  }

  .about-lede {
    font-size: 1.15rem;
    color: var(--text-muted);
    line-height: 1.6;
  }

  /* ── Sections ────────────────────────────────────────── */

  .about-section {
    margin-bottom: 2.5rem;
  }

  .about-section h2 {
    font-family: var(--font-serif);
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 0.75rem;
    letter-spacing: -0.01em;
  }

  .about-section p {
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 0.75rem;
  }

  .about-section p:last-child {
    margin-bottom: 0;
  }

  .about-section a {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .about-section a:hover {
    opacity: 0.8;
  }

  /* ── Habitats Grid ───────────────────────────────────── */

  .habitats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
  }

  .habitat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1.25rem;
    border-top: 2px solid var(--biome-color);
  }

  .habitat-icon {
    font-size: 1.5rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  .habitat-card h3 {
    font-family: var(--font-serif);
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 0.3rem;
  }

  .habitat-card p {
    font-size: 0.8rem;
    color: var(--text-muted);
    line-height: 1.5;
    margin: 0;
  }

  /* ── CTA ─────────────────────────────────────────────── */

  .about-cta {
    text-align: center;
    padding-top: 1rem;
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

  /* ── Responsive ──────────────────────────────────────── */

  @media (max-width: 640px) {
    .about {
      padding: 2rem 1.25rem 3rem;
    }

    .habitats-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
