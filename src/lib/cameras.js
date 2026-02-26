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
    id: 'africam-live',
    name: 'Africam Live',
    location: 'South Africa',
    coordinates: { lat: -24.65, lng: 31.35 },
    timezone: 'Africa/Johannesburg',
    biome: 'savanna',
    animals: ['Leopards', 'Elephants', 'Hyenas', 'Wild Dogs'],
    description: 'Africam\'s rotating live camera, broadcasting from locations across South Africa\'s game reserves. Expect visits from elephants, leopards, hyenas, and the occasional wild dog.',
    youtubeVideoId: '6ZXTqhhCRCQ',
    youtubeChannelId: 'UC2P9wURjFXsOSzFbR0hnYag',
    searchTerms: ['live cam', 'africam'],
    provider: 'Africam',
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
    youtubeVideoId: 'OwjHV9Lby3w',
    youtubeChannelId: 'UCV6HJBZD_hZcIX9JVJ3dCXQ',
    searchTerms: ['wildearth', 'safari', 'wild earth', 'jaci', 'dam cam'],
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
    youtubeVideoId: 'x10vL6_47Dw',
    youtubeChannelId: 'UCZXZQxS3d6NpR-eH_gdDwYA',
    searchTerms: ['feederwatch', 'sapsucker'],
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
    youtubeVideoId: 'WtoxxHADnGk',
    youtubeChannelId: 'UCZXZQxS3d6NpR-eH_gdDwYA',
    searchTerms: ['panama', 'fruit feeder', 'canopy lodge'],
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
    youtubeVideoId: 'YQ2vfNZA5SE',
    youtubeChannelId: 'UCZXZQxS3d6NpR-eH_gdDwYA',
    searchTerms: ['ontario', 'manitouwadge'],
    provider: 'Cornell Lab Bird Cams',
    providerUrl: 'https://www.allaboutbirds.org/cams/',
    schedule: 'Daylight hours'
  },
  {
    id: 'sloth-tv',
    name: 'Sloth TV',
    location: 'Toucan Rescue Ranch, Costa Rica',
    coordinates: { lat: 10.05, lng: -84.07 },
    timezone: 'America/Costa_Rica',
    biome: 'forest',
    animals: ['Two-toed Sloths', 'Three-toed Sloths'],
    description: 'Rescued sloths at the Toucan Rescue Ranch in Costa Rica. Watch them climb, nap, and munch on leaves at their own glacial pace. The most relaxing camera on the internet.',
    youtubeVideoId: 'g_L1Ay8P244',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['sloth'],
    provider: 'Explore.org',
    providerUrl: 'https://explore.org',
    schedule: '24/7'
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
    youtubeVideoId: 'nNTVZKz219U',
    youtubeChannelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ',
    searchTerms: ['open sea'],
    provider: 'Monterey Bay Aquarium',
    providerUrl: 'https://www.montereybayaquarium.org/animals/live-cams',
    schedule: '24/7'
  },
  {
    id: 'monterey-sea-otters',
    name: 'Sea Otters',
    location: 'Monterey, California, USA',
    coordinates: { lat: 36.62, lng: -121.90 },
    timezone: 'America/Los_Angeles',
    biome: 'ocean',
    animals: ['Southern Sea Otters'],
    description: 'The Monterey Bay Aquarium\'s sea otter exhibit. Watch rescued otters groom, play, crack shellfish on their bellies, and wrap themselves in kelp for a nap.',
    youtubeVideoId: 'abbR-Ttd-cA',
    youtubeChannelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ',
    searchTerms: ['otter'],
    provider: 'Monterey Bay Aquarium',
    providerUrl: 'https://www.montereybayaquarium.org/animals/live-cams',
    schedule: '24/7'
  },
  {
    id: 'cayman-reef',
    name: 'Tropical Reef',
    location: 'Grand Cayman, Cayman Islands',
    coordinates: { lat: 19.30, lng: -81.25 },
    timezone: 'America/Cayman',
    biome: 'ocean',
    animals: ['Tarpon', 'Stingrays', 'Parrotfish', 'Cleaning Wrasse'],
    description: 'An underwater camera on a coral reef cleaning station off Grand Cayman. Tarpon cruise past while smaller fish queue up for cleaning by industrious cleaner wrasse.',
    youtubeVideoId: 'DHUnz4dyb54',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['tropical reef', 'cayman', 'reef cam'],
    provider: 'Explore.org',
    providerUrl: 'https://explore.org',
    schedule: '24/7'
  },
  {
    id: 'gray-seal-island',
    name: 'Gray Seal Colony',
    location: 'Nantucket, Massachusetts, USA',
    coordinates: { lat: 41.28, lng: -69.97 },
    timezone: 'America/New_York',
    biome: 'ocean',
    animals: ['Gray Seals', 'Seal Pups'],
    description: 'A colony of gray seals on a remote Atlantic island. Watch pups nurse, adults jostle for space, and the colony shift with the tides. Pupping season runs from December through February.',
    youtubeVideoId: 'JqjHlNFz7PU',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['gray seal', 'seal pupping', 'seal island'],
    provider: 'Explore.org',
    providerUrl: 'https://explore.org',
    schedule: 'Seasonal: Dec–Feb'
  },

  // ── Freshwater ───────────────────────────────────────────
  {
    id: 'manatee-springs',
    name: 'Manatee Springs',
    location: 'Homosassa Springs, Florida, USA',
    coordinates: { lat: 28.80, lng: -82.59 },
    timezone: 'America/New_York',
    biome: 'freshwater',
    animals: ['Manatees'],
    description: 'An underwater camera at Homosassa Springs Wildlife State Park in Florida. Gentle manatees drift through the crystal-clear spring water, grazing on aquatic plants and surfacing to breathe.',
    youtubeVideoId: 'Fz6sl9YJZE0',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['manatee', 'homosassa'],
    provider: 'Explore.org',
    providerUrl: 'https://explore.org',
    schedule: '24/7'
  },

  // ── Arctic & Alpine ──────────────────────────────────────
  {
    id: 'wolf-center',
    name: 'Wolf Center',
    location: 'Ely, Minnesota, USA',
    coordinates: { lat: 47.90, lng: -91.87 },
    timezone: 'America/Chicago',
    biome: 'arctic',
    animals: ['Gray Wolves'],
    description: 'The International Wolf Center in northern Minnesota. A resident pack of gray wolves roams a naturalistic enclosure in the boreal forest. Watch pack dynamics, play, and winter hunts in the snow.',
    youtubeVideoId: '5e4lsEe4Vew',
    youtubeChannelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    searchTerms: ['wolf'],
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
    youtubeVideoId: 'GGIE1E-kaMQ',
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
    youtubeVideoId: 'afsaYKQ3vac',
    youtubeChannelId: 'UCZXZQxS3d6NpR-eH_gdDwYA',
    searchTerms: ['red-tailed', 'hawk'],
    provider: 'Cornell Lab Bird Cams',
    providerUrl: 'https://www.allaboutbirds.org/cams/',
    schedule: 'Seasonal: Feb–Jun'
  },
  {
    id: 'royal-albatross',
    name: 'Royal Albatross',
    location: 'Taiaroa Head, Dunedin, New Zealand',
    coordinates: { lat: -45.77, lng: 170.73 },
    timezone: 'Pacific/Auckland',
    biome: 'nest',
    animals: ['Northern Royal Albatross'],
    description: 'A nesting royal albatross at Taiaroa Head on New Zealand\'s South Island — the only mainland breeding colony of albatross in the world. Watch chicks hatch and grow before their first flight over the Pacific.',
    youtubeVideoId: 'Mm_zVDDUeNA',
    youtubeChannelId: 'UCZXZQxS3d6NpR-eH_gdDwYA',
    searchTerms: ['albatross'],
    provider: 'Cornell Lab / NZ Dept. of Conservation',
    providerUrl: 'https://www.allaboutbirds.org/cams/',
    schedule: 'Seasonal: Nov–Sep'
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
