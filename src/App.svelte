<script>
  import { parseRoute, goHome } from './lib/router.js';
  import { cameras, getCameraById } from './lib/cameras.js';
  import { loadYouTubeAPI } from './lib/youtube.js';
  import BrowseView from './components/BrowseView.svelte';
  import ViewingMode from './components/ViewingMode.svelte';
  import Footer from './components/Footer.svelte';

  let route = $state(parseRoute());
  let ytReady = $state(false);

  // Listen for hash changes
  $effect(() => {
    const handler = () => {
      route = parseRoute();
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  });

  // Load YouTube API on mount
  $effect(() => {
    loadYouTubeAPI().then(() => {
      ytReady = true;
    });
  });

  let currentCamera = $derived(
    route.cameraId ? getCameraById(route.cameraId) : null
  );

  let isViewing = $derived(route.view === 'watch' || route.view === 'wander');
  let isWandering = $derived(route.view === 'wander');
</script>

<div class="app" class:viewing={isViewing}>
  {#if isViewing && currentCamera}
    <ViewingMode
      camera={currentCamera}
      {cameras}
      {ytReady}
      wanderMode={isWandering}
    />
  {:else if isViewing && isWandering}
    <ViewingMode
      camera={cameras[0]}
      {cameras}
      {ytReady}
      wanderMode={true}
    />
  {:else}
    <BrowseView {cameras} {ytReady} />
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
