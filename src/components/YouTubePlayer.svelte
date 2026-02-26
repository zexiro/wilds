<script>
  let { videoId, onError = null } = $props();

  let iframeLoaded = $state(false);
  let hasError = $state(false);

  let embedUrl = $derived(
    `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&fs=1&playsinline=1`
  );

  let youtubeUrl = $derived(
    `https://www.youtube.com/watch?v=${videoId}`
  );

  function handleLoad() {
    iframeLoaded = true;
  }

  function handleError() {
    hasError = true;
    if (onError) onError();
  }

  // Reset state when videoId changes
  $effect(() => {
    videoId; // track
    iframeLoaded = false;
    hasError = false;
  });
</script>

<div class="youtube-wrapper">
  {#if !hasError}
    {#key videoId}
      <iframe
        src={embedUrl}
        title="Live wildlife camera"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        onload={handleLoad}
        onerror={handleError}
      ></iframe>
    {/key}
  {/if}

  {#if !iframeLoaded && !hasError}
    <div class="overlay loading-overlay">
      <div class="spinner"></div>
    </div>
  {/if}

  {#if hasError}
    <div class="overlay error-overlay">
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" opacity="0.4" />
      </svg>
      <p class="error-text">This stream is currently unavailable.</p>
      <a class="error-link" href={youtubeUrl} target="_blank" rel="noopener noreferrer">
        Watch on YouTube
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>
  {/if}
</div>

<style>
  .youtube-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 2;
  }

  .loading-overlay {
    background: rgba(0, 0, 0, 0.6);
    pointer-events: none;
  }

  .error-overlay {
    background: rgba(10, 11, 13, 0.95);
    color: var(--text-muted);
  }

  .spinner {
    width: 32px;
    height: 32px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .error-text {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    color: var(--text);
  }

  .error-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    color: var(--accent);
    padding: 0.5rem 1rem;
    border: 1px solid var(--accent);
    border-radius: 999px;
    transition: all var(--transition);
    text-decoration: none;
  }

  .error-link:hover {
    background: rgba(201, 168, 76, 0.1);
  }
</style>
