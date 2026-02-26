/**
 * Vercel Serverless Function: /api/streams
 *
 * Fetches currently live YouTube streams for each channel in our camera database.
 * Uses the YouTube Data API v3 search endpoint with eventType=live.
 *
 * Requires YOUTUBE_API_KEY environment variable set in Vercel.
 *
 * Response format:
 * {
 *   "streams": {
 *     "CHANNEL_ID": [{ "videoId": "xxx", "title": "Camera Name..." }, ...],
 *     ...
 *   },
 *   "cached": false,
 *   "timestamp": 1234567890
 * }
 */

// Unique channel IDs from our camera database
const CHANNELS = [
  'UC-2KSeUU5SMCX6XLRD-AEvw',  // Explore.org
  'UC2P9wURjFXsOSzFbR0hnYag',  // Africam / wildlife cams
  'UCZXZQxS3d6NpR-eH_gdDwYA',  // Cornell Lab Bird Cams
  'UCnM5iMGiKsZg-iOlIO2ZkdQ',  // Monterey Bay Aquarium
  'UCV6HJBZD_hZcIX9JVJ3dCXQ',  // WildEarth
];

export default async function handler(req, res) {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    // No API key configured — return empty so client falls back to stored IDs
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ streams: {}, error: 'no_api_key', timestamp: Date.now() });
  }

  try {
    const streams = {};

    // Fetch live streams for each channel in parallel
    const results = await Promise.allSettled(
      CHANNELS.map(async (channelId) => {
        const url = new URL('https://www.googleapis.com/youtube/v3/search');
        url.searchParams.set('part', 'snippet');
        url.searchParams.set('channelId', channelId);
        url.searchParams.set('eventType', 'live');
        url.searchParams.set('type', 'video');
        url.searchParams.set('maxResults', '15');
        url.searchParams.set('key', apiKey);

        const resp = await fetch(url.toString());
        if (!resp.ok) {
          const text = await resp.text().catch(() => '');
          return { channelId, items: [], error: `${resp.status}: ${text.slice(0, 200)}` };
        }

        const data = await resp.json();
        return {
          channelId,
          items: (data.items || []).map(item => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
          }))
        };
      })
    );

    const errors = [];
    for (const result of results) {
      if (result.status === 'fulfilled' && result.value) {
        const { channelId, items, error } = result.value;
        if (error) errors.push({ channelId, error });
        if (items.length > 0) {
          streams[channelId] = items;
        }
      } else if (result.status === 'rejected') {
        errors.push({ error: result.reason?.message || 'unknown' });
      }
    }

    // Cache for 10 minutes, allow stale-while-revalidate for 30 minutes
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const response = { streams, timestamp: Date.now() };
    if (errors.length > 0) response.errors = errors;
    return res.status(200).json(response);

  } catch (err) {
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ streams: {}, error: 'fetch_failed', timestamp: Date.now() });
  }
}
