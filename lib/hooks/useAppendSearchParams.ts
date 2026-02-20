'use client';

import { useSearchParams } from 'next/navigation';

export function useAppendSearchParams(href?: string) {
  const searchParams = useSearchParams();

  if (!href) return href;

  const currentQuery = searchParams.toString();
  if (!currentQuery) return href;

  const [hrefWithoutHash, hash = ''] = href.split('#');
  const separator = hrefWithoutHash.includes('?') ? '&' : '?';

  return `${hrefWithoutHash}${separator}${currentQuery}${hash ? `#${hash}` : ''}`;
}
