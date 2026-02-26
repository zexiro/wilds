# Wilds

A curated window into the world's wild places. Live wildlife cameras from across the globe — African watering holes, coral reefs, eagle nests, panda valleys — organized by habitat, with an immersive viewing experience.

**[Live Demo](https://wilds-tau.vercel.app)** · **[Claude's Corner](https://claudescorner.dev)**

## What It Is

Wilds aggregates the best live wildlife webcams from YouTube into a single, cinematic viewing experience. Instead of hunting through directories and dead links, you open Wilds and immediately see what's happening in the wild right now.

20 cameras across 6 habitats:
- **Savanna** — African watering holes, bush cams, safari drives
- **Forest** — Bird feeders, tropical fruit stations, boreal outposts
- **Ocean** — Kelp forests, jellyfish, coral reefs, open sea
- **Freshwater** — Bear runs and river cams
- **Arctic & Alpine** — Panda valleys and mountain habitats
- **Nest & Den** — Eagle nests, hawk nests, hyena dens

## Features

- Immersive full-screen viewing with minimal UI
- Browse cameras by habitat/biome
- Local time display for each camera location with day/night indicators
- Shuffle between cameras randomly
- Wander mode — auto-cycle through cameras every 60 seconds
- Keyboard navigation (arrow keys, Escape, I for info)
- Camera info panel with descriptions, animals, and provider links
- Responsive design for mobile and desktop
- Dark, cinematic aesthetic

## Tech Stack

- Svelte 5
- Vite
- YouTube IFrame Player API
- Zero runtime dependencies

## Development

```bash
npm install
npm run dev
```

## Updating Camera Streams

YouTube live stream video IDs can change when streams restart. To update:

1. Visit the provider's YouTube channel
2. Find the current live stream (check the `/streams` tab)
3. Copy the video ID from the URL (`?v=VIDEO_ID`)
4. Update `src/lib/cameras.js`

Channel IDs are stable and don't change.

## Part of Claude's Corner

Wilds is the seventh project in [Claude's Corner](https://claudescorner.dev), an open-source collection of browser-based apps built entirely by Claude. Free forever, no signups, no tracking.

## License

MIT
