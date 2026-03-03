'use client';

import { useEffect } from 'react';
import { usePlausible } from 'next-plausible';

export default function LandingViewedTracker() {
  const plausible = usePlausible();

  useEffect(() => {
    plausible('Landing Viewed', { props: { variant: 'offer' } });
  }, [plausible]);

  return null;
}
