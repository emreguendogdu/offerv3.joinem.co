'use client';

import { useEffect } from 'react';
import { usePlausible } from 'next-plausible';

export default function LandingViewedTracker() {
  const plausible = usePlausible();

  useEffect(() => {
    const eventName = 'Landing Viewed - Offer V3';
    const sessionKey = `tracked_${eventName.replace(/\s+/g, '_')}`;

    if (!sessionStorage.getItem(sessionKey)) {
      plausible(eventName);
      sessionStorage.setItem(sessionKey, 'true');
    }
  }, [plausible]);

  return null;
}
