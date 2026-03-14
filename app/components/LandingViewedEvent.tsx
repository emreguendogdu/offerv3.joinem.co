'use client';

import { useEffect } from 'react';
import { usePlausible } from 'next-plausible';

const LANDING_VIEWED_STORAGE_KEY = 'analytics:landing-viewed-offer';
let hasTrackedLandingViewInMemory = false;

export default function LandingViewedTracker() {
  const plausible = usePlausible();

  useEffect(() => {
    if (hasTrackedLandingViewInMemory) {
      return;
    }

    try {
      if (
        window.localStorage.getItem(LANDING_VIEWED_STORAGE_KEY) === 'true'
      ) {
        hasTrackedLandingViewInMemory = true;
        return;
      }
    } catch {
      // Ignore storage access issues and fall back to the in-memory guard.
    }

    plausible('Landing Viewed - Offer');
    hasTrackedLandingViewInMemory = true;

    try {
      window.localStorage.setItem(LANDING_VIEWED_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage access issues and rely on the in-memory guard.
    }
  }, [plausible]);

  return null;
}
