'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BRAND } from '@/lib/brand';
import Link from 'next/link';
import { useAppendSearchParams } from '@/lib/hooks/useAppendSearchParams';

export type ButtonVariant = 'dark' | 'orange';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const variantMap: Record<ButtonVariant, string> = {
  dark: 'bg-black hover:bg-brand-dark transition-colors',
  orange: 'bg-primary hover:bg-primary-dark hover:shadow-lg transition-all',
};

const sizeMap: Record<ButtonSize, string> = {
  sm: 'px-5 py-2',
  md: 'px-5 py-4',
  lg: 'px-5 py-4',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full uppercase text-white transition-all w-full md:w-auto text-center';

/**
 * Modern, scalable Button component built for the Embody design system.
 *
 * @param variant - 'dark' (default) or 'orange'
 * @param size - 'sm', 'md' (default), or 'lg'
 */
export function Button({
  variant = 'dark',
  size = 'md',
  className,
  children,
  href = BRAND.ctaUrl,
  ...props
}: ButtonProps) {
  const hrefWithQuery = useAppendSearchParams(href) || href;

  return (
    <Link
      href={hrefWithQuery}
      className={cn(baseStyles, variantMap[variant], sizeMap[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
