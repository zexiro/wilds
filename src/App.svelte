<script>
  import { parseRoute } from './lib/router.js';
  import { cameras, getCameraById, matchStreamsToCameras } from './lib/cameras.js';
  import BrowseView from './components/BrowseView.svelte';
  import AboutView from './components/AboutView.svelte';
  import ViewingMode from './components/ViewingMode.svelte';
  import Footer from './components/Footer.svelte';

  let route = $state(parseRoute());
  let liveVideoIds = $state(new Map());

  // Listen for hash changes
  $effect(() => {
    const handler = () => {
      route = parseRoute();
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  });

  // Fetch live stream data from API on mount
  $effect(() => {
    fetchLiveStreams();
  });

  async function fetchLiveStreams() {
    try {
      const resp = await fetch('/api/streams');
      if (!resp.ok) return;
      const data = await resp.json();
      if (data.streams) {
        liveVideoIds = matchStreamsToCameras(data.streams);
      }
    } catch {
      // API unavailable — fall back to stored video IDs
    }
  }

  // Build cameras with resolved video IDs
  // liveVideoIds must be read directly in $derived so Svelte tracks the dependency
  let resolvedCameras = $derived(
    cameras.map(c => ({ ...c, resolvedVideoId: liveVideoIds.get(c.id) || c.youtubeVideoId }))
  );

  let currentCamera = $derived(
    route.cameraId
      ? resolvedCameras.find(c => c.id === route.cameraId) || null
      : null
  );

  let isViewing = $derived(route.view === 'watch' || route.view === 'wander');
  let isWandering = $derived(route.view === 'wander');
</script>

<div class="app" class:viewing={isViewing}>
  {#if isViewing && currentCamera}
    <ViewingMode
      camera={currentCamera}
      cameras={resolvedCameras}
      wanderMode={isWandering}
    />
  {:else if isViewing && isWandering}
    <ViewingMode
      camera={resolvedCameras[0]}
      cameras={resolvedCameras}
      wanderMode={true}
    />
  {:else if route.view === 'about'}
    <AboutView />
    <Footer />
  {:else}
    <BrowseView cameras={resolvedCameras} />
    <Footer />
  {/if}
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .app.viewing {
    height: 100vh;
    overflow: hidden;
  }
</style>
