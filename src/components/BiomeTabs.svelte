<script>
  import { biomes, biomeOrder } from '../lib/biomes.js';

  let { selectedBiome = 'all', onSelect } = $props();
</script>

<div class="biome-tabs" role="tablist" aria-label="Filter cameras by habitat">
  <button
    class="tab"
    class:active={selectedBiome === 'all'}
    role="tab"
    aria-selected={selectedBiome === 'all'}
    onclick={() => onSelect('all')}
  >
    All
  </button>

  {#each biomeOrder as biomeId}
    {@const biome = biomes[biomeId]}
    <button
      class="tab"
      class:active={selectedBiome === biomeId}
      role="tab"
      aria-selected={selectedBiome === biomeId}
      onclick={() => onSelect(biomeId)}
      style="--biome-color: {biome.color}"
    >
      <span class="tab-icon">{biome.icon}</span>
      <span class="tab-name">{biome.name}</span>
    </button>
  {/each}
</div>

<style>
  .biome-tabs {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    padding: 0 2rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
  }

  .biome-tabs::-webkit-scrollbar {
    display: none;
  }

  .tab {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    color: var(--text-muted);
    border-radius: 999px;
    white-space: nowrap;
    transition: all var(--transition);
    background: transparent;
    border: 1px solid transparent;
  }

  .tab:hover {
    color: var(--text);
    background: var(--surface);
  }

  .tab.active {
    color: var(--text);
    background: var(--surface);
    border-color: var(--biome-color, var(--accent));
  }

  .tab-icon {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .biome-tabs {
      justify-content: flex-start;
      padding: 0 1rem;
    }

    .tab {
      padding: 0.5rem 0.75rem;
      font-size: 0.8rem;
    }

    .tab-name {
      display: none;
    }
  }
</style>
