'use client';

import { useSyncExternalStore } from 'react';

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return window.location.search.replace(/^\?/, '');
}

function getServerSnapshot() {
  return '';
}

export function useAppendSearchParams(href?: string) {
  const currentQuery = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!href) return href;

  if (!currentQuery) return href;

  const [hrefWithoutHash, hash = ''] = href.split('#');
  const separator = hrefWithoutHash.includes('?') ? '&' : '?';

  return `${hrefWithoutHash}${separator}${currentQuery}${hash ? `#${hash}` : ''}`;
}
