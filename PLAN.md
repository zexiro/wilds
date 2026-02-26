# Wilds — Plan

## Overview

Wilds is a curated, cinematic portal to live wildlife cameras from around the world. It aggregates YouTube live streams of wild animals — African watering holes, Alaskan bear runs, coral reefs, eagle nests, panda habitats — into an immersive viewing experience organized by habitat.

It is NOT a directory or aggregator in the traditional sense. It's designed to feel like opening a window into a wild place. Dark, cinematic aesthetic. Minimal UI. The wildlife takes center stage.

**Who it's for:** Anyone who wants to watch wild animals in real time — nature lovers, remote workers wanting ambient nature, parents with curious kids, people who just want something calm and real on their screen.

**Why it's worth building:** Every existing wildlife cam aggregator is a basic directory with dated UI. No one has built a beautiful, immersive viewing experience for wildlife cameras. This fills that gap.

## Features & Interactions

### Landing / Browse View
- Dark cinematic backdrop
- Hero area with a randomly selected "featured" camera auto-playing (muted)
- Camera grid below, organized by biome/habitat tabs
- Each card shows: camera name, location, biome badge, a representative thumbnail, and a live/offline status indicator
- Click any card → enters immersive viewing mode

### Immersive Viewing Mode
- Full-viewport YouTube embed with minimal overlay
- Bottom overlay bar (translucent): camera name, location, local time at camera location, biome badge
- Side panel (togglable): camera description, animals typically seen, provider info, direct YouTube link
- Navigation: left/right arrows or swipe to cycle through cameras in the current biome
- "Shuffle" button: jump to a random camera
- Press Escape or click X to return to browse view

### Biome Categories
- **Savanna** — African watering holes, bush cams, safari drives
- **Forest** — Woodland feeders, forest floor cams, canopy cams
- **Ocean** — Underwater reefs, kelp forests, aquarium cams
- **Freshwater** — River cams, lake cams, fish runs
- **Arctic & Alpine** — Northern wildlife, mountain cams
- **Nest & Den** — Eagle nests, owl boxes, den cams

### Time Awareness
- Show the current local time at each camera's location
- Visual day/night indicator on each camera card
- "Active Now" label for cameras whose local time suggests good viewing (daytime for most, night for nocturnal)

### Auto-Play Mode
- A "Wander" button that auto-cycles through cameras every 60 seconds
- Smooth crossfade transitions
- Prioritizes cameras that are currently in daytime hours

## Information Architecture

```
/ (root)
├── Browse view (default)
│   ├── Featured hero camera
│   ├── Biome tab navigation
│   └── Camera card grid (filtered by selected biome, or "All")
│
└── /watch/:cameraId
    ├── Full-screen YouTube embed
    ├── Info overlay (camera name, location, local time)
    ├── Side panel (description, animals, links)
    └── Navigation controls (prev/next/shuffle/wander)
```

SPA with hash-based routing (no server needed).

## Visual Design

### Color Palette
- **Background**: Very dark charcoal (#0a0b0d)
- **Surface**: Dark gray (#141519)
- **Border/divider**: Subtle gray (#1e2028)
- **Text primary**: Warm white (#e8e6e1)
- **Text secondary**: Muted (#8a8a8f)
- **Accent (global)**: Soft amber (#c9a84c)

### Biome Accent Colors
- Savanna: Warm amber (#d4a03c)
- Forest: Deep green (#3d8b5e)
- Ocean: Teal (#2a8f8f)
- Freshwater: Blue-green (#4a9aad)
- Arctic: Ice blue (#7fb5c9)
- Nest & Den: Warm brown (#a67c52)

### Typography
- Headings: System serif stack (Georgia, serif) — editorial, documentary feel
- Body: System sans-serif stack (-apple-system, etc.) — clean and readable
- Camera labels: Small caps / tracking for location text

### Layout
- Browse view: Full-width hero + responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Viewing mode: Full viewport with translucent overlays
- All transitions are smooth and unhurried (300-500ms)

### Animations
- Camera cards: subtle scale on hover
- View transitions: fade crossfade
- Overlay: slide up from bottom
- Biome tabs: underline slide

### Mood
Dark, calm, cinematic. Like a nature documentary's opening titles. No bright colors competing with the live video. Everything recedes to let the wildlife speak.

## Technical Architecture

### Stack
- Svelte 5 + Vite
- Zero runtime dependencies
- YouTube IFrame Player API (loaded from YouTube CDN)

### File Structure
```
wilds/
├── src/
│   ├── main.js
│   ├── app.css
│   ├── App.svelte
│   ├── components/
│   │   ├── BrowseView.svelte        — Landing/browse layout
│   │   ├── CameraCard.svelte        — Individual camera card
│   │   ├── BiomeTabs.svelte         — Biome filter tabs
│   │   ├── ViewingMode.svelte       — Immersive full-screen viewer
│   │   ├── YouTubePlayer.svelte     — YouTube embed wrapper
│   │   ├── CameraInfo.svelte        — Side panel with camera details
│   │   ├── TimeDisplay.svelte       — Local time at camera location
│   │   ├── WanderMode.svelte        — Auto-cycling overlay
│   │   └── Footer.svelte            — CodeHawks footer
│   ├── lib/
│   │   ├── cameras.js               — Curated camera database
│   │   ├── biomes.js                — Biome definitions & colors
│   │   ├── time.js                  — Timezone utilities
│   │   └── router.js                — Simple hash router
│   └── assets/                      — Static images (biome icons, etc.)
├── public/
│   ├── index.html
│   └── favicon.svg
├── package.json
├── vite.config.js
├── svelte.config.js
└── README.md
```

### State Management
- Svelte 5 `$state()` and `$derived()` for reactive state
- Global state in App.svelte: current view, selected camera, selected biome, wander mode
- No external state management library needed

### YouTube Integration
- Load the YouTube IFrame Player API script dynamically
- Use the API for: autoplay (muted), state detection, error handling
- When a camera stream is offline, show a styled placeholder with camera info and direct YouTube link
- All videos start muted (browser autoplay policy), with a clear unmute button

### Camera Data Structure
```js
{
  id: 'tembe-elephant-park',
  name: 'Tembe Elephant Park',
  location: 'KwaZulu-Natal, South Africa',
  coordinates: { lat: -27.05, lng: 32.43 },
  timezone: 'Africa/Johannesburg',
  biome: 'savanna',
  animals: ['Elephants', 'Nyala', 'Buffalo', 'Rhino'],
  description: 'A remote watering hole in Tembe Elephant Park...',
  youtubeVideoId: 'XXXXX',
  youtubeChannelId: 'UCXXXXX',
  provider: 'Africam',
  providerUrl: 'https://africam.com',
  schedule: '24/7', // or 'seasonal:Jun-Oct' or 'daytime'
  thumbnail: '/thumbnails/tembe.jpg' // or generated
}
```

### Routing
Simple hash-based router:
- `#/` or `#/browse` → Browse view
- `#/watch/camera-id` → Viewing mode for specific camera
- `#/wander` → Auto-cycling wander mode

## Accessibility Plan

- All interactive elements are keyboard-navigable (Tab, Enter, Escape, Arrow keys)
- Camera cards are `<button>` elements with descriptive `aria-label`
- Biome tabs use `role="tablist"` / `role="tab"` / `aria-selected`
- Viewing mode: Escape exits, arrow keys navigate, space toggles play
- Screen reader announcements for camera changes
- All text meets WCAG AA contrast on dark backgrounds
- `prefers-reduced-motion`: disable transitions, no auto-wander
- YouTube embeds include `title` attributes describing the camera

## Responsive Strategy

### Desktop (>= 1024px)
- 3-column camera grid
- Side panel in viewing mode
- Hover interactions on cards

### Tablet (768px - 1023px)
- 2-column camera grid
- Bottom sheet instead of side panel in viewing mode

### Mobile (< 768px)
- Single column camera grid
- Bottom sheet for camera info
- Swipe navigation between cameras
- Compact biome tabs (horizontally scrollable)

## Edge Cases

- **Stream offline**: Show styled placeholder with camera info, "stream currently offline" message, and link to YouTube channel
- **YouTube API fails to load**: Fall back to basic iframe embeds without state detection
- **No JavaScript**: Show a `<noscript>` message directing users to enable JS
- **Slow connection**: Camera cards show before video loads; loading skeleton for player
- **All cameras offline**: Show browse view with offline indicators and a message
- **Browser doesn't support YouTube embeds**: Show direct links

## Performance Budget

- Target bundle size: < 30KB gzipped (excluding YouTube's own scripts)
- Only one YouTube player loaded at a time (dispose previous when switching)
- Camera thumbnails: lazy loaded with `loading="lazy"`
- No heavy animations or canvas rendering
- YouTube IFrame API loaded asynchronously, non-blocking
