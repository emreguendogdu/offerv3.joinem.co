'use client';

import { useEffect, useRef } from 'react';
import { usePlausible } from 'next-plausible';

type PlausibleEvents = {
  'Landing Viewed': {
    props: {
      variant: string;
    };
  };
};

export function LandingViewedEvent() {
  const plausible = usePlausible<PlausibleEvents>();
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
