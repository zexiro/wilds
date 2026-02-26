/**
 * Get the current local time at a given timezone.
 * Returns { hours, minutes, formatted, isDaytime }
 */
export function getLocalTime(timezone) {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    const formatted = formatter.format(now);

    const hourFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      hour12: false
    });
    const hours = parseInt(hourFormatter.format(now), 10);
    const isDaytime = hours >= 6 && hours < 20;

    return { hours, formatted, isDaytime };
  } catch {
    return { hours: 12, formatted: '--:--', isDaytime: true };
  }
}

/**
 * Check if a camera is likely to show activity based on local time.
 * Most wildlife is active during dawn/dusk and daytime.
 */
export function isActiveHours(timezone) {
  const { hours } = getLocalTime(timezone);
  return hours >= 5 && hours < 21;
}
