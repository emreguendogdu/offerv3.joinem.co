'use client';

import { useEffect, useRef } from 'react';
import { usePlausible } from 'next-plausible';

export function LandingViewedEvent() {
  const plausible = usePlausible();
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    if (hasTrackedRef.current) {
      return;
    }

    hasTrackedRef.current = true;
    plausible('Landing Viewed', { props: { variant: 'offer' } });
  }, [plausible]);

  return null;
}
