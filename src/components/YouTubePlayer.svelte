<script>
  import { loadYouTubeAPI, createPlayer, PlayerState, PlayerError } from '../lib/youtube.js';

  let { videoId, ytReady = false, onError = null } = $props();

  let containerEl = $state(null);
  let player = $state(null);
  let playerState = $state('loading');
  let isMuted = $state(true);
  let hasError = $state(false);
  let errorMessage = $state('');

  let playerId = `yt-player-${Math.random().toString(36).slice(2, 9)}`;

  // Create or update player when videoId or ytReady changes
  $effect(() => {
    if (!ytReady || !videoId || !containerEl) return;

    // Destroy existing player
    if (player) {
      try { player.destroy(); } catch {}
      player = null;
    }

    hasError = false;
    errorMessage = '';
    playerState = 'loading';

    // Small delay to let the DOM settle after destroy
    const timeout = setTimeout(() => {
      try {
        // Ensure the placeholder div exists
        let targetEl = containerEl.querySelector(`#${playerId}`);
        if (!targetEl) {
          targetEl = document.createElement('div');
          targetEl.id = playerId;
          containerEl.appendChild(targetEl);
        }

        player = createPlayer(playerId, {
          videoId,
          autoplay: true,
          onReady: (event) => {
            playerState = 'ready';
            event.target.playVideo();
          },
          onError: (event) => {
            hasError = true;
            const code = event.data;
            if (code === PlayerError.NOT_FOUND) {
              errorMessage = 'This stream is currently offline.';
            } else if (code === PlayerError.NOT_EMBEDDABLE || code === PlayerError.NOT_EMBEDDABLE_2) {
              errorMessage = 'This stream cannot be embedded.';
            } else {
              errorMessage = 'Unable to load this stream.';
            }
            playerState = 'error';
            if (onError) onError(code);
          },
          onStateChange: (event) => {
            if (event.data === PlayerState.PLAYING) {
              playerState = 'playing';
            } else if (event.data === PlayerState.ENDED) {
              playerState = 'ended';
            } else if (event.data === PlayerState.BUFFERING) {
              playerState = 'buffering';
            }
          }
        });
      } catch (err) {
        hasError = true;
        errorMessage = 'Failed to initialize video player.';
        playerState = 'error';
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (player) {
        try { player.destroy(); } catch {}
        player = null;
      }
    };
  });

  function toggleMute() {
    if (!player) return;
    try {
      if (isMuted) {
        player.unMute();
        player.setVolume(50);
        isMuted = false;
      } else {
        player.mute();
        isMuted = true;
      }
    } catch {}
  }
</script>

<div class="youtube-wrapper" bind:this={containerEl}>
  <div id={playerId}></div>

  {#if playerState === 'loading' || playerState === 'buffering'}
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
      <p class="error-text">{errorMessage}</p>
      <p class="error-hint">Try visiting the stream directly on YouTube.</p>
    </div>
  {/if}

  {#if !hasError && playerState === 'playing'}
    <button
      class="mute-btn"
      onclick={toggleMute}
      aria-label={isMuted ? 'Unmute' : 'Mute'}
      title={isMuted ? 'Unmute' : 'Mute'}
    >
      {#if isMuted}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      {:else}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      {/if}
    </button>
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

  .youtube-wrapper :global(iframe) {
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
    pointer-events: none;
  }

  .loading-overlay {
    background: rgba(0, 0, 0, 0.6);
  }

  .error-overlay {
    background: rgba(10, 11, 13, 0.9);
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

  .error-hint {
    font-size: 0.8rem;
    opacity: 0.6;
  }

  .mute-btn {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(10, 11, 13, 0.7);
    backdrop-filter: blur(8px);
    color: var(--text);
    transition: all var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .mute-btn:hover {
    background: rgba(10, 11, 13, 0.9);
    border-color: rgba(255, 255, 255, 0.2);
  }
</style>
