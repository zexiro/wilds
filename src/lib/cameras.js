/**
 * Curated wildlife camera database.
 *
 * youtubeVideoId is a fallback — the app fetches current live stream IDs
 * from /api/streams on load. searchTerms are used to match live streams
 * from the YouTube API to specific cameras.
 *
 * Channel IDs are stable. Video IDs are ephemeral.
 */

export const cameras = [
  // ── Savanna ──────────────────────────────────────────────
  {
    id: 'tembe-elephant-park',
    name: 'Tembe Elephant Park',
    location: 'KwaZulu-Natal, South Africa',
    coordinates: { lat: -27.03, lng: 32.42 },
    timezone: 'Africa/Johannesburg',
    biome: 'savanna',
    animals: ['Elephants', 'Nyala', 'Buffalo', 'Warthogs'],
    description: 'A remote watering hole deep in Tembe Elephant Park, home to some of Africa\'s largest tuskers. Elephants, nyala, and warthogs visit throughout the day and night.',
    youtubeVideoId: 'ydYDqZQpim8',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['tembe', 'elephant park'],
    provider: 'Explore.org / Africam',
    providerUrl: 'https://explore.org',
    schedule: '24/7'
  },
  {
    id: 'nkorho-bush-lodge',
    name: 'Nkorho Bush Lodge',
    location: 'Sabi Sand, South Africa',
    coordinates: { lat: -24.65, lng: 31.35 },
    timezone: 'Africa/Johannesburg',
    biome: 'savanna',
    animals: ['Leopards', 'Elephants', 'Hyenas', 'Wild Dogs'],
    description: 'A 360-degree rotating camera overlooking a waterhole in the Sabi Sand Game Reserve, adjacent to Kruger National Park. One of the best cameras for spotting leopards and African wild dogs.',
    youtubeVideoId: 'gdrNUUf-cQw',
    youtubeChannelId: 'UC2P9wURjFXsOSzFbR0hnYag',
    searchTerms: ['nkorho'],
    provider: 'Africam',
    providerUrl: 'https://africam.com',
    schedule: '24/7'
  },
  {
    id: 'olifants-river',
    name: 'Olifants River',
    location: 'Balule Nature Reserve, South Africa',
    coordinates: { lat: -24.18, lng: 31.05 },
    timezone: 'Africa/Johannesburg',
    biome: 'savanna',
    animals: ['Hippos', 'Crocodiles', 'Elephants', 'Fish Eagles'],
    description: 'A sweeping view of the Olifants River in Balule Nature Reserve. Hippos bask in the shallows while crocodiles patrol the banks. Elephants cross at dusk.',
    youtubeVideoId: 'S4GIPXZnQTM',
    youtubeChannelId: 'UC2P9wURjFXsOSzFbR0hnYag',
    searchTerms: ['olifants'],
    provider: 'Africam',
    providerUrl: 'https://africam.com',
    schedule: '24/7'
  },
  {
    id: 'djuma-waterhole',
    name: 'Djuma Waterhole',
    location: 'Sabi Sand, South Africa',
    coordinates: { lat: -24.80, lng: 31.50 },
    timezone: 'Africa/Johannesburg',
    biome: 'savanna',
    animals: ['Leopards', 'Elephants', 'Lions', 'Hyenas'],
    description: 'The Djuma Game Reserve waterhole in the heart of the Sabi Sand. Famous for frequent leopard sightings and dramatic predator-prey encounters at the water\'s edge.',
    youtubeVideoId: 'O81gItg_Jco',
    youtubeChannelId: 'UC2P9wURjFXsOSzFbR0hnYag',
    searchTerms: ['djuma'],
    provider: 'Africam / Djuma',
    providerUrl: 'https://africam.com',
    schedule: '24/7'
  },
  {
    id: 'wildearth-safari',
    name: 'WildEarth Safari',
    location: 'Sabi Sand & Maasai Mara',
    coordinates: { lat: -24.80, lng: 31.50 },
    timezone: 'Africa/Johannesburg',
    biome: 'savanna',
    animals: ['Lions', 'Leopards', 'Elephants', 'Cheetahs'],
    description: 'Expert-guided live safari drives through South Africa\'s Sabi Sand and Kenya\'s Maasai Mara. Sunrise drives at dawn, sunset drives in golden hour. Between drives, highlights replay.',
    youtubeVideoId: 'WaszO4l4E2c',
    youtubeChannelId: 'UCV6HJBZD_hZcIX9JVJ3dCXQ',
    searchTerms: ['wildearth', 'safari', 'wild earth'],
    provider: 'WildEarth',
    providerUrl: 'https://wildearth.tv',
    schedule: 'Sunrise 05:30-08:30 & Sunset 15:30-19:30 CAT'
  },

  // ── Forest ───────────────────────────────────────────────
  {
    id: 'cornell-feederwatch',
    name: 'Cornell FeederWatch',
    location: 'Ithaca, New York, USA',
    coordinates: { lat: 42.48, lng: -76.45 },
    timezone: 'America/New_York',
    biome: 'forest',
    animals: ['Cardinals', 'Blue Jays', 'Woodpeckers', 'Chickadees'],
    description: 'The famous Sapsucker Woods bird feeder at the Cornell Lab of Ornithology. A parade of Eastern songbirds visits throughout the day — cardinals, blue jays, tufted titmice, and dozens more species.',
    youtubeVideoId: 'N609loYkFJo',
    youtubeChannelId: 'UCZXZQxS3d6NpR-eH_gdDwYA',
    searchTerms: ['feederwatch', 'feeder', 'sapsucker'],
    provider: 'Cornell Lab Bird Cams',
    providerUrl: 'https://www.allaboutbirds.org/cams/',
    schedule: 'Daylight hours'
  },
  {
    id: 'panama-fruit-feeder',
    name: 'Panama Fruit Feeder',
    location: 'El Valle de Anton, Panama',
    coordinates: { lat: 8.60, lng: -80.15 },
    timezone: 'America/Panama',
    biome: 'forest',
    animals: ['Toucans', 'Tanagers', 'Motmots', 'Hummingbirds'],
    description: 'A tropical fruit feeder at the Canopy Lodge in Panama, attracting an incredible diversity of neotropical birds. Keel-billed toucans, blue-gray tanagers, and dazzling hummingbirds make appearances.',
    youtubeVideoId: 'e_Nnm1vHPdQ',
    youtubeChannelId: 'UCZXZQxS3d6NpR-eH_gdDwYA',
    searchTerms: ['panama', 'fruit feeder', 'canopy'],
    provider: 'Cornell Lab Bird Cams',
    providerUrl: 'https://www.allaboutbirds.org/cams/',
    schedule: 'Daylight hours'
  },
  {
    id: 'ontario-feederwatch',
    name: 'Ontario FeederWatch',
    location: 'Manitouwadge, Ontario, Canada',
    coordinates: { lat: 49.12, lng: -85.84 },
    timezone: 'America/Toronto',
    biome: 'forest',
    animals: ['Winter Finches', 'Canada Jays', 'Grosbeaks', 'Ruffed Grouse'],
    description: 'A remote bird feeder in the boreal forests of northern Ontario. Winter finches, redpolls, grosbeaks, and the bold Canada Jay visit this snowy outpost.',
    youtubeVideoId: 'dERgvuToQS4',
    youtubeChannelId: 'UCZXZQxS3d6NpR-eH_gdDwYA',
    searchTerms: ['ontario', 'manitouwadge'],
    provider: 'Cornell Lab Bird Cams',
    providerUrl: 'https://www.allaboutbirds.org/cams/',
    schedule: 'Daylight hours'
  },

  // ── Ocean ────────────────────────────────────────────────
  {
    id: 'monterey-kelp-forest',
    name: 'Kelp Forest',
    location: 'Monterey, California, USA',
    coordinates: { lat: 36.62, lng: -121.90 },
    timezone: 'America/Los_Angeles',
    biome: 'ocean',
    animals: ['Leopard Sharks', 'Sardines', 'Wolf-eels', 'Garibaldi'],
    description: 'One of the tallest kelp forest exhibits in the world, at the Monterey Bay Aquarium. Schools of sardines swirl past leopard sharks gliding through towering kelp fronds.',
    youtubeVideoId: 'w3LjpFhySTg',
    youtubeChannelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ',
    searchTerms: ['kelp'],
    provider: 'Monterey Bay Aquarium',
    providerUrl: 'https://www.montereybayaquarium.org/animals/live-cams',
    schedule: '24/7'
  },
  {
    id: 'monterey-jellyfish',
    name: 'Sea Nettles',
    location: 'Monterey, California, USA',
    coordinates: { lat: 36.62, lng: -121.90 },
    timezone: 'America/Los_Angeles',
    biome: 'ocean',
    animals: ['Pacific Sea Nettles'],
    description: 'Pacific sea nettles drift through shifting blue light. Mesmerizing and meditative — one of the most-watched aquarium cams in the world.',
    youtubeVideoId: 'NUnJc82ptd4',
    youtubeChannelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ',
    searchTerms: ['nettle', 'jelly cam'],
    provider: 'Monterey Bay Aquarium',
    providerUrl: 'https://www.montereybayaquarium.org/animals/live-cams',
    schedule: '24/7'
  },
  {
    id: 'monterey-moon-jellies',
    name: 'Moon Jellies',
    location: 'Monterey, California, USA',
    coordinates: { lat: 36.62, lng: -121.90 },
    timezone: 'America/Los_Angeles',
    biome: 'ocean',
    animals: ['Moon Jellyfish'],
    description: 'Translucent moon jellyfish pulse gently through cool blue water. Their simple, rhythmic movement is endlessly calming.',
    youtubeVideoId: 'IeWhbCe2Krk',
    youtubeChannelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ',
    searchTerms: ['moon jell'],
    provider: 'Monterey Bay Aquarium',
    providerUrl: 'https://www.montereybayaquarium.org/animals/live-cams',
    schedule: '24/7'
  },
  {
    id: 'monterey-open-sea',
    name: 'Open Sea',
    location: 'Monterey, California, USA',
    coordinates: { lat: 36.62, lng: -121.90 },
    timezone: 'America/Los_Angeles',
    biome: 'ocean',
    animals: ['Sea Turtles', 'Hammerhead Sharks', 'Bluefin Tuna', 'Pelagic Rays'],
    description: 'The Monterey Bay Aquarium\'s million-gallon Open Sea exhibit. Green sea turtles, hammerhead sharks, and massive schools of tuna circle in the deep blue.',
    youtubeVideoId: 'QXhVdEyLRT0',
    youtubeChannelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ',
    searchTerms: ['open sea'],
    provider: 'Monterey Bay Aquarium',
    providerUrl: 'https://www.montereybayaquarium.org/animals/live-cams',
    schedule: '24/7'
  },
  {
    id: 'cayman-reef',
    name: 'Cayman Reef',
    location: 'Grand Cayman, Cayman Islands',
    coordinates: { lat: 19.30, lng: -81.25 },
    timezone: 'America/Cayman',
    biome: 'ocean',
    animals: ['Tarpon', 'Stingrays', 'Parrotfish', 'Cleaning Wrasse'],
    description: 'An underwater camera on a coral reef cleaning station off Grand Cayman. Tarpon cruise past while smaller fish queue up for cleaning by industrious cleaner wrasse.',
    youtubeVideoId: 'r0JfDFt1qYo',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['cayman', 'reef'],
    provider: 'Explore.org',
    providerUrl: 'https://explore.org',
    schedule: '24/7'
  },

  // ── Freshwater ───────────────────────────────────────────
  {
    id: 'brooks-falls-bears',
    name: 'Brooks Falls Bears',
    location: 'Katmai National Park, Alaska, USA',
    coordinates: { lat: 58.75, lng: -155.77 },
    timezone: 'America/Anchorage',
    biome: 'freshwater',
    animals: ['Brown Bears', 'Sockeye Salmon'],
    description: 'The world-famous Brooks Falls in Katmai National Park, where brown bears gather to catch sockeye salmon leaping upstream. Peak season is July through September — one of nature\'s greatest spectacles.',
    youtubeVideoId: 'yg_xzF9OXgI',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['brooks falls', 'brooks fall'],
    provider: 'Explore.org',
    providerUrl: 'https://explore.org',
    schedule: 'Seasonal: Jun–Oct'
  },

  // ── Arctic & Alpine ──────────────────────────────────────
  {
    id: 'china-pandas',
    name: 'Panda Valley',
    location: 'Wolong Valley, Sichuan, China',
    coordinates: { lat: 31.02, lng: 103.17 },
    timezone: 'Asia/Shanghai',
    biome: 'arctic',
    animals: ['Giant Pandas'],
    description: 'The Shenshuping Gengda Panda Center in China\'s Wolong Valley, home to giant pandas across 11 different yards. Watch them eat bamboo, play, nap, and tumble through their mountain habitat.',
    youtubeVideoId: 'NapztoCaKFY',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['panda'],
    provider: 'Explore.org',
    providerUrl: 'https://explore.org',
    schedule: '24/7'
  },

  // ── Nest & Den ───────────────────────────────────────────
  {
    id: 'decorah-eagles',
    name: 'Decorah Eagles',
    location: 'Decorah, Iowa, USA',
    coordinates: { lat: 43.30, lng: -91.79 },
    timezone: 'America/Chicago',
    biome: 'nest',
    animals: ['Bald Eagles'],
    description: 'The iconic Decorah Eagles nest, perched high in a cottonwood tree. Watch bald eagle parents incubate eggs, feed eaglets, and teach them to fly. Active nesting season runs from February through June.',
    youtubeVideoId: 'UzSZZ1aGyuA',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['decorah'],
    provider: 'Explore.org / Raptor Resource Project',
    providerUrl: 'https://www.rfrp.org',
    schedule: 'Seasonal: Feb–Jun'
  },
  {
    id: 'cornell-red-tailed-hawks',
    name: 'Red-tailed Hawks',
    location: 'Ithaca, New York, USA',
    coordinates: { lat: 42.45, lng: -76.48 },
    timezone: 'America/New_York',
    biome: 'nest',
    animals: ['Red-tailed Hawks'],
    description: 'Big Red and Arthur, a nesting pair of red-tailed hawks on the Cornell University campus. Watch them build their nest, incubate eggs, and raise their chicks each spring.',
    youtubeVideoId: 'dERgvuToQS4',
    youtubeChannelId: 'UCZXZQxS3d6NpR-eH_gdDwYA',
    searchTerms: ['red-tailed', 'hawk'],
    provider: 'Cornell Lab Bird Cams',
    providerUrl: 'https://www.allaboutbirds.org/cams/',
    schedule: 'Seasonal: Feb–Jun'
  },
  {
    id: 'spotted-hyena-cam',
    name: 'Spotted Hyena Den',
    location: 'Greater Kruger, South Africa',
    coordinates: { lat: -24.20, lng: 31.10 },
    timezone: 'Africa/Johannesburg',
    biome: 'nest',
    animals: ['Spotted Hyenas'],
    description: 'An intimate camera at a spotted hyena den in the Greater Kruger area. Watch hyena cubs play, adults greet and socialize, and the complex dynamics of clan life unfold.',
    youtubeVideoId: 'ME0dPuBtzug',
    youtubeChannelId: 'UC2P9wURjFXsOSzFbR0hnYag',
    searchTerms: ['hyena'],
    provider: 'Africam',
    providerUrl: 'https://africam.com',
    schedule: '24/7'
  }
];

/**
 * Get a camera by ID.
 */
export function getCameraById(id) {
  return cameras.find(c => c.id === id) || null;
}

/**
 * Get cameras filtered by biome.
 */
export function getCamerasByBiome(biome) {
  if (!biome || biome === 'all') return cameras;
  return cameras.filter(c => c.biome === biome);
}

/**
 * Get a random camera, optionally preferring those in active daylight hours.
 */
export function getRandomCamera(preferActive = true) {
  if (preferActive) {
    const now = new Date();
    const active = cameras.filter(c => {
      try {
        const h = parseInt(
          new Intl.DateTimeFormat('en-US', {
            timeZone: c.timezone,
            hour: 'numeric',
            hour12: false
          }).format(now), 10
        );
        return h >= 5 && h < 21;
      } catch { return true; }
    });
    if (active.length > 0) {
      return active[Math.floor(Math.random() * active.length)];
    }
  }
  return cameras[Math.floor(Math.random() * cameras.length)];
}

/**
 * Match live YouTube streams to cameras by search terms.
 * Returns a Map of cameraId → liveVideoId.
 *
 * @param {Object} streams - { channelId: [{ videoId, title }] }
 * @returns {Map<string, string>} cameraId → videoId
 */
export function matchStreamsToCameras(streams) {
  const matches = new Map();
  const usedVideoIds = new Set();

  for (const camera of cameras) {
    const channelStreams = streams[camera.youtubeChannelId];
    if (!channelStreams || channelStreams.length === 0) continue;

    // Try to find a stream whose title matches this camera's search terms
    for (const stream of channelStreams) {
      if (usedVideoIds.has(stream.videoId)) continue;
      const titleLower = stream.title.toLowerCase();
      const isMatch = camera.searchTerms.some(term =>
        titleLower.includes(term.toLowerCase())
      );
      if (isMatch) {
        matches.set(camera.id, stream.videoId);
        usedVideoIds.add(stream.videoId);
        break;
      }
    }
  }

  return matches;
}
