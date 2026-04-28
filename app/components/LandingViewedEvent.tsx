'use client';

import { useEffect } from 'react';
import { usePlausible } from 'next-plausible';

export default function LandingViewedTracker({
  landingName = 'Offer V3',
}: {
  landingName?: string;
}) {
  const plausible = usePlausible();

  useEffect(() => {
    const eventName = `Landing Viewed - ${landingName}`;
    const sessionKey = `tracked_${eventName.replace(/\s+/g, '_')}`;

    // If it hasn't fired in this specific browser tab/session yet, fire it.
    if (!sessionStorage.getItem(sessionKey)) {
      plausible(eventName);
      sessionStorage.setItem(sessionKey, 'true');
    }
  }, [plausible, landingName]);

  return null;
}
