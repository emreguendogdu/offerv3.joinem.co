'use client';

import Link from 'next/link';
import { useAppendSearchParams } from '@/lib/hooks/useAppendSearchParams';

type FooterPolicyLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function FooterPolicyLink({ href, children }: FooterPolicyLinkProps) {
  const hrefWithSearchParams = useAppendSearchParams(href) ?? href;

  return <Link href={hrefWithSearchParams}>{children}</Link>;
}
