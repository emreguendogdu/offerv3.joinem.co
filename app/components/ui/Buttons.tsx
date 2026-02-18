import React from 'react';
import { cn } from '@/lib/utils';

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
  orange: 'bg-primary hover:bg-orange-500 hover:shadow-lg transition-all',
};

const sizeMap: Record<ButtonSize, string> = {
  md: 'px-5 py-2',
  md: 'px-5 py-3',
  lg: 'px-5 py-3',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full uppercase text-white transition-all';

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
  ...props
}: ButtonProps) {
  return (
    <a
      href="#"
      className={cn(baseStyles, variantMap[variant], sizeMap[size], className)}
      {...props}
    >
      {children}
    </a>
  );
}
